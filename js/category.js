$(document).ready(function () {
    var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";
    var cateId = getUrlParameter("id");
    getDetailCate(END_POINT, cateId);
    getArticleByCategory(END_POINT, cateId);

});

function getDetailCate(END_POINT, categoryId) {
    $.ajax({
        url: END_POINT + "/api/v1/category?id=" + categoryId,
        success: function (data) {
            var cate = data.data;
            $(".viral-news-breadcumb-area h3").text(cate.name);
            $(".viral-news-breadcumb-area .breadcrumb li.active").text(cate.name);

        }
    });
}


function getArticleByCategory(END_POINT, categoryId) {
    $.ajax({
        url: END_POINT + "/api/v1/article?category=" + categoryId,
        success: function (data) {
            var listArticle = data.data;
            // sort random
            if (listArticle.length > 0) {
                console.log(listArticle);
                var content = "<div class=\"col-12 col-md-7\">\n" +
                    "                        <div class=\"cata-thumbnail\">\n" +
                    "                            <a href=\"single-post.html?id="+listArticle[0].id+"\"><img src=\""+listArticle[0].thumnail+"\" alt=\"\"></a>\n" +
                    "                        </div>\n" +
                    "                    </div>\n" +
                    "                    <!-- Catagory Content -->\n" +
                    "                    <div class=\"col-12 col-md-5\">\n" +
                    "                        <div class=\"cata-content\">\n" +
                    "                            <a href=\"category.html?id="+listArticle[0].category.id+"\" class=\"post-catagory\">"+listArticle[0].category.name+"</a>\n" +
                    "                            <a href=\"single-post.html?id="+listArticle[0].id+"\">\n" +
                    "                                <h2>"+listArticle[0].title+"</h2>\n" +
                    "                            </a>\n" +
                    "                            <div class=\"post-meta\">\n" +
                    "                                <p class=\"post-author\">By <a href=\"#\">"+listArticle[0].author.substring(0, 40)+"</a></p>\n" +
                    "                                <p class=\"post-date\">"+getTimeHuman(listArticle[0].update_at)+"</p>\n" +
                    "                            </div>\n" +
                    "                            <p class=\"post-excerp\">"+listArticle[0].description.substring(0, 200)+"</p>\n" +
                    "                        </div>\n" +
                    "                    </div>";
                $(".featured-post").html(content);

            }
            var length = listArticle.length%2 ? listArticle.length : listArticle.length-1;

            var content2 = "";
            for (var i = 1; i < length; i++) {
                content2 += "<div class=\"col-12 col-lg-6\">\n" +
                    "                            <div class=\"single-blog-post style-3\">\n" +
                    "                                <!-- Post Thumb -->\n" +
                    "                                <div class=\"post-thumb\">\n" +
                    "                                    <a href=\"single-post.html?id="+listArticle[i].id+"\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>\n" +
                    "                                </div>\n" +
                    "                                <!-- Post Data -->\n" +
                    "                                <div class=\"post-data\">\n" +
                    "                                    <a href=\"category.html?id="+listArticle[i].category.id+"\" class=\"post-catagory\">"+listArticle[i].category.name+"</a>\n" +
                    "                                    <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">\n" +
                    "                                        <h6>"+listArticle[i].title+"</h6>\n" +
                    "                                    </a>\n" +
                    "                                    <div class=\"post-meta\">\n" +
                    "                                        <p class=\"post-author\">By <a href=\"#\">"+listArticle[i].author.substring(0, 40)+"</a></p>\n" +
                    "                                        <p class=\"post-date\">"+getTimeHuman(listArticle[i].update_at)+"</p>\n" +
                    "                                    </div>\n" +
                    "                                </div>\n" +
                    "                            </div>\n" +
                    "                        </div>";
            }

            $(".list-post").html(content2);
            //Chèn dữ liệu vào htm
        }
    });
}