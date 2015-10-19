// JavaScript Document
//轮播图数据
var picUl = ['img/ul/li-1.jpg','img/ul/li-2.jpg','img/ul/li-3.jpg','img/ul/li-4.jpg','img/ul/li-5.jpg','img/ul/li-6.jpg'];

//淘宝头条数据
var fisthot=[{label:'推荐',content:'星闻|女明星明星的男闺蜜韩火火',url:'http://m.taobao.com'},{label:'热门',content:'宇宙级瘦身“干货”来袭',url:'http://m.taobao.com'},{label:'最新',content:'悦来悦美，换季护肤宝典',url:'http://m.taobao.com'}];

//发现好店
var findgood=[{img:'img/findgood/findgood-1.png',url:'http://m.taobao.com',content:'今日推荐1-3波'},{img:'img/findgood/findgood-2.png',url:'http://m.taobao.com',content:'女神的店-美人装'},{img:'img/findgood/findgood-3.png',url:'http://m.taobao.com',content:'秋冬必备-女神装'},{img:'img/findgood/findgood-4.png',url:'http://m.taobao.com',content:'今日推荐第二波'},{img:'img/findgood/findgood-5.png',url:'http://m.taobao.com',content:'生活家-爱的杂货铺'},{img:'img/findgood/findgood-6.png',url:'http://m.taobao.com',content:'熊孩子-潮妈萌娃'},{img:'img/findgood/findgood-7.png',url:'http://m.taobao.com',content:'男人帮-有型潮装'},{img:'img/findgood/findgood-8.png',url:'http://m.taobao.com',content:'有腔调-超有设计感'}];

//猜你喜欢
var youlike=[{img:'img/youlike/youlike-2.png',url:'http://m.taobao.com',content:'【晚间剥皮神器疯抢中】精品五档可调喷雾淋浴热卖中快来吧 数量有限先到到得',money:15.5},{img:'img/youlike/youlike-3.png',url:'http://m.taobao.com',content:'全自动挤牙膏套装防尘牙刷架韩国懒人牙膏套装',money:11.8},{img:'img/youlike/youlike-4.png',url:'http://m.taobao.com',content:'吉柏圣 酒店枕芯枕头 全面面料特价一堆拍2羽毛枕头',money:30.8},{img:'img/youlike/youlike-5.png',url:'http://m.taobao.com',content:'穆斯费尔 置物架 简易创意个性小书架 落地架',money:74.25},{img:'img/youlike/youlike-6.png',url:'http://m.taobao.com',content:'【天猫超市】 狮井 茶叶绿茶 雨前西湖龙井茶30克',money:12.8},{img:'img/youlike/youlike-7.png',url:'http://m.taobao.com',content:'特价韩版公主全棉床裙韩版纯棉蕾丝床笠床帘',money:87.12},{img:'img/youlike/youlike-8.png',url:'http://m.taobao.com',content:'舟山海鲜零食东海鱿鱼特质铁板烧鱿鱼头美味鱿鱼丝',money:15.9},{img:'img/youlike/youlike-9.png',url:'http://m.taobao.com',content:'日式ZAKKA 加厚珐琅搪瓷单柄锅宝宝辅食奶锅煮饭锅',money:22.0},{img:'img/youlike/youlike-10.png',url:'http://m.taobao.com',content:'避免鱼鳞乱飞鱼刨+削皮刀+开橙器 三件套',money:12.8}]


var bOnOff = false;
function view(){
	return{ w:document.documentElement.clientWidth,h: document.documentElement.clientHeight
	}
	
}
function fnGoTop(){
	var h=view().h;
	var scrollTop = $('body').scrollTop();
	if(scrollTop>=h*0.6){
		$('#goTop').css('display','block');
	}else{
		$('#goTop').css('display','none');
	}
}

function moveIn(){
	var moveInTimer=null;
	var t = 200;
	var num = 0;
	clearInterval(moveInTimer);
	moveInTimer=setInterval(function(){
		num++;
		if(bOnOff ==true){
			clearInterval(moveInTimer);
			t=t<(num*14)?(num*14):t;
			console.log(num);
			setTimeout(function(){
				$('#welcome').removeClass('pageShow');
				$('#indexPage').addClass('pageShow');
			},t)
		}
	},14);
	imgLoad();
	
	
}
//进场画面
//图片预加载
function imgLoad(){
	var h=view().h;
	var scrollTop = $('body').scrollTop();
	
	$('img').each(function(i, elem) {
    if($(elem).offset().top<h+scrollTop&&$(elem).prop('isLoad')==false){
			$(elem).attr('src',$(elem).data('src'));
			$(elem).prop('isLoad',true)
		}
  });
	if(bOnOff==false){
		bOnOff = true;
	}
	
}
function fnLoad(){
	//获取宽高，并赋值
	view();
	var w =view().w;
	var h = view().h;
	$('.page').css('width',w);
	$('#welcome').css('height',h);
	
	//动态创建轮播图
	var picUlHtml='';
	var picDivHtml=''
	for(var i=0;i<picUl.length;i++){
		picUlHtml+='<li><a href="http://m.taobao.com"><img data-src="'+picUl[i]+'" ></a></li>';
		picDivHtml+='<span></span>';
	}
	$('#pic').find('ul').css('width',picUl.length*100+'%')
	$('#pic').find('ul').html(picUlHtml);
	$('#pic').find('div').html(picDivHtml);
	$('#pic').find('span').eq(0).addClass('active');
	
	//动态创建每日号店内容
	var findgoodHtml='';
	for(var i=0;i<findgood.length;i++){
		findgoodHtml+='<li><a href="'+findgood[i].url+'"><img data-src="'+findgood[i].img+'" ><p>'+findgood[i].content+'</p></a></li>';
	}
	$('#findgood').find('ul').html(findgoodHtml);
	$('#findgood').find('ul').css('width',findgood.length*50+'%');
	var findgoodDivHtml='';
	for(var i=0;i<findgood.length/2;i++){
		findgoodDivHtml+='<span></span>'
	}
	$('#findgood').find('div').eq(1).html(findgoodDivHtml);
	$('#findgood').find('div').eq(1).find('span').eq(0).addClass('active');
	
	//动态创建猜你喜欢
	var youlikeHtml=$('#youLike').find('ul').html();
	for( var i=0;i<youlike.length;i++){
		youlikeHtml+='<li><a href="'+youlike[i].url+'"><img  data-src="'+youlike[i].img+'"></a><p>'+youlike[i].content+'</p><strong class="clear"><em>￥</em><span>'+youlike[i].money+'</span></strong></li>'
	}
	$('#youLike').find('ul').html(youlikeHtml);
	
	//给有data-src的图片加上自定义属性isLoad=false，即如果加载过了不在加载
	
	$('#indexPage').find('img').each(function(i, elem) {
		if($(elem).data('src')){
			$(elem).prop('isLoad',false);
		}
  });
	//入场画面及预加载
	moveIn();
	//动态加载图片
	$('body').on('touchmove',function(){
		imgLoad();
	  fnGoTop();
	})
	
	//取消getApp
	$('#getApp').find('a').eq(0).on('touchstart',function(ev){
		$('#getApp').css('display','none');
	})
	
	//轮播图自动播放
	var picTimer=null;
	auto()
	var num = 0;
	function auto(){
		clearInterval(picTimer);
		picTimer = setInterval(function(){
			$('#pic').find('ul').animate({left:(num+1)*(-16)+'rem'},1000,function(){
				num++;
				if(num==$('#pic').find('li').length-1){
						$('#pic').find('ul').css('left',0);
						num=0;
				}
			})
			$('#pic').find('span').removeClass('active')
			$('#pic').find('span').eq(num+1).addClass('active');
				
		},2000)
	}
	//轮播图滑动
	
	$('#pic').find('ul').on('touchstart',function(ev){
		//清除定时器
		clearInterval(picTimer);
		
		var ev=ev.originalEvent.changedTouches[0];
		var startX=ev.pageX;
		var stopX=0;
		var isMove=false;
		var left = $('#pic').find('ul').offset().left;
		$('#pic').find('ul').on('touchmove',function(ev){
			var ev=ev.originalEvent.changedTouches[0];
			var stopX=ev.pageX;
			$('#pic').find('ul').css('left',stopX-startX+left);
			
			
		});
		$('#pic').find('ul').on('touchend',function(ev){
			var ev=ev.originalEvent.changedTouches[0];
			var endX=ev.pageX;
			var len = $('#pic').find('li').size();
			var width  = $('#pic').find('li').width();
			
			if(endX-startX+left>0){
				$('#pic').find('ul').animate({left:0},500)
			}else if(endX-startX+left<-(len-1)*width){
				$('#pic').find('ul').animate({left:-(len-1)*width},500)
			}else{
				if(endX-startX<0){
					num++;
					$('#pic').find('ul').animate({left:-(num+1)*width},500)
				}else{
					num--;
					$('#pic').find('ul').animate({left:-(num+1)*width},500)
				}
			}
			
			
			$('#pic').find('span').removeClass('active')
			$('#pic').find('span').eq(num+1).addClass('active');
			$('#pic').find('ul').off('touchmove touchend')
			auto();
			
			
		})
		
	})
	
	//淘宝头条定时切换
	var firstNum = 0;
	var firstTimer = null;
	clearInterval(firstTimer);
	firstTimer = setInterval(function(){
		firstNum++
		if(firstNum==fisthot.length-1){
			firstNum=0;
		}
		$('#firstNews').find('span').html(fisthot[firstNum].label);
		$('#firstNews').find('a').html(fisthot[firstNum].content);
		$('#firstNews').find('a').attr('href',fisthot[firstNum].url);
		
	},2000)
	findGoodShop();
	
	countdown();
		
	
	//moveIn();
	/*$('body').on('touchstart',function(){
		console.log($('body').scrollTop())
	})*/
}
function countdown(){
	var newTime= new Date('September 1,2015 23:59:59');
	var dataTimer=null;
	clearInterval(dataTimer);
	dataTimer = setInterval(function(){
		var nowTime = new Date();
		var t=Math.floor((newTime-nowTime)/1000);
		 if(t<=0){
				clearInterval(dataTimer);
				t=0;
			}
		 hour = Math.floor(t/3600);
		 minute=Math.floor(t%3600/60);
		 second=Math.floor(t%60)
		
			$('#buying').find('span').eq(0).html(hour);
			$('#buying').find('span').eq(1).html(minute);
			$('#buying').find('span').eq(2).html(second);
		 
		 
	},1000)
	
}

function findGoodShop(){

	$('#findgood').find('ul').on('touchstart',function(ev){
		var ev=ev.originalEvent.changedTouches[0];
		var left = $('#findgood').find('ul').offset().left;
		var startX=ev.pageX;
		console.log(startX)	;
		$('#findgood').find('ul').on('touchmove',function(ev){
			var ev=ev.originalEvent.changedTouches[0];
			var moveX=ev.pageX;	
			$('#findgood').find('ul').css('left',moveX-startX+left)
		})
		
		$('#findgood').find('ul').on('touchend',function(ev){
			var ev=ev.originalEvent.changedTouches[0];
			var endX=ev.pageX;	
			var len = $('#findgood').find('li').size()/2;
			var w = $('#findgood').find('ul').width()/len;
			var endLeft=0;
			if(endX-startX+left>0){
				$('#findgood').find('ul').animate({left:0},500)
				endLeft = 0;
			}else if(endX-startX+left<-$('#findgood').find('ul').width()*(len-1)/len){
				$('#findgood').find('ul').animate({left:-w*3},500)
				endLeft = -w*3;
			}else{
				if(endX-startX>0){
					$('#findgood').find('ul').animate({left:left+w},500)
					endLeft = left+w;
				}else{
					$('#findgood').find('ul').animate({left:left-w},500)
					endLeft = left-w;
				}
			}
			spanIndex = Math.round(Math.abs(endLeft/w));
			$('#findgood').find('span').removeClass('active')
			$('#findgood').find('span').eq(spanIndex).addClass('active')
			
			$('#findgood').find('ul').off('touchend touchmove')
			
		})
		
		
	})
}
