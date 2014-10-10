$(document).ready(
    $('[data-toggle="popover"]').popover({placement: "bottom", html: "true", title: "Suche"}),
    $('.test').each(function(){console.log(this)})
)