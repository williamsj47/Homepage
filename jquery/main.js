$(".dark-btn").click(
    function(){
        $(".box").toggleClass("dark");
        $(".container").toggleClass("dark")
    }
);

$(".spin-btn").click(
    function(){
        $(".box").toggleClass("spin");
    }
);

$(".reset-btn").click(
function(){
    location.reload();
}

);


$(".reveal-btn").click(
    function(){
        // $(".moon").css("display", "inline");
        // $(".moon").addClass("reveal");
        $(".moon").show();
        $(".reveal-btn").hide();
    }
);



