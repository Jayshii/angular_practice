(function(){
'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.message='';
  $scope.checked=false;
  $scope.items='';

  $scope.checkitems = function() {
    var array_items = $scope.items.split(',');
    var array_items_withoutspace = array_items.filter(function(z) {
      return z.trim() !== '';
    });
    if(array_items_withoutspace.length <= 3) {
      $scope.message = 'Enjoy!';
    }
    else {
      $scope.message= 'Too much!';
    }
  }
}
})();
