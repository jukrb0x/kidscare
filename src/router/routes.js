const routes = [
  {
    path: "/",
    component: () => import("layouts/OpeningLayout.vue"),
    children: [{ path: "", component: () => import("pages/Opening.vue") }]
  },
  {
    path: "/",
    component: () => import("layouts/WelcomeLayout.vue"),
    children: [
      {
        path: "collectData",
        component: () => import("pages/CollectData/CollectData.vue")
      },
      {
        path: "collectData/kidsInfo",
        component: () => import("pages/CollectData/KidsInfo")
      }
    ]
  },
  {
    path: "/intro",
    component: () => import("layouts/IntroLayout.vue"),
    children: [{ path: "", component: () => import("pages/IntroFeatures.vue") }]
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
