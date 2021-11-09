<template>
    <section class="container">
        <div class="project">
            <a :href="project.href" target="_blank" :key="project" v-for="project in projects" :title='`${ project.title }`' class="project__link">    
                <span class="project__link--icon"><i :class="project.icon"></i></span>
                <img class="project__link--img" :src="project.img" alt="{{project.id}}">
                <div class="project__info">
                    <h1 class="project__info--title">{{project.title}}</h1>
                    <p class="project__info--descri">{{project.descri}}</p>
                    <span class="project__info--techno"><strong>{{project.technos}}</strong></span>
                </div>
            </a>
        </div>
    </section>
</template>

<script>
import reservia from "@/assets/images/reservia.jpg";
import ohmyfood from "@/assets/images/ohmyfood.jpg";
import orinoco from "@/assets/images/orinoco.jpg";
import lachouetteagence from "@/assets/images/la-chouette-agence.jpg";
import piquante from "@/assets/images/piquante.png";
import groupomania from "@/assets/images/groupomania.png";

function getDataProject(){
    return [
        {
            href: 'https://reservia-project.netlify.app', 
            title: 'RESERVIA', 
            img: reservia,
            descri: `Intégration maquette responsive pour un site de réservation d'hébergements`,
            technos: 'HTML, CSS, Responsive',
            id: 'Reservia'
        },
        {
            href: 'https://ohmyfood-project.netlify.app', 
            title: 'OHMYFOOD', 
            img: ohmyfood,
            descri: `Développement et dynamisation d'un site gastronomique`,
            technos: 'HTML, CSS, SASS, Animations, Responsive',
            id: 'OHMYFOOD'
        },
        {
            href: 'https://orinoco-projet.netlify.app', 
            title: 'ORINOCO', 
            img: orinoco,
            descri: `Développement du front-end d'un site e-commerce`,
            technos: 'HTML, CSS, JAVASCRIPT, Responsive',
            id: 'ORINOCO'
        },
        {
            href: 'https://lachouetteagence-projet.netlify.app', 
            title: 'LA CHOUETTE AGENCE', 
            img: lachouetteagence,
            descri: `Optimisation et accessibilité d'un site existant`,
            technos: 'SEO, Responsive',
            id: 'LA CHOUETTE AGENCE'
        },
        {
            href: 'https://github.com/benaissa-saida/BenaissaSaida_6_28082021', 
            title: 'PIQUANTE', 
            img: piquante,
            icon: 'fab fa-github',
            descri: `Construction de la partie back-end avec une création d'API`,
            technos: 'NODEJS, EXPRESS, MONGODB',
            id: 'PIQUANTE'
        },
        {
            href: 'https://github.com/benaissa-saida/BenaissaSaida_7_12072021', 
            title: 'GROUPOMANIA', 
            img: groupomania,
            icon: 'fab fa-github',
            descri: `Création d'un réseau social d'entreprise`,
            technos: 'VUEJS, JAVASCRIPT, TAILWIND, NODEJS, EXPRESS, SEQUELIZE, MYSQL',
            id: 'GROUPOMANIA'
        },
        // {
        //     href: '', 
        //     title: '', 
        //     img: '',
        //     descri: '',
        //     technos: '',
        //     id: ''
        // },
        // {
        //     href: '', 
        //     title: '', 
        //     img: '',
        //     descri: '',
        //     technos: '',
        //     id: ''
        // },
        // {
        //     href: '', 
        //     title: '', 
        //     img: '',
        //     descri: '',
        //     technos: '',
        //     id: ''
        // }
    ]
}

export default {
    name: 'Projects',
    data() {
        return{
        projects: [],
        id: 'Reservia', 
        }
    },
    async created() {
        let res = await getDataProject();
        this.projects = res;
    }
}
</script>

<style lang="scss">
$bg-secondary: #EC6C0C;

.container{
    display: flex;
    z-index: -1;
}
.project{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-shrink: 2;
    border-radius: 2em;
    width: 50%;
    min-width: 280px;
    &__link{
        position: relative;
        border-radius: inherit;
        text-decoration: none;
        height: 300px;
        margin: 1em;
        cursor: pointer;
        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    }
}

.project__link{
    &--img{
        object-fit: cover;
        height: 300px;
        width: 100%;
        border-radius: inherit;
        opacity: 0.19;
        min-width: 100%;
        &:hover {
            opacity: 1;
            transition: 600ms;
        }
    }
    &--icon{
        display: inline-block;
        position: absolute;
        transform: translate(180px, 15px);
        font-size: 2rem;
    }

    &:hover {
        transform: scale(1.06);
        transition: 600ms;
    }
    &:hover .project__info{
        display: none;
    }
    &:hover .project__link--icon{
        display: none;
    }
    &:active:link:visited{
        text-decoration: #2c3e50;
    }
}

.project__info{
    max-height: 0px;
    position: absolute;
    bottom: 85%;
    max-width: 440px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-grow: 1;
    flex-shrink: 2;
    & h1{
        font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
        font-size: 1.8rem;
        margin: 0.5em 0;
        text-decoration: underline $bg-secondary;
    }
    & span{
        margin-top: 1rem;
        color: $bg-secondary;
    }

}

@media (min-width:600px) and (max-width:1000px){
  .project{
    &__link{
        width: 40%;
    }
  }
}

@media (min-width:1000px){
  .project{
    &__link{
        width: 30%;
    }
  }
}

</style>