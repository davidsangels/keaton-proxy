window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById('reservations');

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  console.log('qewr');
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    // header.classList.remove('reservations');
  } else {
    header.classList.remove("sticky");
    // header.classList.add('reservations');
  }
}