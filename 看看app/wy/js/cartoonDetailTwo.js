
angular.module('myApp.cartoonDetailTwo',[])
    .controller('cartoonDetailTwoController',['$scope','$http','$stateParams',function ($scope,$http,$stateParams) {

    $scope.mine = {
        content:[],
        img:[]

    };

    console.log('22222222222222')
    console.log($stateParams.id)
        var e = $stateParams.id;

        var myurl = "http://api.kkmh.com/v1/comics/"+e;

        var promise = $http({

            method:'jsonp',
            url:"http://localhost:3000?myUrl=" +myurl+"&callback=JSON_CALLBACK"

        });
        promise.success(function (result) {

            console.log(result);

            $scope.mine.content = result.data;
            console.log($scope.mine.content);
           $scope.mine.img = result.data.images;



        },function error(e) {

        })




}])
