---
title: "Visual Studio 2017 hangs on opening Project/Solution with \"Opening the files\""
author: weblogs.asp.net
publishDate: 2017-02-20T23:40:12
updateDate: 2017-02-20T23:40:13
tags: []
excerpt: "Having trouble with Visual Studio 2017 hanging while opening a Solution? Learn how deleting the .vs folder contents can resolve the issue quickly."
url: /2017/visual-studio-2017-hangs-on-opening-projectsolution-with-opening-the-files  # Use the generated URL with year
---
<p>I ran into a problem this evening with Visual Studio 2017 hanging when opening my Solution that I'm working on for my <a href="https://github.com/chrishammond/DnnTemplates">DNNTemplates VSIX</a> project. It would open up solution explorer, it would also open up the TABS in visual studio, but it wouldn’t complete the process and would hang on “Opening the files”.</p><p>Basically every time I opened the solution, no matter what I tried, rebooting, deleting the .SUO file, deleting the .USER files, nothing would seem to work. I would let Visual Studio site for hours, and it would never complete the opening process.</p><p>Finally I went in and deleted the contents of the .VS folder, after deleting this contents the solution can successfully be opened. </p><p>So if you run into problems with “Opening the files”, try deleting the contents of the .vs folder in your solution directory, hopefully that will help you.</p><p>If anyone from the Visual Studio team wants to reach out to me on this, I have perfview files and files collected from collect.exe as I was trying to troubleshoot the issue.</p> <a href="https://weblogs.asp.net:80/christoc/visual-studio-2017-hangs-on-opening-project-solution-with-opening-the-files">Read More at weblogs.asp.net:80</a>

