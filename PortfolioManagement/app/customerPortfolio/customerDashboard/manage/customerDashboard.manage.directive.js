(function () {
    function customerdashManage() {
        return {
            restrict: 'AEC',
            replace: true,
            scope: {
                isModal: "@ismodal",
                inputScope: "=inputscope",
                appCallback: "=appcallback",
                infoVisible: "=infovisible",
                infoText: "=infotext",
                infoClass: "=infoclass"
            },
            controller: function ($scope) {
                var vm = this;
              
                vm.templateUrl = "/app/customerPortfolio/customerDashboard/manage/customerDashboard.manage.html";
               

            },
            controllerAs: 'vm',
            template: '<div ng-include="vm.templateUrl"></div>',
            compile: function (element) {
                return recursionHelper.compile(element);
            }
        }
    };
    angular.module('app.customerPortfolio.customerDashboard.manage').directive('customerdashManage', customerdashManage);
    
})();
