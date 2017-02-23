
angular.module('myApp.cartoonDetail',[])
    .controller('cartoonDetailController',['$scope','$http','$stateParams','$timeout','$state',function ($scope,$http,$stateParams,$timeout,$state) {


        $scope.mine = {

            myContent:[],
            muLu:[],
            pay:[],
            zan:[],
            talk:[]
        };
            $scope.detail = function (str) {
                $state.go('tab.cartoonDetailTwo',{id:str});
            };

            // 获取目录id
            var e = $stateParams.id;
            console.log(e);
            //目录地址拼接
            var myUrl = "http://api.kkmh.com/v1/topics/"+e+"?sort=0";

            console.log(myUrl);
            var promise = $http({
                method: 'jsonp',
                url: "http://localhost:3000?myUrl=" + myUrl + "&callback=JSON_CALLBACK"
            });
        promise.success(function (result) {
            //获取目录数组
            console.log(result);
            $scope.mine.myContent = result.data;
            console.log($scope.mine.myContent.fav_count);
           //将关注数字转化为字符串
           var pay = String($scope.mine.myContent.fav_count);
            //去掉后四位
            $scope.mine.pay = pay.substring(0,pay.length-4);
            console.log($scope.mine.pay);
            //将点赞数字转化为字符串
            var zan = String($scope.mine.myContent.likes_count);
            //去掉后四位
            $scope.mine.zan = zan.substring(0,zan.length-4);
            console.log($scope.mine.zan);
            //将评论数字转化为字符串
            var talk = String($scope.mine.myContent.comments_count);
            //去掉后四位
            $scope.mine.talk = talk.substring(0,talk.length-4);
            console.log($scope.mine.talk);

            $scope.mine.muLu = result.data.comics;
            console.log($scope.mine.muLu);


        },function error(e) {
            console.log(e);
        })




    }]);

