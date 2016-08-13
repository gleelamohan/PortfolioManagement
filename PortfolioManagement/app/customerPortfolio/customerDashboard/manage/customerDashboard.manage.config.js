
(function () {
    angular
        .module('app.customerPortfolio.customerDashboard.manage')
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {

       
        $stateProvider
            .state('customerPortfolio.customerDashboard.manage', {
                url: "/manage",
                template: '<customerdash-manage />',
                controller: "customerDashboardManageCtrl",
                controllerAs: "vm"
            });
    }
})();