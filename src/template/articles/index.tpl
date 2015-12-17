<!DOCTYPE html>
<!--
  ~ Copyright © 2015 by LiteCodes.com. All right reserved.
  -->
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="keywords" content="">
  <meta name="description" content="">
  <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
  <title>LiteCodes<%= title %></title>
  <link rel="stylesheet" type="text/css"
        href="/libs/font-awesome/css/font-awesome.min.css"/>
  <link rel="stylesheet" type="text/css"
        href="/libs/highlightjs/styles/github-gist.css"/>
  <link rel="stylesheet" type="text/css" href="/public/css/articles.css"/>
</head>
<body>
<header class="site-header">
  <div class="header-logo">LiteCodes</div>
  <nav class="header-nav">
    <ul class="nav-list">
      <li class="nav-item">
        <a href="//litecodes.com">Index</a>
      </li>
      <li class="nav-item">
        <a href="//litecodes.com/blog">Blog</a>
      </li>
      <li class="nav-item">
        <a href="//litecodes.com/about">About</a>
      </li>
    </ul>
  </nav>
</header>
<main class="site-main">
  <aside class="article-aside">
    <div class="index-aside">
      <header class="aside-title">Table of Contents</header>
      <ul id="toc" class="table-of-content">
      </ul>
    </div>
  </aside>
  <article class="article-content">
    <%= content %>
  </article>
</main>
<footer class="site-footer">
  <ul class="footer-links">
    <li class="footer-link">
      <span class="link-icon fa fa-github"></span>
      <a href="https://github.com/litecodes">GitHub</a>
    </li>
    <li class="footer-link">
      <span class="link-icon fa fa-twitter"></span>
      <a href="https://twitter.com/litecodes">Twitter</a>
    </li>
  </ul>
  <p class="copyright">&copy; 2015 <a href="//www.litecodes.com">LiteCodes.com</a></p>
</footer>

<script type="text/javascript"
        src="/libs/highlightjs/highlight.pack.min.js"></script>
<script>

  // Create table of content.
  var hs = document.querySelectorAll( 'h1, h2, h3, h4, h5, h6' );
  for ( var i = 0; i < hs.length; i++ ) {
    var h          = hs[ i ];
    var link       = document.createElement( 'li' );
    link.innerHTML = '<a href="#' + h.id + '" class="' + h.tagName + '">' + h.innerText + '</a>';
    document.querySelector( '#toc' ).appendChild( link );
  }

  // Initialize code highlight.
  hljs.initHighlightingOnLoad();
</script>
</body>
</html>