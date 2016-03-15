var canvas;
var context;
var lastClicked="";
var lastHeight=0;
var lastWindowSize;

$(document).ready(function(){
    
    $("#header").load("header.html"); 
    $("#footer").load("footer.html"); 

    var myImage= new Array(); 
    myImage[0]="images/drsemail_subscribe.jpg";       
    myImage[1]="image/drs_.jpg";
    myImage[2]="jellyfish.jpg";
    myImage[3]="flower.jpg"; 

    var ImageCnt = 0;

    function showPic(pic){
        document.getElementById("gallery-display").src = 'url(' + pic.src + ')';
    }

    $('.side_thumb').on('click',function(event){
        var justClicked=$(event.currentTarget);
        var clickedIndex=justClicked.attr('data'); //get index of just clicked
        console.log(clickedIndex);
        //change big image
        $('.content span#selected').attr('id','closed'); //close previous
        $('.content span.'+clickedIndex).attr('id','selected'); //open just clicked
        //update sidebar
        $('.side_thumb#selected').attr('id','closed');
        justClicked.attr('id','selected');
    });

    $('div .thumb a').on('click',function(event){
        console.log($(event.currentTarget).data('href'));
        $('div .thumb img').animate({
            // 'height': '0px',
            'opacity': '0'
        },300,function(){
            window.location.href=$(event.currentTarget).data('href');
            //todo when done
        });
    });

    $('div .thumb img').css('opacity','0');
    var height = $('div .thumb img').css('height');
    // $('div .thumb img').css('height','0');
    $('div .thumb img').animate({
            // 'height': height,
            'opacity': '1'
        },300,function(){
    });

});