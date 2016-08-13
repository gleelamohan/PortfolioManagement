(function () {
    function config($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('moPortfolio', {
                "abstract": true,
                url: "/moPortfolio",
                template: "<ui-view />"
            });
    }
    angular.module('app.moPortfolio')
          .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
})();