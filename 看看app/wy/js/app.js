
angular.module('myApp',['ionic','myApp.headline','myApp.detail','myApp.detailTwo','myApp.music','myApp.factory','myApp.musicDetail','myApp.cartoon','myApp.cartoonFactory','myApp.cartoonDetail','myApp.cartoonDetailTwo','myApp.mine','myApp.me','myApp.mailbox','myApp.myPost','myApp.leave'])
.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('tab', {
            url: "/tab",
            // abstract为true, 表示抽象模板永远不能被激活, 但是可以设置被激活的子节点, 可以使用抽象模板包装器包裹多个命名视图, 或者传递事件给子节点
            abstract: true,
            templateUrl: "tab.html"
        })
        .state('tab.headline', {
            cache:false,
            url: "/headline",
            views: {
                'headline': {
                    templateUrl: 'headline.html',
                    controller: 'headlineController'
                }
            }
        })
        .state('tab.Detail',{

            url:"/headlineDetail/{postid}",
            views:{
                'headline':{
                    templateUrl:'headlineDetail.html',
                    controller:'detailController'
                }
            }
        })
        .state('tab.detail',{
            url:"/headlineDetail/{skipID}",
            views:{
                'headline':{
                    templateUrl:'headlineDetailTwo.html',
                    controller:'detailTwoController'
                }
            }
        })
        .state('tab.cartoon', {
            cache:false,
            url: "/cartoon",
            views: {
                'cartoon': {
                    templateUrl: 'cartoon.html',
                    controller: 'cartoonController'
                }
            }
        })
        .state('tab.cartoonDetail',{

            url:"/cartoonDetail/{id}",
            views:{
                'cartoon':{
                    templateUrl:'cartoonDetail.html',
                    controller:'cartoonDetailController'
                }
            }
        })
        .state('tab.cartoonDetailTwo',{

            url:"/cartoonDetailTwo/{id}",
            views:{
                'cartoon':{
                    templateUrl:'cartoonDetailTwo.html',
                    controller:'cartoonDetailTwoController'
                }
            }
        })

        .state('tab.music', {
            cache:false,
            url: "/music",
            views:{
                'music':{
                    templateUrl: "music.html",
                    controller: 'musicController'
                }
            }

        })
        .state('tab.qbDetail',{
            url:"/musicDetail/{id}",
            views:{
                'music':{
                    templateUrl:'musicDetail.html',
                    controller:'musicDetailController'
                }
            }
        })
        .state('tab.mine', {
            cache:false,
            url: "/mine",
            views:{
                'mine':{
                    templateUrl: "mine.html",
                    controller:'mineController'
                }
            }
        })
        .state('tab.me', {
            cache:false,
            url: "/me",
            views:{
                'mine':{
                    templateUrl: "me.html",
                    controller:'meController'
                }
            }
        })
        .state('tab.mailbox', {
            cache:false,
            url: "/mailbox",
            views:{
                'mine':{
                    templateUrl: "mailbox.html",
                    controller:'mailboxController'
                }
            }
        })
        .state('tab.myPost', {
            cache:false,
            url: "/myPost",
            views:{
                'mine':{
                    templateUrl: "myPost.html",
                    controller:'myPostController'
                }
            }
        })
        .state('tab.leave', {
            cache:false,
            url: "/leave",
            views:{
                'mine':{
                    templateUrl: "leave.html",
                    controller:'leaveController'
                }
            }
        })


    $urlRouterProvider.otherwise('/tab/headline');


}]);

