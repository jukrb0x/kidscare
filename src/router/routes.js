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
    path: "/Framework",
    redirect: "/Framework/home",
    component: () => import("layouts/HomeLayout.vue"),
    children: [
      {
        path: "/Framework/home",
        component: () => import("pages/Framework/Home.vue")
      },
      {
        path: "/Framework/games",
        component: () => import("pages/Framework/Games.vue")
      },
      {
        path: "/Framework/stats",
        component: () => import("pages/Framework/Stats.vue")
      },
      {
        path: "/Framework/me",
        component: () => import("pages/Framework/Me.vue")
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];

export default routes;
