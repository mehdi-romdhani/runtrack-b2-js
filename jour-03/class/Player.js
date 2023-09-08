// Class Player 


class Player 
{
    constructor(symbol, IsCurrentPlayer){
        this.symbol = symbol;
        this.IsCurrentPlayer = IsCurrentPlayer;
    }
}

let player = new Player();
player.symbol = "x";
player.IsCurrentPlayer = true;
console.log(player);