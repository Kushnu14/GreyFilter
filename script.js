var image;
var canvas1;
var canvas2;

function upload()
{
   canvas1=document.getElementById("canvas1");
   var imgFile=document.getElementById("fileInput");
   image=new SimpleImage(imgFile);
   image.drawTo(canvas1); 
}
function greyFilter()
{
   var greyImage=image;var avg,r,g,b;
   canvas2=document.getElementById("canvas2");
   for(var pixel of greyImage.values())
   {
      r=pixel.getRed();
      g=pixel.getGreen();
      b=pixel.getBlue();
      avg=(r+g+b)/3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);


   }
   greyImage.drawTo(canvas2);
}

     
      
