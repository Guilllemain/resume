<template>
  <div class="content">
    <section class="home">
      <h2 class="name">Yann Guillemain</h2>
      <h3 class="title">Développeur Web</h3>
    </section>
    <section class="profile">
      <h3>Profile</h3>
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
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      showTitle: false
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY >= 220) {
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
  .container {
    width: 1000px;
    margin-left: auto;
    margin-right: auto;
  }
  section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
  p {
    line-height: 1.5rem;
    font-weight: 300;
  }
  .content {

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
        flex: 0 0 30%;
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
      display: flex;
      justify-content: space-between;
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
  @keyframes scaleIn {
    0% { transform: scale(.2); opacity: 0 }
    100% { transform: scale(1); opacity: 1 }
  }
  @keyframes appears {
    0% { opacity: 0 }
    100% { opacity: 1 }
  }
</style>
