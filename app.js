$(document).ready(function(){

	var $mainMenuItems = $('#main-menu ul').children("li"),
	totalMainMenuItems = $mainMenuItems.length,
	openedIndex = 2,


	init = function(){
		bindEvents();
		if (validIndex(openedIndex)) {
			animateItem($mainMenuItems.eq(openedIndex), true, 700)
			paragrapheAnimate();
		};
	},
	bindEvents = function(){
		$mainMenuItems.children(".images").click(function(){
			var newIndex = $(this).parent().index();
			checkAndAnimateItem(newIndex);
			paragrapheAnimate(newIndex);
			
			
			
		});
		$('.button').hover(
			function(){
				$(this).addClass('hovered');
			},
			function(){
				$(this).removeClass('hovered');
			});

		$('.button').click(function(){
			var newIndex = $(this).index();
			checkAndAnimateItem(newIndex);
			paragrapheAnimate(newIndex);
		});
	},

	validIndex = function(indexToCheck){
		return (indexToCheck >= 0) && (indexToCheck < totalMainMenuItems);

	},

	animateItem = function($item, toOpen, speed){
		var $colorImage = $item.find(".color"),
		itemParam = toOpen ? {width: '420px'}: {width: '140px'},
		colorImageParam = toOpen ? {left: '0px'}:{left:'140px'};
		$colorImage.animate(colorImageParam,speed);
		$item.animate(itemParam,speed);

	},

	checkAndAnimateItem = function(indexTocheckAndAnimate){
		if (openedIndex === indexTocheckAndAnimate) {
			animateItem($mainMenuItems.eq(indexTocheckAndAnimate), false, 250);
			openedIndex = -1;

		}else{
			if (validIndex(indexTocheckAndAnimate)) {
				animateItem($mainMenuItems.eq(openedIndex), false, 250);
				openedIndex = indexTocheckAndAnimate;
				animateItem($mainMenuItems.eq(openedIndex), true, 250);
			}

		}

	},
	paragrapheAnimate = function () {
		$('p').hide();
		$(".p1").fadeIn(1000)
		$('.p2').fadeIn(2000)
		$('.p3').fadeIn(3000)


	};


	init();


});