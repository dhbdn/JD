window.onload = function() {
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 3000,//可选选项，自动滑动
        initialSlide: 0, //第一张开始
        speed: 500, //切换速度
        autoplayDisableOnInteraction: false, // 在进行触屏之后自动进行切换
        pagination: '.swiper-pagination',//下面的图标跟随切换
        paginationElement : 'li',// 设定分页器指示器（小点）的HTML标签。
        grabCursor: true, //鼠标覆盖swiper时会变成手指
        freeMode: false, //自动贴合
        freeModeMomentumRatio: 3, //移动惯性
        loop: true, //无缝轮播 自动在li列表的前面添加最后一个，在li列表后面添加第一个
        observer: true, //当li节点被修改的时候自动更新Swiper
        observeParents: true //当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
    });
    var mySwiper1 = new Swiper('.swiper-container1', {
        initialSlide :0,//初始显示的li的索引
        speed : 500,//滑动的速度
        observer:true,//当li节点被修改的时候自动更新Swiper
        observeParents:true,//当容器container宽度改变的时候(window.onresize或者自适应)自动更新Swiper
        slidesPerView : 3
    });
    //顶部吸顶盒
    var $Header = $("#wrapper").find("header"),
        $goTop = $("#goTop");
    $(window).scroll(function () {
        if($(window).scrollTop()){
            $Header.css("background","rgba(208,55,67,0.85)");
            if($(window).scrollTop()>=400){
                $goTop.show();
            }else{
                $goTop.hide();
            }
        }else{
            $Header.css("background","pink");
        }
    });
    $goTop.click(function () {
        $("html,body").animate({
            scrollTop:0
        },300)
    })
};
