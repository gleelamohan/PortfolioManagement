/// <reference path="portfolioAuth.html" />
(function () {
    angular
        .module('app')
        .directive('portfolioAuth', portfolioAuth);

    portfolioAuth.$inject = ['$sce', '$filter', '$state', '$stateParams'];
    function portfolioAuth($sce, $filter, $stateParams) {
        return {
            restrict: 'AEC',
            replace: false,
            controller: function ($scope, $state, $stateParams) {             
                var vm = this;
                vm.loginclick = function () {

                    vm.inputScope = [];
                    $state.go('customerPortfolio.customerDashboard.manage', { inputScope: vm.inputScope });
                };


            },
            controllerAs: 'vm',
            templateUrl: '/app/components/authentication/portfolioAuth.html',
            compile: function (element) {
              //  return recursionHelper.compile(element);
            }
        };
    }
})();