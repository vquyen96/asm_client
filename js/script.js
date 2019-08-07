$(document).ready(function () {
    var END_POINT = "https://crawler-dot-backup-server-mie-01.appspot.com";
    generateLatestArticle(END_POINT);
    generateMenuCategory(END_POINT);
});


function generateLatestArticle(END_POINT) {
    $.ajax({
        url: END_POINT + "/api/v1/home",
        success: function (data) {
            var listArticle = data.data;
            //Chèn dữ liệu vào html
            var content = "";
            for(var i = 0; i < 3; i ++){
                content += "<div class=\"single-blog-post style-2 d-flex align-items-center\">\n" +
                    "    <div class=\"post-thumb\">\n" +
                    "        <a href=\"single-post.html?id="+listArticle[i].id+"\"><img src=\""+listArticle[i].thumnail+"\" alt=\"\"></a>\n" +
                    "    </div>\n" +
                    "    <div class=\"post-data\">\n" +
                    "        <a href=\"single-post.html?id="+listArticle[i].id+"\" class=\"post-title\">\n" +
                    "            <h6>"+listArticle[i].title+"</h6>\n" +
                    "        </a>\n" +
                    "        <div class=\"post-meta\">\n" +
                    "            <p class=\"post-date\"><a href=\"#\">"+getTimeHuman(listArticle[i].update_at)+"</a></p>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>";
            }
            $(".latest-article").html(content);
        }
    });
}

function generateMenuCategory(END_POINT) {
    $.ajax({
        url: END_POINT + "/api/v1/category",
        success: function (data) {
            var listCate = data.data;
            //Chèn dữ liệu vào html
            var content = "";
            for(var i = 0; i < listCate.length; i ++){
                content += "<li class=\"\"><a href=\"category.html?id="+listCate[i].id+"\">"+listCate[i].name+"</a></li>";
            }
            $("nav .classynav ul").html(content);
            $(".footer-nav ul").html(content);
        }
    });
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

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

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
