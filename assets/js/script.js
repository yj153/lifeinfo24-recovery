(function(){
  document.querySelectorAll('a[href="#top"]').forEach(function(a){
    a.addEventListener('click', function(e){e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'});});
  });
})();
