angular.module('EMS')
.controller('logoutCtrl',function($scope,$rootScope){
  $rootScope.links=['login','register'];
$scope.confirmationMessage="logged out Successfully";
})