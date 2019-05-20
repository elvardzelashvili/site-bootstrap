function readmore(argument) {
	
	  
	  var read = document.getElementById("readmoree");
      var txt = document.getElementById("bt");


      if (read.style.display == "block")  
           {
         read.style.display = "none";
	     txt.innerHTML ="read more";
	     
      }
     else {
     read.style.display = "block";
     txt.innerHTML ="read less";
     }
    
}
