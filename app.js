// $(document).ready(function() {


  let $xhr = $.getJSON('https://lit-fortress-6467.herokuapp.com/object');

  $xhr.done(function(data) {
    console.log(data)

    for (var i = 0; i < data.length; i++) {
      console.log(data.artist)
  }
});
// $.load(function)
// $.get("https://lit-fortress-6467.herokuapp.com/object" + $('#firstcover').val(), function(data) {
//
// }
    // $("#firstcover").load("index.html"), function() {
    //     $("#firstcover").attr("src", "./images/" + $(this).text() + ".jpg");
    //     }
    // });
