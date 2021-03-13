$( document ).ready( function () {
  $( ".main__bar" ).click( function () {
    $( ".main" ).addClass( 'main--blur' );
    $( "body" ).css( { overflow: 'hidden' } )
    $( ".aside" ).animate( { width: '60%' } );
  } );
  $( ".aside__close" ).click( function () {
    $( ".main" ).removeClass( 'main--blur' );
    $( "body" ).css( { overflow: 'auto' } )
    $( ".aside" ).animate( { width: '0' } );
  } );
} );