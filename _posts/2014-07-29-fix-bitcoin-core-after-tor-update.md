---
layout: post
title: "How-to Restore Bitcoin Core Network Connection on Tor v3.6.3, OS X Mavericks 10.9.4"
alias: /essais/2014-07-29-fix-bitcoin-core-after-tor-update/
excerpt: "Solution: Update bitcoin.conf."
comments: true
---

If you haven't upgraded to the [latest Tor Browser](https://www.torproject.org/download/download-easy.html.en), you should. 

If you're running OS X Mavericks 10.9.4, you may find that after upgrading Tor your Bitcoin Core client you can no longer connect to a Bitcoin network.

To fix the issue, I took the steps listed below, which take about 5-minutes to complete. Hopefully, this saves you some time crawling threads with many questions, no answers, and greedy pagination. 

## Steps to repair Bitcoin Core (Bitcoin-Qt)'s network connection

1.  Open Bitcoin-Qt. From the File menu, open Preferences and select the Network tab.

2.  Check the two available radio boxes: one labeled Map port using UPnP, and one labeled Connect through SOCKS proxy (default proxy)

3.  Set the Proxy IP to your localhost: 127.0.0.1

4.  Set the port to 9051

5.  Choose 5 for your SOCKS Version

6.  Click Okay, and quit Bitcoin-Qt (required for changes to take effect).

7.  Quit TorBrowser

8.  Navigate to "~/library/application support/bitcoin" ([read steps below for quick way to navigate to hidden files in Finder](#morehelp)?)

9. Open your text editor and create a new file, 'bitcoin.conf', in the /Bitcoin directory. Make sure that the file uses the extension .conf and does not simply have .conf in the filename. 

10. Add the following text to bitcoin.conf and save the file in the current directory (the Bitcoin directory):

> bind=127.0.0.1  
> listen=1  
> upnp=0  
> proxy=127.0.0.1:9150

Voila!

<hr>

<a id="morehelp"></a><h3>Navigating for hidden files in Finder</h3>

First, I prefer using the CLI over Finder.

That said if you're using Finder and its default configuration, follow these steps to quickly jump to hidden folders.

1. Open a Finder window

2. Press and hold  <span style="font-weight:bold">&#x2318; + &#x21E7; + G</span>. 

3. This will open a 'Go to' prompt that will allow you to enter your desired path. Copy and paste the path used in step 8, then press return.</p>

Also, you should [unhide your files](http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/).

<a href="https://plus.google.com/+VincentBarr0?rel=author"></a>