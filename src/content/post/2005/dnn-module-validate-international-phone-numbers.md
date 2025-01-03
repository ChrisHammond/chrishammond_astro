---
title: "Dnn Module Validate International Phone Numbers"
author: Chris Hammond
publishDate: 2005-08-31T08:39:00
updateDate: 2008-01-23T16:50:54
tags: [ 'Development', 'DotNetNuke', 'SEO', 'Technology' ]
excerpt: "Working on a customized version of the registration pages for dotnetnuke I needed a good regular expression to validate international phone numbers. I ended up adding this line to my &#8220;register.aspx&#8221; page.  &nbsp;&nbsp;&nbsp;&lt;asp:regularexpressionvalidator id=\"valTelephone2\" runat=\"server\" cssclass=\"NormalRed\" display=\"Dynamic\" errormessage=\"&lt;br&gt;Office Phone Must be Valid.\"&nbsp;&nbsp;&nbsp;&nbsp;controltovalidate=\"txtTelephone\" resourcekey=\"valTelephone2\" validationexpression=\"^(\\\\(?\\\\+?[0-9]*\\\\)?)?[0-9_\\\\- \\\\(\\\\)]*$\"&gt;&lt;/asp:regularexpressionvalidator&gt; This requires no actual code behind changes, though I would recommend adding the proper information to your local resource file for language..."
url: /2005/dnn-module-validate-international-phone-numbers  # Use the generated URL with year
---
<P>Working on a customized version of the registration pages for <a title="DotNetNuke.com" href="https://www.dotnetnuke.com/" target="_blank">dotnetnuke</a> I needed a good regular expression to validate international phone numbers.</P> <P>I ended up adding this line to my &#8220;register.aspx&#8221; page. </P> <P>&nbsp;&nbsp;&nbsp;&lt;asp:regularexpressionvalidator id="valTelephone2" runat="server" cssclass="NormalRed" display="Dynamic" errormessage="&lt;br&gt;Office Phone Must be Valid."<BR>&nbsp;&nbsp;&nbsp;&nbsp;controltovalidate="txtTelephone" resourcekey="valTelephone2" validationexpression="<STRONG>^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$</STRONG>"&gt;&lt;/asp:regularexpressionvalidator&gt;</P> <P>This requires no actual code behind changes, though I would recommend adding the proper information to your local resource file for language handling.</P>
