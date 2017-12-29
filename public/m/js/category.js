$(function () {

	getLeftAjax()
	getRightAjax(1)
	leftClick()
	scroll()

	
})

function scroll() {
	mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
	});
}

function leftClick() {
	$('.left-category').on('click', 'li a', function(e) {
		var id = $(this).data("id");
		getRightAjax(id)
		$(this).parent().addClass('active').siblings().removeClass('active')
	});
}

function getRightAjax(id) {
	$.ajax({
		url:"/category/querySecondCategory",
		data:{
			'id':id,
		},
		success:function (backData) {
			console.log(backData);
			var html = template("rightContent",backData);
			$('.right-category .mui-row').html(html);
			
		
		}
	})
}


function getLeftAjax() {
	$.ajax({
		url:"/category/queryTopCategory",
		success:function (backData) {
			console.log(backData);
			var html = template("leftNav",backData);
			$('.left-nav').html(html);
			$('.left-nav li:eq(0)').addClass('active');
		}
	})
}