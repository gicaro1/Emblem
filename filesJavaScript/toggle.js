function myFunction(x) {
   x.classList.toggle("change");
  var x = document.getElementById("burger");
  if (x.style.display === "none") {
    x.style.display = "block";
    
  } else {
    x.style.display = "none";
  }
 
  x.location.reload();
  
}







