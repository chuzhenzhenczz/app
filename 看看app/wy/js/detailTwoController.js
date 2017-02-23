
angular.module('myApp.detailTwo',[])
    .controller('detailTwoController',['$scope','$http','$stateParams','$timeout',function ($scope,$http,$stateParams,$timeout) {

        $scope.mine = {

            title:"",
            timeAndSource:"",
            imges: []

        };
        (function () {
            var e = $stateParams.skipID.slice(4, 16);

            e = e.replace("|", "/");

            var myUrl = 'http://c.3g.163.com/photo/api/set/' + e + ".json";

            var promise = $http({
                method: 'jsonp',
                url: "http://localhost:3000?myUrl=" + myUrl + "&callback=JSON_CALLBACK"
            });

            promise.success(function (result) {
                console.log(result);
                $scope.mine.title = result.setname;

                $scope.mine.timeAndSource = result.source + result.datatime;
                $scope.mine.imges = result.photos;

                console.log("33333333333333333");
                console.log($scope.mine.imges);

                     $timeout(function(){
                        var mySwiper = new Swiper('.swiper-container',{

                            pagination:'.swiper-pagination',
                            prevButton:'.swiper-button-prev',
                            nextButton:'.swiper-button-next',
                            scrollbar:'.swiper-scrollbar',
                            autoplay:2000,
                            paginationType:'fraction',
                            paginationClickable:true,
                            zoom:true
                        })
                    },6000);
                });
            promise.error(function (e) {
                console.log(e);
            });
        })();


    }]);

