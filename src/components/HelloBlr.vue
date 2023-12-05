<template>
    <div v-if="!showHsr">
        <h1>Hello Bangalore!</h1>
        <button @click="routeMe('/')">Go to India</button>
        <button @click="routeMe('/blr/hsr')">Go to Hsr</button>
        <button @click="replacehsr">Replace me</button>
    </div>
    <router-view />
</template>
<script>
import router from '@/router'
import { computed, defineComponent } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
    setup() {
        const route = useRoute()
        const routeMe = (path) => {
            router.push(path)
        }
        const replacehsr = () => router.replace("/blr/hsr")
        const showHsr = computed(() => route.fullPath == "/blr/hsr")
        return {
            routeMe,
            showHsr,
            replacehsr
        }
    },
})
</script>
