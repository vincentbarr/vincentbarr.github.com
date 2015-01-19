---
layout: post
title: "AF's MP3 Downloader"
category: essais
excerpt: 2014-08-05 - TBD
---
{% include JB/setup %}

<form>

<textarea id="vidURL" name="videoURL" rows="1" cols="120" onfocus="clearContents(this)">Enter the full YouTube URL here.
</textarea>
<button onClick="vidToMP3(); return false">Fetch MP3</button>
</form>
<br>
<a style="font-size:36px; text-align:center; display: none;" id="mp3URL" href="http://">Download MP3 :p</a>
<br>
<img id="happybday" style="display:none" src="/assets/images/bday.jpg" />

<br><br>

<h3>Getting Started</h3>

Let's walk through an example together.  

Imagine you want to download 'Get Down On It' by Kool & The Gang. This is what you would do:

Go to [Youtube.com](http://www.youtube.com), then type 'kool and the gang get down on it' in the search bar. You'll see a list of results. For this example, click the **4th result**.  It will be titled 'Kool & The Gang - Get Down On It' and the image will show a band with a guy in a red suit. It's important that you click this result for the example.  

Then, follow the steps below:  

1. Copy the URL from the address bar.  

3. Paste the URL into the text area above labeled 'Enter the full YouTube URL here.'

4. Click the 'Fetch MP3' button (this does the magic). 

5. Click the 'Download MP3' link. A download *should* start automatically. 

6. Enjoy :-)  