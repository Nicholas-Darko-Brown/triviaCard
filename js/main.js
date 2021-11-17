$(document).ready(() =>{
    $('.hint-box').on('click', () => {
      $('.hint').slideToggle(500);
    });
  
    $('.wrong-answer-one').on('click', () => {
      $('.wrong-text-one').fadeOut();
      $('.frown').show(400);
    });
  
    $('.wrong-answer-two').on('click', () => {
      $('.wrong-text-two').fadeOut();
      $('.frown').show(400);
    });
  
    $('.wrong-answer-three').on('click', () => {
      $('.wrong-text-three').fadeOut();
      $('.frown').show(400);
    });
  
    $('.correct-answer').on('click', () => {
      $('.frown').hide();
      $('.smiley').show();
       $('.wrong-text-one').fadeOut();
       $('.wrong-text-two').fadeOut();
       $('.wrong-text-three').fadeOut();
    });
  
  //Reset button
    $('.reset').on('click', () => {
       $('.wrong-text-one').fadeIn();
       $('.wrong-text-two').fadeIn();
       $('.wrong-text-three').fadeIn();
  
       $('.frown').hide();
       $('.smiley').hide();
    });
  });