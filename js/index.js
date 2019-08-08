$(document).ready(function () {
    var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";

    var numberTrending = [1,2,3];
    $.ajax({
        url: END_POINT+"/api/v1/home",
        success:function(data) {
            console.log($.now());
            var listArticle = data.data;
            //Chèn dữ liệu vào html
            var content1 = "";
            var content2 = "";
            var content3 = "";
            var content4 = "";
            var content5 = "";
            var allArticle = "";
            var allArticle2 = "";
            var trendingList = "";
            var lastArticle = "";
            var detail = "";
            for (var i = 0; i < listArticle.length; i++) {
                content1 += "<div class=\"single-blog-post d-flex align-items-center mb-50\">\n" +
                    "                            <div class=\"post-thumb\">\n" +
                    "                                <a href=\"single-post.html?id="+listArticle[i].id+"\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>\n" +
                    "                            </div>\n" +
                    "                            <div class=\"post-data\">\n" +
                    "                                <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">\n" +
                    "                                    <h6>"+listArticle[i].title+"</h6>\n" +
                    "                                </a>\n" +
                    "                                <div class=\"post-meta\">\n" +
                    "                                    <p class=\"post-date\"><a href=\"#\">"+getTimeHuman(listArticle[i].update_at)+"</a></p>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>"
            }
            //Cho html vào thẻ cha
            $(".hero-slides").html(content1);


            for(var i = 0; i < 1; i ++){
                content2 += "<div class=\"welcome-post trendingImg1\">\n" +
                            "    <img src=\""+listArticle[i].thumnail+"\" alt=\"\">" +
                            "    <div class=\"post-content\" data-animation=\"fadeInUp\" data-duration=\"500ms\">\n" +
                            "        <a href=\"#\" class=\"tag\">category</a>\n" +
                            "        <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">"+listArticle[i].title+"</a>\n" +
                            "        <p>"+getTimeHuman(listArticle[i].update_at)+"</p>\n" +
                            "    </div>\n"
                            "</div>"
            }
            $(".trendingImg1").html(content2);

            for(var i = 3; i < 4; i ++){
                content4 += "<div class=\"welcome-post trendingImg2\">\n" +
                            "    <img src=\""+listArticle[i].thumnail+"\" alt=\"\">" +
                            "    <div class=\"post-content\" data-animation=\"fadeInUp\" data-duration=\"500ms\">\n" +
                            "        <a href=\"#\" class=\"tag\">category</a>\n" +
                            "        <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">"+listArticle[i].title+"</a>\n" +
                            "        <p>"+getTimeHuman(listArticle[i].update_at)+"</p>\n" +
                            "    </div>\n"
                            "</div>"
            }
            $(".trendingImg2").html(content4);

            for(var i = 1; i < 3; i ++){
                content3 += "<div class=\"welcome-post style-2 Trending\">\n" +
                            "   <img src=\""+listArticle[i].thumnail+"\"  alt=\"\">\n" +
                            "   <div class=\"post-content\" data-animation=\"fadeInUp\" data-delay=\"500ms\" data-duration=\"500ms\">\n" +
                            "       <a href=\"#\" class=\"tag tag-2\">Category</a>\n" +
                            "       <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">"+listArticle[i].title+"</a>\n" +
                            "        <p>"+getTimeHuman(listArticle[i].update_at)+"</p>\n" +
                            "   </div>\n" +
                            "</div>"
            }
            $(".Trending").html(content3);

            for(var i = 4; i < 6; i ++){
                content5 += "<div class=\"welcome-post style-2 smallImg\">\n" +
                            "   <img class=\"small\" src=\""+listArticle[i].thumnail+"\"  alt=\"\">\n" +
                            "   <div class=\"post-content\" data-animation=\"fadeInUp\" data-delay=\"500ms\" data-duration=\"500ms\">\n" +
                            "       <a href=\"#\" class=\"tag tag-2\">Category</a>\n" +
                            "       <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">"+listArticle[i].title+"</a>\n" +
                            "        <p>"+getTimeHuman(listArticle[i].update_at)+"</p>\n" +
                            "   </div>\n" +
                            "</div>"
            }
            $(".smallImg").html(content5);

            for(var i = 0; i < 5; i ++){
                allArticle += "<div class=\"single-blog-post style-3 allArticle\">\n" +
                            "    <div class=\"post-thumb\">\n" +
                            "        <a href=\"#\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>\n"+
                            "    </div>\n" +
                            "    <div class=\"post-data\">\n" +
                            "        <a href=\"#\" class=\"post-catagory\">Category</a>\n" +
                            "        <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">\n" +
                            "            <h6>"+listArticle[i].title+"</h6>\n" +
                            "        </a>\n" +
                            "        <div class=\"post-meta\">\n"+
                            "            <p class=\"post-author\">By <a href=\"#\">Author</a></p>\n"+
                            "            <p class=\"post-date\">"+getTimeHuman(listArticle[i].update_at)+"</p>\n"+
                            "        </div>\n" +
                            "    </div>\n" +
                            "</div>"
            }
            $(".allArticle").html(allArticle);
            heroSlideCarouel();

            for(var i = 5; i < 10; i ++){
                allArticle2 += "<div class=\"single-blog-post style-3 allArticle2\">\n" +
                            "    <div class=\"post-thumb\">\n" +
                            "        <a href=\"#\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>\n"+
                            "    </div>\n" +
                            "    <div class=\"post-data\">\n" +
                            "        <a href=\"#\" class=\"post-catagory\">Category</a>\n" +
                            "        <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">\n" +
                            "            <h6>"+listArticle[i].title+"</h6>\n" +
                            "        </a>\n" +
                            "        <div class=\"post-meta\">\n"+
                            "            <p class=\"post-author\">By <a href=\"#\">Author</a></p>\n"+
                            "            <p class=\"post-date\">"+getTimeHuman(listArticle[i].update_at)+"</p>\n"+
                            "        </div>\n" +
                            "    </div>\n" +
                            "</div>"
            }
            $(".allArticle2").html(allArticle2);

            for(var i = 6; i < 10; i ++){
                trendingList += "<div class=\"single-blog-post style-4\">\n" +
                            "        <div class=\"post-thumb\">\n" +
                            "            <a href=\"#\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>\n" +
                            "            <span class=\"serial-number\">01.</span>\n" +
                            "        </div>\n" +
                            "        <div class=\"post-data\">\n" +
                            "            <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">\n" +
                            "                <h6>"+listArticle[i].title+"</h6>\n" +
                            "            </a>\n" +
                            "            <div class=\"post-meta\">\n" +
                            "                <p class=\"post-author\">By <a href=\"#\">Author</a></p>\n" +
                            "            </div>\n" +
                            "        </div>\n" +
                            "    </div>"
            }
            $(".style-4").html(trendingList);

            for(var i = 6; i < 9; i ++){
                lastArticle += "<div class=\"single-blog-post style-2 d-flex align-items-center\">\n" +
                            "        <div class=\"post-thumb\">\n" +
                            "            <a href=\"#\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>" +
                            "        </div>" +
                            "        <div class=\"post-data\">" +
                            "            <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">\n" +
                            "                <h6>"+listArticle[i].title+"</h6>" +
                            "            </a>\n" +
                            "            <div class=\"post-meta\">\n"+
                            "                <p class=\"post-date\"><a href=\"#\">"+getTimeHuman(listArticle[i].update_at)+"</a></p>\n"+
                            "            </div>\n" +
                            "        </div>\n"+
                            "    </div>"
            }
            $(".lastArticle").html(lastArticle);
            heroSlideCarouel();
        }
        
    });
});




$(document).ready(function () {
    var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";

    var numberTrending = [1,2,3];
    $.ajax({
        url: END_POINT + "/api/v1/category",
        success: function (data) {
            console.log($.now());
            var listCategory = data.data;
            //Chèn dữ liệu vào html
            var content = "";
            for (var i = 0; i < 5; i++) {
                content += "<ul class=\"dropdown\">\n" +
                    "          <li><a href=\"#\">" + listCategory[i].name + "</a></li>\n" +
                    "       </ul>"
            }
            //Cho html vào thẻ cha
            $("#bla-bla").html(content);
            newSlideCarouel();
        }
    });
});



function newSlideCarouel() {
    var newSlide = $("#bla-bla");
    newSlide.owlCarousel({
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