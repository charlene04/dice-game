$(document).ready(function(){
    sum = 0
    counter = 0
    images = ["./img/dice-1.png", "./img/dice-2.png", "./img/dice-3.png", "./img/dice-4.png", "./img/dice-5.png", "./img/dice-6.png"]

    
    
    $('#rollDice').click(function(){
        counter++
        num =  Math.floor(Math.random() * 6 + 1);
        sum += num
        $('#container div:nth-of-type(2) h3').text(num)
        $('#container div:nth-of-type(3) img').attr('src', images[num-1])
        $('#container div:nth-of-type(4) h2').text(sum)
        if(counter == 5){
            $('#container section div:nth-of-type(2)').addClass("display")
            $('#container section div:nth-of-type(1)').removeClass('display')
            $('#container article').removeClass('display')
            if(sum > 25){
                $('#container article div p').text('Congratulations. You won the game!')
            }
            
        }
    })
   
    $('#resetGame').click(function(){
        location.reload(true);
    })

})




