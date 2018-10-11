
	NProgress.start();

	NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	
     //检测后台管理员是否登录 
    $.ajax({
        url: '/api/employee/checkRootLogin',
        type: 'get',           
        success: function (info) {
            console.log(info);
            if (info.error) {
                location.href = './login.html';
            }

        }
    });
