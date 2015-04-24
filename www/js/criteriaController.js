app.controller("criteriaController", function($scope, $stateParams, $location, $state) {

    $scope.showSecond = false;
    $scope.specifications = [, ];
    $scope.submit = function() {
        //$location.url("/foodSuggestion/" + $scope.meal + "/" + $scope.specifically);

        $state.go('foodSuggestion-view', {
            meal: $scope.meal,
            features: $scope.specifically
        });
    }

    $scope.updateSpecification = function(index) {
        if ($scope.characteristic.term[index] == "Texture") {
            $scope.specifications[index] = [{
                value: "Dry",
                id: 1
            }, {
                value: "Liquid",
                id: 2
            }, {
                value: "Chewy",
                id: 3
            }, {
                value: "Crunchy",
                id: 4
            }, {
                value: "Soft",
                id: 5
            }];

        } else if ($scope.characteristic.term[index] == "Taste") {
            $scope.specifications[index] = [{
                value: "Sweet",
                id: 6
            }, {
                value: "Sour",
                id: 7
            }, {
                value: "Salty",
                id: 8
            }, {
                value: "Bitter",
                id: 9
            }];

        } else if ($scope.characteristic.term[index] == "Color") {
            $scope.specifications[index] = [{
                value: "Red",
                id: 10
            }, {
                value: "Orange",
                id: 11
            }, {
                value: "Yellow",
                id: 12
            }, {
                value: "Green",
                id: 13
            }, {
                value: "White",
                id: 14
            }, {
                value: "Brown",
                id: 15
            }];

        }
    }
});