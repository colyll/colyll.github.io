function b() {
	h = $(window).height(),
	t = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop,
	t > '400' ? $("#go-top").show() : $("#go-top").hide(300);
	if(t > '340'){
		var startY;
		function touchStart(e) {
			var touches = e.changedTouches,
				l = touches.length, touch;
			if(l=1){
				touch = touches[0];
				startY = touch.pageY;
			}
		}
		
		function touchMove(e) {
			var touches = e.targetTouches,
				l = touches.length, touch;
			if(l=1){
				touch = touches[0];
				var y = touch.pageY - startY;
				if(y>10){
					$("#head").addClass("on");
					setTimeout('$("#head").removeClass("on");',3000);
				}else if(y<-10){ 
					$("#head").removeClass("on");
				}
			}
		}
	}else{ 
			$("#head").removeClass("on");
		}
/*注册事件*/ 
document.addEventListener("touchstart", touchStart, false);
document.addEventListener("touchmove", touchMove, false);

}
$(document).ready(function() {
	b(),
	$("#go-top").click(function() {
		$("html,body").animate({
			scrollTop: 0
 			}, 300);
	})
}),
$(window).scroll(function() {
	b()
});


function GetCookie(c_name)
{
    if (document.cookie.length > 0)
    {
        c_start = document.cookie.indexOf(c_name + "=")
        if (c_start != -1)
        {
            c_start = c_start + c_name.length + 1;
            c_end   = document.cookie.indexOf(";",c_start);
            if (c_end == -1)
            {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}

function SetCookie(c_name,value,expiredays)
{
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" +escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString()+";path=/");
}

function SetCookieStr(c_name, value, expiredays){  
    var cookie = GetCookie(c_name);
		if(!cookie){cookie+="|";}
		cookie = cookie+value+"|";
    SetCookie(c_name, cookie, expiredays);
}  
