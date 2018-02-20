'use strict';

const YouTubeUrl='https://www.googleapis.com/youtube/v3/search';

function userInput(){
    $('#js-form').submit(event => {
        event.preventDefault();
        let userChoice=$('input#js-search-category').val();
        $('input#js-search-category').val('');
        // $('.js-resultsList').html(`<li>${userChoice}</li>`); // Test that we got the user's choice.
    });
}

$(userInput);