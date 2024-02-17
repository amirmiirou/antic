<script>
import Swiper from 'swiper';
import 'swiper/css';


export default {
  name: 'Find',
  data() {
    return {
      swiper: null,
      slides: [
       {title : "Bedroom",path : '../../assets/images/d.png'} 
        ] 
    };
  },
  mounted() {
    this.swiper = new Swiper('.swiper-container', {
      // Swiper options here
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  },
/*
  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  },
*/
};



</script>




<template>
<div id="room" class="
xl:pl-20 xl:pr-20 
lg:pl-20 lg:pr-20 
md:pl-10 md:pr-10  
sm:pl-10 sm:pr-10
pl-10 pr-10
  pt-14 bg-page">


  <h1 class="font-normal  text-a leading-b text-c font-vart">Find your room</h1>
<div class="
xl:pt-20 xl:flex xl:flex-row
lg:pt-20  lg:flex lg:flex-row
md:pt-20 md:flex md:flex-col 
sm:pt-20 sm:flex sm:flex-col

pt-20 flex flex-col



">



<div class="">

<p class="
xl:w-44  font-normal text-six leading-sept text-c 
lg:w-44
md:w-full md:pb-7
sm:w-full sm:pb-7 w-full pb-7
font-vart

">

Dining room,<br class="md:hidden sm:hidden hidden"> bedroom, bathroom<br class="md:hidden sm:hidden hidden"> or office. Find what<br class="md:hidden sm:hidden hidden"> you need
</p>

</div>


  <div class="swiper-container pr-48 h-80 ml-2  
  
  
  xl:w-2/4
  lg:w-2/4
  md:w-full
  sm:w-full
  w-screen
  
  ">
  
  <div class="swiper-wrapper  ">
  


    <div class="swiper-slide bg-page flex justify-start  ">
     <div class="relative flex justify-start ">
        <img class="h-80"  src="../../assets/images/d.png" />
    <h2 class="pl-3 font-vart text-brownLight">New arrivals</h2>
    <h1 class="absolute bottom-20 left-10 font-normal text-a leading-ss text-brown font-merri">bedroom</h1>
  </div>
  
  
     
     
    </div>

    <div class="swiper-slide bg-page flex justify-start ">
   
  
  <div class="relative flex justify-start">
        <img class="h-80" src="../../assets/images/f.png" />
    <h2 class="pl-3 text-brownLight font-vart">New arrivals</h2>
    <h1 class="absolute bottom-20 left-24 font-normal text-a leading-ss text-brown font-merri">Living<br/>room</h1>
  </div>
     
     
    </div>
    
    


  

    
  </div>
  <!--
  <div class="swiper-pagination"></div>
  <div class="swiper-button-prev"></div>
  <div class="swiper-button-next"></div>
  <div class="swiper-scrollbar"></div>-->
  </div>



</div>

</div>



</template>



