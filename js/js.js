function readmore(argument) {
	
	  
	  var read = document.getElementById("readmoree");
      var txt = document.getElementById("bt");


      if (read.style.display === "none")  
           {
         read.style.display = "block";
	     txt.innerHTML ="read less";
	     
      }
     else {
     read.style.display = "none";
     txt.innerHTML ="read more";

     }
    
}
