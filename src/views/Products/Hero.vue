<script>
// eslint-disable-next-line to ignore the next line.
/* eslint-disable */

export default {


name :  "Hero",
methods : {


activateRooms(){
document.getElementById("room").scrollIntoView({behavior:"smooth"})

},
activateServices(){
document.getElementById("service").scrollIntoView({behavior:"smooth"})

},activateInspiration(){
document.getElementById("insp").scrollIntoView({behavior:"smooth"})

},
activateFooter(){
document.getElementById("info").scrollIntoView({behavior:"smooth"})

},
}



}

</script>



<template>
<div id="product" class=" 
xl:bg-page xl:flex xl:flex-start   
lg:bg-page lg:flex lg:flex-start  ">
    

<div class="   
xl:static xl:w-2/4  xl:pl-20 xl:pr-20 xl:h-screen 
lg:static lg:w-2/4  lg:pl-20 lg:h-screen
md:absolute  md:top-0  md:w-full md:h-full  md:pl-10

sm:absolute sm:top-0  sm:w-full sm:h-full sm:pl-10 

absolute left-0 top-0 w-full h-full  pl-10
 "
 >

<div class="
sm:w-full sm:flex sm:flex-col sm:items-center
md:w-full md:flex md:flex-col md:items-center 

w-full flex flex-col items-center
xl:w-full xl:flex xl:flex-col xl:items-start
lg:w-full lg:flex lg:flex-col lg:items-start
">


    <h3 class="xl:pt-28 xl:font-bold xl:text-sm xl:text-brown
    lg:pt-28 lg:font-bold lg:text-sm lg:text-brown
    md:pt-28 md:font-bold md:text-sm md:text-white
    sm:pt-28 sm:font-bold sm:text-sm sm:text-white
    pt-28 font-bold text-sm text-white font-varta">HOME DESIGN</h3>

<h1 class="xl:pt-8 xl:font-normal xl:text-dix xl:leading-onze xl:text-brown font-merri
lg:pt-8 lg:font-normal lg:text-dix lg:leading-onze lg:text-brown
md:pt-8 md:font-normal md:text-dix md:leading-onze md:text-white
sm:pt-8 sm:font-normal sm:text-dix sm:leading-onze sm:text-white
pt-8 font-normal text-dix leading-onze text-white">Elegance for<br/>
Interiors &<br/> Exteriors</h1>

<p class="xl:pt-5 xl:text-brownLight xl:font-normal xl:text-douze xl:leading-treize font-varta
lg:pt-5 lg:text-brownLight lg:font-normal lg:text-douze lg:leading-treize
md:pt-5 md:text-white md:font-normal md:text-douze md:leading-treize
sm:pt-5 sm:text-white sm:font-normal sm:text-douze sm:leading-treize
pt-5 text-white font-normal text-douze leading-treize


">We provide everyone with modern,<br/> 
trendy, quality furniture</p>



    
    
    
    
    
    
        <img @click="activateFooter"  class=" mt-8"  src="../../assets/images/Scroll Down.png" />
    





</div>



</div>



<img class="  w-screen h-screen md:w-screen md:h-screen sm:w-screen sm:h-screen    lg:w-2/4 lg:h-screen  xl:w-2/4 xl:h-screen"  src="../../assets/images/photoHome.png" alt="photoHome" />








<div class=" lg:pr-20  lg:pl-20 
md:pr-10  md:pl-10
pr-10  pl-10 
sm:pr-10  sm:pl-10 
    xl:pr-20  xl:pl-20  absolute top-2 w-screen flex   justify-between items-center
    


">

<div class='flex w-2/4   pr-10  items-center  ' >

<div class=" h-full flex flex-col justify-center">
<h2 class="  
xl:pr-10   xl:font-bold  xl:w-trois   xl:text-un xl:leading-deux   xl:text-brown 
lg:pr-10   lg:font-bold  lg:w-trois   lg:text-un lg:leading-deux   lg:text-brown
md:pr-10   md:font-bold  md:w-trois   md:text-un md:leading-deux   md:text-white 
sm:pr-10   sm:font-bold  sm:w-trois   sm:text-un sm:leading-deux   sm:text-white 
pr-10   font-bold  w-trois   text-un leading-deux   text-white 

font-merri
">antic</h2>
</div>

<div class=" 
md:hidden
sm:hidden
hidden
  
xl:flex xl:flex-grow xl:justify-between xl:h-full xl:items-center
lg:flex lg:flex-grow lg:justify-between lg:h-full lg:items-center


">
<router-link @click="" class="w-cinq  font-normal text-six leading-sept  no-underline font-varta text-c" to="" >Products</router-link>

<router-link @click="activateRooms" class="w-cinq  font-normal  text-six leading-sept  no-underline font-varta text-c"  to="" >Rooms</router-link>

<router-link @click="activateServices" class="w-cinq  font-normal  text-six leading-sept  no-underline font-varta text-c" to="" >Services</router-link>

<router-link @click="activateInspiration" class="w-cinq font-normal  text-six leading-sept  no-underline font-varta text-c" to="" >Inspirations</router-link>

</div>
    
</div>



<div class="


xl:w-2/4 xl:h-full xl:flex xl:flex-grow xl:justify-end 
lg:w-2/4 lg:h-full lg:flex lg:flex-grow lg:justify-end 
md:hidden
sm:hidden
hidden
">
    <span class="border  border-white rounded-full ">
        <img @click="activateFooter" class='p-2'   src="../../assets/images/i.png" />
    </span>
</div>

<div class="

xl:hidden
lg:hidden

"><img src="../../assets/images/Menu.png"/></div>

</div>



</div>


</template>


