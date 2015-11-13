/**
 * Created by davidstiennon on 11/13/15.
 */
angular.module('boojit')
    .factory('incomeService', ['$http', '$location', function incomeServiceFactory($http, $location){
        //var incomeUrl = $location.path() + '/incomes';
        return {
            all: function() {
                var incomeUrl = document.URL + '/incomes';
                return $http({method:'get', url: incomeUrl});
            },
            create: function(income){
                var incomeUrl = document.URL + '/incomes';
                return $http({method:'post', url:incomeUrl, data: income});
            },
            destroy: function(income) {
                var incomeUrl = document.URL + '/incomes/' + income.id.toString();
                return $http({method:'delete', url:incomeUrl});
            },
            update: function(income) {
                var incomeUrl = document.URL + '/incomes/' + income.id.toString();
                return $http({method:'patch', url:incomeUrl, data: income});
            }
        }
    }]);