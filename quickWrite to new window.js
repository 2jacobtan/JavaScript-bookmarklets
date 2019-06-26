javascript:(function(){
	/* alert("1"); */
	if ((typeof aoeuWindow == "undefined")||aoeuWindow.closed) aoeuWindow=window.open();
	aoeuWindow.document.write(""+%s+"<br/>");
})();
