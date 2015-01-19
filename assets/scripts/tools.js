
function vidToMP3() { 
	var vidFull = document.getElementById("vidURL").value;
	var vidSplit = vidFull.split(":");
	var vidTrim = vidSplit[vidSplit.length -1];
	var ripURL = "http://youtubeinmp3.com/fetch/?video=http:" + vidTrim;
	var mp3Ready = document.getElementById("mp3URL");
	mp3Ready.setAttribute('href',ripURL);
	document.getElementById("mp3URL").style.display = "block";
	alert('Your video is ready, AF. Click the \'Download MP3\' link below.');
	document.getElementById("happybday").style.display = "block";
} 

function clearContents(element) {
  element.value = '';
}

