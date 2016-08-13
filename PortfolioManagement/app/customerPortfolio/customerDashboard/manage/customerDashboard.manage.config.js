(function () {
    function config($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.withCredentials = true;
        $urlRouterProvider.otherwise("/");
        $stateProvider
            .state('customerPortfolio.customerDashboard.manage', {
                "abstract": true,
                url: "/manage",
                template: "<ui-view />"
            });
    }
    angular.module('app.customerPortfolio.customerDashboard.manage')
          .config(config);
    config.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];
})();