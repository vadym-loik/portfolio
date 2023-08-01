<template>
  <div>
    <div class="projects__content" id="projects" v-for="(project, index) in allProjects" :key="index">
      <article class="projects__card">
        <img :src="project.img" alt="project screenshot" class="projects__img" />
        <div class="projects__modal">
          <div>
            <span class="projects__subtitle">{{ project.subtitle }}</span>
            <h3 class="projects__title">{{ project.title }}</h3>
            <a :href="project.link" class="projects__button button button__small" target="_blank">
              <i class="ri-link"></i>
            </a>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import Photo1 from '@/assets/images/groupomania.png';
import Photo2 from '@/assets/images/piiquante.png';
import Photo3 from '@/assets/images/kanap.png';
import Photo4 from '@/assets/images/ohMyFood.png';
import Photo5 from '@/assets/images/goMikeDesign.png';


const allProjects = ref([{
  img: Photo1,
  subtitle: 'Web',
  title: 'Groupomania',
  link: 'https://github.com/vadym-loik/Groupomania',
},
{
  img: Photo2,
  subtitle: 'Web',
  title: 'Piiquante',
  link: 'https://github.com/vadym-loik/Piiquante-main',
},
{
  img: Photo3,
  subtitle: 'Web',
  title: 'Kanap',
  link: 'https://github.com/vadym-loik/kanap',
},
{
  img: Photo4,
  subtitle: 'Web',
  title: 'OhMyFood',
  link: 'https://github.com/vadym-loik/ohMyFood2',
},
{
  img: Photo5,
  subtitle: 'Web',
  title: 'Optimize',
  link: 'https://github.com/vadym-loik/optimize',
},
]);

</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.button {
  display: inline-flex;
  align-items: center;
  column-gap: 0.5rem;
  background-color: $first-color;
  color: #fff;
  padding: 1.15rem 1.5rem;
  border-radius: 0.5rem;
  transition: 0.3s;
  box-shadow: 0 8px 24px hsla($hue, $sat, $lig, 0.25);
}


.projects__card {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
}

.projects__content:not(:last-child) {
  margin-bottom: 20px;
}

// .projects__card img {
//   width: 100%;
//   height: 100%;
// }

.projects__modal {
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: -100%;
  left: 0;
  background: linear-gradient(180deg,
      hsla($hue, 24%, 40%, 0.3) 0%,
      hsla($hue, 24%, 4%, 1) 95%);
  // display: grid;
  // align-items: flex-end;
  padding: 1.5rem 1.25rem;
  transition: 0.3s;
}

.projects__subtitle,
.projects__title {
  color: #fff;
}

.projects__subtitle {
  font-size: $smaller-font-size;
}

.projects__title {
  font-size: $h3-font-size;
  margin-bottom: 0.75rem;
}

.projects__button {
  padding: 0.5rem;
}

.projects__card:hover .projects__modal {
  bottom: 0;
}
</style>
