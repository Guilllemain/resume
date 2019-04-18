<template>
    <section class="section">
        <h3 class="section__title">{{ $t('skills') }}</h3>
        <transition-group name="flip-list" tag="ul" class="skills">
            <li v-for="skill in skills" :key="skill.id">
                <span>{{ skill.name }}</span>
                <span>
                    <svg
                        class="skills__rating"
                        v-for="rating in skill.rating"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15 15"
                    >
                        <path
                            d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"
                        ></path>
                        <path fill="none" d="M0 0h18v18H0z"></path>
                    </svg>
                    <!-- eslint-disable-next-line -->
                    <svg
                        class="skills__offrating"
                        v-for="offrating in (5 - skill.rating)"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 15 15"
                    >
                        <path
                            d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"
                        ></path>
                        <path fill="none" d="M0 0h18v18H0z"></path>
                    </svg>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
import skillsList from "../assets/js/skills";

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
        };
    },
    computed: {
        orderedSkills() {
            return [...this.skills].sort((a, b) => b.rating - a.rating);
        }
    },
    watch: {
        isOrdered(value) {
            if (value) {
                return (this.skills = this.orderedSkills);
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.skills {
    width: $container-width;
    margin: 0 auto;

    @include screen (medium) {
        width: 100%;
    }

    &__offrating {
        color: $grey;
        fill: currentColor;
    }

    &__rating {
        color: $yellow;
        fill: currentColor;
    }
}

ul {
    list-style: none;
    columns: 2;

    li {
        cursor: default;
        margin: 0 3rem;
        padding: 0.2rem 0.3rem;
        @include screen (small) {
            padding: 0 0.2rem;
        }
        @include flexCenter(center, space-between);
        transition: all 0.4s;

        &:hover {
            background-color: $grey-light;
            transform: translateY(-0.2rem);
        }

        svg {
            height: 20px;
            width: 20px;

            @include screen (medium) {
                width: 18px;
            }
            
            @include screen (small) {
                width: 16px;
            }
        }
    }
}

.flip-list-move {
    transition: transform 1s;
}
</style>

