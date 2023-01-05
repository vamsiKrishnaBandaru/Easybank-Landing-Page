function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.hamburger')) {
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }
  }
}