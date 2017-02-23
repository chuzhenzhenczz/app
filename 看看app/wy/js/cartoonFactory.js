
angular.module('myApp.cartoonFactory',[])

    .factory('dataFactory',['$http','$rootScope',function ($http,$rootScope) {

        return{
            ajaxGet:function (urlStr,bool) {
                if(bool) {
                    url = urlStr;
                    console.log("lalalala");
                    console.log(url)

                }else{
                    console.log("eeeeeeeeeeeeeeee");

                    num = urlStr.substring(urlStr.length - 19, urlStr.length -17)
                    console.log(num);

                    num2 = urlStr.substring(urlStr.length - 73, urlStr.length - 19)
                    console.log(num2);
                    //得到接口

                    var url = "http://localhost:3000?myUrl=" + num2 + num+"&since=0&count=20" + "&callback=JSON_CALLBACK";
                    console.log("aaaaaaaaa");
                    console.log(url);
                    $rootScope.$broadcast("scroll.refreshComplete");
                }
                $http({
                    method: bool ? "get" : "jsonp",
                    url: url

                }).then(function success(result) {
                    if (bool) {

                        console.log("cccccccccccc");
                        console.log(result);

                        $rootScope.$broadcast("ajaxResult", result);

                    } else {
                        $rootScope.$broadcast("ajaxResultFast", result);
                        console.log("ddddccccddddd");
                        console.log(result)
                    }
                });
            }



        }

    }])