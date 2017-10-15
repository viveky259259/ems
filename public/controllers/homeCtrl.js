angular.module('EMS')
.controller('homeCtrl',function($scope,$window,$routeParams,$rootScope,$http){
    $scope.loggedUserName=$rootScope.loggedUserName;
    let empId=$routeParams.eId;
    console.log(empId)
    
   $scope.addEmployeeLink=function(){
    $window.location.href="/ems/#/addEmployee"
   }
   $scope.addTaskLink=function(){
    $window.location.href="/ems/#/addTask"
   }
   $scope.viewTaskLink=function(){
    $window.location.href="/ems/#/viewTask"
   }
   $http.get("/api/v1/employee")
   .then(
       function(response){
           let employeeReceived=response.data;
           let employeeIdList=[];
           let employeeNameList=[];
           for(let i=0;i<employeeReceived.length;i++){
                employeeIdList.push(employeeReceived[i].empId)
                employeeNameList.push(employeeReceived[i].name)
           }
         
           $rootScope.employeeIdList=employeeIdList;
           $rootScope.employeeNameList=employeeNameList;
           $rootScope.taskStatuses=['Not Started','Started','50% Complete','Completed'];
       }
   )

})