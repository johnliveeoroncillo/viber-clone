import Vue from 'vue';

const mixin = {
    computed: {
        theme_button() {
            return 'bg-gray-700 hover:bg-gray-600 cursor-pointer';
        }
    },
}

Vue.mixin(mixin);