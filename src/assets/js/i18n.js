import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from './translations'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
});

export default i18n