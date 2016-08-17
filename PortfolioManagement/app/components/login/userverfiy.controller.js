(function () {
    angular
        .module('app')
        .controller('UserVerify', UserVerify);

    UserVerify.$inject = ['$scope', '$state',  '$filter'];

    function UserVerify($scope, $state,  $filter) {
     
        $scope.authverify = false;



        //$state.go('auth', { inputScope: vm.inputScope });
    }


})();