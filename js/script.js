function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('paralacs');
      }
    });
  }
  
  let options = {
    threshold: [0.5] };
  let observer = new IntersectionObserver(onEntry, options);
  let elements = document.querySelectorAll('.about, .work, .team, .says, .other, .contacts');
  
  for (let elm of elements) {
    observer.observe(elm);
  }

  window.onscroll = function() {scrollFunction()};
        
  function scrollFunction() {
      if (document.body.scrollTop > 200 || 
        document.documentElement.scrollTop > 200) {
          document.getElementById("topBtn").style.display = "block";
      } else {
          document.getElementById("topBtn").style.display = "none";
      }
  }
  
  function topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  }  
 
 