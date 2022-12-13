import { createApp } from 'vue'
import App from './App.vue'
import components from '@/components/UI'
import router from './router'

const app = createApp(App).use(router)

components.forEach(component => {
    app.component(component.name, component)
})

app.mount('#app')