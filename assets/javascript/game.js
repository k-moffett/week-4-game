//Start game
    //"#win-counter", "#loss-counter", and "#total-score" need to be set to 0
    // set random values for "#random-number" and ***jewel images

//When a user clicks on a jewel, add its value to "#total-score". If the value meets or excedes "#random-number" restart the game, but save wins and losses

//Restart
    //When the player "#total-score" is equal to "#random-number", "#display-message" should show a "You win!" message, then increase "#win-counter" by one and reset "#random-number", set "#total-score" to 0, and reset jewel values
    // When the player "#total-score" > than "#random-number","#display-message" should show a "You lose!" message  increase "#loss-counter" by one and reset "#random-number", set "#total-score" to 0, and reset jewel values.

$( document ).ready(function () {
    
var game = {
    start: 
        function start() {
            var random_number_array = [20,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
            var random_gem_array = [1,2,3,4,5,6,7,8,9]
            this.random_number = random_number_array[Math.floor(Math.random() * random_number_array.length)];
            $("#gem-1").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#gem-2").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#gem-3").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#gem-4").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#random-number").html(this.random_number);
            $("#total-score").html(0);
            $("#win-counter").html(0);
            $("#loss-counter").html(0);
            $("#total-score").html(0);

            
        },
    restart:
        function restart() {
            console.log("restart was called")
            var random_number_array = [20,21,22,23,24,25,26,27,28,29,30,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40]
            this.random_number = random_number_array[Math.floor(Math.random() * random_number_array.length)];
            var random_gem_array = [1,2,3,4,5,6,7,8,9]
            $("#total-score").html(0);
            $("#random-number").html(this.random_number);
            $("#gem-1").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#gem-2").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#gem-3").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
            $("#gem-4").attr("value", random_gem_array[Math.floor(Math.random() * random_gem_array.length)])
        },  
}

function add_jewel_values(value) {
var old_value = $("#total-score").html()
$("#total-score").html((value*1)+(old_value*1))
var new_value = $("#total-score").html()
lose(new_value)
}

function lose(new_value){
    console.log(new_value, "new value")
    var random_number = $("#random-number").html()
    var losses = $("#loss-counter").html()
    console.log(random_number, "random")
    console.log(losses, "losses")
    if (new_value > random_number){
        $("#loss-counter").html((losses*1)+1)
        game.restart()
    } else {
        win(new_value)
    }
}

function win(new_value) {
var random_number = $("#random-number").html()
var wins =  $("#win-counter").html()
if (new_value === random_number) {
    $("#win-counter").html((wins*1)+1)
    game.restart()
}}



$("#gem-1").on("click", function get_jewel_values() {
    var value = $("#gem-1").attr("value")
    add_jewel_values(value)
})
$("#gem-2").on("click", function get_jewel_values() {
    var value = $("#gem-2").attr("value")
    add_jewel_values(value)
})
$("#gem-3").on("click", function get_jewel_values() {
    var value = $("#gem-3").attr("value")
    add_jewel_values(value)
})
$("#gem-4").on("click", function get_jewel_values() {
    var value = $("#gem-4").attr("value")
    add_jewel_values(value)
})
game.start()
      });