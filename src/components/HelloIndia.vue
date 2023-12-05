<template>
    <h1>Hello India!</h1>
    <button @click="goback">Go Back</button>
    <button @click="passMeToQuery">Pass Me to Query</button>
    <button @click="passMeToParams">Pass Me to Params</button>
</template>
<script>
import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
    setup() {
        const goback = () => router.go(-1)
        const passMeToQuery = () => {
            router.push({
                name: "quryy",
                query: {
                    id: 999
                }
            })
        }
        // const passMeToParams = () => {
        //     router.push({
        //         name: "dync",
        //         params: {
        //             id: 18181818
        //         }

        //     })
        // }
        const passMeToParams = () => {
            router.push({
                path: "/dynamic/3434",
            })
        }
        return {
            goback,
            passMeToQuery,
            passMeToParams
        }
    },
})
</script>
