<template>
  <div class="content">
    <div class="languages">
      <a @click="changeLocale('fr')">fr</a>
      <a @click="changeLocale('en')">en</a>
    </div>
    <section class="home">
      <h2 class="name">Yann Guillemain</h2>
      <h3 class="title">{{ $t('title') }}</h3>
    </section>
    <section class="profile">
      <h3>{{ $t('profile') }}</h3>
      <div class="container profile__description">
        <figure class="profile__picture" :class="{animated: showTitle}">
          <img src="profile.jpg" alt="Yann Guillemain">
        </figure>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
        </p>
      </div>
    </section>
    <section class="experiences">
      <h3>Experiences</h3>
      <div class="container experiences__list">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
        </p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ut, exercitationem reiciendis velit asperiores et obcaecati.
          Ab modi veniam, laudantium consectetur totam quae illo. Quam suscipit explicabo corrupti officia cum!
        </p>
      </div>
    </section>
    <section class="skills">
      <h3>Skills</h3>
      <ul class="container skills__list">
        <li v-for="skill in skills" :key="skill.name">
          <span>{{ skill.name }}</span>
          <span>
            <!-- eslint-disable-next-line -->
            <svg class="skills__rating" v-for="rating in skill.rating" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
              <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
              <path fill="none" d="M0 0h18v18H0z"/>
            </svg>
            <!-- eslint-disable-next-line -->
            <svg class="skills__offrating" v-for="offrating in (5 - skill.rating)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 15 15">
              <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/>
              <path fill="none" d="M0 0h18v18H0z"/>
            </svg>
          </span>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import skills from '../assets/skills'
import i18n from '../assets/i18n'

export default {
  name: 'HelloWorld',
  data() {
    return {
      showTitle: false,
      skills: skills
    }
  },
  methods: {
    changeLocale(locale) {
        i18n.locale = locale
    },
    handleScroll() {
      if (window.scrollY >= 320) {
        this.showTitle = true
      }
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

<style lang="scss" scoped>
  $main-color: #00444980;

  .languages {
    position: absolute;
    top: 1.5rem;
    right: 2rem;
    color: white;
    opacity: .9;
    display: flex;
    animation: slideDown 1.4s ease-in-out backwards;


    & a {
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

  .skills__rating {
    color: #ffc624;
    fill: currentColor;
  }
  .skills__offrating {
    color: #cecece;
    fill: currentColor;
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
  ul {
    list-style: none;
    columns: 2;
  }
  li {
    cursor: default;
    margin: 0 3rem;
    padding: .2rem .3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: all .4s;

    &:hover {
      background-color: #ebebeb;
      transform: translateY(-.2rem)
    }
  }
  .content {
    position: relative;

    h3 {
      text-align: center;
      color: $main-color;
      font-size: 2.5rem;
      font-weight: 300;
      margin-bottom: 2rem;
    }
  }
  .home {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background-image: url('/codecode.jpg');
    background-image: linear-gradient(to right bottom, rgba(0, 68, 73, .5), rgba(0, 68, 73, .5)), url('/codecode.jpg');
    background-size: cover;
    background-attachment: fixed;

    .title {
      font-size: 1.5rem;
      color: white;
      opacity: .9;
      animation: slideRight 1s ease-in backwards;
      animation-delay: .2s;
    }
  
    .name {
      font-weight: 300;
      font-size: 4rem;
      letter-spacing: .1rem;
      margin-bottom: 2rem;
      color: white;
      opacity: .9;
      animation: slideLeft 1s ease-in backwards;

      &::after {
        content: "";
        background-color: rgba(255, 255, 255, .5);
        display: block;
        margin: auto;
        width: 70%;
        height: 1px;
        margin-top: 1rem;
        animation: appears 1s ease-in-out .6s backwards;
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;    

    &__description {
      display: flex;
      align-items: center;

      & .profile__picture {
        flex: 0 0 25%;
        clip-path: circle(45% at 50% 50%);
        margin-right: 3rem;
        opacity: 0;

        & img {
          transition: all .2s;
          width: 100%;

          &:hover {
            transform: scale(.93);
          }
        }
      }
    }
  }

  .experiences {
    background-color: #00444980;

    h3, p {
      color: white;
      opacity: .9;
    }

    &__list {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-column-gap: 3rem;
    }
  }

  .animated {
    animation: scaleIn .4s ease-in forwards;
  }

  @keyframes slideLeft {
    0% { transform: translateX(-40vw); opacity: 0 }
    80% { transform: translateX(5vw) }
    100% { transform: translateX(0); opacity: 1 }
  }
  @keyframes slideRight {
    0% { transform: translateX(30vw); opacity: 0 }
    70% { transform: translateX(-5vw) }
    90% { transform: translateX(2vw) }
    100% { transform: translateX(0); opacity: 1 }
  }
  @keyframes slideDown {
    0% { opacity: 0; transform: translate3d(5rem, -2rem, 0) }
    100% { opacity: 1; transform: translate3d(0, 0, 0) }
  }
  @keyframes scaleIn {
    0% { transform: scale(.2); opacity: 0 }
    100% { transform: scale(1); opacity: 1 }
  }
  @keyframes appears {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
</style>
