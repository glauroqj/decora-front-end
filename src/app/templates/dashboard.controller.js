(function() {
	'use strict';
	angular
	.module('decora')
	.controller("DashboardController", function($rootScope, $scope) {
		var vm = this;

		$rootScope.boxTitle = 'Dashboard';

		vm.historico = false;
		vm.radar = false;
		vm.frequencia = false;

				//// BAR /////
				$scope.labels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
				$scope.series = ['Matematica', 'Portugues'];
				$scope.data = [
				[28, 48, 40, 19, 86, 27, 90]
				];
        //// BAR ////

        ////////// RADAR /////////
        $scope.radarlabels = ["Matematica", "Portugues",
        "Biologia", "Quimica", "Geografia", "Historia", "Ingles"
        ];
        $scope.radardata = [
        [28, 48, 40, 19, 96, 27, 100]
        ];
        ////////// RADAR /////////


				////////// LINE CHART /////////
				$scope.linelabels = ["January", "February", "March", "April", "May", "June", "July"];
				$scope.lineseries = ['Series A', 'Series B'];
				$scope.linedata = [
				[28, 48, 40, 19, 86, 27, 90]
				];
				$scope.onClick = function (points, evt) {
					console.log(points, evt);
				};
// $scope.liedatasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
	////////// LINE CHART /////////

	vm.setR1 = function(){
		vm.historico = true;
		vm.radar = false;
		vm.frequencia = false;
	};
	vm.setR2 = function(){
		vm.historico = false;
		vm.radar = true;
		vm.frequencia = false;
	};
	vm.setR3 = function(){
		vm.historico = false;
		vm.radar = false;
		vm.frequencia = true;
	};

});
})();
