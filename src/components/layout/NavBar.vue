<template>
  <div class="overlay" v-if="menuIsShown" @click="hideMenu"></div>
  <nav class="nav">
    <div class="nav__brand">
      <a href="#"> Drive<span class="nav__brand--red">Mz</span></a>
    </div>
    <transition>
      <ul class="nav__menu" v-if="menuIsShown">
        <li class="nav__item" v-for="link in links" :key="link.text" @click="hideMenu">
          <a href="#" class="nav__link">{{ link.text }}</a>
        </li>
      </ul>
    </transition>
    <div class="nav__burger" @click="toggleMenu">
      <span class="burger__stroke" :class="rotateBurger"></span>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { text: 'Exames', to: '/exams' },
        { text: 'Praticar Sinais', to: '/signs' },
        { text: 'Praticar Leis', to: '/laws' },
        { text: 'Contacto', to: '/contact' },
        { text: 'Sobre nós', to: '/sobre' },
      ],
      menuIsShown: false,
    };
  },
  computed: {
    rotateBurger() {
      return {
        'burger__stroke--rotate': this.menuIsShown,
      };
    },
  },
  methods: {
    toggleMenu() {
      this.menuIsShown = !this.menuIsShown;
    },
    hideMenu() {
      this.menuIsShown = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
}
.nav {
  min-height: 6rem;
  background-color: $gray-800;
  color: $gray-100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-shadow: $shadow-md;

  &__menu {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1.4rem;
  }

  &__brand {
    font-size: 1.4rem;
    letter-spacing: 0.9px;
  }

  &__brand--red {
    color: $accent-color;
  }

  &__burger {
    height: 4rem;
    width: 4rem;
    position: relative;
    cursor: pointer;
  }

  &__item {
    list-style: none;
    display: block;
    margin-bottom: 2.5rem;
  }

  &__link {
    display: inline-block;
  }
}

.burger__stroke {
  @include pos-center;
  width: 2.5rem;
  height: 2px;
  background-color: $gray-600;
  transition: background-color 1s;

  &::before {
    content: '';
    width: 2.5rem;
    height: 2px;
    display: block;
    transform: translateY(-8px);
    background-color: $gray-600;
    transition: transform 0.7s;
  }

  &::after {
    content: '';
    width: 2.5rem;
    height: 2px;
    display: block;
    transform: translateY(7px);
    background-color: $gray-600;
    transition: transform 0.7s;
  }
}

.burger__stroke--rotate {
  background-color: transparent;
  &::before {
    transform: translateY(0) rotate(45deg);
    opacity: 1;
  }
  &::after {
    transform: translateY(-2px) rotate(135deg);
    opacity: 1;
  }
}

.v-enter-from,
.v-leave-to {
  transform: translate(-50%, -50%) scale(0.7);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: transform .6s, opacity .5s;
}

.v-enter-to,
.v-leave-from {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
</style>
