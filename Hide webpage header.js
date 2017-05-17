//version 1
//hides the first header object in a webpage
//press again to toggle
javascript:
if (typeof aoeuToggle != "number") var aoeuToggle;
(function(){
    var headers=document.getElementsByTagName("header");
    if (aoeuToggle != 1){
        headers[0].style.visibility = "hidden";
        aoeuToggle=1;
    } else{
        headers[0].style.visibility = "initial";
        aoeuToggle=0
    }
})();

//version 2
//hides _all_ header objects in a webpage
//press again to toggle
javascript:
if (typeof aoeuToggle != "object") var aoeuToggle = [];
(function(){
    var headers=document.getElementsByTagName("header");
    var len=headers.length;
    for(var i=0;i<len;i++){
        if (aoeuToggle[i] != 1){
            headers[i].style.visibility = "hidden";
            aoeuToggle[i]=1;
        } else{
            headers[i].style.visibility = "initial";
            aoeuToggle[i]=0;
        }
    }
})();

//version 3 (final)
/*
hides _all_ elements in a webpage with "position:fixed" CSS style
press again to toggle
*/
javascript:
if (typeof aoeuToggle != "number"){
    /* declare global variables for toggle functionality */
    var aoeuToggle;
    var aoeuFloats = [];    
}
(function(){
    if (aoeuToggle != 1){
        /* generate array of floating elements to be hidden */
        (function(){
        var aoeuElems = document.body.getElementsByTagName("*");
        aoeuFloats=[]; /*reset for each toggle on*/
        for (var i=0;i<aoeuElems.length;i++) {
            var positionValue = window.getComputedStyle(aoeuElems[i],null).getPropertyValue("position");
            if ( ["fixed","sticky"].includes(positionValue) ) {
                aoeuFloats[aoeuFloats.length]=aoeuElems[i];
            }
        }
        /*alert(aoeuFloats.length);*/
        })();

        /* hide all floating elements */
        for(var i=0; i<aoeuFloats.length; i++){
            aoeuFloats[i].style.visibility = "hidden";
        }
        aoeuToggle=1;
    } else{
        /* un-hide previously hidden elements */
        for(var i=0; i<aoeuFloats.length; i++){
            aoeuFloats[i].style.visibility = "initial";
        }
        aoeuToggle=0;
    }
})();
