/**
 * Created by davidstiennon on 11/11/15.
 */

var boojit = angular.module('boojit', [])
    .controller('TotalController', TotalController) ;

function TotalController(){
    this.income = 20000
    this.recurringExpenses = 5000
    this.budgetedExpenses = 9000
    this.irregulars = 1000

};

TotalController.prototype.sumTotal = function(){
    return this.income - this.recurringExpenses - this.budgetedExpenses - this.irregulars
}
