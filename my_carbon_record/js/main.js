(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });

    //food
    const foodSelect = document.getElementById('food-select');
    const foodQuantity = document.getElementById('food-quantity');
    const fishSelect = document.getElementById('fish-select');
    const fishQuantity = document.getElementById('fish-quantity');
    const meatSelect = document.getElementById('meat-select');
    const meatQuantity = document.getElementById('meat-quantity');
    const selectedFood = document.getElementById('selected-food');
    const selectedQuantity = document.getElementById('selected-quantity');
    const carbonEmission = document.getElementById('carbon-emission');
    const calculateBtn1 = document.getElementById('calculate-btn1');
    const calculateBtn2 = document.getElementById('calculate-btn2');
    const calculateBtn3 = document.getElementById('calculate-btn3');

    // add event listener to the calculate button
    calculateBtn1.addEventListener('click', () => {
        // get the selected food and quantity
        const selectedFoodValue = foodSelect.value;
        const selectedQuantityValue = foodQuantity.value;

        // calculate the carbon emission
        const carbonEmissionValue = selectedQuantityValue * 0.3;

        // update the UI
        selectedFood.textContent = selectedFoodValue === 'default' ? '' : selectedFoodValue;
        selectedQuantity.textContent = selectedQuantityValue;
        carbonEmission.textContent = selectedFoodValue === 'default' ? '' : carbonEmissionValue.toFixed(1);
    });
    calculateBtn2.addEventListener('click', () => {
        // get the selected food and quantity
        const selectedFoodValue = fishSelect.value;
        const selectedQuantityValue = fishQuantity.value;

        // calculate the carbon emission
        const carbonEmissionValue = selectedQuantityValue * 6;

        // update the UI
        selectedFood.textContent = selectedFoodValue === 'default' ? '' : selectedFoodValue;
        selectedQuantity.textContent = selectedQuantityValue;
        carbonEmission.textContent = selectedFoodValue === 'default' ? '' : carbonEmissionValue.toFixed(1);
    });
    calculateBtn3.addEventListener('click', () => {
        // get the selected food and quantity
        const selectedFoodValue = meatSelect.value;
        const selectedQuantityValue = meatQuantity.value;

        // calculate the carbon emission
        const carbonEmissionValue = selectedQuantityValue * 15;

        // update the UI
        selectedFood.textContent = selectedFoodValue === 'default' ? '' : selectedFoodValue;
        selectedQuantity.textContent = selectedQuantityValue;
        carbonEmission.textContent = selectedFoodValue === 'default' ? '' : carbonEmissionValue.toFixed(1);
    });
    
})(jQuery);

