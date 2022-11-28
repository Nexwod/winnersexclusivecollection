$(document).ready(function(){

    


    //Owl-carousel
$('.customer-area .owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    dots:true,
    responsive:{
        0:{
            items:1
        },
            
        544:{
            items:2
        }
        }
    

    
})


});

let $btns=$('.project-area .button-project-area button');
$btns.click(function(e){
    $('.project-area .button-project-area button').removeClass('active');
    e.target.classList.addClass('active');

    let selector=$(e.target).attr('data-filter');
    $('.project-area .grid').isotope({
        filter:selector
    });
    return false;
});
/*var mainMenu = document.getElementsByClassName("main-menu");
    function changeClassList (mainMenu.classList("class", "fix"));
    mainMenu.onscroll(changeClassList);*/





