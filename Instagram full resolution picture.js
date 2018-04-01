javascript:
(function(){
    var pics = document.getElementsByTagName("img");
    var url = pics[pics.length -1].src;
    window.open(url);
})();