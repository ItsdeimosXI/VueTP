import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const app = createApp(App)
//el = etiqueta a la cual fue colocada
app.directive('font-size', {
    beforeMount: (el) => {
        el.style.fontSize = "40px"
    }
})
app.directive('custom-size', {
    beforeMount: (el, binding) => {
        let size = 18
        switch (binding.arg) {
            case 'sm':
                size = 10
                break;
            case 'md':
                size = 18
                break;
            case 'lg':
                size = 26
                break;
            case 'xl':
                size = 48
                break;
            case 'xxl':
                size = 96
                break;
        }
        el.style.fontSize = size + "px"
    }
})
app.directive('custom-font', {
    beforeMount: (el, binding) => {
        let size = 18
        if (binding.modifiers.sm) {
            size = 10
        } else if (binding.modifiers.lg) {
            size = 24
        } else if (binding.modifiers.xxl) {
            size = 96
        }
        el.style.fontSize = size + "px"
        if (binding.modifiers.red) {
            el.style.color = '#ff0000'
        } else if (binding.modifiers.green) {
            el.style.color = '#00ff00'
        } else if (binding.modifiers.blue) {
            el.style.color = '#0000ff'
        }
    }
})
app.mount('#app')