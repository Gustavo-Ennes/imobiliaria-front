
const routes = [
  {
    path: '/admin/',
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
    path: '/tenant/',
    component: () => import('layouts/TenantLayout.vue'),
    children: [
      { path: '', name: "TenantPage", component: () => import('src/pages/tenant/TenantPage.vue') },
    ]
  },
  {
    path: '/owner/',
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
