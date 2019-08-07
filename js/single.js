$(document).ready(function () {
    var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";
    var numberTrending = [1,2,3];

    $.ajax({
        url: END_POINT + "/api/v1/article?" + id + "=?",
        success: function (data) {
            console.log($.now());
            var detailArticle = data.data;

            var content = "";
            for(var i = 0; i < 1; i ++){
                content += "<div class=\"single-blog-post-details\">\n" +
                                "<div class=\"post-thumb\">\n" +
                                     "<img src=\""+detailArticle[i].thumnail+"\" alt=\"\">\n" +
                                "</div>\n" +
                                "<div class=\"post-data\">\n" +
                                     "<a href=\"#\" class=\"post-catagory\">Category</a>\n" +
                                     "<h2 class=\"post-title\">"+detailArticle[i].title+"</h2>\n" +
                                     "<div class=\"post-meta\">\n" +
                                          "<div class=\"post-details-meta-data mb-50 d-flex align-items-center justify-content-between\">\n" +
                                               "<div class=\"post-authors-date\">\n" +
                                                    "<p class=\"post-date\">"+getTimeHuman(detailArticle[i].update_at)+"</p>\n" +
                                               "</div>\n" +
                                               "<div class=\"view-comments\">\n" +
                                                    "<p class=\"views\">1281 Views</p>\n" +
                                                   "<a href=\"#comments\" class=\"comments\">3 comments</a>\n" +
                                               "</div>\n" +
                                          "</div>\n" +
                                          "<p>"+detailArticle[i].content+"</p>\n" +
                                      "</div>\n" +
                                 "</div>\n" +
                            "</div>"
            }
            $(".blog-posts-area").html(content);


            heroSlideCarouel();
        }
    });
});

$(document).ready(function () {
    var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";

    var numberTrending = [1,2,3];
    $.ajax({
        url: END_POINT + "/api/v1/home",
        success: function (data) {
            console.log($.now());
            var listArticle = data.data;
            //Chèn dữ liệu vào html
            var trendingList = "";
            for(var i = 6; i < 10; i ++){
                trendingList += "<div class=\"single-blog-post style-4\">\n" +
                    "        <div class=\"post-thumb\">\n" +
                    "            <a href=\"#\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>\n" +
                    "            <span class=\"serial-number\">01.</span>\n" +
                    "        </div>\n" +
                    "        <div class=\"post-data\">\n" +
                    "            <a href=\"#\" class=\"post-title\">\n" +
                    "                <h6>"+listArticle[i].title+"</h6>\n" +
                    "            </a>\n" +
                    "            <div class=\"post-meta\">\n" +
                    "                <p class=\"post-author\">By <a href=\"#\">Author</a></p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>"
            }
            $(".mb-70").html(trendingList);
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