// This is the item directive for the product list
/*
* Usage <product-item></product-item>
*/

(function (){

	angular
		.module('app')
		.directive('productItem', ProductItemDirective);

	function ProductItemDirective () {
		var directive = {
			restrict: 'E',
			replace: true,
			templateUrl: 'product/item.tmpl.html',
			controller: ItemCtrl
		};
		return directive
	};

	function ItemCtrl($scope){
		
	};

})();