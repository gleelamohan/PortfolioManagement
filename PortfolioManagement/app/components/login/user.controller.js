(function () {
    angular
        .module('app')
        .controller('UsersCtrl', UsersCtrl);

    UsersCtrl.$inject = ['$scope', '$state', '$rootScope', '$filter'];

    function UsersCtrl($scope, $state, $rootScope, $filter) {
        var vm = this;
        vm.inputScope = [];
        $state.go('auth', { inputScope: vm.inputScope });
    }


})();