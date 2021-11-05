<template>
  <Nav/>
    
  <router-view v-slot="{ Component }">
    <transition name="moveUp">
      <component :is="Component" :key="$route.fullPath"/>
    </transition>
  </router-view>
  <Footer/>
</template>

<script>
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Nav,
    Footer,
  }
  
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
*{
  margin: 0px;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-width: 220px;
  display: swap;
}

.moveUp-enter-active{
  animation: fadeIn 1s ease-in;
}

@keyframes fadeIn{
  0% { opacity: 0;}
  50% { opacity: 0.5;}
  100% { opacity: 1;}
}

.moveUp-leave-active{
  animation: moveUp 0.3s ease-in;
}

@keyframes moveUp{
  0% { transform: translateX(0);}
  100% { transform: translateX(-150%); }
}

</style>
