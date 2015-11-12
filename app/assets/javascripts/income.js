/**
 * Created by davidstiennon on 11/11/15.
 */
angular.module('boojit')
    .directive('income', function () {
        return {

            scope: {
                incomeTotal: '='
            },
            restrict: 'E',
            replace: true,
            templateUrl: '/assets/templates/income.html',
            controller: 'IncomeController',
            controllerAs: 'incomeCtrl'
        };

    })
    .controller('IncomeController', IncomeController );

function IncomeController($scope) {
    this.stuff = 'This is so cool!'
    this.moneys = [new income('', 0, 3)];
}

IncomeController.prototype.addMoney = function() {
    var newIncome = new income()
    this.moneys.push(newIncome);

};

IncomeController.prototype.total = function(){
    var sum = _.reduce(this.moneys, function(memo, money){return memo + money.monthlyAmount()}, 0);
    return sum;
};

IncomeController.prototype.deleteIncome = function(toRemove){
    if(this.moneys.length > 1) {
        this.moneys.splice(this.moneys.indexOf(toRemove), 1);
    }
}

function income(name, amount, frequency){
    this.name = name || '';
    this.amount = amount || 0;
    this.frequency = frequency || 3;
}

income.prototype.monthlyAmount = function() {
    var weeksPerMonth = 4.34524;
    var yearsPerMonth = .0833;
    switch (parseInt(this.frequency)){
        case 0:
            return this.amount;
        case 1:
            return this.amount * weeksPerMonth;
        case 2:
            return (this.amount / 2) * weeksPerMonth;
        case 3:
            return this.amount;
        case 4:
            return this.amount * yearsPerMonth;

    }
}
