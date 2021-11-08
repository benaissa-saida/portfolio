<template>
    <section class='page'>
        <h1>404</h1>
        <img :src="gif" alt="4O4 not found gif">
        <div>
            <h2>Vous avez l'air d'être perdu</h2>
            <p>La page que vous recherchez n'existe pas</p>
        </div>
        <router-link to="{name: 'Home'}" class="page_link">RETOUR À L'ACCUEIL</router-link>
    </section>
</template>

<script>
import gif404 from '@/assets/404.gif'
function getGif() {
  return gif404
}

export default {
    data () {
        return {
        gif: [],
        }
    },
    async created() {
        let res = await getGif();
        this.gif = res;
    }

}
</script>

<style lang="scss">
$color-activeLink: #BE3818;
.page{
    height: 80vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    & h1{
        font-size: 3rem;
    }
    & img{
        width: 70%;
    }
    &_link{
        text-decoration: none;
        color: $color-activeLink;
        background-color: #fff;
        padding: 0.6em 0.6em;
        font-size: 1.2rem; 
        border-radius: 0.9em;
        border: 1px solid $color-activeLink;
    }
}

@media (min-width:600px) and (max-width:1000px){
  .page{
    & img{
        width: 420px;
    }
  }
}

@media (min-width:1000px){
  .page{
    & img{
        width: 420px;
    }
  }
}


</style>