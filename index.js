'use strict';
function main(){
    $('#js-form').submit(event => {
        event.preventDefault();
        let userChoice=$('input#js-search-category').val();
        $('input#js-search-category').val('');
        $('.js-resultsList').html(`<li>${userChoice}</li>`);
    });
}

main();