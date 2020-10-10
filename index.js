var slideimg = document.getElementById("slideimg");

var images = new Array(
  "D:\web\web devleopment\websites\Farewell\images\home1.jpg",
  "D:\web\web devleopment\websites\Farewell\images\home2.jpg",
  "D:\web\web devleopment\websites\Farewell\images\home3.jpg",
  "D:\web\web devleopment\websites\Farewell\images\home4.jpg"
);

var len = images.length;
var i = 0;

function slider(){
  if(i > len-1){
    i=0
  }
  slideimg.src = images[i];
  i++;
  setTimeout('slider()', 3000);
}
