
function resize() {
  var b = document.getElementById("b");
  var f = document.getElementById("f");
  if (f && b) {
    var x = b.width;
    var y = b.height;
    f.style.width  = ( x * 0.29 - 15            ) + "px";
    f.style.height = ( y * 0.32 - 10            ) + "px";
    f.style.top    = ( y / 2    - y*(0.32/2)-50 ) + "px";
    f.style.left   = ( x / 2    - x*(0.269/2)+10) + "px";
  }
}
window.onload = resize;
window.onresize = resize;
