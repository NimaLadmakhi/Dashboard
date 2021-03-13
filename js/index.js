$( document ).ready( function () {
  $( ".main__bar" ).click( function () {
    if ( window.innerWidth >= 1000 && window.innerWidth <= 1300 ) {
      $( ".aside" ).animate( { width: '45%' } );
      $( ".aside__text" ).css( { display: 'inline-block' } )
      $( ".aside__close" ).css( { display: 'inline-block' } )
    } else {
      $( ".aside" ).animate( { width: '60%' } );
      $( ".aside__text" ).css( { display: 'none' } )
    }
    $( ".main" ).addClass( 'main--blur' );
    $( "body" ).css( { overflow: 'hidden' } )
  } );
  $( ".aside__close" ).click( function () {
    if ( window.innerWidth >= 1000 && window.innerWidth <= 1300 ) {
      $( ".aside" ).animate( { width: '10%' } );
      $( ".aside__text" ).css( { display: 'none' } )
      $( ".aside__close" ).css( { display: 'none' } )
    } else {
      $( ".aside" ).animate( { width: '0' } );
    }
      $( ".main" ).removeClass( 'main--blur' );
    $( "body" ).css( { overflow: 'auto' } )
  } );
} );