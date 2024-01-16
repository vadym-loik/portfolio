<template>
  <section class="skills">
    <div class="skills__content grid" id="skills">
      <div class="skills__area">
        <h3 class="skills__title">Frontend developer</h3>

        <div class="skills__box">
          <div class="skills__group" v-for="skill in frontSkills">
            <div class="skills__data">
              <i class="ri-checkbox-circle-line"></i>

              <div>
                <h3 class="skills__name">{{ skill }}</h3>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="skills__area">
        <h3 class="skills__title">Backend developer</h3>

        <div class="skills__box">
          <div class="skills__group" v-for="skill in backSkills">
            <div class="skills__data">
              <i class="ri-checkbox-circle-line"></i>

              <div>
                <h3 class="skills__name">{{ skill }}</h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const frontSkills = ref([
  'HTML', 'CSS', 'JavaScript', 'React.js', 'Next.js', 'Vue.js', 'TypeScript', 'Git', 'GitHub', 'SASS',
])

const backSkills = ref([
  'Node.js', 'SQL', 'NoSQL', 'MariaDB', 'MongoDB', 'PlanetscaleDB', 'Express.js', 'Mongoose', 'DrizzleORM',
])
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';


.skills {
  &__content {
    row-gap: 3.5rem;
    margin: 0 40px;
  }

  &__title {
    font-size: $h3-font-size;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  &__box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }

  &__data {
    display: flex;
    column-gap: 0.375rem;
  }

  &__data i {
    font-size: 1rem;
    color: $first-color;
  }

  &__name {
    font-size: $normal-font-size;
    font-weight: 500;
    line-height: 18px;
  }

  &__level {
    font-size: $small-font-size;
  }
}
</style>
