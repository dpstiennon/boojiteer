/**
 * Created by davidstiennon on 11/11/15.
 */
angular.module('boojit').directive('income', function () {
        return {
            restrict: 'E',
            replace: true,
            // template: '<div class="well"> Income information goes here <input type="text" ng-model="total.income">duude </div>'
            templateUrl: '/assets/templates/income.html',
            controller: 'IncomeController'
        };
    })
    .controller('IncomeController', function () {

    });
