(function(){
	'use strict'

	angular
		.module('app.listCtrl', [])
		.controller('ListCtrl', ListCtrl);

	function ListCtrl($scope, TempData, localstorage){
		$scope.products = TempData.products;
		$scope.setCurrentCategory = setCurrentCategory;
		$scope.updateClicked = updateClicked;

		function setCurrentCategory(category){
			$scope.currentCategory = category;
		}

		function updateClicked(data){
			console.log(data);
			localstorage.setObject(data.product.name,{
				name: data.product.name,
				price: data.product.price,
				category: data.product.category,
				clicked: true
			});
		}


	}

	
}())