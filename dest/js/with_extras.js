/*!  2016-01-05  02:25:37 PM */
var $wowReg1 = $wowReg2 = /http:\/\/.+\/info\/([a-z_0-9]+)\/([a-z_0-9]+)/;	//match
var $wowTipsLoaded = false;
var $wowbaseURL = HS_BASE_URL+'/';
var $ajaxtipsURL = $wowbaseURL+'index/tips';
var $wowPageCharset = "gb2312";
var $wowLinkTarget = "";

if (document.all) {
	window.attachEvent('onload', WowLoad);
}
else {
	window.addEventListener('load', WowLoad, false);
}


function WowLoad(){
    if (!!document.getElementById('WowTipInfoLayers')){
        document.getElementById('WowTipInfoLayers').remove();
    }
	var AK=document.createElement("div");
	AK.id="WowTipInfoLayers";
	document.body.appendChild(AK);
	var A = document.body.getElementsByTagName("A");
	for(i=0;i<A.length;i++){
		var hrefval = A[i].href;
		var tipval = A[i].getAttribute('tipurl');
		if ($wowReg1.test(hrefval)){
			var P = getitemid(hrefval);
			WowAA(A[i],"target",$wowLinkTarget);
			Wowattaching(A[i],P[0],P[1],P[2]);
		}else if(tipval!=undefined){
			if($wowReg1.test(tipval)){
				var P = getitemid(tipval);
				Wowattaching(A[i],P[0],P[1],P[2]);
			}
		}
	}
	
	//var re = /<meta.*charset=([^"]+).*?>/i;
	var charset=document.characterSet?document.characterSet:document.charset;
	if (charset&&charset!=""){
	    $wowPageCharset = charset;
	}
}
function Wowcc(layerid,s){
	var obj = document.getElementById(layerid);
	if (obj){
		//
	}
	else{
		var AK=document.createElement("div");
		AK.id=layerid;
		AK.style.display="none";
		AK.innerHTML=s; 
		document.body.appendChild(AK);
		$wowTipsLoaded = true;
		Tooltip.tooltipTd.innerHTML=s;
	}
}
function WoWoAE(obj,eventname,func){
	if(window.attachEvent){
		obj.attachEvent("on"+eventname,func)
	}
	else{
		obj.addEventListener(eventname,func,false)
	}
}
function Wowattaching(element,id,t,l){

	//检测平台
	var p = navigator.platform;
	var system_win = p.indexOf("Win") == 0;
	var system_mac = p.indexOf("Mac") == 0;
	var system_x11 = (p == "X11") || (p.indexOf("Linux") == 0);
	if(system_win||system_mac||system_xll){
	
		WoWoAE(element,"mouseover",function(event){WowKL(event,id,t,l)});
		WoWoAE(element,"mousemove",function(event){WowKU(event,id,t,l)});
		WoWoAE(element,"mouseout",function(event){Tooltip.hide();$wowTipsLoaded=false;});
	
	}
}   
function WowKL(event,id,t,l){
	//event= window.event?window.event:arguments[0];
	if (ItemContainerNotExists(id,t,l)&&$wowTipsLoaded==false){
		var AK=document.createElement("script");
		AK.type = "text/javascript";
		AK.src = $ajaxtipsURL+"/c/"+$wowPageCharset+"/t/"+t+"/l/"+l+"/id/"+id+"?ver=201312131057";	//a call
		document.getElementsByTagName("head")[0].appendChild(AK);	//add head
	}
	Tooltip.showAtCursor(event,loadItemInfo(id,t,l),0,0,'');
}
function WowKU(event,id,t,l){
	if (ItemContainerNotExists(id,t,l)==false&&$wowTipsLoaded){
		Tooltip.cursorUpdate(event);
	}
	else{
		Tooltip.showAtCursor(event,loadItemInfo(id,t,l),0,0,'');
	}
}
function ItemContainerNotExists(id,itemtype,language){
	var obj = document.getElementById(itemtype+language+id+"c");
	if (obj){
		return false;
	}
	else{
		return true;
	}
}
function loadItemInfo(id,itemtype,language){
	var obj = document.getElementById(itemtype+language+id+"c");
	//alert(obj);
	if (obj){
		$wowTipsLoaded = true;
		return obj.innerHTML;
	}
	else{
		$wowTipsLoaded = false;
		return '<div class="box-layer"><div class="panel" style="margin:0;padding:5px;width:60px;color:#aaaaaa">Loading...</div></div>';
	}
}
function WowAA(e,n,v){
	var aa = document.createAttribute(n);
	aa.value = v;
	e.setAttributeNode(aa);
}
function getitemid(s){//http://www.wowdb.cn/item-34332.html
	if ($wowReg1.test(s)){
		L = s.match($wowReg1);
		if (L[1]&&L[2]){
			return [L[2],L[1],"zhCN"];
		}
		else{
			return [-1,"",""];
		}
	}
	else if ($wowReg2.test(s)){
		L = s.match($wowReg2);
		if (L[1]&&L[2]){
			return [L[2],L[1],"zhCN"];
		}
		else{
			return [-1,"",""];
		}
	}
	else{
		return [-1,"",""];
	}
}
function clang(s){
	s = s.toLowerCase();
	switch(s) 
   {
    case "en":
	case "enus":
	case "engb":
        return "enUS";
        break;
    case "cn":
	case "zhcn":
        return "zhCN";
        break;
    case "tw":
	case "zhtw":
        return "zhTW";
        break;
    case "kr":
    case "kokr":
        return "koKR";
        break;
    default:
        return "zhCN";
        break;
    }
}
function registerScripts(){
	var Q=document.getElementsByTagName("head")[0];
	var AK=document.createElement("link");	
	AK.type = "text/css";
	AK.href = $wowbaseURL+"css/tips_out.css?version=201312131059";
	AK.rel = "stylesheet";
	Q.appendChild(AK);	
	AK=document.createElement("script");	
	AK.type = "text/javascript";
	AK.src = $wowbaseURL+"js/global_out.js"
	Q.appendChild(AK);
}
registerScripts();
// 手机平板等移动端适配跳转URL
if(/AppleWebKit.*mobile/i.test(navigator.userAgent) || (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
    if(window.location.href.indexOf("?mobile")<0){
        try{
            if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
                window.location.href="mobile.html";
            }else if(/iPad/i.test(navigator.userAgent)){
                window.location.href="pad.html";
            }else{
                window.location.href="mweb.html"
            }
        }catch(e){}
    }
}