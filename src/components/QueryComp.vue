<template>
    <h1>My Query params is {{ id }}</h1>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
    setup() {
        const route = useRoute()
        const id = ref(0)
        id.value = route.query.id
        return {
            id
        }
    },
})
</script>
