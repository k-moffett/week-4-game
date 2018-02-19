//Start game
    //"#win-counter", "#loss-counter", and "#total-score" need to be set to 0
    // set random values for "#random-number" and ***jewel images

//When a user clicks on a jewel, add its value to "#total-score". If the value meets or excedes "#random-number" restart the game, but save wins and losses

//Restart
    //When the player "#total-score" is equal to "#random-number", "#display-message" should show a "You win!" message, then increase "#win-counter" by one and reset "#random-number", set "#total-score" to 0, and reset jewel values
    // When the player "#total-score" > than "#random-number","#display-message" should show a "You lose!" message  increase "#loss-counter" by one and reset "#random-number", set "#total-score" to 0, and reset jewel values.

$( document ).ready(function() {
    
var game = {
    random_number: "",
    total_score: "",
    jewel_1: "",
    jewel_2: "",
    jewel_3: "",
    jewel_4: "",
    flag: 0,
    flag_2: 0,
    start: 
        function start() {
            var random_number_array = [20,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
            this.random_number = random_number_array[Math.floor(Math.random() * random_number_array.length)];
            $("#random-number").html(this.random_number);
            $("#win-counter").html(0);
            $("#loss-counter").html(0);
            $("#total-score").html(0);
            
        },
    restart:
        function restart() {
            var random_number_array = [20,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
            this.random_number = random_number_array[Math.floor(Math.random() * random_number_array.length)];
            $("#random-number").html(this.random_number);
            $("#total-score").html(0);
        },  
}












game.start()
      });