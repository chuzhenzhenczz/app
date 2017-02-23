
angular.module('myApp.headline',[])
    .value('MyFactory',{
        num:0,
        isFirst:true
    })
    .controller('headlineController',['$scope','$http','MyFactory','$state','DataFactory','$timeout','$ionicScrollDelegate',function ($scope,$http,MyFactory,$state,DataFactory,$timeout,$ionicScrollDelegate) {



        $scope.obj = {
        myStyle: {},
        buttonStyle: {},
        datalist: [],
        isFirst: !MyFactory.isFirst,
        switch: true,

        ajaxRequest: function (str) {
            DataFactory.ajaxGet(str);
        },
        listArr: [],
        imgArray:[]

    };

        $scope.enterDetail = function (str) {
            $state.go('tab.detail',{skipID:str});

        };
        doRefresh();
        $scope.doRefresh = doRefresh;
        function doRefresh() {
            MyFactory.num = 0;

            DataFactory.ajaxGet('../lib/wy.json', true);

            $scope.obj.isFirst = true;

            // 停止刷新
            $scope.$broadcast("scroll.refreshComplete");
        }
        // 监听本地请求
            $scope.$on('ajaxResult', function (evt, msg) {

                DataFactory.ajaxGet(msg.data[0].url);

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

            });

            // 监听远程请求

            $scope.$on('ajaxResultFast', function (evt, msg) {

                $scope.obj.imgArray = null;
                for (var obj in msg.data) {

                    var dataArr = msg.data[obj];
                    console.log(dataArr);
                    break;

                }

                $scope.obj.imgArray = msg.data[obj].splice(0, 1)[0].ads;

                console.log('ppppppppppppppppppp');
                console.log($scope.obj.imgArray);

                $timeout(function(){
                    var mySwiper = new Swiper('.swiper-container',{
                        autoplay:2000,
                        paginationType:'fraction',
                        paginationClickable:true,
                        zoom:true
                    })
                },2000);

                dataArr.splice(0, 1);
                $scope.obj.listArr = dataArr;
                console.log('kkkkkkkkkkkkkkkkkkkk');
                console.log($scope.obj.listArr);

            })

        $scope.loadMore = loadMore;


        function  loadMore() {


            if (MyFactory.isFirst) {
                MyFactory.isFirst = false;

                // 结束刷新
                $scope.$broadcast('scroll.infiniteScrollComplete');
                return;
            }

            if ($scope.obj.switch) {
                $scope.obj.switch = false;
                $scope.$broadcast('scroll.infiniteScrollComplete');
            } else {
                return;
            }

            console.log(1111);

            MyFactory.num += 20;
        }
        $scope.mainScrollToTop = function () {
            $ionicScrollDelegate.$getByHandle('mainScroll').scrollTop();
        };

}]);
