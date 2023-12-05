<template>
    <h1>Hello HSR!</h1>
    <button @click="routeMe('/')"> Go Home!</button>
    <button @click="routeMe('/blr')"> Go to BLR!</button>
    <button @click="goback">Go Back</button>
</template>
<script>
import router from "@/router"
import { defineComponent } from "vue"

export default defineComponent({
    setup() {
        const routeMe = (path) => {
            router.push(path)
        }
        const goback = () => router.go(-1)
        return {
            routeMe,
            goback
        }
    },
})
</script>
