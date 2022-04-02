// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
//= require jquery3
//= require popper
//= require bootstrap-sprockets

window.onscroll = function() {
    scrollFunction()
};
     
function scrollFunction() {
    var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    var height = Math.max(
      90 - scrollTop / 4,
      45
    );

    set_height(height);
}

function set_height(height) {
  document.getElementById("navigation-header").style.height = height + "px";

  var nav_items = document.getElementsByClassName("nav_item");
  for (var i=0; i < nav_items.length; i++) {
    nav_items[i].style.height = height + "px";
  }
}