(function(){
	angular.module("facepoopApp",['firebase'])
			.constant('dbUrl','https://glowing-heat-3025.firebaseio.com/posts')
			.service('ref',['dbUrl', Firebase])
			.controller('Timeline', function($scope, $firebaseArray,ref){
				
				$scope.userList = [{id:0, name:'Bill Gates'}, 
									{id:1, name:'Mark Zukerberg'}, 
									{id:2, name:'Barack Obama'}, 
									{id:3, name:'Albert Einstein'}];
				
				$scope.user = $scope.userList[Math.floor((Math.random() * 4) + 0)];

				$scope.posts = $firebaseArray(ref);

				console.log($scope.posts);

				$scope.postStatus = function(){
					 $scope.posts.$add({
				      text: $scope.statusField,
				      user_id: $scope.user.id,	
				      date: Date.now()			      
				    });
				}

			});



})();