(function () {
    angular
        .module('app.customerPortfolio.customerDashboard')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
    
        $stateProvider
            .state('customerPortfolio.customerDashboard', {
                abstract: true,
                url: "/customerDashboard",
                template: '<ui-view />'
            });
    }
})();