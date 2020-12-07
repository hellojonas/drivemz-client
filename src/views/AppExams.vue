<template>
  <header class="header">
    <base-card>
      <base-heading :level="2">Realizar exame</base-heading>
      <base-paragraph>Teste seu conhecimento sobre a estrada</base-paragraph>
    </base-card>
  </header>
  <section class="exam-rules">
    <base-card>
      <base-paragraph mb="md">
        Cada exame contem 25 questões e deve ser realizado num periodo de 60m. É aprovado se
        concluir com uma a pontuação mínima de 18/25.
      </base-paragraph>
      <base-paragraph mb="md">Não se sente preparado? Pratique antes.</base-paragraph>

      <div class="button-group">
        <base-button type="secondary" text="Iniciar exame" rounded @click="startExam"></base-button>
        <base-button type="tertiary" text="Praticar" rounded @click="gotoPratice"></base-button>
      </div>
    </base-card>
  </section>
</template>

<script>
export default {
  methods: {
    gotoPratice() {
      this.$router.push('/praticar');
    },
    startExam() {
      this.$router.push('/exam-session');
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  margin: 4rem 0;
  padding: 0 1rem;
}

.exam-rules {
  padding: 0 1rem;
  text-align: center;
}

.button-group {
  display: flex;
  justify-content: space-evenly;
}
</style>
