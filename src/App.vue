<template>
  <div id="app">
    <div class="languages">
      <a @click="changeLocale('fr')" :class="{ 'lang-selected': lang === 'fr' }">fr</a>
      <a @click="changeLocale('en')" :class="{ 'lang-selected': lang === 'en' }">en</a>
    </div>
    <hero-component :isScrolling="isScrolling"></hero-component>
    <profile-component :showPicture="showPicture"></profile-component>
    <experiences-component></experiences-component>
    <skills-component :isOrdered="orderedSkills"></skills-component>
    <projects-component></projects-component>
  </div>
</template>

<script>
import HeroComponent from './components/HeroComponent'
import ProfileComponent from './components/ProfileComponent'
import ExperiencesComponent from './components/ExperiencesComponent'
import SkillsComponent from './components/SkillsComponent'
import ProjectsComponent from './components/ProjectsComponent'
import i18n from './assets/js/i18n'

export default {
  name: 'app',
  components: {
    HeroComponent,
    ProfileComponent,
    ExperiencesComponent,
    SkillsComponent,
    ProjectsComponent
  },
  data() {
    return {
      isScrolling: false,
      orderedSkills: false,
      showPicture: false
    }
  },
  computed: {
    lang() {
      return i18n.locale;
    }
  },
  methods: {
    changeLocale(locale) {
        i18n.locale = locale
    },
    handleScroll() {
      if (window.scrollY <= 30) this.isScrolling = false
      if (window.scrollY >= 50) this.isScrolling = true
      if (window.scrollY >= 320) this.showPicture = true
      if (window.scrollY >= 1380) this.orderedSkills = true
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Fira+Sans:300,400,500,700');
@import './assets/scss/animations.scss';

$grey: #252525;
$main-color: #00444980;

*,
*::before,
*::after {
	box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Fira Sans', sans-serif;
  color: $grey;
  font-weight: 300;
  overflow-x: hidden;
}

#app {
  position: relative;
}
  
h3 {
  text-align: center;
  color: $main-color;
  font-size: 2.5rem;
  font-weight: 300;
  margin-bottom: 2rem;
}

.languages {
  position: absolute;
  z-index: 10;
  top: 1.5rem;
  right: 2rem;
  color: white;
  display: flex;
  animation: slideDown 1.4s ease-in-out backwards;

  .lang-selected {
    font-weight: 400;
    opacity: 1;

    &::after {
      font-weight: 300;
      opacity: .7;
    }
  }

  & a {
    opacity: .7;
    cursor: pointer;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &:hover {
      text-decoration: underline;
    }

    &:first-child {
      margin-right: 1rem;

      &::after {
        content: "";
        display: block;
        background-color: white;
        height: 60%;
        width: 1px;
        margin-left: 1rem;
      }
    }
  }
}

.container {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
section:not(:first-of-type) {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
p {
  line-height: 1.5rem;
  font-weight: 300;
}
.github-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: black;
  font-weight: 400;

  &:hover {
    font-weight: 500;
  }

  span {
    margin: 0 .4rem;
  }
}
</style>
