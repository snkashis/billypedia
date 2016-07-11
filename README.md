# Wonkiepedia

An intro to jQuery!

## Setup

Run `os install` and select and install the `wonkiepedia` project. Once installed, close any other files you have open in Cloud9, then, from within the `projects/wonkiepedia` directory, open both the index.html and index.js pages.  We'll code in these two pages.

Make sure your website is serving from Cloud9, open it, and navigate to your portfolio, select `wonkiepedia` - this will open the `index.html` page in your browser. You'll see a Wonkiepedia entry for the great Billy Higgins.

## jQuery

jQuery is a third-party library that allows developers to more easily manipulate the elements of a webpage represented in the <a href="https://en.wikipedia.org/wiki/Document_Object_Model" target="_blank">DOM (Document Object Model).</a>

This includes helping:

* selecting elements
* adding/removing CSS classes and HTML attributes to/from elements
* creating elements
* hiding/showing/deleting/moving elements
* adding events to elements
* ...and much, much, more

While a developer can use the browser's built-in API for DOM manipulation, this API is verbose. jQuery cuts down on the amount of code needed to do amazing modifications to a webpage at runtime.

### How is jQuery Easier?
Consider the following example JavaScript code that gets an element by its `id` and then removes it from the DOM:

```javascript
var el = document.getElementById('element-id');
el.parentNode.removeChild(el);
```

Here's that same code written using jQuery:

```javascript
$('#element-id').remove();
```

jQuery also normalizes a lot of subtle differences in how older browsers implement a variety of JavaScript functionalities. This means that if you use jQuery, you can use the same methods to manipulate and access the DOM in almost all browsers.

### The $ Character Points to a Function

In JavaScript, the `$` character is a completely valid character to use in variable names. jQuery uses the `$` character as a shorthand. You can use it interchangeably with `jQuery` as a way to reference the jQuery library:

```javascript
// Both $ and jQuery calls function the same
$('#element-id').remove();
jQuery('#element-id').remove();
```

How do `jQuery()` and `$()` work? `$()`. What's happening here is that `$()` is a function call, meaning that `$` is a function. This function is designed to take in a string, such as `$('#element-id')`, which will select an element by its id, `#`. After this, we then call remove on that element. The `$` variable is the entry point into all jQuery-related functionality.

### jQuery Objects vs DOM Elements

You'll hear two terms thrown around a lot when using jQuery: **DOM elements** and jQuery objects.

This nomenclature can be a little confusing, but it's important to understand the distinction. DOM elements are the actual elements that we ordinarily grab with native JavaScript and then manipulate using the browser's DOM API. They're the browser-world representation of the HTML that we put in. jQuery objects "wrap" DOM elements in new objects that define properties and method names that are easier for people to use, like append and remove, instead of more verbose JavaScript operations like element.innerHtml = element.innerHtml + '<div>my new dom stuff</div>'. In addition, jQuery objects can wrap more than one element at a time. For example, we can query for all of the `<div>` elements on a page by running `let divs = $('div');`. This returns an Array like object, containing all the `<div>` elements on a page.  You can then run many jQuery methods on these multiple `<div>` elements at the same time.

How do jQuery objects "wrap" DOM elements? This is just terminology that means that jQuery objects store references to the DOM elements they "wrap". When we call methods on jQuery objects, jQuery then goes and runs the native JavaScript methods on the actual DOM elements that the jQuery object is wrapping. This abstraction gives us a lot of power and flexibility in our manipulation of the DOM.

### Loading jQuery

There's several ways to load jQuery into your web project. While package managers are the way to go in production, the easiest is to use a CDN (Content Delivery Network).  Most popular libries are hosted on CDN's, and you only need to Google "library-of-interest CDN" to find a link. Try it with jQuery!

We can link to jQuery using the Google CDN.  Open up the `index.html` file of the Wonkiepedia project, and add the following script tag to the head of the page.

```javascript
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js"></script>
```

### Test jQuery Setup
If you correctly followed the above setup step for loading jQuery, you can easily test the setup. Go back to your 'index.html' page running in your browser, **refresh the page, open your DevTools console** and type "$", you should see an output similar to this:

```javascript
> $
function (a,b){return new n.fn.init(a,b)}
```

Or:

```javascript
> jQuery
function (a,b){return new n.fn.init(a,b)}
```

If instead you something similar to what's below, then you've yet to included jQuery correctly.

```javascript
> $
ReferenceError: $ is not defined
```

### Selecting Elements with jQuery
Ordinarily, if we want to manipulate an element in the DOM, we have to use these three methods on the document in JavaScript:

```javascript
document.getElementById
document.getElementsByClassname
document.getElementsByTagName
document.querySelector
document.querySelectorAll
```

However, these are verbose and pretty inflexible ways to access the DOM. With jQuery, we can use `$()` and pass in a CSS-style selector to grab one or multiple elements.

### CSS Selectors
With jQuery, we can select elements the same way that we target elements with CSS selectors. For instance, take a look at the following CSS:

```css
/* Targets all h1 elements and makes them blue */
h1 {
    color: blue;
}

/* Targets the element with the id "everything" and turns the background red */
#everything {
    background-color: red;
}

/* Targets all elements with the class "holder" and adds a black border */
.holder {
    border: 1px solid black;
}

/* Targets all li elements within ul elements and bold them */
ul li {
    font-weight: bold;
}

/* Targets p elements coming immediately after an h1 element and makes it green */
h1 + p {
    color: green;
}
```

### Examples of using jQuery to select and manipulate elements by their CSS Selectors

We can use the exact same CSS selector syntax to select elements on the DOM with jQuery. Here's JavaScript code using jQuery to do the same thing as the CSS above:

```javascript
// Turn h1s blue
$('h1').css('color', 'blue');
// Make the element with id "everything" have a red background
$('#everything').css('background-color', 'red');
// Make all elements with class "holder" have a black border
$('.holder').css('border', '1px solid black');
// Make all li elements inside of ul elements have bold text
$('ul li').css('font-weight', 'bold');
// Makes all p elements immediately following an h1 green
$('h1 + p').css('color', 'green');
```

### Method Chaining (Fluent Syntax)
When jQuery returns the result of a query, the resulting set, an Array-like Object, contains methods we can call to manipulate the elements in the returned set. Conveniently, we can chain together methods to perform multiple actions on the elements. This is accomplished by using the dot operator, followed by the method we want to invoke. This is possible because many jQuery method calls continue to return the Array-like Object. This makes things very convenient!

```javascript
$('div').css('color', 'red').attr('name', 'red-divs').appendTo('body');
```

The above statement grabs all `<div>` elements in the DOM, changes their text color to red, gives them a `name` attribute of `red-divs`, then appends them to the `<body>` tag - all in fluent syntax.


### DOM Sets
Since we can use CSS selectors to select elements from the DOM, it follows that if we use the selector `'div'`, we are selecting all of the `<div>` elements on the DOM. 

You can see this to be the case by going to your `index.html` page, running in your browser, and typing $('div').length() into the DevTools console. length() is a method that will show you the number of elements that you matched with your selector in your query. The set of elements returned from a query is called the matched set. The return value of a jQuery selector is this matched set. For instance, if we run `$('div')` in our DevTools on a page with the HTML above in it, we'll see an array-like representation of DOM elements.

### Run some jQuery methods

In the DevTools console of your browser running the `index.hml` page of the Wonkiepedia project, run the following commands:

1. Select all divs and change their text color to red:
    
        ```javascript
        $('div').css('color', 'red');
        ```
    
2. Change all the div text color back to black:
    
        ```javascript
        $('div').css('color', 'black');
        ```
    
3. Change the background of the section quotes to grey with rounded corners.
    
        ```javascript
        $('#section-quotes').css('background-color', 'grey').css('border-radius', '4px');
        ```
    
4. Change the color of the quotes heading to white and give it some padding:
    
        ```javascript
        $('.heading-quotes').css('color', 'white').css('padding-left', '10px');
        ```
    
5. Change all the `.quote` class paragraphs to be text color white and font-style of italic:
    
        ```javascript
        $('.quote').css('color', 'white').css('font-style', 'italic');
        ```
    
6. Give the div with id quotes some padding:
    
        ```javascript
        $('#quotes').css('padding-right', '10px').css('padding-left', '10px');
        $('#quotes:last-child').css('padding-bottom', '4px');
        ```
    
### Moving, Replacing, and Removing Elements:

1. Move the section quotes to the top of the div with id sections:
    
        ```javascript
        $('#section-quotes').prependTo('#sections');
        ```
    
2. Change an HTML attribute by swaping out the `src` of the image tag:
    
        ```javascript
        $('#pic-billy').attr('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Billy_Higgins.jpg/220px-Billy_Higgins.jpg');
        ```
    
3. Remove the stuff about Billy's divorce!
    
        ```javascript
        $('#section-bio p:last-child').remove();
        ```
    
## Exercises

Open up the `index.js` file of the wonkiepedia project, and follow the 
instructions to build out the UI from the loaded JSON data.

For exercise 3, you want to build a table using jQuery to list Billy's rider. Below is an example of a function that uses jQuery to build a HTML table, based on some people data. Your job is do to something similar with Billy's rider data.

```javascript
var createTable = function(people){
    var createRow = function(person){
        var $row = $("<tr>");
        var $nameFirst = $("<td>").text(person.nameFirst);
        var $nameLast = $("<td>").text(person.nameLast);
        $row.append($nameFirst);
        $row.append($nameLast);
        return $row;
    }
    var $table = $("<table>");
    var $rows = people.map(createRow);
    $table.append($rows);
    return $table;
};
let people = [{nameFirst: "John", nameLast: "Doe"}, {nameFirst: "Dick", nameLast: "Jones"}]
createTable(people).appendTo("body");
```


## Halle 
                                  _,-,_
                               ,-'  |. '-,
                              /    .|     \
                             /      |.     \
                            /      .|       \
                           /   .    |.       \
                          /   | |  .|    |    \
                         /    | |   |.   |     \
                   \|/  /     | |  .|    |      \  \|/
                  - *<((       '    |.           ))>* -
                   /|\  \         __|__         /  /|\
                         '\      '--|--'      /'
                //  \\     '.       |.      .'     //  \\
                \\\///     (=================)     \\\///
                 ||||     ,'    /.    ----   ',     ||||
                 \ __\.___|   .|     | /_ |   |___./__ /
                  \, / | ||    |.    |  / |   || | \ ,/
                    '-----|   .|      ----    |-----'
                           \   |.            /
                           /\ .|            /\
                          /\ '\ \         /' /\
                         /\ \ /'\._____./'\ / /\
                        (\ \ /             \ / /)
                        | \ (               ) / |
                        |-- |               | --|
                     ___|-- |               | --|___
                    '========'             '========'

         .-----------------------------------------------------.
         |  O     P     E     R     A     T     I     O     N  |
         |-----------------------------------------------------|
         |    _____   _____           _____    _  __   .  __   |
         |   / ____| |  __ \   /\    |  __ \  | |/ /  /|  \ \  |
         |  ( (___   | |__) ) /  \   | |__) ) | ' /  //__  \ \ |
         |   \___ \  |  ___/ / /\ \  |  _  /  |   \  --//  / / |
         |   ____) ) | |    / ____ \ | | \ \  | |\ \  |/  / /  |
         |  |_____/  |_|   /_/    \_\|_|  \_\ |_| \_\ '  /_/   |
         |                                                     |
         '-----------------------------------------------------'
         

