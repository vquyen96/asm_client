$(document).ready(function () {
    var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";
    var id = getUrlParameter("id");
    var categoryId = false;
    $.ajax({
        url: END_POINT + "/api/v1/article?id=" + id,
        success: function (data) {
            console.log(data);
            var detailArticle = data.data;
            categoryId = detailArticle.category.id;
            var content = "<div class=\"post-thumb\">\n" +
                "    <img src=\""+detailArticle.thumnail+"\" alt=\"\" style='width: 100%'>\n" +
                "</div>\n" +
                "<div class=\"post-data\">\n" +
                "    <a href=\"category.html?id="+detailArticle.category.id+"\" class=\"post-catagory\">"+detailArticle.category.name+"</a>\n" +
                "    <h2 class=\"post-title\">"+detailArticle.title+"</h2>\n" +
                "    <div class=\"post-meta\">\n" +
                "\n" +
                "        <!-- Post Details Meta Data -->\n" +
                "        <div class=\"post-details-meta-data mb-50 d-flex align-items-center justify-content-between\">\n" +
                "            <!-- Post Author & Date -->\n" +
                "            <div class=\"post-authors-date\">\n" +
                "                <p class=\"post-author\">By <a href=\"#\">"+detailArticle.author.substring(0, 50)+"</a></p>\n" +
                "                <p class=\"post-date\">"+getTimeHuman(detailArticle.update_at)+"</p>\n" +
                "            </div>\n" +
                "            <!-- View Comments -->\n" +
                "            <div class=\"view-comments\">\n" +
                "                <p class=\"views\">1281 Views</p>\n" +
                "                <a href=\"#comments\" class=\"comments\">32 comments</a>\n" +
                "            </div>\n" +
                "        </div>\n" +
                "        <div class=\"post-content\">\n" + detailArticle.content +
                "        </div>\n" +
                "    </div>\n" +
                "</div>";
            $(".single-blog-post-details").html(content);
            generateRelatedArticle(END_POINT, categoryId);
            generateTrendingArticle(END_POINT);

        }
    });
});

function generateRelatedArticle(END_POINT, categoryId) {
    $.ajax({
        url: END_POINT + "/api/v1/article?category=" + categoryId,
        success: function (data) {
            console.log($.now());
            var listArticle = data.data;
            // sort random
            listArticle = shuffle(listArticle);

            //Chèn dữ liệu vào html
            var trendingList = "";
            for(var i = 0; i < 2; i ++){
                trendingList += "<div class=\"col-12\">\n" +
                    "    <div class=\"single-blog-post style-3 style-5 d-flex align-items-center mb-50\">\n" +
                    "        <!-- Post Thumb -->\n" +
                    "        <div class=\"post-thumb\">\n" +
                    "            <a href=\"single-post.html?id="+listArticle[i].id+"\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\" style='width: 100%;'></a>\n" +
                    "        </div>\n" +
                    "        <!-- Post Data -->\n" +
                    "        <div class=\"post-data\">\n" +
                    "            <a href=\"category.html?id="+listArticle[i].category.id+"\" class=\"post-catagory\">"+listArticle[i].category.name+"</a>\n" +
                    "            <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">\n" +
                    "                <h6>"+listArticle[i].title+"</h6>\n" +
                    "            </a>\n" +
                    "            <div class=\"post-meta\">\n" +
                    "                <p class=\"post-author\">By <a href=\"#\">"+listArticle[i].author.substring(0, 50)+"</a></p>\n" +
                    "                <p class=\"post-date\">"+getTimeHuman(listArticle[i].update_at)+"</p>\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>";
            }
            $(".related-articles- .row").html(trendingList);
        }
    });
}

function generateTrendingArticle(END_POINT) {
    $.ajax({
        url: END_POINT + "/api/v1/home",
        success: function (data) {
            console.log($.now());
            var listArticle = data.data;
            // sort random
            listArticle = shuffle(listArticle);

            //Chèn dữ liệu vào html
            var trendingList = "";
            for(var i = 0; i < 3; i ++){
                trendingList += "<div class=\"single-blog-post style-4\">\n" +
                    "    <!-- Post Thumb -->\n" +
                    "    <div class=\"post-thumb\">\n" +
                    "        <a href=\"single-post.html?id="+listArticle[i].id+"\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>\n" +
                    "        <span class=\"serial-number\">0"+(i+1)+".</span>\n" +
                    "    </div>\n" +
                    "    <!-- Post Data -->\n" +
                    "    <div class=\"post-data\">\n" +
                    "        <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">\n" +
                    "            <h6>"+listArticle[i].title+"</h6>\n" +
                    "        </a>\n" +
                    "        <div class=\"post-meta\">\n" +
                    "            <p class=\"post-author\">By <a href=\"#\">"+listArticle[i].author.substring(0, 50)+"</a></p>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>";
            }
            $(".trending-article").html(trendingList);
        }
    });
}



