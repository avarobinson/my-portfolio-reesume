$(".card").hover(function(){
    $(this).css("opacity", "50%");
    console.log(this.getAttribute('id'));
}, function(){
    $(this).css("opacity", "100%");
});