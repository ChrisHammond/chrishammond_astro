---
title: "DotNetNuke Daily Tip #11 7/20/06 Upgrade to DNN 4.3.3!"
author: Chris Hammond
publishDate: 2006-07-20T09:45:00
updateDate: 2013-01-06T23:06:20
tags: [ 'A6', 'Audi', 'Audi A6', 'Cars', 'Quattro' ]
excerpt: "Upgrade to the latest version of DotNetNuke, 4.3.3/3.3.3! Explore new features like Membership Management and Profile Management enhancements."
url: /2006/dotnetnuke-daily-tip-11-72006-upgrade-to-dnn-433  # Use the generated URL with year
---
<P>This will be the last DNN Daily Tip for the week. I'm headed to Denver tomorrow for a race this weekend and meetings with a client on Monday, so I'll likely not post again until I return.</P> <P>What's today's tip? It's a special one ;) Upgrade to the latest version of DotNetNuke, 4.3.3/3.3.3! The 4.3.3 package dropped late yesterday afternoon and <A title=DotNetNuke href="https://www.dotnetnuke.com/" target=_blank mce_href="https://www.dotnetnuke.com">DotNetNuke.com</A> was upgraded to this "final release" early this morning. What is the 3.3.3 release? It's basically the same release as 4.3.3 but for the .Net 1.1 Framework, 4.3.3 is for the 2.0 platform.</P> <P>Some of the items that the 4.3.3/3.3.3 release include. If you're not running on the 2.0 framework yet, I'd highly recommend looking into it. I've started moving all of my sites over from 1.1 to 2.0 with the latest few releases of DNN.</P> <P><STRONG>Membership Management</STRONG><BR><STRONG>CAPTCHA</STRONG> - add the ability to display a small image with embedded text which bots can not read. Prevents brute force dictionary login attacks.<BR><STRONG>Login Redirect</STRONG> - after login there is now a way to redirect a user to a specific page<BR><STRONG>Password Generation</STRONG> - the ability for an admin to automatically generate a secure password for a user on account creation<BR><STRONG>HttpContext</STRONG> - eliminate dependence on HttpContext<BR><STRONG>Public Registration</STRONG> - the system sends an email to the user on public registration ( to prevent cases where another user registers with their email address )<BR><STRONG>Profile Change Notification </STRONG>- when any profile attribute is changed, the owner of the account is notified ( using the original email address ). This is to alert people in the event that an unauthorized user has gained access to their account and made changes to their profile ( password, email ). <BR><STRONG>User Account Creation Notification </STRONG>- when an admin creates a user account they have an option to send the account details to the user<BR><STRONG>Force Profile Update</STRONG> - ability to force a user to update their user profile<BR><STRONG>Force Password Change</STRONG> - ability to force a user to change their password<BR><STRONG>Password Complexity</STRONG> - added the ability to define some passord complexity requirements ( ie. mixed upper/lower case, numeric and alpha-numeric, etc... )<BR><STRONG>Display Name Field</STRONG> - the membership schema stores the DisplayName of the user for demographic purposes - this item is critical for international users where their name is not represented as "FirstName LastName". Modules should link to the DisplayName for audit purposes rather than using FirstName and LastName.<BR><STRONG>Preserve Login Parameters</STRONG> - when a user is directed to the login screen, the system retains the original url ( with parameters ) so that it can redirect back after successful login ( especially useful in nested module UIs like Forum )<BR><STRONG>Logout Behavior</STRONG> - after logging out, the user remains on the same page rather than being redirected to the home page ( the only reason they are being redirected now is because they may no longer have access to the page because of roles - but this is largely unnecessary and is handled other ways ).<BR><STRONG>Automated Verified Registration URL</STRONG> - the email sent to user when using he Verified Registration process now contains a URL which a user can click to very quickly validate their account<BR><STRONG>User Lockout Notification</STRONG> - enhance the user lockout ( 3 unsuccessful logins ) to send an email to the admin to notify them of the event</P> <P><BR><STRONG>Role Management<BR></STRONG><STRONG>Effective Date</STRONG> - effective date is used to specify when a role becomes active ( we already had ExpiryDate which specifies when role access terminates )<BR><STRONG>RSVP code</STRONG> - this is a code which can be assigned to a role which would allow a user to obtain access to thge role if they entered the RSVP value. A use case would be an administrator working with a group of users could send them an RSVP code which they could then enter on the site to get instant access, rather than the admin having to assign the users to roles manually<BR><STRONG>Avatar field</STRONG> - the administrator should be able to associate an avatar to a role.<BR><STRONG>Role Groups</STRONG> - administration mechanism to group roles within the same portal to provide a faster, easier way to manage/assign them. This affects the Role Management, User Role management, and Permissions grids.<BR><STRONG>Manage User Roles</STRONG> - once a site has more than 1000 users the user combobox, displayed when you access Manage User Roles from the Roles UI, contains too much data and sometimes times out. As a result there is no easy way to see the users who are assigned to a role ( the bottom portion of the UI ).</P> <P><STRONG>Profile Management</STRONG><BR><STRONG>Module Profile Properties</STRONG> - Modules can add profile properties for module-specific information.<BR><STRONG>Portal Properties</STRONG> - the Profile Properties are defined at the Portal level (not the host level)<BR><STRONG>Dynamic Definition</STRONG> - the Portal level properties are managed by the Portal Administrator<BR><STRONG>Searchable</STRONG> - Profile Properties are Searchable (ie we should be able to do Find Users By City or Find Users with Green Eyes) <BR><STRONG>Public/Private Data</STRONG> - the User have the ability to specify which profile items are public vs. private.</P> <P><BR><STRONG>File Management</STRONG><BR><STRONG>Storage Location</STRONG> - new Folder level specification to identify whether files should be stored on the file system ( unsecure ), file system ( secure ), or database ( secure ).<BR><STRONG>File Manager</STRONG> - refactored to use the database as the source for file/folder information rather than the physical file system. Improved user interface to accomodate new Storage Location options as well as provide Synchronization at the folder level. <BR><STRONG>File/Folder Association</STRONG> - added referential integrity between the Files and Folders table<BR><STRONG>File Server</STRONG> - HTTP Handler for serving files regardless of Storage Location. Takes advantage of Folder permissions to ensure secure access to files.<BR><STRONG>URLControl</STRONG> - leverage folder permissions and storage location in file selection and upload options.</P> <P><BR><STRONG>Usability<BR></STRONG><STRONG>Copy Content</STRONG> - in Add Page, a new option which allows an admin to select a page and the granularly select the modules to copy as well as whether to make a New, Copy, or Reference.<BR><STRONG>Page Template</STRONG> - template which defines a default set of modules to insert into the page when the page is added. The template is based on a portal template fragment and is currently defined at the host level. The default template provided contains a single HTML/Text module which helps address the usability issue of new portal administrators who do not understand that you&nbsp; need to add modules to your page once it is created.<BR><STRONG>Host Space</STRONG> - increased host space capacity from 999.<BR><STRONG>Module Title Editing </STRONG>- enabled AJAX-style editing of the Module Title by default<BR><STRONG>ClientAPI</STRONG> - fixes and enhancements to ClientAPI javascript library as well as navigation controls ( ie. treeview, SolPartMenu, DNNMenu )<BR><STRONG>Navigation Provider </STRONG>- fixes and enhancements to Navigation provider library<BR><STRONG>AJAX</STRONG> - fixes and enhancements to DNN AJAX library<BR><STRONG>URL Rewriter </STRONG>- adjusted logic so that full URL can be used in rewriter rules. There is also a new editor in the Host Settings to manage the URL Rewriter rules.<BR><STRONG>Rich Text Editor</STRONG> - added support for URLControl in hyperlink popup so that a user can select from a file, page, or external URL. Also added Insert Smiley option.<BR><STRONG>Newsletter </STRONG>- added ability to enter From: address. </P> <P><BR><STRONG>Framework</STRONG><BR><STRONG>AccessDeniedURL</STRONG> - for modules which need to restrict access based on portal permissions, a new property has been added to PortalModuleBase to deal with the business rules of unauthorized users.<BR><STRONG>Module Actions</STRONG> - Moved ModuleActions from Container to PortalModuleBase for proper encapsulation of ModuleAction collection ( no longer dependent on the existence of an Actions skin object ). Allow custom module actions to be created as sub-items below the root.<BR><STRONG>Permissions Grids</STRONG> - refactored to handle viewstate properly, allow extensibility for custom permission types, and eliminate errors related to rolenames containing embedded colons.<BR></P> <P><BR><STRONG>Data Access<BR></STRONG><STRONG>Generic Methods </STRONG>- new generic data access methods as part of core DataProvider. The purpose is to simplify DAL development for modules where a full Data Provider is not necessary. Detailed tutorial provides information on how they can be leveraged.</P> <P><BR><STRONG>Performance</STRONG><BR><STRONG>Module Settings</STRONG> - both module settings and tab module settings are now cached for performance benefit.</P> <P><STRONG>Module Definitions/Installer</STRONG><BR><STRONG>Version </STRONG>- display the module version in the default Module Definitions view <BR><STRONG>Interfaces</STRONG> - display module interface settings in the Edit Module Definitions UI and ensure the SupportedFeatures bits are set properly when updating&nbsp; <BR><STRONG>PA Packager</STRONG> - when using the Include Source option, the PA packager will now follow the DNN core naming convention and use *_source.zip as part of the filename for the source resource file.&nbsp; <BR><STRONG>Module Definitions</STRONG> - you now now install a module directly from a *.dnn manifest file without having to upload the ZIP<BR><STRONG>Module Packager</STRONG> - Added to DNN 4 for Dynamic modules<BR><STRONG>Module Installer</STRONG> - now automatically adds codeSubDirectory to web.config in DNN4 for C# module and granular assemblies<BR><STRONG>Module Cleanup</STRONG> - allows a ##.##.##.txt file to be included for removing deprecated/legacy files on upgrade of a module<BR><STRONG>Module Templates</STRONG> - Updated module templates for 2.0 framework development</P> <P><BR><STRONG>E-Commerce<BR></STRONG><STRONG>Subscriptions</STRONG> - new portal settings to manage PayPalIPN behavior. <BR>Text Banner - added support for a "display url" for text banners ( via the ImageURL property ). Also optimized the FindBanners stored procedure to exclude expired banners.</P> <P><BR><STRONG>Design</STRONG><BR><STRONG>HTML Skins</STRONG> - skins created as HTML files can now include a section. The skin parsing engine will parse the content within the BODY tag when creating the ASCX skin file.</P> <P><BR><STRONG>Other</STRONG><BR><STRONG>SMTP Settings -</STRONG>&nbsp;added ability to use port number<BR><STRONG>Core Modules</STRONG> - New Versions of most core modules are included with release.<BR><STRONG>New Modules</STRONG> - Store, Forums, Blogs, Gallery included with the release.<BR><STRONG>New DNN4 Module Example </STRONG>- Reports Module, includes a working 2.0 code as an example of module development under the .Net 2.0 framework.<BR></P> <P mce_keep="true">&nbsp;</P> <P>Stay tuned for&nbsp;another <A href="https://weblogs.asp.net/christoc/archive/tags/daily+tips/default.aspx" mce_href="/christoc/archive/tags/daily+tips/default.aspx"><FONT face="Times New Roman" size=3>DotNetNuke Daily Tip</FONT></A><FONT face="Times New Roman" size=3> coming next week!</FONT></P>

