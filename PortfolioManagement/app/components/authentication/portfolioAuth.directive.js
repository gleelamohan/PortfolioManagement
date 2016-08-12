/// <reference path="portfolioAuth.html" />
(function () {
    angular
        .module('app')
        .directive('portfolioAuth', portfolioAuth);

    portfolioAuth.$inject = ['$sce', '$filter', '$stateParams'];
    function portfolioAuth($sce, $filter, $stateParams) {
        return {
            restrict: 'AEC',
            replace: false,
            controller: function ($scope, $stateParams) {             

            },
            controllerAs: 'vm',
            templateUrl: '/app/components/authentication/portfolioAuth.html',
            compile: function (element) {
              //  return recursionHelper.compile(element);
            }
        };
    }
})();