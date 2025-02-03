
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/valentines-k/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/valentines-k/valentine",
    "route": "/valentines-k"
  },
  {
    "renderMode": 2,
    "route": "/valentines-k/valentine"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 682, hash: 'd93c24ab137add48cdf55c72370c18190fd524a872a4413c3985d177a9046e2a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1020, hash: 'ed7c060100244d8185a0319023d51b525bd39d1563bd5a7ee37420abf30cc3a5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'valentine/index.html': {size: 3095, hash: '490f53e720381d2c32878f4b936b4c3047429f661cbef375a486db84d3a90770', text: () => import('./assets-chunks/valentine_index_html.mjs').then(m => m.default)},
    'styles-LKRX6P6X.css': {size: 50, hash: 'JaDESZmdUgA', text: () => import('./assets-chunks/styles-LKRX6P6X_css.mjs').then(m => m.default)}
  },
};
