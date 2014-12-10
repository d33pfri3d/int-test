(function(){
	'use strict'

	angular
		.module('app.listCtrl', [])
		.controller('ListCtrl', ListCtrl);

	function ListCtrl($scope, TempData){
		$scope.products = TempData.products;

		function setCurrentCategory(category){
			$scope.currentCategory = category;
		}

		$scope.setCurrentCategory = setCurrentCategory;
	}

	
}())