//4 quotes

var content = ["“Be yourself; everyone else is already taken.”― Oscar Wilde",

"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control“I'm selfish, impatient and a little insecure.",

"“So many books, so little time.”",

"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"]

var quote = document.getElementById("quote")
var button = document.getElementById("btn")
button.onclick = function(){
    var random = content[Math.floor(Math.random() * content.length)]
    /*if(quote == content){
        quote = content[Math.floor(Math.random() * content.length -1)]
    }*/
    /*function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }*/
    quote.innerHTML = random
}
