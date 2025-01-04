---
title: "DotNetNuke Daily Tip #9 7/18/06 Skin Object Using PortalModuleBase"
author: Chris Hammond
publishDate: 2006-07-18T15:08:00
updateDate: 2024-05-17T23:39:37
tags: [ 'aspnet', 'daily tips', 'DotNetNuke Development', 'general Software Development' ]
excerpt: "Learn how to add a skinobject in DotNetNuke Skins that behaves like a module by inheriting from PortalModuleBase. Easily access TabId with this tip!"
url: /2006/dotnetnuke-daily-tip-9-71806-skin-object-using-portalmodulebase  # Use the generated URL with year
---
<p>After a long haitus over the past few weeks the <a href="https://www.chrishammond.com/tags?tags=daily+tips">dotnetnuke Daily Tips</a> are back!</p>  <p>Sometimes you want to put a skinobject in your DotNetNuke Skins that you need to act like a module. Inheriting from PortalModuleBase instead of SkinObjectBase. SkinObjects though don&#39;t get loaded like regular modules and due to that you may run into issues where you can&#39;t easily access the TabId of the existing page. Here&#39;s how to get that information easily.</p>  <p>Dim objPortalModule As PortalModuleBase = DotNetNuke.UI.Containers.Container.GetPortalModuleBase(Me)<br /> thisTabId&nbsp;= objPortalModule.TabId</p>  <p>Put the above code in your skinobject code and you will now have a PortalModuleBase object that you can use to easily access some of the basic DNN properties you&#39;re used to using from PortalModuleBase.</p>  <p>The above is VB code, any self respecting C# developer should be able to figure out the appropriate C# code. If not, email me and I&#39;ll bill you at my hourly rate ;)</p>  <p><br /> Stay tuned for&nbsp;another <a href="https://www.chrishammond.com/tags?tags=daily+tips">coming tomorrow!</p>  <p>Posted from <a href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a></p> 

