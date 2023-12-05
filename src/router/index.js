import { createRouter, createWebHistory } from "vue-router";
import HelloIndia from "@/components/HelloIndia";
import HelloBlr from "@/components/HelloBlr";
import HelloHsr from "@/components/HelloHsr";
import DyncComp from "@/components/DyncComp";
import QueryComp from "@/components/QueryComp.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HelloIndia,
  },
  {
    path: "/blr",
    name: "about",
    component: HelloBlr,
    children: [
      {
        path: "hsr",
        component: HelloHsr,
      },
    ],
  },
  {
    path: "/dynamic/:id",
    name: "dync",
    component: DyncComp,
  },
  {
    path: "/quryy",
    name: "quryy",
    component: QueryComp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
