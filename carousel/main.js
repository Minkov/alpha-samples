$(function () {
    var categories = {
        "animals": [
            "https://timeincsecure-a.akamaihd.net/rtmp_uds/293884104/201609/2165/293884104_5112162189001_5112146586001-vs.jpg?pubId=293884104&videoId=5112146586001",
            "https://cmrinteriors.files.wordpress.com/2011/06/orange-cat2.jpg",
            "https://hips.hearstapps.com/cos.h-cdn.co/assets/14/48/4000x2499/gallery_nrm_1416853744-166273350.jpg"
        ],
        "nature": [
            "https://dingo.care2.com/pictures/greenliving/1407/1406075.large.jpg",
            "http://static.asiawebdirect.com/m/phuket/portals/phuket-com/homepage/island/naiharn-beach/pagePropertiesImage/naiharn-beach.jpg",
        ],
        "robots": [
            "http://screencrush.com/files/2015/07/ranking-terminators-t800-prototype-630x420.jpg",
            "https://nerdist.com/wp-content/uploads/2016/02/Transformers-Bumblebee.jpg",
            "http://cdn.bloody-disgusting.com/wp-content/uploads/2017/10/pacific-rim-uprising-trailer.jpg",
        ],
    };

    var generateCarouselItem = function (imageSrc) {
        return $("<div/>")
            .addClass("carousel-item")
            .append(
                $("<img/>").attr("src", imageSrc)
            );
    };

    $(".list-categories").on("click", ".list-item", function () {
        var category = $(this).attr("data-name");
        $(".carousel-inner").html("");
        $(".carousel-inner")
            .append(categories[category].map(generateCarouselItem));
        $(".carousel-item").eq(0).addClass("active");
        $('.carousel').carousel({
            interval: 2000
        })
    });
});