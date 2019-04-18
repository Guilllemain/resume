<template>
    <div id="app">
        <hero-component :isScrolling="isScrolling"></hero-component>
        <profile-component :showPicture="showPicture"></profile-component>
        <experiences-component></experiences-component>
        <skills-component :isOrdered="orderedSkills"></skills-component>
        <projects-component></projects-component>
        <contact-component></contact-component>
    </div>
</template>

<script>
import HeroComponent from "./components/HeroComponent";
import ProfileComponent from "./components/ProfileComponent";
import ExperiencesComponent from "./components/ExperiencesComponent";
import SkillsComponent from "./components/SkillsComponent";
import ProjectsComponent from "./components/ProjectsComponent";
import ContactComponent from "./components/ContactComponent";

export default {
    name: "app",
    components: {
        HeroComponent,
        ProfileComponent,
        ExperiencesComponent,
        SkillsComponent,
        ProjectsComponent,
        ContactComponent
    },
    data() {
        return {
            isScrolling: false,
            orderedSkills: false,
            showPicture: false
        };
    },
    methods: {
        handleScroll() {
            if (window.scrollY <= 30) this.isScrolling = false;
            if (window.scrollY >= 50) this.isScrolling = true;
            if (window.scrollY >= 320 && window.screen.width > 1024) {
                this.showPicture = true;
            } else if (window.scrollY >= 260 && window.screen.width <= 1024) {
                this.showPicture = true;
            } else if (window.scrollY >= 200 && window.screen.width <= 800) {
                this.showPicture = true;
            }
            if (window.scrollY >= 1310 && window.screen.width > 1024) {
                this.orderedSkills = true;
            } else if (window.scrollY >= 1070 && window.screen.width <= 1024) {
                this.orderedSkills = true;
            } else if (window.scrollY >= 900 && window.screen.width <= 800) {
                this.orderedSkills = true;
            }
        }
    },
    created() {
        window.addEventListener("scroll", this.handleScroll);
    },
    destroyed() {
        window.removeEventListener("scroll", this.handleScroll);
    }
};
</script>

<style lang="scss">

#app {
    position: relative;
}

.section {
    padding-top: 3rem;
    padding-bottom: 5rem;

    @include screen(medium) {
        padding: 3rem 3rem 5rem 3rem;
    }

    &:last-child {
        padding-bottom: 1rem;
    }

    &--dark {
        background-color: $main-color;
        color: white;
        opacity: .9;
    }

    &__title {
        text-align: center;
        color: $main-color;
        font-size: 2.5rem;
        font-weight: 300;
        margin-bottom: 2rem;

        &--light {
            color: white;
            opacity: 0.9;
        }
    }

    &__subtitle {
        font-size: 1.2rem;
        color: white;
        opacity: 0.9;
        text-align: center;
        margin-bottom: 1rem;

        &::before {
            content: "";
            display: block;
            background-color: rgba(255, 255, 255, 0.5);
            height: 1px;
            width: 25%;
            margin: auto;
            margin-bottom: 1rem;
        }

        &--light {
            color: $main-color;

            &::before {
                background-color: rgba($main-color, .5);
            }
        }
    }
}



</style>
