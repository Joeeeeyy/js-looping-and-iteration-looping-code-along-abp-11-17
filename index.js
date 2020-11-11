function writeCards( namesArray, event ) {
  let thankYouCards = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    thankYouCards.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!` )
  }
  return thankYouCards
}

let countDown = 11;
function countDown( countDown ) {
  while ( countdown > 0 ) {
    console.log( countDown );
    countdown -= 1;
  }
  console.log( countDown );
}
