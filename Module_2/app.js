(function(){
'use strict'
 var shoppingListModule = angular.module('ShoppingListCheck',[])
 shoppingListModule.controller('toBuyController',toBuyController)
 shoppingListModule.controller('alreadyBoughtController',alreadyBoughtController)
  shoppingListModule.service('shoppingService',shoppingService)
 
 alreadyBoughtController.$inject=['shoppingService']
 toBuyController.$inject=['shoppingService']
 
 function shoppingService(){
 var service = this;
  var toBuyList=
      [
       {name:'cookies',quantity:10},
       {name:'chocolates',quantity:15},
       {name:'butter',quantity:20},
       {name:'bread',quantity:25},
       {name:'peanut',quantity:5}  
      ]
  var boughtList=[];
  service.getBoughtItems = function()
  {
   return boughtList;
  }
  
  service.getToBuyItems = function()
  {
   return toBuyList;
  }
  service.buyItem=function(index)
  {
   var itemIndex = toBuyList[index];
   boughtList.push(itemIndex)
   toBuyList.splice(itemIndex,1)
  }
 }
 
 function already
})();
