function tocheck(){
		alert("检查用户是否填写了收货地址");
		//alert("userid:"+getCookie("id"));
		var userid = getCookie("id");
		$.ajax({
			//通过用户id,检查用户是否填写了收货地址
			url:path+"/checkaccept.do",
			data:{"userId":userid},
			type:"post",
			dataType:"json",
			success:function(result){
				alert("通过用户id检查收货地址完毕!");
				var user_accept=result.data;
				console.log(result.data);
				if(user_accept==null){
					alert("请填写收货地址!");
					window.location.href="accept.html";
				}else{
					alert("收货地址已经填写,暂不可填写多个收货地址....确定修改收货地址?");
					
					window.location.href="modifyaccept.html";
					
					
					
				}
				
				
			},
			error:function(){
				alert("通过用户id检查收货地址失败！");
			}
			

		});
		
		
	}