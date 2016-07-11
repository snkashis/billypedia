/* global $ _ */
$(document).ready(function() {
    $.getJSON('discography.json', function (data) {
        // YOUR CODE BELOW HERE //
        
        // console.log(data);
        
        /*
         * Style the #section-bio and #section-quotes as per some of the 
         * examples we tried in the console.
         */
        
        /*
         * 1. Populate the #top-rated <ul>:
         *
         * Loop through the top rated recordings of Billy Higgins, and, 
         * using lodash, add a styled <li> for each recording. Inspect a 
         * recording object in the console to view its available properties.
         *
         * How can you use _.map() to your advantage here?
         */
        let topRated = data.discography.topRated;
        _.forEach(topRated, function(recording) {
            // console.log(recording);
        });
        
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


