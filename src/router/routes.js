const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "HomePage",
        name: "Home",
        component: () => import("pages/HomePage.vue"),
      },
      {
        path: "NuevoPage",
        name: "Nuevo",
        component: () => import("pages/NuevoPage.vue"),
      },
      {
        path: "ActualizarPage",
        name: "Actualizar",
        component: () => import("pages/ActualizarPage.vue"),
      },
      {
        path: "EditarPage",
        name: "Editar",
        component: () => import("pages/EditarPage.vue"),
      },
      {
        path: "GaleriaPage",
        name: "Galeria",
        component: () => import("pages/GaleriaPage.vue"),
      },
      {
        path: "FormsLogin",
        name: "Login",
        component: () => import("pages/FormLogin.vue"),
      },
      {
        path: "PruebaPage",
        name: "Prueba",
        component: () => import("pages/PruebaPage.vue"),
      },
      {
        path: "FormularioPage",
        name: "Formularios",
        component: () => import("pages/FormularioPage.vue"),
      },

    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
