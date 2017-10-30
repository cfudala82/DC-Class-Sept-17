<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js">
    </script>
    <link href="path/to/lightbox.css" rel="stylesheet">
    <script src="path/to/lightbox.js"></script>
    <script>
    /*
    When the button is clicked, change the text of the paragraph #the-message to "You clicked me!", and the text of the button #the-button to "Click again?".
    */
    (function ( $ ) {
      $.fn.reverse = function () {
        $.fn.greenify = function() {
          this.css( "color", "green");
          return this;
        };
      };
    }( jQuery ));
    </script>
    <script>
      $(document).ready( function () {
        // $('#the-button').click (function () {
        //   $(this).text('Click Again?');
        //   $('#the-message').text('You clicked me!');
        // });
        $('#the-button').reverse();
      });
    </script>
  </head>
  <body>
    <p id="the-message">Pardon me, would you please</p>
    <button id="the-button">Click me?</button>
  </body>
</html>
