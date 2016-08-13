(function () {
    function config($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('customerPortfolio', {
                "abstract": true,
                url: "/customerPortfolio",
                template: "<ui-view />"
            });
    }
    angular.module('app.customerPortfolio')
          .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
})();