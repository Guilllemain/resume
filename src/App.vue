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
import i18n from "./assets/js/i18n";

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
    computed: {
        lang() {
            return i18n.locale;
        }
    },
    methods: {
        changeLocale(locale) {
            i18n.locale = locale;
        },
        handleScroll() {
            if (window.scrollY <= 30) this.isScrolling = false;
            if (window.scrollY >= 50) this.isScrolling = true;
            if (window.scrollY >= 320) this.showPicture = true;
            if (window.scrollY >= 1380) this.orderedSkills = true;
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
            opacity: 0.7;
        }
    }

    & a {
        opacity: 0.7;
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
</style>
