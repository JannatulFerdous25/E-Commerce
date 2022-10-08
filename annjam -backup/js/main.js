 //owl carousel
 $('.owl-carousel').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    responsive:{
        0: {
            items: 1
          },
          768: {
            items: 2
          },
          1000: {
            items: 1
          },
          1200: {
            items: 1
          }
    }
})

var mixer = mixitup('.products');