function hsOnReadyLoadFAQ() { 
  // Variables 
  var i; 
  var accordion = document.getElementsByClassName("accordion_header");
  
  // Functions 
  function slideUp(target, duration) {
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.boxSizing = "border-box";
    target.style.height = target.offsetHeight + "px";
    target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    window.setTimeout(function(){ 
      target.style.display = "none";
      target.style.removeProperty("height");
      target.style.removeProperty("padding-top");
      target.style.removeProperty("padding-bottom");
      target.style.removeProperty("margin-top");
      target.style.removeProperty("margin-bottom");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  };
  function slideDown(target, duration) {
    target.style.removeProperty("display"); 
    var display = window.getComputedStyle(target).display;
    if (display === "none") {
      display = "block";
    }
    target.style.display = display;
    var height = target.offsetHeight;
    target.style.overflow = "hidden";
    target.style.height = 0;
    target.style.paddingTop = 0;
    target.style.paddingBottom = 0;
    target.style.marginTop = 0;
    target.style.marginBottom = 0;
    target.offsetHeight;
    target.style.transitionProperty = "height, margin, padding";
    target.style.transitionDuration = duration + "ms";
    target.style.height = height + "px";
    target.style.removeProperty("padding-top");
    target.style.removeProperty("padding-bottom");
    target.style.removeProperty("margin-top");
    target.style.removeProperty("margin-bottom");
    window.setTimeout(function(){ 
      target.style.removeProperty("height");
      target.style.removeProperty("overflow");
      target.style.removeProperty("transition-duration");
      target.style.removeProperty("transition-property");
    }, duration);
  }; 
  
  // Loop through all accordion headers 
  for(i = 0; i < accordion.length; i++) {
    
    // Click function for when accordion header is clicked on
    accordion[i].addEventListener("click", function(e){
      e.preventDefault(); 
      var faqIsOpen = e.target.parentElement.classList.contains("expanded");
      
      // If the accordion clicked on is not already open
      if (faqIsOpen === false) {
        // Slides up all accordions and removes class of expanded
        for(i = 0; i < accordion.length; i++) {
          accordion[i].parentElement.classList.remove("expanded");
          slideUp(accordion[i].nextElementSibling, 250);     
        }
        // Slides down active accordion and adds class of expanded
        setTimeout(function() {
          e.target.parentElement.classList.add("expanded") && $('#containerTitle').classList.toggle("back-red");;
          slideDown(e.target.nextElementSibling, 500); 
        }, 250) ;
      }
      // Slides up active accordion 
      else if (faqIsOpen === true) {
        e.target.parentElement.classList.remove("expanded"); 
        slideUp(e.target.nextElementSibling, 250);
      }
    });
  }

} 
if (document.readyState === "complete" ||
    (document.readyState !== "loading" && !document.documentElement.doScroll)
   ) {
  hsOnReadyLoadFAQ();
} else {
  document.addEventListener("DOMContentLoaded", hsOnReadyLoadFAQ);
}



//New Accordion Function
(function($) {
    
  var allPanels = $('.accordionIndividual > dd').hide();
  
  //  $('#containerTitle').click(function() {
  // $(this).toggleClass('back-red');
  // $('#titleIdle').toggleClass('TITLEon');
  //});
    
  $('.accordionIndividual > dt > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

})(jQuery);