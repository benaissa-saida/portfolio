<template>
  <div class="home" >
      <section class="introduction transition-fade">
        <article class="introduction__profile profile">
          <figure class="profile__intro">
            <img class="profile__picture" :src="img" alt="profile__picture">
            <figcaption class="profile__name">Saïda Benaïssa</figcaption>
          </figure>
          <div class="introduction__about about">
            <h1>Développeuse Web - VueJS</h1>
            <p class="about__me">
              Amoureuse d'informatique, de voyage, de gaming, et <em>Netflix&Chill</em>.
              <br/>
              Je suis jeune diplômée prête à continuer d'apprendre, à la recherche d'une <strong>alternance en Front-End</strong>
            </p>
            <router-link to="/projets" class="about__link"> Mes projets</router-link>
          </div>
        </article>
        <aside class="introduction__skills">
          <Skills/>
        </aside>
      </section>
  </div>
</template>

<script >
// @ is an alias to /src
import myimg from '@/assets/images/saïda.png'
import Skills from '@/components/Skills.vue'

function getImg() {
  return myimg
}

export default {
  name: 'Home',
  components: {
    Skills,
  }, 
  data () {
    return {
      img: [],
    }
  },
  async created() {
    let res = await getImg();
    this.img = res;
  }
}
</script>

<style lang="scss" >
$bg-primary: #fff1dd;
$bg-secondary: #EC6C0C;
$color-activeLink: #BE3818;
$max: 100%;
$med: 50%;

.introduction{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-top: 1rem;
  width: $max;
  &__profile{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
  &__about{
    width: $max;
    height: 50%;
  }
}

.profile{
  &__intro{
    margin-bottom: 1.5em;
    width: $med;
    min-width: 100px;
    max-width: 400px;
    display: flex;
    flex-direction: column-reverse;
    box-shadow: -2em 2em 0px -15px $bg-secondary;
  }
  &__picture{
    aspect-ratio: attr(width) / attr(height);
    width: $max;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    height: $max;
  }
  &__name{
    font-size: 1.3rem;
    text-decoration: underline double $bg-secondary;
  } 
}

.about{
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  & h1{
    font-size: 1.5rem;
  }
  &__link{
    text-decoration: none;
    color: $color-activeLink;
    background-color: #fff;
    padding: 0.6em 0.6em;
    font-size: 1.2rem; 
    border-radius: 0.9em;
    border: 1px solid $color-activeLink;
  }
}

</style>