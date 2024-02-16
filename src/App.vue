
<script>
import Hero from "./views/Products/Hero.vue"
import Find from "./views/Rooms/Find.vue"
import Services from "./views/Services/Services.vue" 
import Inspiration from "./views/Inspirations/Inspiration.vue"
import Informations from "./views/Footer/Informations"

export default {
  name: 'App',
  components : {Hero,Find,Services,Inspiration,Informations}

};
</script>



<template>

<div>

  <Hero/>
  <Find/>
  <Services/>
  <Inspiration/>
  <Informations/>



</div>





</template>

