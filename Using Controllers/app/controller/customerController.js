//Option 1

/*app.controller('CustomersController', function($scope){
    
    $scope.sortBy = 'name';
    $scope.reverse = false;
    
    $scope.customers=[
                   {joined:'2000-12-01',name:'John', city:'Chicago', orderTotal:9.9961},
                   {joined:'2003-06-10',name:'Andy', city:'New York', orderTotal:45},
                   {joined:'2000-07-21',name:'Mike', city:'San Jose', orderTotal:543.026},
                   {joined:'2000-10-22',name:'Scott', city:'New Jersey', orderTotal:256.114}
            ];
    
    $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;    
    };
});*/


//Option 2 

/*(function() {
    
    angular.module('customersApp')
        .controller('CustomersController', function($scope){
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers=[
                       {joined:'2000-12-01',name:'John', city:'Chicago', orderTotal:9.9961},
                       {joined:'2003-06-10',name:'Andy', city:'New York', orderTotal:45},
                       {joined:'2000-07-21',name:'Mike', city:'San Jose', orderTotal:543.026},
                       {joined:'2000-10-22',name:'Scott', city:'New Jersey', orderTotal:256.114}
                ];

        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;    
        };
    });

}());*/


//Option 3
(function() {
    
    var CustomersController = function($scope){
        $scope.sortBy = 'name';
        $scope.reverse = false;

        $scope.customers=[
                       {joined:'2000-12-01',name:'John', city:'Chicago', orderTotal:9.9961},
                       {joined:'2003-06-10',name:'Andy', city:'New York', orderTotal:45},
                       {joined:'2000-07-21',name:'Mike', city:'San Jose', orderTotal:543.026},
                       {joined:'2000-10-22',name:'Scott', city:'New Jersey', orderTotal:256.114}
                ];

        $scope.doSort = function(propName){
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;    
        };
    };
    
    //for minification
    CustomersController.$inject = ['$scope'];
    angular.module('customersApp')
        .controller('CustomersController', CustomersController);

}());