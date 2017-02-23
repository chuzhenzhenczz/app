
angular.module('myApp.detail',[])
.controller('detailController',['$scope','$http','$stateParams','$sce','$state',function ($scope,$http,$stateParams,$sce) {

    $scope.mine = {

        title:"",
        timeAndSource:"",
        content:""
    };
    var are = ($stateParams.postid);
    console.log(are);
    (function () {
        var myUrl = "http://c.m.163.com/nc/article/" + $stateParams.postid + "/full.html";

        var promise = $http({
            method:'jsonp',
            url:"http://localhost:3000?myUrl="+myUrl+"&callback=JSON_CALLBACK"
        });
        console.log('8888888888888888');
        console.log( promise);
        promise.success(function (result) {
            console.log('4444444444444444');

            result = result[$stateParams.postid];
            console.log(result);

            $scope.mine.title = result.title;

            $scope.mine.timeAndSource = result.source + result.ptime;
            console.log(result.img);
            if (result.img && result.img.length) {
                for (var i in result.img) {

                    var width = result.img[i].pixel.split("*")[0];

                    var str = "<img src=" + JSON.stringify(result.img[i].src) + "style='width:100%;'" + ">";

                    result.body = result.body.replace(result.img[i].ref, str);

                }
            }

            $scope.mine.content = $sce.trustAsHtml(result.body);
            console.log('33333333333333333');
            console.log(result);
        });
        promise.error(function (e) {
            console.log(e);
        });
    })();
}]);

