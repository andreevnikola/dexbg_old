$(document).ready(function(){

    var phoneMenu = false;
    var rotation = 0;

    $('#log_in').mouseover(() => {
        $('#register').css('borderColor', 'transparent')
    });
    $('#log_in').mouseout(() => {
        if(window.innerWidth > 800){
            $('#register').css('borderColor', 'white');
        }
    });

    $('#more').click(function(){
        if(phoneMenu == true){
            $('#phoneMenu').hide('fast');
            $('#more').css('color', 'white');
            $('#more').css('background-color', 'transparent');
            rotateAnim = setInterval(() => {
                rotation = rotation + 5;
                $('#more').css('transform', `rotate(${rotation}deg)`);
                if(rotation >= 0){
                    clearInterval(rotateAnim);
                }
            }, 3);
            phoneMenu = false;
        }else{
            $('#phoneMenu').show('fast');
            phoneMenu = true;
            $('#more').css('color', 'black');
            $('#more').css('background-color', 'white');
            rotation = 0;
            rotateAnim = setInterval(() => {
                rotation = rotation - 5;
                $('#more').css('transform', `rotate(${rotation}deg)`);
                if(rotation <= -90){
                    clearInterval(rotateAnim);
                }
            }, 3);
        }
    });

});