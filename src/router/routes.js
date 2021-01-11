const routes = [
  {
    path: "/",
    component: () => import("layouts/WelcomeLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Welcome.vue") },
      { path: "collectData", component: () => import("pages/CollectData.vue") },
      {
        path: "collectData/kidsInfo",
        component: () => import("pages/CollectData/KidsInfo")
      }
    ]
  },
  {
    path: "/home",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/Home.vue") }]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
