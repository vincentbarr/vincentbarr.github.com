---
layout: post
title: "How to Export Your Wishlist from Amazon.com"
alias: /essais/2016-03-12-export-amazon-wishlist-excel  
excerpt: How-to export your wish list from Amazon.com to Excel for backup and editing.  
comments: true
---

Today, I accidentally deleted my wishlist on Amazon.com.  

Born on April 23, 2010, my list grew to include 931 unread books that I liked to believe I would eventually read. A handful of recommendations came from friends and old coworkers, and the majority from the corners of the Internet.

Fortunately, I realized my mistake immediately and contacted Support who was able to immediately revive my list.  

At this point, I realized, 'I should own this data' both for the purposes of backup and redundancy, and also for sorting, editing, and manipulating my list so that I may prioritize and, you know, actually have a grasp of what's on my reading list.  

There are a number of ways to go about this, and I chose to describe the three listed below. I recommend option 3, wherein you pull your list data into Excel using a Web Query. 

## Option 1: Export your wish list as a PDF  

This is the quickest option.

Steps:  
0. From Amazon.com, navigate to 'Your Lists'  
1. Click the printer icon  
2. ⌘ + P to print
3. Set the Destination setting to 'Save as PDF'  
4. Save  

## Option 2: Import your wish list from PDF format to text Excel

This requires completing Option 1. 

Importing to Excel provides the benefit of being able to sort, filter, and manipulate your reading list. 

0. Open the local copy of your Wish List in PDF format  
1. ⌘ + A to select all content  
2. ⌘ + C to copy to clipboard  
3. Switch to Excel  
3. ⌘ + ^ + V to Paste Special  
4. Select Text   

You now have the data in Excel, though you'll likely want to clean and format it according to your needs.  

## Option 3: Import your list directly from Amazon to Excel using a Web Query  

This is my preferred option for it requires fewer steps than Option 2, avoids the memory consumption of a large copy and paste job, and accomplishes my goal of wishlist backup and manipulation.  

0. From Amazon.com, navigate to 'Your Lists'  
1. Click the printer icon  
2. Copy the URL from the address bar  

Now, we will create a 'Saved Query' that Excel will run to pull-in the data. The example sets the minimum number of options for the sake of simplicity and our simple use-case.  

3. Open a text editor  
4. Write the query as follows  

<pre><code>  
WEB 
1  
[http://www.amazon.com/gp/registry/wishlist/2YI7WESZHILRW?ie=UTF8&disableNav=1&layout=standard-print]  

Selection=EntirePage  
</pre></code>  

Explanation: 
Line 1. Query type  
Since this is a web query, we set this to Web.  
Line 2. Query version  
Since we only have one version, we set this to 1.  
Line 3. URL (Uniform Resource Locator)  
Excel will run your query against this file.  
Lines 5 and up. Parameters.  
Set a range of options, including what data you would like to select for retrieval, data type, formatting, and so on.  

5. Save the file as wishlistQuery.txt  
6. Switch to Excel  
7. ⌘ + ⇧ + / to open the search prompt for Excel's Menu Bar  
8. Type and select 'Run Saved Query'  
9. Select and open wishlistQuery.txt  
10. Choose your desired range  

![Amazon Wishlist in Excel .XLSX format](https://www.vincentbarr.com/assets/images/amazon-wishlist-export-excel.png)  
