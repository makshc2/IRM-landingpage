const header = $( '.header' );
const windowHeight = $( window ).height();
const headerHeight = header.outerHeight();

function onScroll() {
    let position = $( window ).scrollTop();

    if ( position > headerHeight + 100 ) {
        header.css({
            'position': 'fixed',
            'top': '-75px',
            'background-color': '#000'
        })
    }

    if ( position > windowHeight ) {
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        })
    }

    if ( position < headerHeight + 100 ) {
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none'
        })
    }
}

$( window ).on( 'scroll', onScroll );

// Scroll to element
const scrollBtn = $( '[data-scroll]' );

function onClick( e ) {
    e.preventDefault();

    const target = $( this ).attr( 'data-scroll' );
    const dist = $( target ).offset().top;

    $( 'html, body' ).animate( { scrollTop: dist }, 1000, 'swing' );
}

scrollBtn.on( 'click', onClick );