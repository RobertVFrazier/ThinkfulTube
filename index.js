'use strict';

const youTubeUrl='https://www.googleapis.com/youtube/v3/search';

function getDataFromApi(searchTerm, callback){
    let query={
        part: 'snippet',
        maxResults: '10',
        key: 'AIzaSyD9p4OgF8DmaoYZYAQPLUIyhU7rgRJYVRo',
        q: searchTerm
    };
    $.getJSON(youTubeUrl, query, callback);
}

function renderResult(result){
    // console.log(result);
    return `
    <li class='thumbBox'>
        <figure class='thumb'>
            <a href='https://www.youtube.com/watch?v=${result.id.videoId}' target='_blank' aria-label='Click for video'><img src='${result.snippet.thumbnails.medium.url}' alt='' /></a>
            <figcaption class='caption'>${result.snippet.title}</figcaption>
        </figure>
    </li>
    `;
}

function displayYouTubeData(data){
    console.log(data.pageInfo.totalResults);
    let resultCount=data.pageInfo.totalResults;
    $('#js-result-count').html(`<br/><p>Total results reported: ${resultCount}</p>`);
    let results=data.items.map((item, index)=>renderResult(item));
    $('.js-resultsList').html(results);
}

function main(){
    $('#js-form').submit(event => {
        event.preventDefault();
        let userChoice=$('input#js-search-category').val();
        $('input#js-search-category').val('');
        getDataFromApi(userChoice, displayYouTubeData);
    });
}

$(main);