(function () {

	angular
		.module('app.data', [])
		.factory('TempData', tData);

	function tData () {
		var products = [
			{name: 'prod1', price: 12.3, category: 12},
			{name: 'prod2', price: 12.3, category: 13},
			{name: 'prod3', price: 12.3, category: 1},
			{name: 'prod5', price: 12.3, category: 3},
			{name: 'prod4', price: 12.3, category: 2},
			{name: 'prod6', price: 12.3, category: 2},
			{name: 'prod7', price: 12.3, category: 1}
		]

		return{ 
			products: products 
		}
	}	

})();