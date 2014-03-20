// -----------------------------------------------------------------------------
// tinyModal JavaScript
// by Josh Forisha <josh@forisha.com>
// -----------------------------------------------------------------------------

/**
* Displays a modal window of supplied height and width, populated with the given
* elements as an array.
*
* @param {Number} width - How wide the modal box should be
* @param {Number} height - How tall the modal box should be
* @param {Array, Element} elements - An array of elements to populate the modal
*   box with
*/

window.tinyModal = function( width, height, elements ) {
  var tm = window.tinyModal;

  // Bind close behavior
  if( 'close' in tm === false ) {
    tm.close = function() {
      tm.mask.style['display'] = 'none';
      document.body.removeChild( tm.box );
      delete tm.box;
    };
  }

  // Build mask if we don't already have it
  if( 'mask' in tm === false ) {
    var mask = document.createElement( 'div' );
    mask.style['background-color'] = 'rgba(0,0,0, 0.6)';
    mask.style['display'] = 'block';
    mask.style['height'] = '100%';
    mask.style['left'] = 0;
    mask.style['overflow'] = 'hidden';
    mask.style['position'] = 'fixed';
    mask.style['top'] = 0;
    mask.style['width'] = '100%';
    mask.style['z-index'] = 100;
    tm.mask = mask;
    mask.addEventListener( 'click', tm.close, false );
    document.body.appendChild( mask );
  }
  else tm.mask.style['display'] = 'block';

  // Create the modal box
  var box = document.createElement( 'div' );
  box.setAttribute( 'id', 'TinyModalBox' );
  box.style['background-color'] = '#fff';
  box.style['height'] = height + 'px';
  box.style['left'] = '50%';
  box.style['margin-left'] = '-' + Math.round( width / 2 ) + 'px';
  box.style['margin-top'] = '-' + Math.round( height / 2 ) + 'px';
  box.style['position'] = 'fixed';
  box.style['top'] = '50%';
  box.style['width'] = width + 'px';
  box.style['z-index'] = 101;

  // Populate the modal box
  if ( elements instanceof Array === false ) elements = [ elements ];
  for ( var i = 0, l = elements.length; i < l; i++ )
    box.appendChild( elements[i] );

  // Replace or append the new modal box
  if ( 'box' in tm ) document.body.replaceChild( box, tm.box );
  else document.body.appendChild( box );
  tm.box = box;
};
