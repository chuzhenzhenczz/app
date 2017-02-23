angular.module('myApp.music',[])
    .controller('musicController',['$scope','$http','MyFactory','$state','$ionicScrollDelegate',function ($scope,$http,MyFactory,$state,$ionicScrollDelegate) {


        var url = "http://localhost:3000?myUrl="+"http://m2.qiushibaike.com/article/list/text?page=1&count=50&callback=JSON_CALLBACK";

        $scope.obj = {
            list: [],
            myStyle: {},
            buttonStyle: {},
            datalist: []
        };
        $scope.myuser = function (str) {
            $state.go('tab.qbDetail',{id:str});

        };
        $http({
            url:url,
            method:"jsonp"
        }).then(function success(result) {
            //获取纯文数据
            console.log(result.data.items);
            result = result.data.items;
            // 头像图片拼接
            for(var index in result){
                if(result[index].user){

                    //用户id
                    var userinfo = result[index].user.id;
                //    取用户id前四位
                    var one = String(userinfo).slice(0,4);
                    //将头像遍历到result数组中去
                    result[index].image = "http://pic.qiushibaike.com/system/avtnew/"+one+"/"+userinfo+"/"+"medium/"+result[index].user.icon;

                }
            }
            $scope.obj.list = result;


        },function error(e) {

        })
        $scope.mainScrollToTop = function () {
            $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
        };

    }]);