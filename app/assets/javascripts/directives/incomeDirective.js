/**
 * Created by davidstiennon on 11/13/15.
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

    });