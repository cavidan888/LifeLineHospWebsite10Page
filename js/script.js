

$(document).ready(function () {

    var count = 0;
    $(".search>a").on("click", function () {

        count++;
        console.log(count);

        if (count % 2 != 0) {
            $(".search-bar").css("visibility", "visible");
            $(".search-bar").css("opacity", "1");
            $(".search-bar").css("transition", "0.5s ease");
        }
        else {
            $(".search-bar").css("visibility", "hidden");
            $(".search-bar").css("transition", "0.5s ease");
            $(".search-bar").css("opacity", "0");
        }

       
       
    })

    $(".brand>img").css("top", "0")
    $(".brand>img").css("transition", "0.5s ease")



        

})

 $(document).ready(function(){

      var ocunt2 = 0;

   var b =  $(".navIcon").on("click",function(){

    ocunt2++;
   

    if (ocunt2 % 2 != 0) {

         $(".side-Bar").css("margin-left","0");
    }
  else{

    $(".side-Bar").css("margin-left","-300px");
  }
   
     
   })


   $(".closeBtn").on("click",function(){
      $(".side-Bar").css("margin-left","-300px");
   })

 })


 $(document).ready(function(){

  var count3 = 0;

    var a = $(".sideBarMenu>ul>li");

    for (var i = 0; i < a.length;i++) {
       
       // var panel = this.nextElementSibling;

      $(a[i]).click(function(){

        count3++;

        if (count3 %2 != 0) {


           var  c =   $(this).children().css("display","block")



        }


        else{
           var  c =   $(".sideBarMenu>ul>li>ul").css("display","none")
        }
         
      })
        
    }


    // a.on("click",function(){

    // })

 })


$(document).ready(function(){

  var count3 = 0;

   var akardion =  $('.accordion');
   // var c = akardion.find(".panel").hide();
   var c = $(document).find(".panel").hide();

   akardion.on("click",function(){
       
       count3++;

       $(this).next().slideToggle().siblings(".panel").slideUp();
       
       if (count3%2!=0) {
         $(this).css("border-color","orange")
       }
       else{
        $(this).css("border-color","gray")
        $(".accordion").css("border-color","gray")
       }

   })

})
 

 $(document).ready(function(){
    var allLi = $(".sliderBody .slider>ul>li").length;
    var liLength = 555;
    var totalWidth = allLi*liLength;
    var liValue = 0;

    $(".sliderBody .slider>ul").css("width",totalWidth + "px");

    $(".sliderBody .slider .buttons .right").on("click",function(){
       if (liValue < allLi - 1) {

          liValue++;

          newValue = liLength * liValue;

          $(".sliderBody .slider>ul").animate({marginLeft: "-" + newValue + "px"},100);
       }
       else{
        liValue = 0;
          $(".sliderBody .slider>ul").animate({marginLeft: "0"},100);
       }
    })

      
      $(".sliderBody .slider .buttons .left").on("click",function(){
       if (liValue > 0) {

          liValue--;

          newValue = liLength * liValue;

          $(".sliderBody .slider>ul").animate({marginLeft: "-" + newValue + "px"},100);
       }
       else{
        liValue = 4;
          $(".sliderBody .slider>ul").animate({marginLeft: "0"},500);
       }
    })
      
    
 })

 // $(document).ready(function(){
 //    $("#opSec").innerWidth() = $(window).innerWidth();
 //    $("#opSec").innerHeight() = $(window).innerHeight();
    
 // })

 $(document).ready(function(){
     
      function addIframe(){

      $('<iframe>', {

         src: 'https://www.youtube.com/embed/fcYazsR6w-k',
         id:  'myFrame',
         frameborder: 0,
         width:'100%',
         height: '100%',
         scrolling: 'no'
         }).appendTo('.modalContent');

}
  
   
   $("#modal").hide();

   $(".openModal").on("click",function(){
      $("#modal").show();
       addIframe();

      $(".closeBtn").on("click",function(){
        $("#modal").hide();
          $('iframe').remove();
      })
   })
 })

 $(document).ready(function(){
    
    var lengthOfDiv = $(".sliderContainer").length;
    var sizeOfDiv = $(".sliderContainer").innerWidth();
    var clickCount = 0;

    $(".Sag").on("click",function(){

       clickCount++;

      if (clickCount < lengthOfDiv-1) {

        newDivSize = clickCount*sizeOfDiv;
        $(".bigContainer").animate({marginLeft: "-"  + newDivSize + "px"},300)

      }
      else{
        clickCount = 0;
        $(".bigContainer").animate({marginLeft: "0"},300)
      }

    })
  

    $(".Sol").on("click",function(){

       

      if (clickCount > 0) {

        clickCount--;

        newDivSize = clickCount*sizeOfDiv;
        $(".bigContainer").animate({marginLeft: "-"  + newDivSize + "px"},300)

      }
     

     

 })

  })

 $(document).ready(function(){
       
     var digits = $("#countUp .cuIconContainer .first");
      var digits2 = $("#countUp .cuIconContainer .second");
      var digits3 = $("#countUp .cuIconContainer .third");
      var digits4 = $("#countUp .cuIconContainer .fourth");

     var count = 0;
     var count2 = 0;
     var count3 = 0;
     var count4 = 0;

     var id = setInterval(dondur,0.1)

    function dondur(){

     if (count>=2340) {
        clearInterval()
     }
     else{
       count+=5;
       digits.html(count);
     }

    
    if (count2>=335) {
        clearInterval()
     }
     else{
       count2+=1;
       digits2.html(count2);
     }

     
    if (count3>=1305) {
        clearInterval()
     }
     else{
       count3+=5;
       digits3.html(count3);
     }

     if (count4>=1540) {
        clearInterval()
     }
     else{
       count4+=5;
       digits4.html(count4);
     }

   }
 })


 $(document).ready(function(){
    
    var allparagraphs = $(".prgrphCont").length;
    var allparagraphsWidth = $(".prgrphCont").innerWidth();
    var newCavo = allparagraphs*allparagraphsWidth;
    var value = 0;

    $(".patSliderContainer").css("width", newCavo + "px");


    
    $(".patNext").on("click",function(){

         value++;
         slideSize = value*allparagraphsWidth;

         if (value <= allparagraphs-1) {

             $(".patSliderContainer").animate({marginLeft: "-" + slideSize + "px"},200)
         }
         else{
          value = 0;
           $(".patSliderContainer").animate({marginLeft: "0"},200)
         }
    })


     $(".patPrev").on("click",function(){

         if (value > 0) {
            value--;
            slideSize = value*allparagraphsWidth;
            $(".patSliderContainer").animate({marginLeft: "-" + slideSize + "px"},200)
         }
    })



     $(".inputCont input").on("click",function(){

         var a = $(".inputCont input");

         for (var i = 0; i<a.length;i++) {
                    
            $(a[i]).click(function(){

               $(this).attr('class','active');
            })    
        }
     })



     var b = $(".slidePartners");

     var slidePartners = $(".slidePartners").length;
     var slidePartnersWidth = $(".slidePartners").innerWidth();
    var  myVal = 0;
     var cntnrSize = slidePartners*slidePartnersWidth;

     $(".bigPartnerContainer").css("width",cntnrSize + "px");

    function Right(){

          myVal++;
           
         if (myVal <= slidePartners - 1) {

          var myNewSize =  myVal * slidePartnersWidth;

           $(".bigPartnerContainer").animate({marginLeft: "-"  + myNewSize + "px"},600)

         }

         else{
          
           myVal = 0;

           $(".bigPartnerContainer").animate({marginLeft: "-"  + myNewSize + "px"},600)
         }

         
    }


    setInterval(function(){
       Right();
    },3000);


    $(".scrolTopBtn button").click(function(){
       $("html , body").animate({

          scrollTop:0
       },'slow');
    })


    $(window).on("scroll",function(){

      if ($(window).scrollTop()) {
       $("#nav-bar").addClass("navActive").animate({duration:500},500);
       $(".search-bar").css("border-color","#000");
   
      }
      else{
        $("#nav-bar").removeClass("navActive");
        $(".search-bar").css("border-color","transparent");
      }
    })

 })


 $(document).ready(function(){

    var realSlideCount = $(".realSCont").length;
    var sliderCntnr =  $(".bigSContainer");
    var realSliderWidth = $(".realSCont").innerWidth();
    var allSize = realSlideCount*realSliderWidth;
    cav = 0;
    

    sliderCntnr.css("width", 3240  +"px")

    
        
        

       for (var i = 0;i < $(".bubbleBtn").length;i++) {



       $(this).click(function(){


         $(this).css("background","red");

         cav++;

         newCav = (cav * realSliderWidth) - 15;

        if (cav < realSlideCount - 1) {

           sliderCntnr.animate({marginLeft: "-" + newCav +"px"},500)
        }

        
         

       })
        
       }
    })

 
