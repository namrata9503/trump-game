
var allCards=document.getElementsByClassName("card");
var pick = function(){
    var card = allCards;

    var randomItem = card[Math.floor(Math.random()*card.length)];
    
    console.log(randomItem)

    console.log(randomItem.tagName);
}

