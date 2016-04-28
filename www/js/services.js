angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.factory("Items", function($firebaseArray) {
  var itemsRef = new Firebase("https://feedlar.firebaseio.com/items");
  return $firebaseArray(itemsRef);
})

.service('BlankService', [function(){

}]);

