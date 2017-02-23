
angular.module('myApp.musicDetail',[])
    .controller('musicDetailController',['$scope','$http','$stateParams','$timeout',function ($scope,$http,$stateParams,$timeout) {


        $scope.mine = {

            myUser:[]
        };
        console.log($stateParams.id);
        (function () {
            //获取用户id
            var e = $stateParams.id;
            console.log(e);
            //个人详细信息地址拼接
            var myUrl = "http://nearby.qiushibaike.com/user/"+ e + "/detail?rqcnt=29&r=95bec6c01478093084092 .json";
            console.log(myUrl);
            var promise = $http({
                method: 'jsonp',
                url: "http://localhost:3000?myUrl=" + myUrl + "&callback=JSON_CALLBACK"
            });
        promise.success(function (result) {
            //获取个人信息数组
            result = result.userdata;
            console.log(result);
            $scope.mine.myUser = result;

                    var userinfo = result.id;
                    console.log(userinfo);
                    //    取用户id前四位
                    var one = String(userinfo).slice(0,4);
                    console.log(one);
                    //将头像遍历到result数组中去
                    result.image = "http://pic.qiushibaike.com/system/avtnew/"+one+"/"+userinfo+"/"+"medium/"+result.icon;



        },function error(e) {
            console.log(e);
        })

        })();


    }]);

