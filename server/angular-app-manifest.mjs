
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/ListaTareas/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/ListaTareas"
  }
],
  assets: {
    'index.csr.html': {size: 520, hash: '1128da964e92bae81812d61c57e010e8d10466765ba2936aec2c8c7f1b814bee', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1033, hash: '7a578967b20436cff2bbdb9d8d9ea3d2ca34f2f89ce5bbc9381fc6a29170a989', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3006, hash: '68f936b708e7d1867613a657f00af4dd96ff9fa9a401ac5832e274ff14ca17f6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
