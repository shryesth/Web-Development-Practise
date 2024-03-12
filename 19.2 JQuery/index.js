
$('h1').css("color", "red")

// .content
$('button').text("don't click me")

// .innerHTML
$('button').html("<em>hey</em>")


//attribute manipulation
$("a").attr("href", "www.yahoo.com")


// // adding event listner
// $("h1").click(function () {
//     $("h1").css("color", "purple")
// })



// for (var i = 0; i < 5; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function () {
//         document.querySelector("h1").style.color = "blue";
//     })
// }


$("button").click(function () {
    $("h1").css("color", "purple");
})


$('input').keypress(function (event) {
    console.log(event.key)
})

$(document).keypress(function (event) {
    $('h1').text(event.key)
})

$('h1').on('mouseover', function () {
    $('h1').css('color', "pink")
})


//adding button
$("h1").before("<button>New</button>")
$("h1").after("<button>New</button>")


// elements are added inside h1 element but before and after eleement
$("h1").prepend("<button>New</button>")
$("h1").append("<button>New</button>")

//removing elements
// $('button').remove()



//animation
// $("button").on('click', function () {
//     $('h1').hide();
// })

// $("button").on('click', function () {
//     $('h1').show();
// })

// $("button").on('click', function () {
//     $('h1').toggle();
// })

// $("button").on('click', function () {
//     $('h1').fadeOut();
// })

// $("button").on('click', function () {
//     $('h1').fadeIn();
// })

// $("button").on('click', function () {
//     $('h1').fadeToggle();
// // })
// $("button").on('click', function () {
//     $('h1').slideUp();
// // })
// $("button").on('click', function () {
//     $('h1').slideUp();
// })
// $("button").on('click', function () {
//     $('h1').slideToggle();
// })
// $("button").on('click', function () {
//     $('h1').animate({ opacity: 0.5 });
// })
$("button").on('click', function () {
    $('h1').slideUp().slideDown().animate({ opacity: 0.5 });
})


