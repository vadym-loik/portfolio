<template>
  <!-- SKILLS -->
  <div class="skills__content grid" id="skills">
    <div class="skills__area">
      <h3 class="skills__title">Frontend developer</h3>

      <div class="skills__box">
        <div class="skills__group">
          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">HTML</h3>
              <span class="skills__level">Advance</span>
            </div>
          </div>

          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">CSS</h3>
              <span class="skills__level">Advance</span>
            </div>
          </div>

          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">JavaScript</h3>
              <span class="skills__level">Intermediate</span>
            </div>
          </div>
        </div>

        <div class="skills__group">
          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">Vue.js</h3>
              <span class="skills__level">Intermediate</span>
            </div>
          </div>

          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">Git</h3>
              <span class="skills__level">Intermediate</span>
            </div>
          </div>

          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">Sass</h3>
              <span class="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="skills__area">
      <h3 class="skills__title">Backend developer</h3>

      <div class="skills__box">
        <div class="skills__group">
          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">Node.js</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>

          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">MySQL</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>

          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">NoSQL</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>
        </div>

        <div class="skills__group">
          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">MariaDB</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>

          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">MongoDB</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>

          <div class="skills__data">
            <i class="ri-checkbox-circle-line"></i>

            <div>
              <h3 class="skills__name">CORS</h3>
              <span class="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.skills__content {
  row-gap: 3.5rem;
}

.skills__title {
  font-size: $h3-font-size;
  text-align: center;
  margin-bottom: 1.5rem;
}

.skills__box {
  display: flex;
  justify-content: center;
  column-gap: 3rem;
}

.skills__group {
  display: grid;
  align-content: flex-start;
  row-gap: 1rem;
}

.skills__data {
  display: flex;
  column-gap: 0.5rem;
}

.skills__data i {
  font-size: 1rem;
  color: $first-color;
}

.skills__name {
  font-size: $normal-font-size;
  font-weight: 500;
  line-height: 18px;
}

.skills__level {
  font-size: $small-font-size;
}
</style>
