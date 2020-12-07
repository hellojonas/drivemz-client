<template>
  <div class="overlay" v-if="menuIsShown" @click="hideMenu"></div>
  <nav class="nav">
    <div class="nav__brand">
      <router-link to="/"> Drive<span class="nav__brand--red">Mz</span></router-link>
    </div>
    <transition>
      <ul class="nav__menu" v-if="menuIsShown">
        <li class="nav__item" v-for="link in links" :key="link.text" @click="hideMenu">
          <router-link :to="link.to" class="nav__link">{{ link.text }}</router-link>
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
        { text: 'Inicio', to: '/' },
        { text: 'Exames', to: '/exames' },
        { text: 'Praticar', to: '/praticar' },
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
  background-color: rgba(0, 0, 0, 0.95);
  z-index: 9900;
}

.nav {
  min-height: 6rem;
  background-color: $color-nav;
  color: $gray-100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  box-shadow: $shadow-lg;

  &__menu {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1.4rem;
    z-index: 9910;
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
  z-index: 9910;

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
  transition: transform 0.6s, opacity 0.5s;
}

.v-enter-to,
.v-leave-from {
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}
</style>
