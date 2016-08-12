(function () {
    angular
        .module('app')
        .config(config);

    

    function config($stateProvider) {

        stateConfig($stateProvider);              

        function stateConfig($stateProvider) {
            $stateProvider
                .state('auth', {
                    url: "/auth",
                    template: '<portfolio-auth />',
                    params: { inputScope: {} }
                });
        }
    }   

})();