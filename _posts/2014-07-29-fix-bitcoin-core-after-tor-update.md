---
layout: post
title: "Problem: After Upgrading Tor Browser to v3.6.3 on OS X Mavericks 10.9.4, Bitcoin Core is Unable to Connect to Networks"
category: essais
excerpt: Solution: Update bitcoin.conf.
---
{% include JB/setup %}

If you haven't upgraded to the [latest Tor Browser](https://www.torproject.org/download/download-easy.html.en), you should. 

If you're running OS X Mavericks 10.9.4 like I am, you may find that after upgrading Tor your Bitcoin Core client can no longer establish a connection with a Bitcoin network.

The following fix resolved the issue for me and took less than 5-minutes to implement. Hopefully, it does the same for you (and saves you some time Googling and crawling dated threads). 

## How to repair Bitcoin Core (Bitcoin-Qt)'s network connection

1.  Open Bitcoin-Qt. From its File menu, open Preferences. Select the Network tab.
2.  Check the two available radio boxes: one labeled Map port using UPnP, and one labeled Connect through SOCKS proxy (default proxy)
3.  Set the Proxy IP to your localhost: 127.0.0.1
4.  Set the port to 9051
5.  Choose 5 for your SOCKS Version
6.  Click Okay, and quit Bitcoin-Qt (required for changes to take effect).
7.  Quit TorBrowser
8.  Navigate to "~/library/application support/bitcoin" (need [help with this step](#morehelp)?)) 
9. Open your text editor and create a new file, 'bitcoin.conf', in the /Bitcoin directory. Make sure that the file uses the extension .conf and does not simply have .conf in the filename. 
10. Add the following text to bitcoin.conf and save the file in the current directory (the Bitcoin directory):

> bind=127.0.0.1  
> listen=1  
> upnp=0  
> proxy=127.0.0.1:9150

## Voila!

<hr>

<a id="morehelp"></a>**Navigating for hidden files in Finder (for those that deny the command line)**

Here's a handy way to navigate directories or folders that may be hidden (depending on your configuration) using Finder (instead of the command line, which is optimal):

1. Open a Finder window

2. Press and hold  <span style="font-weight:bold">&#x2318; + &#x21E7; + G</span>. 

3. This will open a 'Go to' prompt that will allow you to enter your desired path. Copy and paste the path used in step 8, then press return.</p>

Also, you should [unhide your files](http://ianlunn.co.uk/articles/quickly-showhide-hidden-files-mac-os-x-mavericks/).


<a href="https://plus.google.com/+VincentBarr0?rel=author"></a>