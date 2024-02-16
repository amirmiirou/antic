<script>
import Swiper from 'swiper';
import 'swiper/css';
export default {


name : "Inspiration",
data() {
    return {
      swiper: null,
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

  beforeDestroy() {
    if (this.swiper) {
      this.swiper.destroy();
    }
  },

}
</script>


<template>

<div id="insp" class=" 
lg:pr-20  lg:pl-20 
md:pr-10  md:pl-10
pr-10  pl-10 
sm:pr-10  sm:pl-10 
    xl:pr-20  xl:pl-20 mt-14 ">

    <div class=" pb-6 md:flex md:flex-col sm:flex sm:flex-col flex flex-col xl:flex xl:flex-row xl:justify-between lg:flex lg:flex-row  lg:justify-between   ">
<div class="pb-5">
  <h1 class="font-normal text-g leading-h text-blackblack font-merri">Be aware of the latest trends</h1>
   <p class="mb-5 font-normal text-lg text-brownLight font-vart">Stay informed of new trends, but also of our various offers.</p>
   <router-link to="" class="  font-karla  font-bold   text-re leading-sept text-brown">Learn more</router-link>
</div>
  <div class="gap-5 md:flex md:flex-col sm:flex sm:flex-col flex flex-col xl:flex xl:flex-row lg:flex lg:flex-row ">
    <input class="h-10 " type='text' placeholder="email@adress.com"/>
    <v-btn  class="w-20  text-white bg-black">Subscribe</v-btn>
  </div>

</div>

<div class=" swiper-container  h-80 xl:w-2/4 lg:w-2/4 w-screen md:w-screen sm:w-screen pr-48 
  

">
  
  <div class="swiper-wrapper ">
  


    <div class="swiper-slide  bg-white  ">
   
      <img  class="w-72 h-96" src="../../assets/images/c.png"/>
  
  
  
     
     
    </div>

    <div class="swiper-slide  bg-white ">
      <img  class="w-72 h-96" src="../../assets/images/b.png"/>

  
  
     
     
    </div>


    <div class="swiper-slide bg-white  ">
      <img  class="w-72 h-96" src="../../assets/images/a.png"/>

  
  
     
     
    </div>




    <div class="swiper-slide bg-white  ">
      <img class="w-72 h-96" src="../../assets/images/d.png"/>

  
  
     
     
    </div>



  
    
    


  

    
  </div>
  
  
  </div>

<div class="mt-24 ">

<h1 class=" pb-4 font-normal text-4xl text-iii font-merri">Inspirations</h1>
<p class="font-normal text-lg text-brownLight font-vart">Our experts are keen to stay on top of trends in<br> order to offer you new inspirations for your<br> interior and exterior every day. Remember that<br> to inspire you we have to inspire ourselves and<br> we want to share that with you.</p>

</div>

</div>
</template>

