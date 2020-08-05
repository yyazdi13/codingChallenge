/*An ‘in shuffle’ is a perfect shuffle on a standard deck of 52 playing cards
that splits the deck in half, then interleaves cards starting with the top
half.
 
* What is the position of the first card after the 7th shuffle?
        if we represent the deck as an array,
        the first element will move to index 21 (see line 52)

* How many times must one perform the shuffle so that the top card becomes
the bottom card?
        it will take at least 25 shuffles (see line 45)

* When do the first and last cards in the deck touch?
        it will take about 24 shuffles (see line 48)*/

// I'll start by making a function tha takes two values: an array and 
// a number indicating the number of times it should be shuffled

const shuffle = (deck, k) => {
    
    //initialize a new deck
    var newDeck = [];

    //split the deck in half by splicing at the middle
    var half = deck.length / 2;
    var topHalf = deck.splice(half);
    var bottomHalf = deck.splice(0,half);

    var i = 0;
    var j = 0;

    //add the cards starting from the top half
    while(i < topHalf.length || j < bottomHalf.length){
        if (topHalf[i] !== undefined){
            newDeck.push(topHalf[i]);
            i++;
        }
        if (bottomHalf[j] !== undefined){
            newDeck.push(bottomHalf[j]);
            j++;
        };
    };

    //check to see when the first element becomes the last
    // if (newDeck[newDeck.length-1] === 1) return k;
    
    // check to see when first and last element touch
    if(newDeck.indexOf(1) == newDeck.indexOf(52)+1 || newDeck.indexOf(1) == newDeck.indexOf(52)-1) return newDeck;

    //base case
    // if(k === 1) {
    //     console.log(newDeck.indexOf(1)); 
    //     return newDeck;
    // };

    //recursive call until we reach k shuffles (do k-1), or we can do
    // k +=1 to see when line 45 or 48 become true when we pass in k as 0 to start
    return shuffle(newDeck, k += 1);
};

var deck = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,
    26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52];

console.log(shuffle(deck,0));