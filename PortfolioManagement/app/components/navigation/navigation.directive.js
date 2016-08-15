(function () {
    angular.module('app').directive('navigation', navigation);

  //  navigationCtrl.$inject = ['navigationGate'];

    function navigation() {
        return {
            restrict: 'E',
            replace: true,
            controllerAs: 'vm',
            templateUrl: '/app/components/navigation/navigationMenu.html',
            controller: navigationCtrl,
            link: function (scope, element) {
            
            }
        }
    };

    function navigationCtrl(navigationGate) {
        //var vm = this;
        //vm.navHeader = "/app/layout/navHeader.html";
        //vm.counter = { current: 0, total: 0 };
        //vm.nodes = [];
        //activate();
        //function activate() {
        //    return navigationGate.getData().then(function (menu) {
        //        vm.nodes = menu.Children;
        //        getNodeCount(menu, vm.counter);

        //    });
        //}
    };

    //function getNodeCount(menu, counter) {
    //    $(menu.Children).each(function () {
    //        counter.total++;
    //        getNodeCount(this, counter);
    //    });
    //}


})();