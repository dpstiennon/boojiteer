/**
 * Created by davidstiennon on 11/13/15.
 */

angular.module('boojit')
    .controller('IncomeController', ['$scope', 'incomeService', IncomeController]);

function IncomeController($scope, incomeService) {
    var self = this;
    this.scope = $scope;
    this.moneys = [];
    this.incomeService = incomeService;
    this.dropDownOptions = [
        {id: 0, val: "One-Time"},
        {id: 1, val: "Per Week"},
        {id: 2, val: "Bi-Weekly"},
        {id: 3, val: "Per Month"},
        {id: 4, val: "Per Year"},

    ];
    incomeService.all().success(function(data){
        self.moneys = [];
        _.each(data, function(serverIncome){
            self.moneys.push(new income(serverIncome.name, Number(serverIncome.amount), Number(serverIncome.frequency), serverIncome.id));
        });

    })
}

IncomeController.prototype.update = function(income){
    var self = this;
   // console.log('changed' + income.toString());
    self.incomeService.update(income);
};

IncomeController.prototype.addMoney = function () {
    var self = this;
    var newIncome = new income();
    self.incomeService.create(newIncome).success(function(data){
        newIncome.id = data.id;
        self.moneys.push(newIncome);
    });

};

IncomeController.prototype.total = function () {
    var sum = _.reduce(this.moneys, function (memo, money) {
        return memo + money.monthlyAmount();
    }, 0);
    this.scope.incomeTotal = sum;
    return sum;
};

IncomeController.prototype.deleteIncome = function (toRemove) {
    var self = this
    if (self.moneys.length > 1) {
        self.incomeService.destroy(toRemove);
        self.moneys.splice(self.moneys.indexOf(toRemove), 1);
    }
}