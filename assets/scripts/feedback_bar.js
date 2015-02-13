  // var feedbackStubVisible = false;
 
  //   function feedbackBar_show() { //New function woahbar_show is initiated. 
  //       if(feedBackStubVisible) { //Checks if feedBackStub is true; false by default. 
  //         $('.feedbackStub').slideUp('fast', function() { // if stub is showing, selects feedbackStub and slides it up hding it 
  //           $('.feedbackBar').show('bounce', { times:3, distance:15 }, 100);  //selects feedbackBar and shows it making it bounce
  //           $('body').animate({"marginTop": "2.4em"}, 250); //animates body text
  //         }); 
  //       }
  //       else {
  //         $('.feedbackBar').show('bounce', { times:3, distance:15 }, 100); //if stub is not showing, then show the feedbackBar and animate it 
  //         $('body').animate({"marginTop": "2.4em"}, 250);
  //       }
  //   }
 
  //   function feedbackBar_hide() { 
  //       $('.feedbackBar').slideUp('fast', function() {
  //         $('.feedbackStub').show('bounce', { times:3, distance:15 }, 100);  
  //         feedbackStubVisible = true;
  //       }); 
 
  //       if( $(window).width() > 1024 ) {
  //         $('body').animate({"marginTop": "0px"}, 250); // if width greater than 1024 pull up the body
  //       }
  //   }
 
  //   $().ready(function() {
  //       window.setTimeout(function() {
  //       feedbackBar_show();
  //    }, 5000);
  //   });