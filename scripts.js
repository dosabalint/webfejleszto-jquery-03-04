$(function() {
  // elemek összegyűjtése
  let $button = $('button#open-gallery');

  // gombnyomásra reagálás
  $button.click(function() {
    // galéria megnyitása
    OpenGallery();
  });

  //////////////////////////////////////////////////

  // galéria megnyitása
  function OpenGallery() {
    let pswpElement = document.querySelectorAll('.pswp')[0];

    // build items array
    let items = [
      {
        src: 'https://placekitten.com/600/400',
        w: 600,
        h: 400
      },
      {
        src: 'https://placekitten.com/1200/901',
        w: 1200,
        h: 901
      },
      {
        src: 'https://placekitten.com/1200/700',
        w: 1200,
        h: 700
      },
      {
        src: 'https://placekitten.com/600/700',
        w: 600,
        h: 700
      }
    ];

    // define options (if needed)
    let options = {
      // optionName: 'option value'
      // for example:
      index: 0 // start at first slide
    };

    // Initializes and opens PhotoSwipe
    let gallery = new PhotoSwipe(
      pswpElement,
      PhotoSwipeUI_Default,
      items,
      options
    );
    gallery.init();
  }
});
