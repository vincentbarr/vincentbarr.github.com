---
layout: post
title: "How to Export Your Wishlist from Amazon.com"
alias: /essais/2016-03-12-export-amazon-wishlist-excel  
excerpt: How-to export your wish list from Amazon.com to Excel for backup and editing.  
comments: true
---

Today, I accidentally deleted my wishlist from Amazon.com.  

Born on April 23, 2010, my reading list disguised as a wishlist grew to 931 unread books. A few recommendations came from friends and coworkers, but the large majority were a byproduct of late nights spent scouring the corners of the Internet. 

Fortunately, Amazon's customer support team was able to reverse my damage almost immediately. 

At this point, I realized _I_ should own this data, not Amazon. Doing so would provide me with a backup of my reading list and the ability to sort, edit and prioritize my list quickly and easily. 

I saw three options:  
1. Export my wish list as a PDF  
2. (1), then copy and paste the PDF into Excel as text
3.  Use a Web Query to import my wish list directly from Amazon.com to Excel

I chose (3), for (1) didn't meet my requirement to sort the list as desired and (2) required more steps (and memory usage) than (3).

Here's how to do it. 

### How to import your wish list from Amazon.com to Excel using a Web Query  

Open your browser.  
0. From Amazon.com, navigate to 'Your Lists'  
1. Click the printer icon  
2. Copy the URL from the address bar  

Now, we will create a 'Saved Query' that Excel will run to pull-in the data. The example sets the minimum number of options for the sake of simplicity and our simple use-case.  

3. Open a text editor  
4. Write the query as follows  

<code>  
WEB 
1  
[http://www.amazon.com/gp/registry/wishlist/2YI7WESZHILRW?ie=UTF8&disableNav=1&layout=standard-print]  

Selection=EntirePage  
</code>  

Here's an explanation of the query:    
Line 1: Query Type. Since this is a web query, we set this to Web.   

Line 2: Query version. Since we only have one version, we set this to 1.  

Line 3: URL (Uniform Resource Locator). Excel will run your query against this file.  

Lines 5 and beyond: Custom Parameters. Configure settings such as what data you would like to select for retrieval, data type, formatting, and so on.  

5. Save the file as wishlistQuery.txt  
6. Switch to Excel  
7. ⌘ + ⇧ + / to open the search prompt for Excel's Menu Bar  
8. Type and select 'Run Saved Query'  
9. Select and open wishlistQuery.txt  
10. Choose your desired range  

![Amazon Wishlist in Excel XLSX format](/assets/images/amazon-wishlist-export-excel.png)    
