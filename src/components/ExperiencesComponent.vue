<template>
    <section class="section section--dark">
        <h3 class="section__title section__title--light">{{$t('experiences.title')}}</h3>
        <div class="container experiences">
            <div>
                <h3>{{$t('experiences.job1.title')}}</h3>
                <h4>{{$t('experiences.job1.employer')}}</h4>
                <span>{{$t('experiences.job1.year')}}</span>
                <ul>
                    <li v-for="task in $t('experiences.job1.tasks')" :key="task">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                        <span v-html="task"></span>
                    </li>
                </ul>
            </div>
            <div>
                <h3>{{$t('experiences.job2.title')}}</h3>
                <h4>{{$t('experiences.job2.employer')}}</h4>
                <span>{{$t('experiences.job2.year')}}</span>
                <ul>
                    <li v-for="task in $t('experiences.job2.tasks')" :key="task">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                        <span>{{task}}</span>
                    </li>
                </ul>
            </div>
            <div>
                <h3>{{$t('experiences.job3.title')}}</h3>
                <h4>{{$t('experiences.job3.employer')}}</h4>
                <span>{{$t('experiences.job3.year')}}</span>
                <ul>
                    <li v-for="task in $t('experiences.job3.tasks')" :key="task">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                        </svg>
                        <span>{{task}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.experiences {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 3rem;

    & h3 {
        color: $grey-darkest;
        font-weight: 500;
        margin-bottom: .5rem;
        font-size: 1.3rem;
    }
    
    & h4 {
        color: $grey-darkest;
        font-weight: 400;
        font-size: 1.1rem;
    }

    & span {
        color: $grey-darkest;
        font-size: .95rem;
    }

    & ul {
        margin-top: 1.5rem;
        list-style: none;

        li {
            display: flex;
            align-items: center;
            margin-bottom: .5rem;

            svg {
                color: $grey-darkest;
                fill: currentColor;
                margin-right: .2rem;
            }

            span {
                color: white;
            }
        }
    }
}
</style>
