$(document).ready(function () {
    var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";
    $.ajax({
        url: END_POINT+"/api/v1/home",
        success:function(data) {
            console.log($.now());
            var listArticle = data.data;
            //Chèn dữ liệu vào html
            var content = "";
            for (var i = 0; i < listArticle.length; i++) {
                content += "<div class=\"single-blog-post d-flex align-items-center mb-50\">\n" +
                    "                            <div class=\"post-thumb\">\n" +
                    "                                <a href=\"#\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>\n" +
                    "                            </div>\n" +
                    "                            <div class=\"post-data\">\n" +
                    "                                <a href=\"#\" class=\"post-title\">\n" +
                    "                                    <h6>"+listArticle[i].title+"</h6>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"post-meta\">\n" +
                    "                                    <p class=\"post-date\"><a href=\"#\">"+getTimeHuman(listArticle[i].update_at)+"</a></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>"
            }

            //Cho html vào thẻ cha
            $(".hero-slides").html(content);
            // Chạy lại Carouel
            heroSlideCarouel();
        }
    });

});


function heroSlideCarouel() {
    var heroSlide = $(".hero-slides");
    heroSlide.owlCarousel({
        items: 3,
        margin: 30,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
}

function getTimeHuman(timestamp) {
    var now = $.now();
    var time = (now - timestamp)/1000;

    if (time > (3600*24*30*12)) {
        return parseInt(time/(3600*24*30*12))+" Years Ago";
    }

    if (time > (3600*24*30)) {
        return parseInt(time/(3600*24*30))+" Months Ago";
    }

    if (time > (3600*24)) {
        return parseInt(time/(3600*24))+" Days Ago";
    }

    if (time > (3600)) {
        return parseInt(time/(3600))+" Hours ago";
    }

    if (time > (60)) {
        return parseInt(time/(60))+" Minutes ago";
    }

    return "Just Now";
    
}