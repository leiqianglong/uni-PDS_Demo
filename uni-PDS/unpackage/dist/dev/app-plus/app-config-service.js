
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/login/login","pages/home/home","pages/message/message","pages/mine/mine","pages/message/demo/baseChart/baseChart","pages/message/demo/pieChart/pieChart"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"公众电力只能检测平台","navigationBarBackgroundColor":"#31966e","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#7C8497","selectedColor":"#31966e","borderStyle":"#fff2f2f2","backgroundColor":"#FFFFFF","iconWidth":"21","spacing":"5","list":[{"pagePath":"pages/home/home","iconPath":"static/tabbar/home.png","selectedIconPath":"static/tabbar/homeSL.png","text":"首页"},{"pagePath":"pages/message/message","iconPath":"static/tabbar/message.png","selectedIconPath":"static/tabbar/messageSL.png","text":"消息"},{"pagePath":"pages/mine/mine","iconPath":"static/tabbar/mine.png","selectedIconPath":"static/tabbar/mineSL.png","text":"我的"}]},"nvueCompiler":"uni-app","nvueStyleCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"uni-PDS","compilerVersion":"3.1.13","entryPagePath":"pages/login/login","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/login/login","meta":{"isQuit":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false,"navigationStyle":"custom"}},{"path":"/pages/home/home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"公众电力只能检测平台","enablePullDownRefresh":false}},{"path":"/pages/message/message","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/mine/mine","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"","enablePullDownRefresh":false}},{"path":"/pages/message/demo/baseChart/baseChart","meta":{},"window":{"navigationBarTitleText":"基本图表","enablePullDownRefresh":false}},{"path":"/pages/message/demo/pieChart/pieChart","meta":{},"window":{"navigationBarTitleText":"饼状图","enablePullDownRefresh":false}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});