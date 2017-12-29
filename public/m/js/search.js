$(function () {
	printHistory() 
	getSearchData()
	deletHistory()
	clearAll()
	

	$('.mui-table-view').on('click', function(e) {
		
		console.log(e.target)
	});
	
})


function getSearchData() {
	// var search = $('.search-submit');
	
	printHistory()
	$('.search-box').on('click','.search-submit', function() {
		
		var searchData = $('.search-box-content').val();
		// console.log(searchVal)
		if(searchData){
			var history = localStorage.getItem('history');
			if(history){
				//将数组转换成json格式字符串
				var historyArr = JSON.parse(history);
				
			}else{
				var historyArr = [];
			}

			if(historyArr.indexOf(searchData) == -1){
				historyArr.push(searchData);
				var historyNew = JSON.stringify(historyArr)

				localStorage.setItem('history',historyNew);
			}

			
			// var history = localStorage.getItem('history');
			// console.log(typeof(history))//都是string类型

			// console.log(history);
			// getHistory();
			printHistory()
		}else{
			alert("请输入内容")

		}

		$('.search-box-content').val("")
			
		
	})
}
	


function printHistory() {
	var history = localStorage.getItem('history');

	if(history){
		//将数组转换成json格式字符串
		var history = JSON.parse(history);
		
	}else{
		var history = [];
	}

	history = history.reverse();
	

	

	var html = template('historyData',{
		'rows':history,
	})
	$('.mui-table-view').html(html)

}

function deletHistory() {

	$('.mui-table-view').on('click','.btn-delete',function() {

		var value = $(this).parent().data('val');
		

		var history = localStorage.getItem('history');

		history = JSON.parse(history);
		var index = history.indexOf(value+"");
		history.splice(index,1);
		
		var history = JSON.stringify(history)
		localStorage.setItem('history',history);

		printHistory();
	});
}
	

function clearAll() {
	$('.fa-trash').on('click', function() {
		
		localStorage.setItem('history',"");
		printHistory();
		
	});
}	
		

