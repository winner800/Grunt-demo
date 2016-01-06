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