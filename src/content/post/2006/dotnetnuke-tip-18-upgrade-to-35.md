---
title: "DotNetNuke Tip #18, Upgrade to *.3.5"
author: Chris Hammond
publishDate: 2006-09-17T01:20:00
updateDate: 2008-01-23T16:51:03
tags: [ 'aspnet', 'daily tips', 'DotNetNuke Tips' ]
excerpt: "Discover the latest Admin/Host Functions, Control Panel updates, and more in this comprehensive DNN feature roundup for improved website performance."
url: /2006/dotnetnuke-tip-18-upgrade-to-35  # Use the generated URL with year
---
<p>I didn&#39;t come up with this list, just reposting it.</p><p>Admin/Host Functions<br /><br />DNN-3913 - Improved performance of URL Control with a large number of folders<br />DNN-3911 - Inform User if email to vendor or admin fail<br />DNN-3932 - Fixed behavior of User Settings in SuperUser Accounts<br />DNN-3928 - Add ability to disable the Update profile on login functionality<br />DNN-3868 - Fixed display of Page specific Header info <br />DNN-3867 - Fixed the Portal Template Schema Definition for the file element<br />DNN-3866 - Fixed AddPortalInfo sproc so users upgrading from 4.0 can add new portals<br />DNN-3793 - Fixed bug with adding codeSubdirectory node to web.config<br />DNN-3730 - Forced validation of Profile Definitions in case client-side validation doesn&#39;t happen (plus added missing keys)<br />DNN-3791 - Private and verified registration no longer redirects but displays confirmation message <br />DNN-3804 - Fail gracefully on Password Update if problems with Email<br />DNN-3839 - Added ability for Admin to set the default profile Visibility<br />DNN-3835 - Added ability for Admin to disable/enable Services<br />DNN-3834 - Added ability for Admin to enable/disable Profile Visibility <br />DNN-3838 - Added option to suppress the Pager in the Users Grid when not needed (PageSize &gt; TotalRecords)<br />DNN-3748 - Fixed Paging in User Accounts when using a Search option other than username<br />DNN-3822 - Suppress Group Header when Profile has no properties in the Category enabld for display <br />DNN-3760 - <font size="2"></font>Breadcrumb Enhancement - Allow use of tab title instead of tab name<br />DNN-3694 - Added friendly message when duplicate portal alias is added <br />DNN-3419 - Removed some unused resource keys<br /><br />Control Panel<br /><br />DNN-3874 - Change to add custom permissions by default to all roles with EDIT permissions when adding a new module to the page<br /><br />DAL<br /><br />DNN-2913 - Fixed situation where a TextColumn is bound to a null value (now returns &quot;&quot;)<br /><br />File Manager<br /><br />DNN-3865 - Added buffering to downloading of files (in 10K chunks)<br /><br />General<br /><br />DNN-3702 - Fixed case where a Port is specified in SMTP configuration<br />DNN-3743 - In LogController, fixed SupportsEmailNotification and SupportsInternalViewer so they return a value<br />DNN-2699 - Fixed SiteWizard.ascx to allow debugging if specified in web.config<br /><br />Text Editor<br /><br />DNN-3926 - Make sure Action menus are not visible if they are empty (or only have break items)<br /><br />Install/Upgrade<br /><br />DNN-3759 - Fixed localization errors when no portal (eg during Install) <br /><br />Localization<br /><br />DNN-3917 - Improved RTL support in Profile Editor<br />DNN-3812 - Added en-us to default language<br />DNN-1974 - support for longer locale strings<br />DNN-2612 - Fixed xml error in reource verifier <br />DNN-2268 - Updated Resource Verifier to support <a href="https://asp.net/" target="_blank" title="https://asp.net" onclick="return top.js.OpenExtLink(window,event,this)"><u><font color="#0000ff">asp.net</font></u></a> 2 style resx files<br />DNN-3594 - Languages sorted alphabetically in Languages editor <br /><br />Resource Installer<br /><br />DNN-3742 - Fixed installation of app_code based modules <br /><br />Search<br /><br />DNN-2344 - Fixed Indexing when Page has an enddate<br />DNN-3464 - Added validators to Search settings<br />DNN-2798 - Fixed UpdateSearchItem stored procedure to use nvarchar instead of varchar<br />DNN-1902 - Fixed PageCount check <br />DNN-1891 - Include Common Words setting is now used in GetSearchResults<br /><br />Security<br /><br />DNN-3718 - Added required image to password fields (in Register and Add User)<br />DNN-3964 - Fixed missing code to Log the SuperUser Login event <br />DNN-3747 - Fixed Registration when RequireQuestionandAnswer is selected<br />DNN-3849 - Add check for empty string in Decrypt method to avoid errors on x64 servers<br />DNN-3883 - Allow all Administrators to unlock each other <br />DNN-3853 - Improve scalability/performance of GetModulePermissionsByModuleID and GetFolderPermissionsByFolderPath<br />DNN-3833 - Added message for unauthorized users when attempting to log in.<br />DNN-3706 - Made ValidationExpression column nvarchar(2000) rather than nvarch(100) <br />DNN-3968 - Created separate temporary and persistent cookie timeouts<br /><br />Skinning<br /><br />DNN-3984 - The DNNMenuNavigationProvider correctly utilizes the CSSNodeSelectedRoot in all cases<br />DNN-3707 - Fixed skin parsing that extracts the skin components from a full html file. <br /><br />Templates<br /><br />DNN-3661 - Fixed C# Module Template error<br />DNN-3708 - Fixed portal template errors when using Modules with multiple Module Definitions (like Blog)<br />DNN-2234 - Fixed templates default user/password <br />DNN-3783 - Fixed Site Wizard bug<br /><br />UI<br /><br />DNN-3882 - Fixed View mode of the List Edit Control so it correctly returns the list item (when two different Lists contain the same Values)<br />DNN-3746 - Fixed display of login instaructions<br />DNN-3798 - Fixed the maximize behaviour of the Password Aging section in User Settings</p> Posted from <A href="https://weblogs.asp.net/christoc/">weblogs.asp.net/christoc</a>
