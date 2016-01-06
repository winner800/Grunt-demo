var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_5557773'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s14.cnzz.com/stat.php%3Fid%3D5557773' type='text/javascript'%3E%3C/script%3E"));
if(document.getElementById('cnzz_stat_icon_5557773')){document.getElementById('cnzz_stat_icon_5557773').style.display='none';}

window.onload = function()
{
	var scrolltop= document.documentElement.scrollTop||document.body.scrollTop;
	var clientH = document.documentElement.clientHeight || document.body.clientHeight;
	//网站地图
	var oNav = document.createElement('div');
	oNav.id = 'commonnav';
	//oNav.style.position = 'absolute';
	//oNav.style.margin = '0 auto';
	oNav.innerHTML = '<a href="/huimai">huimi</a> | <a href="/xianbing">xianbing</a> | <a href="/17ugologin">17ugologin</a><br/>mobile web:<br/> <a href="/html5">JQ Moblie demo</a><br /><a href="/loginapp">loginApp</a><br /><a href="/ipad">ipad</a> | <a href="/phone">phone</a> | <a href="/shopjs">shopjs</a> | <a href="/taobao">taobaojs</a> | <a href="/tieba">tieba</a> | <a href="/yougou">yougou</a> | <a href="/momo">momo</a>';
	document.body.appendChild(oNav);
	oNav.style.top = (scrolltop+clientH-oNav.offsetHeight)+'px';
	//oNav.style.marginLeft = - oNav.offsetWidth/2 +'px';
	window.onresize = window.onscroll = function()
	{
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		
		//oDiv.style.top=scrollTop+(document.documentElement.clientHeight-oDiv.offsetHeight)/2+'px';
		var t=scrollTop+(document.documentElement.clientHeight-oNav.offsetHeight)/2;
		oNav.style.top = t+'px';
	}
	
	
}
