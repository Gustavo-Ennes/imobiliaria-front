const routes = [
  {
<<<<<<< HEAD
    path: '/login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {path: '', name: 'login', component: () => import('src/pages/LoginPage') }
    ]
  },
  {
    path: '/admin/',
=======
    path: "/login/",
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {path: "", name: "login", component: () => import("pages/LoginPage.vue")}
    ]
  },
  {
    path: '/dash/admin/',
>>>>>>> 190ccfe7912f9481a96841036654ee672af69419
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: "adminPage", component: () => import('src/pages/admin/AdminPage.vue') },
      { path: 'tenants/', name: "AdminTenantsPage", component: () => import('src/pages/admin/AdminTenantsPage.vue') },
      { path: 'owners/', name: "AdminOwnersPage", component: () => import('src/pages/admin/AdminOwnersPage.vue') },
      { path: 'lands/', name: "AdminLandsPage", component: () => import('src/pages/admin/AdminLandsPage.vue') },
      { path: 'properties/', name: "AdminPropertiesPage", component: () => import('src/pages/admin/AdminPropertiesPage.vue') }
    ]
  },
  {
    path: '/dash/tenant/',
    component: () => import('layouts/TenantLayout.vue'),
    children: [
      { path: '', name: "TenantPage", component: () => import('src/pages/tenant/TenantPage.vue') },
    ]
  },
  {
    path: '/dash/owner/',
    component: () => import('layouts/OwnerLayout.vue'),
    children: [
      { path: '', name:"OwnerPage",  component: () => import('src/pages/owner/OwnerPage.vue') },
      { path: 'properties/', name: "OwnerPropertiesPage", component: () => import('src/pages/owner/OwnerPropertiesPage.vue') },
      { path: 'lands/', name:"OwnerLandsPage", component: () => import('src/pages/owner/OwnerLandsPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    name: "404",
    component: () => import('pages/Error404.vue')
  }
]

export default routes
