<template>
    <section class="section section--dark">
        <h3 class="section__title section__title--light">{{$t('experiences.title')}}</h3>
        <div class="experiences">
            <div class="experiences__item">
                <div class="item__header">
                    <h3>{{$t('experiences.job1.title')}}</h3>
                    <h4>{{$t('experiences.job1.employer')}}</h4>
                    <span>{{$t('experiences.job1.year')}}</span>
                </div>
                <ul>
                    <li v-for="task in $t('experiences.job1.tasks')" :key="task">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <path fill="none" d="M0 0h24v24H0V0z"/>
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            </svg>
                        </span>
                        <span v-html="task"></span>
                    </li>
                </ul>
            </div>
            <div class="experiences__item">
                <div class="item__header">
                    <h3>{{$t('experiences.job2.title')}}</h3>
                    <h4>{{$t('experiences.job2.employer')}}</h4>
                    <span>{{$t('experiences.job2.year')}}</span>
                </div>
                <ul>
                    <li v-for="task in $t('experiences.job2.tasks')" :key="task">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="none" d="M0 0h24v24H0V0z"/>
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            </svg>
                        </span>
                        <span>{{task}}</span>
                    </li>
                </ul>
            </div>
            <div class="experiences__item">
                <div class="item__header">
                    <h3>{{$t('experiences.job3.title')}}</h3>
                    <h4>{{$t('experiences.job3.employer')}}</h4>
                    <span>{{$t('experiences.job3.year')}}</span>
                </div>
                <ul>
                    <li v-for="task in $t('experiences.job3.tasks')" :key="task">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                                <path fill="none" d="M0 0h24v24H0V0z"/>
                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                            </svg>
                        </span>
                        <span>{{task}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
.experiences {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3rem;
    width: $container-width;
    margin-left: auto;
    margin-right: auto;

    @include screen (medium) {
        width: 100%;
    }

    @include screen (xs) {
        grid-template-columns: 1fr;
        grid-row-gap: 3rem;
    }

    &__item {
        @include screen (xs) {
            display: flex;
        }

        .item__header {
            &::after {
                content: "";
                display: block;
                height: 1px;
                width: 70%;
                background-color: $grey-darkest;
                margin-top: .7rem;
                opacity: .3;
            }
        }
    }

    h3 {
        color: $grey-darkest;
        font-weight: 500;
        margin-bottom: .5rem;
        font-size: 1.3rem;
        opacity: .7;
    }
    
    h4 {
        color: $grey-darkest;
        font-weight: 400;
        font-size: 1.1rem;
    }

    span {
        color: $grey-darkest;
        font-size: .95rem;
    }

    ul {
        margin-top: 1.5rem;
        list-style: none;

        @include screen (xs) {
            margin-top: 0;
            margin-left: 5rem;
        }

        li {
            @include flexCenter(center);
            margin-bottom: .5rem;

            span {
                color: white;
            }

            svg {
                color: $grey-darkest;
                fill: currentColor;
                margin-right: .2rem;
                width: 16px;
                height: 16px;

                @include screen (small) {
                    width: 14px;
                    height: 14px;
                }
            }
        }
    }
}
</style>
