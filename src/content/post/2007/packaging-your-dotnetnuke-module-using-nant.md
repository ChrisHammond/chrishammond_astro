---
title: "Packaging your DotNetNuke Module using NANT"
author: Chris Hammond
publishDate: 2007-07-10T17:07:00
updateDate: 2008-01-23T16:51:08
tags: [ 'aspnet', 'C', 'daily tips', 'DotNetNuke', 'DotNetNuke Tips', 'Engage', 'Module Development', 'NANT', 'VBNet' ]
excerpt: "Learn how to use NANT scripts to streamline packaging DotNetNuke Modules with ease. Save time by creating ZIP files with a single command."
url: /2007/packaging-your-dotnetnuke-module-using-nant  # Use the generated URL with year
---
<P>A few years back I was enlightened by <A href="https://www.dotnetnuke.com/Community/Blogs/tabid/825/BlogID/9/Default.aspx" target=_blank mce_href="https://www.dotnetnuke.com/Community/Blogs/tabid/825/BlogID/9/Default.aspx">Chris Paterra</A> in the ways of using NANT scripts to aid in the packaging of DotNetNuke Modules. Using NANT to package your WAP&nbsp;(web application project) modules within Visual Studio 2005 is a snap, and can save you&nbsp;a LOT of time each time you have to come up with a new release. </P> <P>Using NANT scripts we are able to create the Private Assembly Installation ZIP file and Source files for <A href="https://www.engagemodules.com/Modules/EngagePublish/tabid/61/Default.aspx" target=_blank mce_href="https://www.engagemodules.com/Modules/EngagePublish/tabid/61/Default.aspx">Engage: Publish</A> by running a single command from the Command line. With our Publish module this process takes about 23 seconds on average, for our smaller modules such as <A href="https://www.engagemodules.com/Modules/EngageF3/tabid/64/Default.aspx" target=_blank mce_href="https://www.engagemodules.com/Modules/EngageF3/tabid/64/Default.aspx">Engage: F3</A> the process takes less than 2-3 seconds.</P> <P>To get started with using NANT scripts in your own development environment you need to download the latest (0.85) release from SourceForge, you can visit the project page at <A title=https://sourceforge.net/projects/nant/ href="https://sourceforge.net/projects/nant/" mce_href="https://sourceforge.net/projects/nant/">https://sourceforge.net/projects/nant/</A></P> <P>Once you've installed NANT on your machine (I install it on my C drive in a c:\nant\ folder) you'll need to add NANT to your system variables path so you can call it from the command line. </P> <P>To do this:</P> <P>Right click on My Computer and choose Properties</P> <P>Go to the Advanced Tab</P> <P>Find the System Variables section and Modify the Path variable</P> <P>Add your NANT folder (c:\nant\) to the path, separating entries with the semicolon (;)</P> <P>Save the settings.</P> <P>Now I'd recommend adding a .BUILD file to your DNN Module's project/solution. I've provided a sample build file on our <A href="https://www.engagemodules.com/Support/Tutorials/tabid/74/Default.aspx" target=_blank mce_href="https://www.engagemodules.com/Support/Tutorials/tabid/74/Default.aspx">Tutorial Page</A> at <A href="https://www.engagemodules.com/" mce_href="https://www.engagemodules.com">www.engagemodules.com</A>, you do have to login in order to access the file. The provided sample file is a good start for your project, by opening up the file in VS2k5 you'll see it is a XML document with some basic information about the product name and folder location.</P> <P>You'll want to find the references to Engage and EngageF3 in the BUILD file and replace them with the name of your module and business name. You can also play around with the include/exclude options in the Fileset node to add or remove certain types of files from your packages. You'll see the two sections in the build file that define which ZIP files to create, one section is called CreateBinZip and one is called CreateSrcZip.</P> <P>Once you have the BUILD file setup you'll want to check a few more files in your DNN project.</P> <P>In the .DNN File be sure to set your module version properly and include the SQLDATAPROVIDER files, as well as the necessary DLLs. In the AssemblyInfo.vb (.cs in our case. At Engage as we do 95% of our DNN module development in C#) be sure to setup your DLL information and version information. By setting the version number in the assemblyinfo and .dnn file you can get NANT to include the version number in the package's file name, allowing an easy way to handle upgrades from version to version for your modules.</P> <P>Once you have all of the files in the solution setup properly you can run the NANT script. To do that bring up a Command Prompt, change directories to your DNN/desktopmodules/ModuleName/ folder. At the command line type "nant" and watch the magic happen.</P> <P>If everything builds properly the script will create a Package folder in your Module's folder, inside of the Package folder you should find two newly created ZIP files, one labeled Install and one labeled Source.</P> <P mce_keep="true">&nbsp;</P> <DIV class=wlWriterSmartContent id=0767317B-992E-4b12-91E0-4F059A8CECA8:4aa565d4-db89-452d-86b3-b546b70b9c41 contentEditable=false style="PADDING-RIGHT: 0px; DISPLAY: inline; PADDING-LEFT: 0px; PADDING-BOTTOM: 0px; MARGIN: 0px; PADDING-TOP: 0px">Technorati Tags: <A href="https://technorati.com/tags/ASP.NET" rel=tag mce_href="https://technorati.com/tags/ASP.NET">ASP.NET</A>, <A href="https://technorati.com/tags/DotNetNuke" rel=tag mce_href="https://technorati.com/tags/DotNetNuke">DotNetNuke</A>, <A href="https://technorati.com/tags/DotNetNuke%20Tips" rel=tag mce_href="https://technorati.com/tags/DotNetNuke%20Tips">DotNetNuke Tips</A>, <A href="https://technorati.com/tags/Daily%20Tips" rel=tag mce_href="https://technorati.com/tags/Daily%20Tips">Daily Tips</A>, <A href="https://technorati.com/tags/NANT" rel=tag mce_href="https://technorati.com/tags/NANT">NANT</A>, <A href="https://technorati.com/tags/C#" rel=tag mce_href="https://technorati.com/tags/C#">C#</A>, <A href="https://technorati.com/tags/VB.Net" rel=tag mce_href="https://technorati.com/tags/VB.Net">VB.Net</A>, <A href="https://technorati.com/tags/Module%20Development" rel=tag mce_href="https://technorati.com/tags/Module%20Development">Module Development</A>, <A href="https://technorati.com/tags/Engage" rel=tag mce_href="https://technorati.com/tags/Engage">Engage</A></DIV> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>


