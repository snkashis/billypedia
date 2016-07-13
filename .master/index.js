/* global $ _ opspark */
$(document).ready(function() {
    $.getJSON('data.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        const
            billyPics = data.images.billy,
            $billyPic = $('#image-billy');
        
        $billyPic
            .on('click', function(event) {
                let i = $billyPic.attr('i');
                const pacifier = opspark.makePacifier($('#image-container-billy')[0]);
                $billyPic
                    .attr('src', billyPics[++i] || billyPics[i = 0])
                    .attr('i', i)
                    .hide()
                    .on('load', function (event) {
                        pacifier.stop();
                        $(event.currentTarget).fadeIn(200);
                    });
            });
        
        // console.log(data);
        
        /*
         * 0. Style the #section-bio and #section-quotes as per some of the 
         * examples we tried in the console.
         */
        
        /*
         * 1. Populate the #list-top-rated <ul>:
         *
         * Loop through the top rated recordings of Billy Higgins, and, 
         * using lodash, add a styled <li> for each recording. Inspect a 
         * recording object in the console to view its available properties.
         *
         * How can you use _.map() to your advantage here?
         */
        const topRated = data.discography.topRated;
        
        const $imageContainerTopRated = $('<div>').attr('id', 'image-container-top-rated').addClass('image-container');
        $imageContainerTopRated.append(createImage(_.find(topRated, {'title': 'Voice in the Night'}).art));
        $('#header-top-rated').after($imageContainerTopRated);
        
        const topRatedListItems = _.map(topRated, function(recording) {
            return $('<li>').addClass('top-rated')
                .attr('art', recording.art)
                .append($('<div>').addClass('top-rated-title').text(recording.title));
        });
        $('#list-top-rated').append(topRatedListItems);
        $('.top-rated').on('click', {id: 'image-container-top-rated'}, replaceImage);
        
        
        /*
         * 2. Create a discography <section>:
         *      a. Create a discography <section id="section-disc"> and add it 
         *         below the and add it below the #section-quotes on the 
         *         index.html page.
         * 
         *      b. Create a <ul id="list-disc">, style it, and add it to the 
         *         <section id="section-disc">.
         * 
         *      c. Add a styled <li class="recording"> for every recording in 
         *         the recordings Array. What lodash methods can help you here?
         *
         *      d. Add CSS styling rules to the site.css file to style the list
         *
         *      The resulting HTML should look something like this:
         *
         *         <section id="section-disc">
         *           <ul id="list-disc">
         *               <li class="recording">
         *                   <div class="title">Title: Eastern Rebellion</div>
         *                   <div class="artist">Artist: Cedar Walton</div>
         *                   <div class="release">Release: Timeless</div>
         *                   <div class="year">Year: 1976</div>
         *               </li>
         *           </ul>
         *       </section>
         */
         
        const recordings = data.discography.recordings;
        const recordingsListItems = _.map(recordings, function(recording) {
            return $('<li>').addClass('recording')
                .attr('art', recording.art)
                .append($('<div>')
                    .addClass('recording-title')
                    .text(truncateString(recording.title, 22)));
        });
        
        const $sectionRecordings = $('<section>').attr('id', 'section-recordings').addClass('recordings');
        const $headerRecordings = $('<header>').addClass('header-recordings').text('Recordings');
        const $listRecordings = $('<ul>').addClass('list-recordings').append(recordingsListItems);
        const $imageContainerRecording = $('<div>').attr('id', 'image-container-recording').addClass('image-container');
        $imageContainerRecording.append(createImage(_.first(recordings).art));
        
        $sectionRecordings
            .append($headerRecordings)
            .append($imageContainerRecording)
            .append($listRecordings)
            .appendTo('#sidebar');
         
         $('.recording').on('click', {id: 'image-container-recording'}, replaceImage);
         
         /*
          * 3. Below the <section id="section-disc">, create a new section for 
          * Billy's rider. Use jQuery to assemble a table to display the rider 
          * data. The rider data is at data.rider
          */
          
        //  console.log(data.rider);
        
        
        
        // YOUR CODE ABOVE HERE //
    })
    .fail(function() { console.log('getJSON on discography failed!'); });
});

function replaceImage(event) {
    const 
        $imageContainer = $(`#${event.data.id}`).empty(),
        pacifier = opspark.makePacifier($imageContainer[0]),
        artPath = $(event.currentTarget).attr('art');
    $imageContainer.append(createImage(artPath, pacifier));
}

function createImage(path, pacifier) {
    const $image = $('<img>')
        .hide()
        .attr('id', 'recording-image')
        .attr('src', path)
        .addClass('image')
        .on('load', function(event) {
            if(pacifier) pacifier.stop();
            $image.fadeIn(200);
        });
    return $image;
}

function truncateString(string, length) {
    return string.length > length ? string.substring(0, length) + '...' : string;
}
