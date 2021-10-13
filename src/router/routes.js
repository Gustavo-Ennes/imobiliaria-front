const routes = [
  {
    path:'',
    component: () => import('layouts/IndexLayout.vue'),
    children: [
      {path: '', name: 'index', component: () => import("pages/Index")},
      {path: '/registration/tenant', name: 'TenantRegistration', props:{type: "tenant"}, component: () => import("pages/Registration.vue")},
      {path: '/registration/owner', name: 'OwnerRegistration', props:{type: "owner"}, component: () => import("pages/Registration.vue")},
      {path: '/registration/admin', name: 'AdminRegistration', props:{type: "admin"}, component: () => import("pages/Registration.vue")},

    ]
  },
  {
    path: '/login',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [
      {path: '', name: 'login', component: () => import('src/pages/LoginPage') }
    ]
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    path: '/dash/admin',
=======
    path: '/dash/admin/',
>>>>>>> dev
=======
    path: '/dash/admin',
>>>>>>> e958f7f8aed0cc521b5824a32adb0a1c7176267f
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
<<<<<<< HEAD
<<<<<<< HEAD
    path: '/dash/tenant',
=======
    path: '/dash/tenant/',
>>>>>>> dev
=======
    path: '/dash/tenant',
>>>>>>> e958f7f8aed0cc521b5824a32adb0a1c7176267f
    component: () => import('layouts/TenantLayout.vue'),
    children: [
      { path: '', name: "TenantPage", component: () => import('src/pages/tenant/TenantPage.vue') },
    ]
  },
  {
<<<<<<< HEAD
<<<<<<< HEAD
    path: '/dash/owner',
=======
    path: '/dash/owner/',
>>>>>>> dev
=======
    path: '/dash/owner',
>>>>>>> e958f7f8aed0cc521b5824a32adb0a1c7176267f
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
