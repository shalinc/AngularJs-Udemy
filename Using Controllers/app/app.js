//option 1 - global variables
//var app = angular.module('customersApp',[]);

//option 2 - eliminate global variables, using functions

(function() {
    angular.module('customersApp',[]);
}());