
angular.module('myApp.cartoon',[])
    .controller('cartoonController',['$scope','$http','MyFactory','$state','$ionicScrollDelegate','dataFactory',function ($scope,$http,MyFactory,$state,$ionicScrollDelegate,dataFactory) {


        $scope.obj = {
            list: [],
            ajaxRequest: function (str) {
                dataFactory.ajaxGet(str);
            },
            myStyle: {},
            buttonStyle: {},
            datalist: [],
            mun:[]
        };
        $scope.cartoonid = function (str) {
            $state.go('tab.cartoonDetail',{id:str});

        };
        console.log('11111111');

        dataFactory.ajaxGet('../lib/qb.json', true);


        //获取本地数据
        $scope.$on('ajaxResult',function (evt,msg) {

            dataFactory.ajaxGet(msg.data[0].url);
            console.log('ooooooooooooooo');
            console.log(msg.data);
            $scope.obj.datalist = msg.data;

            // 获取数据后计算滚动内容宽度
            $scope.obj.myStyle = {
                // "background-color": "red",
                "width": document.body.clientWidth * msg.data.length / 4 + 'px',
                "height": "100%"
            };

            $scope.obj.buttonStyle = {
                "width": document.body.clientWidth / 5 + 'px',
                'font-size': "20px",
                "color": "white"
            };
        })
        //获取远程数据
        $scope.$on('ajaxResultFast',function (evt,msg) {
            console.log('pppppppppppppp');
            console.log(msg);

            $scope.obj.list = msg.data.data.topics;

            console.log( $scope.obj.list);



        })

        $scope.mainScrollToTop = function () {
            $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
        };

    }]);