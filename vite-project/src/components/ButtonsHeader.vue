<template>
  <div>
    <!-- BUTTONS -->
    <div class="profile__buttons">
      <a href="https://drive.google.com/file/d/1Iul1iOAgchme0Hr-F4S9RLSsFYaYXerk/view?usp=sharing" class="button"
        target="_blank">Download CV <i class="ri-folder-download-fill"></i></a>

      <div class="profile__buttons-small">
        <a href="https://api.whatsapp.com/send?phone=+33768856944&text=Hello, more information!" target="_blank"
          class="button button__small button__gray">
          <i class="ri-whatsapp-line"></i>
        </a>

        <a href="mailto:loikfit@gmail.com" target="_blank" class="button button__small button__gray">
          <i class="ri-mail-send-line"></i>
        </a>

      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.profile__buttons,
.profile__buttons-small {
  display: flex;
  align-items: center;
  justify-content: center;
}

.profile__buttons {
  column-gap: 1rem;
}

.profile__buttons-small {
  column-gap: 0.25rem;
}

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

  &__small {
    padding: 0.75rem;
    box-shadow: none;
  }

  &__gray {
    background-color: $text-color-lighten;
    color: $title-color;
  }
}

.button i {
  font-size: 1.25rem;
}

.button:hover {
  background-color: $first-color-alt;
}

.button__gray:hover {
  background-color: $text-color-light;
}
</style>
