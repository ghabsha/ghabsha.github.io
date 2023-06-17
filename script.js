document.addEventListener('DOMContentLoaded', function() {
    var myDiv = document.getElementById('inputContainer');
    var initialScrollPos = 130;
    
    window.addEventListener('scroll', function() {
      if (window.scrollY >= initialScrollPos) {
        myDiv.style.display = 'block';
        myDiv.style.position = 'fixed';
            myDiv.style.top = '0';
      } else {
        myDiv.style.display = 'none';
      }
    });
  });

