jQuery(document).ready(function()
{
        var $container = $('#main-content');

        $container.imagesLoaded(function() 
        {
                $container.isotope({
                        masonry: {
                                columnWidth: $container.find('.grid-sizer')[0],
                                gutter : 0
                        },
                        itemSelector: '.project-item',
                        transitionDuration: 0
                });
        });
        
        /*$(document).on("click", ".project-item", function()
        {
                var same = false;
                
                $(".project-item").removeClass("selected");
                $(this).addClass("selected");
                
                $(".project-item .image").each(function()
                {
                        if($(this).parent().hasClass("selected"))
                        {
                                $(this).velocity({marginTop: 0}, 250);
                                
                                same = true;
                        }
                });
                
                if(same) return false;
                
                $(this).find(".image").velocity({marginTop: - ($(this).height() * 0.8)}, 250);
        });*/
        
        $(document).on("click", "#main-menu menu li a[href=#sobre]", function()
        {
                $(".back-button-skin").hide();
                $("#back-button-curriculum").css("left", -50 ).show().velocity({"left": 250, easing : "easeInOutCubic"}, 500).html("&xlarr;");
                
                $("#curriculum").css("display", "block");
                $("#curriculum").velocity({"left": 0, easing : "easeInOutCubic"}, 500);
        });
        
        $(document).on("click", "#main-menu menu li.hasSub a", function(e)
        {
                e.preventDefault();
                e.stopPropagation();
                
                $("> ul", $(this).parent()).slideToggle();
                
                return false;
        });
        
        $(document).on("click", "#back-button-curriculum", function()
        {
                $("#back-button-curriculum").velocity({"left": -50, easing : "easeInOutCubic"}, 500);
                /*$("#back-button").css("left", 250).show();*/
                $("#curriculum").velocity({"left": -250, easing : "easeInOutCubic"}, 500);
        });
        
        
        $(document).on("click", "#back-button", function()
        {
                $(this).toggleClass("opened");
                
                if($(this).hasClass("opened"))
                {
                        $("#back-button").html("&xlarr;");
                        $("#main-menu").velocity({"left": 0, easing : "easeInOutCubic"}, 500);
                }
                else
                {
                        $("#back-button").html("&xrarr;");
                        $("#main-menu").velocity({"left": -250, easing : "easeInOutCubic"}, 500);
                }
        });
        
        $("#back-button").html("&xrarr;");
        
        checkMenu();
});

function checkMenu()
{
        if($(window).width() <= 640)
        {
                $("#back-button").show();

                $("#main-menu").css("left", - 250);
                $("#main").css("padding-left", 0);
                $("#main-content").css('width', $(window).width());
        }
        else
        {
                $("#back-button").hide();

                $("#main-menu").css("left", 0);
                $("#main").css("padding-left", 250);
                $("#main-content").css('width', $(window).width() - $("#main-menu").outerWidth());
        }
}

$(window).on('resize', function()
{
        checkMenu();
},50);