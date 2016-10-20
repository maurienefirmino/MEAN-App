
angular.module('appPessoas', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/cadastro',{
		templateUrl:'cadastro.html',
		controller:'PessoasController',
		controllerAs:'P'
	}).when('/pessoas',{
		templateUrl:'pessoas.html',
		controller:'PessoasController',
		controllerAs:'P'
	}).otherwise({ redirectTo: '/pessoas' });
	
}]).controller('PessoasController',PessoasController);

function PessoasController($http){
	var vm = this;
	vm.dados = [];

	$http({
		method: 'GET',
		url: 'http://localhost:3000/pessoas'
	}).then(function successCallback(res) {
		vm.dados = res.data;
		console.log(vm.dados);
	}, function errorCallback(res) {
		console.log('Error');
	});

	vm.salva = function salva(form){
		$http({
			method: 'post',
			data: form,
			url: 'http://localhost:3000/pessoas',

		}).then(function successCallback(res) {
			alert('salvo!');

		}, function errorCallback(res) {
			alert('ERRO!');
		});
	};

	vm.deleta = function deleta($index){

	}

}