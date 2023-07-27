<template>
  <div class="projects__content grid" id="projects">
    <article class="projects__card">
      <img src="../assets/img/code.jpeg" alt="" class="projects__img" />
      <div class="projects__modal">
        <div>
          <span class="projects__subtitle">Web</span>
          <h3 class="projects__title">Groupomania</h3>
          <a
            href="https://github.com/vadym-loik/Groupomania"
            class="projects__button button button__small"
            target="_blank"
          >
            <i class="ri-link"></i>
          </a>
        </div>
      </div>
    </article>

    <article class="projects__card">
      <img src="../assets/img/code.jpeg" alt="" class="projects__img" />
      <div class="projects__modal">
        <div>
          <span class="projects__subtitle">Web</span>
          <h3 class="projects__title">Piiquante</h3>
          <a
            href="https://github.com/vadym-loik/Piiquante-main"
            class="projects__button button button__small"
            target="_blank"
          >
            <i class="ri-link"></i>
          </a>
        </div>
      </div>
    </article>

    <article class="projects__card">
      <img src="../assets/img/code.jpeg" alt="" class="projects__img" />
      <div class="projects__modal">
        <div>
          <span class="projects__subtitle">Web</span>
          <h3 class="projects__title">Kanap</h3>
          <a
            href="https://github.com/vadym-loik/kanap"
            class="projects__button button button__small"
            target="_blank"
          >
            <i class="ri-link"></i>
          </a>
        </div>
      </div>
    </article>

    <article class="projects__card">
      <img src="../assets/img/code.jpeg" alt="" class="projects__img" />
      <div class="projects__modal">
        <div>
          <span class="projects__subtitle">Web</span>
          <h3 class="projects__title">OhMyFood</h3>
          <a
            href="https://github.com/vadym-loik/ohMyFood2"
            class="projects__button button button__small"
            target="_blank"
          >
            <i class="ri-link"></i>
          </a>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup></script>

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
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
}

.projects__card img {
  width: 100%;
  height: 100%;
}

.projects__modal {
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: -100%;
  left: 0;
  background: linear-gradient(
    180deg,
    hsla($hue, 24%, 40%, 0.3) 0%,
    hsla($hue, 24%, 4%, 1) 95%
  );
  display: grid;
  align-items: flex-end;
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
