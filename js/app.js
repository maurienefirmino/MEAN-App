
angular.module('appPessoas', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {

	$routeProvider.when('/cadastro',{
		templateUrl:'cadastro.html',
		controller:'PessoasController',
		controllerAs:'P'
	}).when('/pessoas',{
		templateUrl:'pessoas.html',
		controller:'PessoasController',
		controllerAs:'P'
	}).when('/pessoas/editar/:id',{
		templateUrl:'edicao.html',
		controller:'PessoasController',
		controllerAs:'P'
	}).when('/pessoas/detalhes/:id',{
		templateUrl:'pagina-pessoa.html',
		controller:'PessoasController',
		controllerAs:'P'
	}).otherwise({ redirectTo: '/pessoas' });
	
}]).controller('PessoasController',PessoasController);

function PessoasController($http, $routeParams){
	var vm = this;
	vm.dados = [];
	vm.routeParams = $routeParams;
	$http({
		method: 'GET',
		url: 'http://localhost:3000/pessoas'
	}).then(function successCallback(res) {
		vm.dados = res.data;
	}, function errorCallback(res) {
		console.log('Error');
	});

	vm.salva = function salva(form){
		console.log(form);
		$http({
			method: 'post',
			data: form,
			url: 'http://localhost:3000/pessoas',

		}).then(function successCallback(res) {
			alert('Salvo!');

		}, function errorCallback(res) {
			alert('ERRO!');
		});
	};

	vm.edita = function edita($index){

	}

	vm.deleta = function deleta(id){

		var msg = confirm("Tem certeza que deseja excluir este registro?");

		if (msg == true) {

			$http({
				method: 'GET',
				url: 'http://localhost:3000/pessoas/delete/'+id
			}).then(function successCallback(res) {

			}, function errorCallback(res) {
				console.log('Error');
			});

			console.log(vm.dados);

			vm.dados = vm.dados.filter(function(el){return el._id !== id});

		}
	}

}