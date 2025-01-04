---
title: "Jekyll Script - Validating Permalink Characters in Jekyll Posts with PowerShell"
author: Chris Hammond
publishDate: 2024-04-29T03:51:21
updateDate: 2024-04-29T03:52:48
image: ~/assets/images/Powershell-Jekyll-PermalinkIdentify.jpg
tags: [ 'Jekyll', 'Powershell', 'Programming', 'Script', 'Tutorial' ]
excerpt: "Discover how to validate permalink integrity in Jekyll posts with our PowerShell script. Ensure your blog's URLs are clean and effective."
url: /2024/jekyll-script-validating-permalink-characters-in-jekyll-posts-with-powershell
---

If you're using Jekyll as your static site generator, maintaining clean and valid permalinks is crucial for SEO and user navigation. Invalid characters in permalinks can lead to broken links and poor site performance. To address this, I've created a PowerShell script that scans through your Jekyll blog's `_posts` folder to find any posts with potentially invalid characters in their permalinks.

## Why Check Permalinks?

Permalinks are the URLs of your blog posts, and having clear, predictable URLs is key to both user experience and search engine indexing. Using non-standard characters can cause issues with browsers and search engine crawlers, potentially leading to inaccessible pages.

## The PowerShell Script

The script works by scanning Markdown files in your Jekyll's `_posts` folder. It checks the `permalink` property within each file against a set of acceptable characters. If it finds any invalid characters, it will list those files for you to review.

### Script Code

```powershell
# Define the path to the _posts folder
$postsPath = ".\_posts"

# Define a regex pattern for valid permalink characters
# Typically, a permalink would include alphanumeric characters, dashes, slashes, and potentially periods
$validPermalinkRegex = '^[a-zA-Z0-9\/\-\.]+$'

# Get all Markdown files in the _posts folder
$files = Get-ChildItem -Path $postsPath -Filter *.md

# Loop through each file and check the permalink property
foreach ($file in $files) {
    # Read the content of the file
    $content = Get-Content $file.FullName

    # Search for a line containing the permalink property
    $permalinkLine = $content | Where-Object { $_ -match "^permalink:" }

    # Check if a permalink line exists
    if ($null -ne $permalinkLine) {
        # Extract the permalink value
        $permalink = $permalinkLine -replace "permalink:\s*", ""

        # Check if the permalink matches the valid pattern
        if (-not ($permalink -match $validPermalinkRegex)) {
            # Print the file name and the invalid permalink
            Write-Output "Invalid permalink in file: $($file.Name)"
            Write-Output "Permalink: $permalink"
        }
    }
}
```

## How to Use This Script

Save the script as `CheckPermalinks.ps1`. Run it from the PowerShell command line while you are in the directory containing your Jekyll blog's `_posts` folder. The script will output the names of files with invalid permalinks, allowing you to make necessary corrections.

## My Use Case

My use case was fairly simple. When I converted AutocrossBlogs.com over from a variety of other sites, I used a script to create the front matter for all posts. Things like apostrophes and quotes didn’t get encoded properly. With this script, I can filter through hundreds of posts to identify the individual posts that need their permalinks corrected.

## Conclusion

Ensuring the integrity of your permalinks is an essential part of maintaining a healthy and accessible blog. With this PowerShell script, you can automate the process of validating permalink structures and focus more on creating great content for your readers.
