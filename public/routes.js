var EMS=angular.module("EMS",["ngRoute"])
EMS.value('loginId','vivek');

	EMS.config(["$routeProvider",initConfiguration])

		function initConfiguration($routeProvider){
			$routeProvider
			.when('/',
			{
				templateUrl:'htmlPages/login.html',
				controller:'loginCtrl'
			})
			.when('/home/:eId',
			{resolve:{
				"check":function($rootScope,$location){
					if(!$rootScope.isLoggedIn){
						$location.path('/')
					}
				}
			},
				templateUrl:'htmlPages/home.html',
				controller: 'homeCtrl'
			})
			
			.when('/addEmployee',
			{
				resolve:{
					"check":function($rootScope,$location){
						if(!$rootScope.isLoggedIn){
							$location.path('/')
						}
					}
				},
				templateUrl:'htmlPages/addEmployee.html',
				controller: 'addEmployeeCtrl'
            })
            .when('/addTask',
			{
				resolve:{
					"check":function($rootScope,$location){
						if(!$rootScope.isLoggedIn){
							$location.path('/')
						}
					}
				},
				templateUrl:'htmlPages/addTask.html',
				controller: 'addTaskCtrl'
			})
			
			.when('/viewTask',
			{
				resolve:{
					"check":function($rootScope,$location){
						if(!$rootScope.isLoggedIn){
							$location.path('/')
						}
					}
				},
				templateUrl:'htmlPages/viewTask.html',
				controller:'viewTaskCtrl'
            })
           
			.when('/login',
			{
				templateUrl:'htmlPages/login.html',
				controller:'loginCtrl'
			})
			.when('/logout',
			{
				templateUrl:'htmlPages/logout.html',
				controller:'logoutCtrl'
            })
            .when('/register',
			{
				templateUrl:'htmlPages/register.html',
				controller:'registerCtrl'
			})
			.when('/updateTask/:tId',
			{
				resolve:{
				"check":function($rootScope,$location){
					if(!$rootScope.isLoggedIn){
						$location.path('/')
					}
				}
				},
				templateUrl:'htmlPages/updateTask.html',
				controller:'updateTaskCtrl'
			})
			.when('/profile',
			{
				resolve:{
					"check":function($rootScope,$location){
						if(!$rootScope.isLoggedIn){
							$location.path('/')
						}
					}
				},
				templateUrl:'htmlPages/updateEmployee.html',
				controller:'updateEmployeeCtrl'
            })
			.when('/viewEmployee',
			{
				resolve:{
					"check":function($rootScope,$location){
						if(!$rootScope.isLoggedIn){
							$location.path('/');
						}
						}
				},
				templateUrl:'htmlPages/viewEmployee.html',
				controller:'viewEmployeeCtrl'
				
			})
			.when('/deleteEmployee',
			{
				resolve:{
					"check":function($rootScope,$location){
						if(!$rootScope.isLoggedIn){
							$location.path('/');
						}else if(!$rootScope.managerLogin){
							$location.path('/');
						}
						}
				},
				templateUrl:'htmlPages/deleteEmployee.html',
				controller:'deleteEmployeeCtrl'
				
			})

			.otherwise(
			{
				template : "<h1> We don't have such Page</h1><p> 404 Error</p>"
			})
		}
