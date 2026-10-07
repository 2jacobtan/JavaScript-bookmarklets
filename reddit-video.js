javascript:(function(){
const el = document.querySelector("shreddit-player").getAttribute("packaged-media-json");
const json = JSON.parse(el);
vids = json.playbackMp4s.permutations;
vid = vids.at(-1);
url = vid.source.url;
/*alert(url);*/
window.open(url, '_blank');
})();
