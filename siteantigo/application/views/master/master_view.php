<!DOCTYPE html>
<html dir="ltr" lang="pt-br" class="no-js">
	<head>
		<title><?=$page_title;?></title>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=Edge">
		<meta name="author" content="<?php echo DEFAULT_AUTHOR;?>" />
		<meta name="title" content="<?php echo $page_title;?>" />
		<meta name="keywords" content="<?php echo DEFAULT_KEYWORDS;?>" />
		<meta name="description" content="<?php echo $page_description;?>" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
		
		<!-- Facebook Tags -->
		<meta property="og:title" content="<?php echo $page_title;?>" />
		<meta property="og:description" content="<?php echo $page_description;?>" />
		<meta property="og:type" content="company" />
		<meta property="og:url" content="<?php echo base_url();?>" />
		<meta property="og:image" content="<?php echo base_url();?>library/images/logo.png" />
		<meta property="og:site_name" content="<?php echo DEFAULT_TITLE;?>"/>

	        <!-- Stylesheets -->
		<?php foreach ($page_stylesheet as $stylesheet): ?>
                <link href='<?php echo $stylesheet;?>' rel='stylesheet' type='text/css'>
		<?php endforeach; ?>

		<!-- Javascript libraries -->
		<?php foreach ($page_javascript as $javascript): ?>
                <script src="<?=$javascript;?>" type="text/javascript"></script>
		<?php endforeach; ?>
                
                <!--[if (gte IE 6)&(lte IE 8)]>
                        <script type="text/javascript" src="<?php echo base_url();?>library/js/third-party/selectivizr.js"></script>
                <![endif]-->
		
		<!-- Icons -->
                <link rel="apple-touch-icon-precomposed" sizes="57x57" href="favicon/apple-touch-icon-57x57.png" />
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon/apple-touch-icon-114x114.png" />
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon/apple-touch-icon-72x72.png" />
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon/apple-touch-icon-144x144.png" />
                <link rel="apple-touch-icon-precomposed" sizes="60x60" href="favicon/apple-touch-icon-60x60.png" />
                <link rel="apple-touch-icon-precomposed" sizes="120x120" href="favicon/apple-touch-icon-120x120.png" />
                <link rel="apple-touch-icon-precomposed" sizes="76x76" href="favicon/apple-touch-icon-76x76.png" />
                <link rel="apple-touch-icon-precomposed" sizes="152x152" href="favicon/apple-touch-icon-152x152.png" />
                <link rel="icon" type="image/png" href="favicon/favicon-196x196.png" sizes="196x196" />
                <link rel="icon" type="image/png" href="favicon/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/png" href="favicon/favicon-32x32.png" sizes="32x32" />
                <link rel="icon" type="image/png" href="favicon/favicon-16x16.png" sizes="16x16" />
                <meta name="application-name" content="&nbsp;"/>
                <meta name="msapplication-TileColor" content="#FFFFFF" />
                <meta name="msapplication-TileImage" content="favicon/mstile-144x144.png" />
                <meta name="msapplication-square70x70logo" content="favicon/mstile-70x70.png" />
                <meta name="msapplication-square150x150logo" content="favicon/mstile-150x150.png" />
                <meta name="msapplication-wide310x150logo" content="favicon/mstile-310x150.png" />
                <meta name="msapplication-square310x310logo" content="favicon/mstile-310x310.png" />

		<!--[if lt IE 9]>
			<script type="text/javascript">
				document.createElement("aside");
				document.createElement("article");
				document.createElement("section");
				document.createElement("nav");
				document.createElement("footer");
				document.createElement("header");
				document.createElement("label");
				document.createElement("figure");
				document.createElement("figcaption");
			</script>
		<![endif]-->
	</head>
        <body>
                
		<section id="main">
                        <?php $this->load->view("includes/main_sidebar_view");?>
                        <?php echo $page_contents;?>
		</section>
                <script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-43859634-1', 'auto');
  ga('send', 'pageview');

</script>
	</body>
</html>
