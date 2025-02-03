
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/valentines-k',
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
    'index.csr.html': {size: 681, hash: '01fc9584c422647764b4058f5ddcdf9e8418f6f18c477794ef8d57f45824b996', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1019, hash: '3776cfb83ad7b9d3d39c91139f5da0617f5f5adb3a783142fe0296c5564b27e7', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'valentine/index.html': {size: 3094, hash: '105c4e4cba389b7f4f83dfa605bf0770c83e63f4f00bb287c5a5f26092cd65b6', text: () => import('./assets-chunks/valentine_index_html.mjs').then(m => m.default)},
    'styles-LKRX6P6X.css': {size: 50, hash: 'JaDESZmdUgA', text: () => import('./assets-chunks/styles-LKRX6P6X_css.mjs').then(m => m.default)}
  },
};
