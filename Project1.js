function dropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdownlist");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// tables

for (count = 1; count <= 10; count = count + 1)

  console.log(count + " x 2 = " + count * 2);

for (count = 1; count <= 10; count = count + 1)

  console.log(count + " x 3 = " + count * 3);