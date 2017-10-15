angular.module('EMS')
.controller('loginCtrl',function($scope,$http,$window,$rootScope,$location){
$rootScope.links=['register','login']
   $scope.employeeLogin=function(){
    var employeeId=$scope.employeeId;
    var employeePassword=$scope.employeePassword;
    
    $http.get("/api/v1/employee")
    .then(function(response){
        let employeesReceived=response.data;
        var login=false;
        console.log('gotSomething : '+employeesReceived.length)
        for(let i=0;i<employeesReceived.length;i++){
            var eId=employeesReceived[i].empId;
            var ePass=employeesReceived[i].password;
            
            if(eId===employeeId && ePass===employeePassword){
                console.log('Matched')
                console.log(eId)
                console.log(ePass)
                $rootScope.isLoggedIn=true;
                $rootScope.loggedUserId=eId;
                login=true;
                $rootScope.loggedUserName=employeesReceived[i].name;
                $scope.msg="Loged in Successfully"
                
                if(employeesReceived[i].managerId=="E0"){
                    $rootScope.managerLogin=true;
                    $rootScope.links=['addEmployee','deleteEmployee','profile','addTask','viewTask','viewEmployee','logout'];    
                }else{
                    $rootScope.links=['addEmployee','profile','addTask','viewTask','viewEmployee','logout'];
                }
               
                $window.location.href = '/ems/#/home/'+eId;
            }
        }
        if(login==false){
            $scope.employeeId=null;
            $scope.employeePassword=null;
            $scope.msg="Error !!!!!!!!!!!!"
        }


    })
    
    $scope.confirmationMessage="Login Successfully"+"   "+employeeId+"  "+employeePassword;
    

   }
})