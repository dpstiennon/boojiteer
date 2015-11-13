/**
 * Created by davidstiennon on 11/13/15.
 */

angular.module('boojit')
    .controller('IncomeController', ['$scope', 'incomeService', IncomeController]);

function IncomeController($scope, incomeService) {
    var self = this;
    this.scope = $scope;
    this.moneys = [new income('', 0, 3)];
    this.incomeService = incomeService;
    incomeService.all().success(function(data){
        self.moneys = [];
        _.each(data, function(serverIncome){
            self.moneys.push(new income(serverIncome.name, Number(serverIncome.amount), Number(serverIncome.frequency), serverIncome.id));
        });

    })
}

IncomeController.prototype.addMoney = function () {
    var newIncome = new income();
    this.incomeService.create()
    this.moneys.push(newIncome);

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
        self.
        self.moneys.splice(self.moneys.indexOf(toRemove), 1);
    }
}