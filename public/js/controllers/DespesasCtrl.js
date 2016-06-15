angular.module("listaTelefonica").controller('DespesasCtrl', function ($scope) {
  $scope.options = {
        aoColumns: [{
            "sTitle": "Surname"
        }, {
            "sTitle": "First Name"
        }],
        aoColumnDefs: [{
            "bSortable": false,
            "aTargets": [0, 1]
        }],
        bJQueryUI: true,
        bDestroy: true,
        aaData: [
            ["Webber", "Adam"]
        ]
    };

    $scope.addData = function () {
        $scope.counter = $scope.counter + 1;
        $scope.options.aaData.push([$scope.counter, $scope.counter * 2]);
    };

    $scope.counter = 0;
});