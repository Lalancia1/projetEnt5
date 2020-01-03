/**
 * Created by sstienface on 03/12/2018.
 */

//d'abord la variable aléatoire des trous
 var holes =["hole1", "hole2","hole3", "hole4","hole5","hole6"];
var X=Math.floor(Math.random()*6);

//const holes = // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "hole";

var bt=document.querySelector('#startGame');

//var holes= holes[X];

var counter=0;
$('document').ready(function (){
   X=Math.floor(Math.random()*6);
    var min=200;
    var max=1000;

    var Y=Math.floor(Math.random()*(max-min));

        $('#startGame').click(function (){
            X=Math.floor(Math.random()*6);
            if($(document.querySelector('.mole')[X]).css("top", "0%")){
                console.log("good");
               // console.log(Math.floor(Math.random()*(max-min)));
                 setTimeout(startGame, 10);
                 setTimeout(taupe,Math.floor(Math.random()*(max-min)));
                setTimeout(lesTaupes1,Y);
                setTimeout(lesTaupes2,Y);
                setTimeout(lesTaupes3,Y);
                setTimeout(lesTaupes4,Y);
                setTimeout(lesTaupes5,Y);
            }
        });

});

 function startGame(){
     console.log("in start game");
     $(document).ready(function () {
        // console.log("get");
        // console.log(X);
         $('.hole').eq(X).each(function(){     //le each pour un après l'autre
             console.log("dans");

             if ($('.mole').eq(X).css('top','100%')){
                 console.log("inside");
                 ($('.mole').eq(2)).css('top','0%');

             }
             });
         });


 }
 //
var min=200;
var max=1000;

var Y=Math.floor(Math.random()*(max-min));
function taupe(){
    var   idMole ='.mole';
     console.log("taupe is there");
    if ($(idMole).eq(X).css("top", "0%")){
        $(idMole).eq(X).click(function(){

            $("#startGame").hide();
            console.log("inside234");

            if($('.mole').eq(X).css('top','0%')){
                console.log("change it");
                $('.mole').eq(X).css('top', '100%');
            }

            else{
                $("#startGame").show(Y);
                lesTaupes1();
                lesTaupes2();
                lesTaupes3();
                lesTaupes4();
                lesTaupes5();
            }
        });
    }

}

function lesTaupes1(){
    if( $('.idMole').eq(X).click()){

        $('.mole').eq(2).css('top','0%');


    }

}

function lesTaupes2(){
    if( $('.mole').eq(2).css('top','0%'))
    $('.mole').eq(2).click(function(){
        counter++;
        document.querySelector('.score').innerHTML='vous avez'+' '+counter+' '+'points';
        $('.mole').eq(2).css('top','100%');
        $('.mole').eq(3).css('top','0%');
        }

    );
}
function lesTaupes3(){
    if( $('.mole').eq(3).css('top','0%')){
        $('.mole').eq(3).click(function(){
            counter+=2;
            document.querySelector('.score').innerHTML='vous avez'+' '+counter+' '+'points';
            $('.mole').eq(3).css('top','100%');
            $('.mole').eq(4).css('top','0%');
        });
    }
}

function lesTaupes4(){
    if( $('.mole').eq(4).css('top','0%')){
        $('.mole').eq(4).click(function(){
            counter+=3;
            document.querySelector('.score').innerHTML='vous avez'+' '+counter+' '+'points';
            $('.mole').eq(4).css('top','100%');
            $('.mole').eq(5).css('top','0%');
        });
    }
}
function lesTaupes5(){
    if( $('.mole').eq(5).css('top','0%')){
        $('.mole').eq(5).click(function(){
            counter+=6;
            document.querySelector('.score').innerHTML='vous avez'+' '+counter+' '+'points';
            $('.mole').eq(5).css('top','100%');
            $('.mole').eq(6).css('top','0%');
        });
    }
}


    /*const scoreBoard = //utiliser la méthode jquery appropriée pour selectionner l'élément ayant pour classe "score";
const moles = // utilier la méthode jquery appropriée pour selectionner les éléments ayant pour classe "mole";*/
