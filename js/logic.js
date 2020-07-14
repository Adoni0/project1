$(document).ready(function() {
    setButtons(subjectArray, 'searchButton', '#buttonsArea')
});



var unsplashkey = unsplashkey;

//set up array that will populate the buttons
var subjectArray = ["Sports", "Nature", "Animals", "Buildings", "Fashion", "Abstract"];

//set up buttons and have the buttons house variables from array of subjects stored in the variable "subjectArray"
function setButtons(subjectArray, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < subjectArray.length; i++) {
        var subjectbtn = $('<button class="btn btn-primary btn-outline-black waves-effect filter">');
        subjectbtn.addClass(classToAdd);
        subjectbtn.attr('data-type', subjectArray[i]);
        subjectbtn.text(subjectArray[i]);
        $(areaToAddTo).append(subjectbtn);
    }
}

function unsplashCall(q) {
    // Perfoming an AJAX GET request to our queryURL
    $.ajax({
        url: q,
        method: 'GET'
    }).then(function(response) {
        console.log(response);
        $('.gallery').empty();
        //getting images from API and setting up their layout
        for (var i = 0; i < response.results.length; i++) {

            //display images and ratings

            var pictureDiv = $('<div class="mb-3 pics animation all 2">');
            pictureDiv.attr('data-toggle', 'modal');
            pictureDiv.attr('data-target', '#m1');

            // variable for image
            var searchImage = response.results[i].urls.small;

            //Creating and storing an image tag and assiging attributes to image searched for to make into image
            var image = $('<img>');
            image.attr('src', searchImage);
            image.addClass('img-fluid');
            //    console.log(image)

            pictureDiv.prepend(image);
            $('.gallery').append(pictureDiv);
        }
    });

}


//set up what happens once you enter subject area in the search box and click the "submit" button
$(document).on('click', '#searchbtn', function(e) {
    e.preventDefault();
    $('.gallery').empty();
    //assign data attribute to search
    // var picture = $(this).attr('data-type');
    var newSearch = $('#search-input').val().trim();
    console.log(newSearch);

    var queryURL = "https://api.unsplash.com/search/photos?query=" + newSearch + "&client_id=" + unsplashkey + "&per_page=50&order_by=latest";
    console.log(queryURL);
    //insert access key between "= per"

    unsplashCall(queryURL);


});

$('#gallery').on('click', '.pics', function() {

    var queryURL = 'https://api.kanye.rest';

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response.quote + ' ~Kanye West');

        var Ye = `<blockquote>`;
        Ye += `<p>${response.quote}</p>`;
        Ye += `<footer>~Kanye</footer>`;
        Ye += `</blockquote>`;

        $('.modal-header').empty();
        $('.modal-header').append(Ye);

    });


    var modalBody = $('.modal-body');
    modalBody.empty();
    $(this).first().clone().appendTo(modalBody);


});

$(document).on('click', '.searchButton', function(event) {
    event.preventDefault();

    var newSearch = $(this).attr('data-type');
    var queryURL = "https://api.unsplash.com/search/photos?query=" + newSearch + "&client_id=" + unsplashkey + "&per_page=50&order_by=latest";
    console.log(queryURL);

    unsplashCall(queryURL);

});