<template>
  <div>
    <header class="profile container">

      <div class="profile__container grid">
        <div class="profile__data">
          <div class="profile__border">
            <div class="profile__perfil">
              <img src="@/assets/images/vadym_loik.jpg" alt="profile photo" />
            </div>
          </div>

          <!-- TITLE -->
          <h2 class="profile__name">Vadym Loik</h2>
          <h3 class="profile__profession">Web Developer</h3>

          <!-- SOCIAL NETWORKS-->
          <ul class="profile__social">
            <a href="https://www.linkedin.com/in/vadym-loik-651ba27b/" target="_blank" class="profile__social-link">
              <i class="ri-linkedin-box-line"></i>
            </a>
            <a href="https://github.com/vadym-loik" target="_blank" class="profile__social-link">
              <i class="ri-github-line"></i>
            </a>

          </ul>
        </div>

        <!-- PROFILE INFO -->
        <div class="profile__info grid">
          <div class="profile__info-group">
            <h3 class="profile__info-number">2</h3>
            <p class="profile__info-description">
              Year of <br />
              work
            </p>
          </div>
          <div class="profile__info-group">
            <h3 class="profile__info-number">8</h3>
            <p class="profile__info-description">
              Completed <br />
              projects
            </p>
          </div>
        </div>

        <ButtonsHeader />
      </div>
    </header>
  </div>
</template>

<script setup>
import ButtonsHeader from './ButtonsHeader.vue';


</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.change-theme {
  position: absolute;
  top: 1.5rem;
  right: 0;
  font-size: 1.25rem;
  color: $title-color;
  cursor: pointer;
  transition: 0.3s;
}

.change-theme:hover {
  color: $first-color;
}

.profile {
  position: relative;
  padding-top: 3.5rem;

  &__container {
    row-gap: 2rem;
  }

  &__data {
    display: grid;
    text-align: center;
  }

  &__perfil {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }

  &__perfil img {
    width: 100px;
  }

  &__border {
    border: 3.5px solid $first-color;
    justify-self: center;
    width: 115px;
    height: 115px;
    border-radius: 50%;
    display: grid;
    place-items: center;
    margin-bottom: 0.75rem;
  }

  &__name {
    font-size: $h2-font-size;
    margin-bottom: 0.375rem
  }

  &__profession {
    font-size: $smaller-font-size;
    font-weight: 500;
    color: $text-color;
    margin-bottom: 1rem;
  }

  &__social {
    display: flex;
    justify-content: center;
    column-gap: 0.75rem;
  }

  &__social-link {
    font-size: 1.75rem;
    color: $title-color;
    transition: 0.3s;
  }

  &__social-link:hover {
    color: $first-color;
  }

  &__info {
    grid-template-columns: repeat(2, max-content);
    justify-content: center;
    column-gap: 2.5rem;
  }

  &__info-group {
    text-align: center;
  }

  &__info-number {
    font-size: $normal-font-size;
    margin-bottom: 0.25rem;
  }

  &__info-description {
    font-size: $smaller-font-size;
    font-weight: 500;
  }
}
</style>
