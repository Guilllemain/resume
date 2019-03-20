<template>
    <section class="skills">
      <h3>{{ $t('skills') }}</h3>
      <transition-group name="flip-list" tag="ul" class="container skills__list">
        <li v-for="skill in skills" :key="skill.id">
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
      </transition-group>
    </section>
</template>

<script>
import skillsList from '../assets/js/skills'

export default {
  props: {
    isOrdered: {
      required: true,
      type: Boolean
    }
  },
  data() {
    return {
      skills: skillsList
    }
  },
  computed: {
    orderedSkills() {
      return this.skills.slice().sort((a, b) => b.rating - a.rating)
    }
  },
  watch: {
    isOrdered(value) {
      if (value) {
        return this.skills = this.orderedSkills;
      }
    }
  },
}
</script>

<style lang="scss" scoped>
  .skills__rating {
    color: #ffc624;
    fill: currentColor;
  }
  .skills__offrating {
    color: #cecece;
    fill: currentColor;
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
  .flip-list-move {
    transition: transform 1s;
  }
</style>
