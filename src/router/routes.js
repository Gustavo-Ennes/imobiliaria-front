
const routes = [
  {
    path: '/admin/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/admin/AdminPage.vue') },
      { path: 'tenants/', component: () => import('src/pages/admin/AdminTenantsPage.vue') },
      { path: 'owners/', component: () => import('src/pages/admin/AdminOwnersPage.vue') },
      { path: 'lands/', component: () => import('src/pages/admin/AdminLandsPage.vue') },
      { path: 'properties/', component: () => import('src/pages/admin/AdminPropertiesPage.vue') }
    ]
  },
  {
    path: '/tenant/',
    component: () => import('layouts/TenantLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/tenant/TenantPage.vue') },
    ]
  },
  {
    path: '/owner/',
    component: () => import('layouts/OwnerLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/owner/OwnerPage.vue') },
      { path: 'properties/', component: () => import('src/pages/tenant/OwnerPropertiesPage.vue') },
      { path: 'lands/', component: () => import('src/pages/tenant/OwnerLandsPage.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
