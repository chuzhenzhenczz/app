
angular.module('myApp.factory',[])

.factory('DataFactory',['$http','$rootScope',function ($http,$rootScope) {

    return{
        ajaxGet:function (urlStr,bool) {
            if(bool) {
                url = urlStr;

            }else{
                    console.log("eeeeeeeeeeeeeeee");

                    num = urlStr.substring(urlStr.length - 7, urlStr.length - 5)
                    console.log(num);

                    num2 = urlStr.substring(urlStr.length - 63, urlStr.length - 7)
                    console.log(num2);

                    var url = "http://localhost:3000?myUrl=" + num2 + num + ".html" + "&callback=JSON_CALLBACK";
                    console.log("aaaaaaaaa");
                    console.log(url);
                    $rootScope.$broadcast("scroll.refreshComplete");
            }
                $http({
                    method: bool ? "get" : "jsonp",
                    url: url

                }).then(function success(result) {
                    if (bool) {

                        console.log("cccccccccccc")
                        console.log(result);

                        $rootScope.$broadcast("ajaxResult", result);

                    } else {
                        $rootScope.$broadcast("ajaxResultFast", result);

                    }
                });
            }



    }

}])