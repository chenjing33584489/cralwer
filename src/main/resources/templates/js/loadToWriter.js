
function loadToWriter(){
	var userCode=getCookie("code")
	var userId=getCookie("id");
	var goodId=getCookie("good_id");
	//此时需要通过用户id和商品id到数据库中找出用户名和商品名
	if(goodId!=null){
		$.ajax({
			url:path+"/loadGoodById.do",
			data:{"id":goodId},
			type:"post",
			dataType:"json",
			success:function(result){
				if(result.state==0){
					var goodname  = result.data.good_name;
					$("#writeuser").text("用户:"+userCode+",您好!");
					$("#writegood").text("欢迎评论:"+goodname);
				}
			},
			error:function(){
				alert("根据商品id查找商品信息失败!");	
			}
		});
	}
	
}