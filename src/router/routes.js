
const routes = [
  {
    path: '/',
    component: () => import('layouts/TrueLayout.vue'),
    children: [
      { path: '/dashboard', component: () => import('pages/Index.vue') },
      { path: '/balance', component: () => import('src/pages/Balance.vue') },
      { path: '/parametres', component: () => import('src/pages/Parametres.vue') },
      { path: '/recharge', component: () => import('src/pages/Recharge.vue') },
      { path: '/retrait', component: () => import('src/pages/Retrait.vue') },
      { path: '/virement', component: () => import('src/pages/Virements.vue') },
      { path: '/rapports', component: () => import('src/pages/Rapports.vue'), },
      { path: '/rapports/navigrapport', component: () => import('src/pages/NavigRapport.vue') },
      { path: '/rapports/navigrapports', component: () => import('src/pages/NavigRapports.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/Login.vue')
  },
  // Page d'authentification


  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
