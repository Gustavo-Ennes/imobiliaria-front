
const routes = [
  {
    path: '/admin/',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AdminPage.vue') }
    ]
  },
  {
    path: '/tenant/',
    component: () => import('layouts/TenantLayout.vue'),
    children: [
      { path: '', component: () => import('pages/TenantPage.vue') }
    ]
  },
  {
    path: '/owner/',
    component: () => import('layouts/OwnerLayout.vue'),
    children: [
      { path: '', component: () => import('pages/OwnerPage.vue') }
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
