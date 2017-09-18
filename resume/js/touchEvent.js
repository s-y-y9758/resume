/*
封装常用的一些事件
init:{
	el:el,要添加事件的元素
	tap:fn, 点击
	longTap:fn, 长按
	singleTap:fn, 单击
	doubleTap:fn, 双击
	swipe: fn,滑动
	swipeLeft: fn,向左滑动
	swipeRight: fn,向右滑动
	swipeUp: fn,向上滑动
	swipeDown: fn向下滑动
}
*/
function touchEvent(init){
	var el = init.el;
	var isTap = true;//是否发生点击
	//在按下和抬起之间没有发生过移动,就是点击
	var isDblTap = false;
	var lastPoint = {};
	var startPoint = {}; 
	var dbTimer = 0;
	var longTapTimer = 0;
	el.addEventListener('touchstart', function(e) {
		lastPoint = {
			x: Math.round(e.changedTouches[0].clientX),
			y: Math.round(e.changedTouches[0].clientY)
		};
		startPoint = {
			x: Math.round(e.changedTouches[0].clientX),
			y: Math.round(e.changedTouches[0].clientY)
		}
		longTapTimer = setTimeout(function(){
			init.longTap&&init.longTap.call(el,e);
		},750);
	});
	/* 安卓下，在touchstart时，触发面积过大时很容易一块触发move */
	el.addEventListener('touchmove', function(e) {
		var nowPoint = {
			x: Math.round(e.changedTouches[0].clientX),
			y: Math.round(e.changedTouches[0].clientY)
		}
		if(nowPoint.x == lastPoint.x&&nowPoint.y == lastPoint.y){
			return;
		}
		//下边写move时要执行的内容
		if(Math.abs(nowPoint.x - startPoint.x)>5
		&&Math.abs(nowPoint.y - startPoint.y)>5){
			clearTimeout(longTapTimer);
		}

		//上边写 move时 要执行的内容
		lastPoint = {
			x: nowPoint.x,
			y: nowPoint.y
		}
	});
	el.addEventListener('touchend', function(e) {
		var nowPoint = {
			x: Math.round(e.changedTouches[0].clientX),
			y: Math.round(e.changedTouches[0].clientY)
		}
		if(Math.abs(nowPoint.x - startPoint.x)<5
		&&Math.abs(nowPoint.y - startPoint.y)<5){
			isTap = true;
		} else {
			isTap = false;
		}	 
		isTap&&init.tap&&init.tap.call(el,e);
		/* 判断用户是否执行双击操作 */
		clearTimeout(longTapTimer);
		if(isTap){
			if(isDblTap){
				clearTimeout(dbTimer);
				init.doubleTap&&init.doubleTap.call(el,e);
				isDblTap = false;
			} else {
				isDblTap = true;
				dbTimer = setTimeout(function(){
					isDblTap = false;
					init.singleTap&&init.singleTap.call(el,e);
				},300);
			}
		}
		if(getDis(nowPoint,startPoint) >= 20){
			//在屏幕中滑动了
			init.swipe&&init.swipe.call(el,e);;
		}
		if(nowPoint.x - startPoint.x >= 20){
			init.swipeRight&&init.swipeRight.call(el,e);;
		} else if(nowPoint.x - startPoint.x <= -20){
			init.swipeLeft&&init.swipeLeft.call(el,e);;
		}
		if(nowPoint.y - startPoint.y >= 20){
			init.swipeDown&&init.swipeDown.call(el,e);;
		} else if(nowPoint.y - startPoint.y <= -20){
			init.swipeUp&&init.swipeUp.call(el,e);
		}
		isTap = true;
	});
}
function getDis(Point,Point2){
	return Math.sqrt((Point.x - Point2.x)*(Point.x - Point2.x) + (Point.y - Point2.y)*(Point.y - Point2.y));
}