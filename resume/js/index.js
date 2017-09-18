
window.onload = function() {
	document.addEventListener('touchstart',function(e) {
		e.preventDefault();
	})
	var pages = document.querySelectorAll('.page');
	var back = document.querySelectorAll('.back');
	var titleImg = document.querySelectorAll('.titleImg');
	var pageBack = document.querySelector('.pageBack');
	var showPage = [];//每一屏的显示
	var hidePage = [];//每一屏的归位
	var now = 0;//现在是第几屏
	var prev = 0;//上一次动画是第几屏
	
	showPage[0] = function () {
		var pageOne = document.querySelector('#pageOne');
		var scaleImg = pageOne.querySelector('.scaleImg');
		var rotate = scaleImg.querySelectorAll('li');
		var bg = pageOne.querySelector('.bg');
		var cup = pageOne.querySelector('.cup');
		var paper = pageOne.querySelector('.paper');
		var pan = pageOne.querySelector('.pan');
		var bag = pageOne.querySelector('.bag');
		var boult = pageOne.querySelector('.boult');
		var whiteBg = pageOne.querySelector('.whiteBg');
		var img = whiteBg.querySelectorAll('img');
		var word = whiteBg.querySelectorAll('p');
		for(var i = 0; i < rotate.length; i++) {
			rotate[i].classList.add('show');
		}
		bg.classList.add('show');
		cup.classList.add('show');
		paper.classList.add('show');
		pan.classList.add('show');
		bag.classList.add('show');
		whiteBg.classList.add('show');
		for(var i = 0; i < img.length; i++) {
			img[i].classList.add('show');
		}
		for(var i = 0; i < word.length; i++) {
			word[i].classList.add('show');
		}
	}
	hidePage[0] = function() {
		var pageOne = document.querySelector('#pageOne');
		var scaleImg = pageOne.querySelector('.scaleImg');
		var rotate = scaleImg.querySelectorAll('li');
		var bg = pageOne.querySelector('.bg');
		var cup = pageOne.querySelector('.cup');
		var paper = pageOne.querySelector('.paper');
		var pan = pageOne.querySelector('.pan');
		var bag = pageOne.querySelector('.bag');
		var boult = pageOne.querySelector('.boult');
		var whiteBg = pageOne.querySelector('.whiteBg');
		var img = whiteBg.querySelectorAll('img');
		var word = whiteBg.querySelectorAll('p');
		for(var i = 0; i < rotate.length; i++) {
			rotate[i].classList.remove('show');
		}
		bg.classList.remove('show');
		cup.classList.remove('show');
		paper.classList.remove('show');
		pan.classList.remove('show');
		bag.classList.remove('show');
		whiteBg.classList.remove('show');
		for(var i = 0; i < img.length; i++) {
			img[i].classList.remove('show');
		}
		for(var i = 0; i < word.length; i++) {
			word[i].classList.remove('show');
		}
	}
	showPage[0]();
	showPage[1] = function () {
		var pageTwo = document.querySelector('#pageTwo');
		backMove(pageTwo);
		var add = pageTwo.querySelector('.add');
		var skill = pageTwo.querySelector('.skill');
		var loading = pageTwo.querySelector('.loading');
		var span = pageTwo.querySelectorAll('.myName>span');
		for(var i = 0 ; i < span.length; i++) {
			span[i].classList.add('show');
		}
		add.classList.add('show');
		skill.classList.add('show');
		loading.classList.add('show');

	}
	hidePage[1] = function() {
		var pageTwo = document.querySelector('#pageTwo');
		backHide(pageTwo);
		var add = pageTwo.querySelector('.add');
		var skill = pageTwo.querySelector('.skill');
		var loading = pageTwo.querySelector('.loading');
		var span = pageTwo.querySelectorAll('.myName>span');
		for(var i = 0 ; i < span.length; i++) {
			span[i].classList.add('show');
		}
		add.classList.remove('show');
		skill.classList.remove('show');
		loading.classList.remove('show');
	}
	showPage[2] = function () {
		var pageThree = document.querySelector('#pageThree');
		backMove(pageThree);
		var add = pageThree.querySelector('.add');
		var skill = pageThree.querySelector('.skill');
		var loading = pageThree.querySelector('.loading');
		var head = pageThree.querySelector('.head');
		add.classList.add('show');
		skill.classList.add('show');
		loading.classList.add('show');
		head.classList.add('show');
	}
	hidePage[2] = function() {
		var pageThree = document.querySelector('#pageThree');
		backHide(pageThree);
		var add = pageThree.querySelector('.add');
		var skill = pageThree.querySelector('.skill');
		var loading = pageThree.querySelector('.loading');
		var head = pageThree.querySelector('.head');
		add.classList.remove('show');
		skill.classList.remove('show');
		loading.classList.remove('show');
		head.classList.remove('show');
	}
	showPage[3] = function () {
		var pageFour = document.querySelector('#pageFour');
		backMove(pageFour);
		var add = pageFour.querySelector('.add');
		var skill = pageFour.querySelector('.skill');
		var loading = pageFour.querySelector('.loading');
		var myPro = pageFour.querySelector('.myPro');
		add.classList.add('show');
		skill.classList.add('show');
		loading.classList.add('show');
		myPro.classList.add('show');
		}
	hidePage[3] = function() {
		var pageFour = document.querySelector('#pageFour');
		backHide(pageFour);
		var add = pageFour.querySelector('.add');
		var skill = pageFour.querySelector('.skill');
		var loading = pageFour.querySelector('.loading');
		var myPro = pageFour.querySelector('.myPro');
		add.classList.remove('show');
		skill.classList.remove('show');
		loading.classList.remove('show');
		myPro.classList.remove('show');
	}
	showPage[4] = function () {
		var pageLast = document.querySelector('#pageLast');
		var scaleImg = pageLast.querySelector('.scaleImg');
		var rotate = scaleImg.querySelectorAll('li');
		var bg = pageLast.querySelector('.bg');
		var cup = pageLast.querySelector('.cup');
		var paper = pageLast.querySelector('.paper');
		var pan = pageLast.querySelector('.pan');
		var bag = pageLast.querySelector('.bag');
		for(var i = 0; i < rotate.length; i++) {
			rotate[i].classList.add('show');
		}
		bg.classList.add('show');
		cup.classList.add('show');
		paper.classList.add('show');
		pan.classList.add('show');
	}
	hidePage[4] = function() {
		var pageLast = document.querySelector('#pageLast');
		var scaleImg = pageLast.querySelector('.scaleImg');
		var rotate = scaleImg.querySelectorAll('li');
		var bg = pageLast.querySelector('.bg');
		var cup = pageLast.querySelector('.cup');
		var paper = pageLast.querySelector('.paper');
		var pan = pageLast.querySelector('.pan');
		for(var i = 0; i < rotate.length; i++) {
			rotate[i].classList.remove('show');
		}
		bg.classList.remove('show');
		cup.classList.remove('show');
		paper.classList.remove('show');
		pan.classList.remove('show');
	}
	function backMove(el) {
		var back = el.querySelector('.back');
		var whiteBg = back.querySelector('.whiteBg');
		var lightWhite = el.querySelector('.lightWhite');
		var titleImg = back.querySelector('.titleImg');
		var shadow = back.querySelector('.shadow');
		var mask = back.querySelector('.mask');
		var resume = back.querySelector('.resume');
		var name = back.querySelector('.name');
		var scale = back.querySelector('.scale');
		whiteBg.classList.add('show');
		lightWhite.classList.add('show');
		titleImg.classList.add('show');
		shadow.classList.add('show');
		mask.classList.add('show');
		resume.classList.add('show');
		name.classList.add('show');
		scale.classList.add('show');
	}
	function backHide(el) {
		var back = el.querySelector('.back');
		var whiteBg = back.querySelector('.whiteBg');
		var lightWhite = el.querySelector('.lightWhite');
		var titleImg = back.querySelector('.titleImg');
		var shadow = back.querySelector('.shadow');
		var mask = back.querySelector('.mask');
		var resume = back.querySelector('.resume');
		var name = back.querySelector('.name');
		var scale = back.querySelector('.scale');
		whiteBg.classList.remove('show');
		lightWhite.classList.remove('show');
		titleImg.classList.remove('show');
		shadow.classList.remove('show');
		mask.classList.remove('show');
		resume.classList.remove('show');
		name.classList.remove('show');
		scale.classList.remove('show');
	}
	touchEvent({
		el:wrap,
		swipeUp:function() {
			var next = now + 1;
			if(next >= pages.length) {
				return;
			}
			pages[next].style.transition = 'top .6s';
			pages[next].style.zIndex = 2;
			pages[next].style.top = 0;
			for(var i = 0;i < titleImg.length; i++) {
				titleImg[i].style.display = 'block';
			}
			setTimeout(function() {
				showPage[next]();
			},800)
			pages[now].style.zIndex = 1;
			back[next].style.display = 'none';
			setTimeout(function() {
				back[next].style.display = 'block';
			},800)
			setTimeout(function(){
				pages[now].style.top = -document.documentElement.clientHeight + 'px';
				hidePage[now]();
				prev = now;
				now = next;
			},800);
		},
		swipeDown:function() {
			var next = now - 1;
			if(next < 0) {
				return;
			}
			pages[next].style.zIndex = 2;
			pages[next].style.transition = 'top .6s';
			pages[next].style.top = 0;
			setTimeout(function() {
				showPage[next]();
			},800)
			pages[now].style.zIndex = 1;
			back[next].style.display = 'none';
			setTimeout(function() {
				back[next].style.display = 'block';
			},800)
			setTimeout(function(){
				pages[now].style.top = document.documentElement.clientHeight + 'px';
				pages[now].style.zIndex = 1;
				hidePage[now]();
				prev = now;
				now = next;

			},800);
		}
	})
	// function hide(){
	// 	if(timer) {
	// 		clearTimeout(timer);
	// 	}
		
	// 	console.log(prev);
	// 	var num = prev;
	// 	var timer = setTimeout(function(){
			
	// 			hidePage[num]();
	// 			show();
	// 	},1000);
	// }
	// function show(){
	// 	showPage[now]();
	// }
}


