<template>
  <header class="header">
    <div class="header__title-box">
      <h1 class="header__title">
        Passe no exame Teórico
        <span class="header__title--sub">com facilidade</span>
      </h1>
      <base-button
        rounded
        text="Iniciar agora"
        class="header__btn-cta"
        @click="gotoExam"
      ></base-button>
    </div>
  </header>
  <section class="section-convince">
    <base-card>
      <base-heading mb="md">Vais fazer o exame teórico brevemente?</base-heading>
      <base-paragraph>
        Então
        <router-link to="/exames" class="section-convince__link">pratique conosco</router-link>. Com
        mais de 600 questões, aumente suas possibilidades, prepare-se da melhor forma possível e
        torne-se um bom condutor.
      </base-paragraph>
    </base-card>
  </section>
</template>

<script>
export default {
  methods: {
    gotoExam() {
      this.$router.push('/exames');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  min-height: 32rem;
  position: relative;
  background: url('./../assets/img/home-bg-2.jpg') no-repeat;
  background-position: center;
  background-size: cover;
  margin-bottom: 4rem;

  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.65);
  }

  &__title-box {
    @include pos-center;
    text-align: center;
    width: 100%;
    z-index: 20;
  }

  &__title {
    font-size: 2rem;
    color: $gray-100;
    margin-bottom: 4rem;
    text-transform: uppercase;
  }

  &__title--sub {
    display: block;
    font-size: 1.4rem;
  }
}

.section-convince {
  margin-bottom: 2rem;
  padding: 0 1rem;

  &__link {
    text-decoration: underline;
  }
}
</style>
