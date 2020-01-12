import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import '@/assets/fonts.css';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#1e1e1f',
                secondary: '#686a6b',
                accent: '#68A063',
                error: '#b71c1c',
            }
        },
        options: {
            customProperties: true,
        },
        icons: {
            iconfont: 'icon'
        }
    }
});
