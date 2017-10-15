angular.module('EMS')
.controller('deleteEmployeeCtrl',function($scope,$http,$rootScope){
    let empId=$rootScope.loggedUserId;
    refresh();
   
    $scope.deleteEmployee=function(empId){
        $http.delete('/api/v1/employee/'+empId)
        refresh();
    }

    function refresh(){
        $http.get('/api/v1/employee/')
        .then(
            function(response){
    
            console.log(response.data)
            $scope.employees=response.data;
    
        })
    }
})