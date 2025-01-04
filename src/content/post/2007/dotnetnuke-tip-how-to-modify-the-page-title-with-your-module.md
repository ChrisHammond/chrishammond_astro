---
title: "DotNetNuke Tip: How to modify the page title with your module"
author: Chris Hammond
publishDate: 2007-10-04T11:34:00
updateDate: 2008-01-23T16:51:09
tags: [ 'aspnet', 'DotNetNuke', 'OpenForce07' ]
excerpt: "Learn how to easily change the page title in your modules with this simple C# trick. Customize titles based on admin preferences with this code snippet!"
url: /2007/dotnetnuke-tip-how-to-modify-the-page-title-with-your-module  # Use the generated URL with year
---
<P mce_keep="true">This is actually a very simple trick to do inside of your modules, though you might need to setup an option to allow this to be turned on or off depending on what the site administrator wants the page title to be.</P> <P mce_keep="true">In C# you can use the following code</P> <P mce_keep="true">DotNetNuke.Framework.CDefault tp = (DotNetNuke.Framework.CDefault)this.Page;<BR><BR>tp.Title = "This is my page title";</P> <P mce_keep="true">So the next time you're coding a module and need to change the page title, it's that simple.</P> <P mce_keep="true"><A class="" href="https://www.openforce07.com/" mce_href="https://www.openforce07.com">See you all at OpenForce07 in Vegas</A>!<BR></P> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>

