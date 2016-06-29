//字体自适应
	!function(a){function b(){var b=g.getBoundingClientRect().width;a.rem=(b/6.4>100?100:(b/6.4<50?50:b/6.4)),g.style.fontSize=a.rem+"px"}var g=a.document.documentElement,e;a.addEventListener("resize",function(){clearTimeout(e),e=setTimeout(b,300)},!1),a.addEventListener("pageshow",function(a){a.persisted&&(clearTimeout(e),e=setTimeout(b,300))},!1),b()}(window);
   

// 去地址栏
window.addEventListener("load",function(){
   setTimeout(function(){
    window.scrollTo(0,1);
   },0);
  });
$(function(){
  $(".swiper-wrapper").hide();
	scaleW=window.innerWidth/320;
	scaleH=window.innerHeight/480;
	var resizes = document.querySelectorAll('.resize');
    for (var j=0; j<resizes.length; j++) {
	    resizes[j].style.width=parseInt(resizes[j].style.width)*scaleW+'px';
	    resizes[j].style.height=parseInt(resizes[j].style.height)*scaleH+'px';
	    resizes[j].style.top=parseInt(resizes[j].style.top)*scaleH+'px';
	    resizes[j].style.left=parseInt(resizes[j].style.left)*scaleW+'px'; 
	}
	//初始化swiper
	var mySwiper = new Swiper ('.swiper-container', {
   direction : 'vertical',
   onInit: function(swiper){
   swiperAnimateCache(swiper);
   swiperAnimate(swiper);
    },
   onSlideChangeEnd: function(swiper){
  swiperAnimate(swiper);
    },
  onTransitionEnd: function(swiper){
  swiperAnimate(swiper);
  },

  onProgress: function(swiper){
    for (var i = 0; i < swiper.slides.length; i++){
      var slide = swiper.slides[i];
      var progress = slide.progress;
      var translate = progress*swiper.height/4;  
  scale = 1 - Math.min(Math.abs(progress * 0.5), 1);
      var opacity = 1 - Math.min(Math.abs(progress/2),0.5);
      slide.style.opacity = opacity;
  es = slide.style;
  es.webkitTransform = es.MsTransform = es.msTransform = es.MozTransform = es.OTransform = es.transform = 'translate3d(0,'+translate+'px,-'+translate+'px) scaleY(' + scale + ')';

    }
  },
  
 onSetTransition: function(swiper, speed) {
    for (var i = 0; i < swiper.slides.length; i++){
      es = swiper.slides[i].style;
  es.webkitTransitionDuration = es.MsTransitionDuration = es.msTransitionDuration = es.MozTransitionDuration = es.OTransitionDuration = es.transitionDuration = speed + 'ms';

    }
 },
 onSlideChangeStart: function(swiper){
	  if(mySwiper.activeIndex !== 1){
		$(".slide2-alert").hide();
	  };
	  if(mySwiper.activeIndex !== 2){
	  	$(".slide3-detail-bar li").removeClass("slide-alert-animation");
	  };
	  if(mySwiper.activeIndex !== 3){
	  	$(".slide4-detail-bar li").removeClass("slide-alert-animation");
	  };
	  if(mySwiper.activeIndex !== 4){
	  	$(".slide5-alert").removeClass("slide-alert-animation");
	  };
	  if(mySwiper.activeIndex !== 5){
	  	$(".slide6-detail-bar li").removeClass("slide-alert-animation");
	  };
	  if(mySwiper.activeIndex !== 6){
	  	$(".slide7-detail-bar li").removeClass("slide-alert-animation");
	  };
   },
});
    //slide2 
    $(".swiper-slide2 .slide2-pic").click(function(){
    	var num = $(this).index();
//  	console.log(num);
    	$(".slide2-alert-bar .slide2-alert").eq(num-1).fadeIn(150).siblings("").hide();
    	$(".slide2-alert").click(function(){
    		$(".slide2-alert").fadeOut(150);
    	});
    });
    
    
    //slide3 弹窗显示隐藏
    $(".slide3-pic-photo img").click(function(){
    	var _this_index = $(this).index();
    	$(".slide3-detail-bar li").eq(_this_index).addClass("slide-alert-animation").siblings("").removeClass("slide-alert-animation");
    });
    $(".slide3-close-btn").click(function(){
    	$(".slide3-detail-bar li").removeClass("slide-alert-animation");
    });
    
    //slide4 弹窗显示隐藏
    $(".slide4-pic-photo img").click(function(){
    	var _this_index = $(this).index();
    	$(".slide4-detail-bar li").eq(_this_index).addClass("slide-alert-animation").siblings("").removeClass("slide-alert-animation");
    });
    $(".slide3-close-btn").click(function(){
    	$(".slide4-detail-bar li").removeClass("slide-alert-animation");
    });
    
    //slide5
    $(".slide5-pic,.slide5-btn").click(function(){
    	$(".slide5-alert").addClass("slide-alert-animation");
    });
    $(".slide5-close-btn").click(function(){
    	$(".slide5-alert").removeClass("slide-alert-animation");
    });
    
    //slide6
    $(".slide6-pic-photo img").click(function(){
    	var _this_index = $(this).index();
    	$(".slide6-detail-bar li").eq(_this_index).addClass("slide-alert-animation").siblings("").removeClass("slide-alert-animation");
    });
    $(".slide6-close-btn").click(function(){
    	$(".slide6-detail-bar li").removeClass("slide-alert-animation");
    });
    
    //slide7
    $(".slide7-pic-photo img").click(function(){
    	var _this_index = $(this).index();
    	$(".slide7-detail-bar li").eq(_this_index).addClass("slide-alert-animation").siblings("").removeClass("slide-alert-animation");
    });
    $(".slide6-close-btn").click(function(){
    	$(".slide7-detail-bar li").removeClass("slide-alert-animation");
    });
    
    //slide10
    $(".slide10-btn").on("click",function(){
		mySwiper.slideNext();
	});
	
	//slide11
	$(".slide11-btn").click(function(event){
		var event = window.event || event;
		event.stopPropagation();
		$(".slide11-succeed").show();
		$(".slide11-succeed").click(function(){
			$(".slide11-succeed").hide();
			mySwiper.slideNext();
		});
	});
	$(".slide11-form input").focus(function(){
		$(".slide11-form").css("top","-20%");
	}).blur(function(){
		$(".slide11-form").css("top","5%");
	});
	
//预加载
   var picArr = ['0-0.png','0-1.jpg','1-1.jpg','1-2.png','1-3.png','1-4.png','1-5.png','2-1.jpg','2-2.png','2-3.png','2-4.png','2-5.png','2-6.png','2-7.png','3-1.jpg','3-1.png','3-2.png','3-3.png',
   '3-4.png','3-5.png','3-6.png','3-7.png',   '3-8.png','3-9.png','3-10.png','3-11.png','3-12.png','3-22.png','3-gb.png','3-31.png','3-32.png','3-33.png','3-34.png','3-35.png','3-36.png','4-2.png',
   '4-41.png','4-42.png','4-43.png','4-44.png','4-45.png','5-1.jpg','5-2.png','5-3.png','5-4.png','5-5.png','5-6.png','5-7.png','5-8.png','5-9.png','5-10.png','5-11.png','5-12.png','5-13.png','5-14.jpg',
   '5-15.png','5-17.png','6-1.jpg','6-2.png','6-3.png','6-4.png','6-5.png','6-6.png','6-7.png','6-8.png','6-9.png','6-10.png','6-11.png','6-12.png','6-13.png','6-14.png','6-61.png','6-62.png','6-63.png',
   '6-64.png','6-65.png','6-66.png','7-71.png','7-72.png','7-73.png','7-74.png','7-75.png','8-1.png','10-1.png','10-3.png','10-2.png','11-1.png','11-2.png','11-3.png','12-1.jpg','alert1.jpg','alert2.jpg',
   'alert3.jpg','alert4.jpg'];
   preloadimages(picArr);
   function preloadimages(arr){
     var newimages=[], loadedimages=0;
     var arr=(typeof arr!="object")? [arr] : arr;
     function imageloadpost(){
         loadedimages++;
       
         if (loadedimages<=arr.length){
            fnLoad(loadedimages,arr.length);
             if (loadedimages==arr.length){
              fnStart();
             }
         }
     }
     for (var i=0; i<arr.length; i++){
         newimages[i]=new Image();
         newimages[i].src="images/"+arr[i];
         newimages[i].onload=function(){
             imageloadpost();
         }
         newimages[i].onerror=function(){
         imageloadpost();
         }
     }
   }
   function fnLoad(iNow,sum){          //loading
   $('#loading p').html( parseInt((iNow/sum)*100) +"%");
   $('#loading_bg div').css({
       width: parseInt((iNow/sum)*100) +"%"
   });
   }
   function fnStart(){
       setTimeout(function(){
       		$('.loading_wrap').css('display','none');
       		$(".swiper-wrapper").show();
       			//音频
			$("#app-audio").get(0).play();
			$("body").click(function(){
				$("#app-audio").get(0).play();
			});
       },3000);
   }
 /* 图片预加载 end */

 // 百度地图API功能
  var map = new BMap.Map("allmap");
  var point = new BMap.Point(116.331398,39.897445);
  map.centerAndZoom(point,12);
  // 创建地址解析器实例
  var myGeo = new BMap.Geocoder();
  // 将地址解析结果显示在地图上,并调整地图视野
  myGeo.getPoint("广州亚运会亚残运会博物馆", function(point){
    if (point) {
      var marker = new BMap.Marker(point);
      map.centerAndZoom(point, 17);
      map.addOverlay(marker);
      var opts = {
        width : 100,     // 信息窗口宽度
        height: 50,     // 信息窗口高度
        title : "" , // 信息窗口标题
        enableMessage:true,//设置允许信息窗发送短息
        message:"亲耐滴，晚上一起吃个饭吧？戳下面的链接看下地址喔~"
      }
      var infoWindow = new BMap.InfoWindow("广州亚运会亚残运会博物馆", opts);  // 创建信息窗口对象
      map.openInfoWindow(infoWindow,point); //开启信息窗口
      marker.addEventListener("click", function(){          
        map.openInfoWindow(infoWindow,point); //开启信息窗口
        location.replace("http://map.baidu.com/");
		
       });
    }else{
      alert("您选择地址没有解析到结果!");
    }
  }, "广州市");
 
});
