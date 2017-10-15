angular.module('EMS')
.controller('viewEmployeeCtrl',function($scope,$http,$rootScope){
    let empId=$rootScope.loggedUserId;
    $http.get('/api/v1/employee/manager/'+empId)
    .then(
        function(response){

        console.log('EMployeeessss');
        console.log(response.data)
        $scope.employees=response.data;

    })
})