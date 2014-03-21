TinyModal.open( width, height, elements )
TinyModal.close()
------------------------------------

    var pElement = document.createElement( 'p' );
    pElement.textContent = 'Hello world!';

    TinyModal.open( 400, 300, pElement );

    // Do some other things

    TinyModal.close();
