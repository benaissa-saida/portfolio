<template>
  <div class="aside"> 
    <h2>Compétences</h2>
    <div class="introduction_skills">
      <button :key="skill" v-for="skill in skills" :title='`${ skill.title }`' class="introduction_skills--btn">
        <img  width="100" height="100" :class="skill.id" class="introduction_skills--icone" :src="`${ skill.icon }`" :alt="`${ skill.id }`">
      </button>
    </div>
  </div>
</template>

<script>
import web from "@/assets/icons/web.png";
import sass from "@/assets/icons/sass.png";
import responsive from "@/assets/icons/responsive.png";
import bootstrap from "@/assets/icons/Bootstrap.png";
import tailwind from "@/assets/icons/tailwind.png";
import nodejs from "@/assets/icons/nodejs.png";
import expressjs from "@/assets/icons/expressjs.png";
import mongodb from "@/assets/icons/mongoDb.png";
import mysql from "@/assets/icons/MySQL.png";
import sequelize from "@/assets/icons/sequelize.png";
import vuejs from "@/assets/icons/vuejs.png";
import react from "@/assets/icons/react.png";

function getData(){
  return [
    {icon: web, title: 'WEB', id: 'web'},
    {icon: sass, title: 'SASS', id: 'sass'},
    {icon: responsive, title: 'RESPONSIVE', id: 'responsive'},
    {icon: bootstrap, title: 'BOOTSTRAP', id: 'bootstrap'},
    {icon: tailwind, title: 'TAILWIND', id: 'tailwind'},
    {icon: nodejs, title: 'NODEJS', id: 'nodejs'},
    {icon: expressjs, title: 'EXPRESSJS', id: 'expressjs'},
    {icon: mongodb, title: 'MONGODB', id: 'mongodb'},
    {icon: mysql, title: 'MYSQL', id: 'mysql'},
    {icon: sequelize, title: 'SEQUELIZE', id: 'sequelize'},
    {icon: vuejs, title: 'VUEJS', id: 'vuejs'},
    {icon: react, title: 'REACTJS', id: 'reactjs'},
  ]
}

export default {
  name: 'Skills',
  data() {
    return{
      skills: [],
      id: 'web', 
    }
  },
  async created() {
    let res = await getData();
    this.skills = res;
  }
  
}
</script>

<style lang="scss">
$color-activeLink: #BE3818;
$bg-primary: #fff1dd;

.aside{
  width: 90%;
  max-width: 900px;
  margin-bottom: 2em;
  background-color: $bg-primary;
  border-radius: 1em;
  & h2{
    margin-top: 1em;
  }
}
.introduction_skills{
  margin-top: 1em;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  &--btn{
    margin: 0.5em;
    color: $color-activeLink;
    background-color: #fff;
    padding: 0.5em 0.5em;
    font-size: 1.2rem; 
    border-radius: 0.9em;
    border: 1px solid $color-activeLink;
    &:hover {
      cursor: pointer;
      animation: jelly 0.5s;
    }
  }
  &--icone{
    aspect-ratio: 1 / 1;
  }
  &--title{
    text-align: center;
  }
}
.web{
  padding: 0.938em 0;
}

.responsive{
  padding: 0.964em 0;
}

.mongodb{
  padding: 0.912em 0;
}

.mysql{
  padding: 0.886em 0;
}

.reactjs{
  padding: 0.756em 0;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}

</style>