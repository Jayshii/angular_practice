(function(){
'use strict'
 var shoppinglistmodule = angular.module('ShoppingListCheck',[])
 shoppinglistmodule.controller('ToBuyController',ToBuyController)
 shoppinglistmodule.controller('alreadyboughtcontroller',alreadyboughtcontroller)
  shoppinglistmodule.service('shoppio')
})();
