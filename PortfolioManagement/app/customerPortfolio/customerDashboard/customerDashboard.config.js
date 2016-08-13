(function () {
    function config($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('customerPortfolio.customerDashboard', {
                "abstract": true,
                url: "/customerDashboard",
                template: "<ui-view />"
            });
    }
    angular.module('app.customerPortfolio.customerDashboard')
          .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
})();