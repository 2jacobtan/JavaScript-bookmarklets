/*
Hides _all_ elements in a webpage with "position:fixed" and "position:sticky" CSS style.
Press again to toggle.
"visibility:hidden" can fail (rarely) because https://allyjs.io/tutorials/hiding-elements.html#the-css-properties-display-and-visibility
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
        var aoeuElems = document.body.getElementsByTagName("*");
        aoeuFloats=[]; /*reset for each toggle on*/
        for (var i=0;i<aoeuElems.length;i++) {
            var positionValue = window.getComputedStyle(aoeuElems[i]).getPropertyValue("position");
            if ( ["fixed","sticky"].includes(positionValue) ) {
                aoeuFloats[aoeuFloats.length]=aoeuElems[i]; /*store the relevant element, for toggle purposes*/
                aoeuElems[i].style.visibility = "hidden";   /*then hide it*/
            }
        }
        /*alert(aoeuFloats.length);*/
        aoeuToggle=1;
    } else{
        /* un-hide previously hidden elements */
        for(var i=0; i<aoeuFloats.length; i++){
            aoeuFloats[i].style.visibility = "inherit";
        }
        aoeuToggle=0;
    }
})();
