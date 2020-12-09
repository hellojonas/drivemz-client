<template>
  <header class="admin-options">
    <nav class="nav">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link to="/admin/questions">Questions</router-link>
        </li>
        <li class="nav__item">
          <router-link to="/admin/exams">Exams</router-link>
        </li>
      </ul>
    </nav>
  </header>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<style lang="scss" scoped>
.main {
  max-width: 114rem;
  margin: 0 auto;
  padding: 0 2rem;
}
.admin-options {
  max-width: 114rem;
  margin-top: 2rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 2rem;
}

.nav {
  &__list {
    list-style-type: none;
    background-color: $gray-500;
    border-radius: 4px;
    padding: 1.5rem 2rem;
    box-shadow: $shadow-md;
    color: $gray-700;
    display: flex;
    font-weight: bold;
  }
  &__item {
    &:not(:last-child) {
      margin-right: 2rem;
    }
  }
}

.router-link-active {
  color: $accent-color;
}
</style>
