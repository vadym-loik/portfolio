<template>
  <div>
    <main class="main">
      <section class="filters container">
        <!-- FILTERS TABS -->
        <ul class="filters__content">
          <button class="filters__button" @click.prevent="toggleProjectsSection"
            :class="{ active: isActive !== projects }">
            Projects
          </button>

          <button class="filters__button" @click.prevent="toggleSkillsSection" :class="{ active: isActive !== skills }">
            Skills
          </button>
        </ul>

        <div class="filters__sections">
          <!-- PROJECTS -->
          <Projects id="projects" v-if="projects" />
          <!-- SKILLS -->
          <Skills id="skills" v-if="skills" />
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import Projects from './Projects.vue';
import Skills from './Skills.vue';

import { ref } from 'vue';

const projects = ref(false);
const skills = ref(false);
let isActive = ref(false);

function toggleProjectsSection() {
  projects.value = !projects.value;

  if (projects.value) {
    skills.value = false;
  }
}

function toggleSkillsSection() {
  skills.value = !skills.value;

  if (skills.value) {
    projects.value = false;
  }
}
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

.filters {
  &__content {
    margin: 2rem 0 2.5rem;
    background-color: $text-color-lighten;
    padding: 0.375rem;
    border-radius: 0.75rem;
    display: flex;
    justify-content: space-between;
    column-gap: 0.5rem;
  }

  &__button {
    width: 100%;
    border: none;
    outline: none;
    padding: 1rem;
    color: $title-color;
    font-size: $small-font-size;
    font-family: $body-font;
    font-weight: 500;
    border-radius: 0.75rem;
    cursor: pointer;
    background-color: transparent;
    transition: 0.3s;
  }

  &__button:hover {
    background-color: $body-color;
  }
}

.active {
  background-color: $body-color;
}
</style>
