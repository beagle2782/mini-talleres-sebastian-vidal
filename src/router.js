import { createMemoryHistory, createRouter } from 'vue-router'

import PrimaVidista from './PrimaVidista.vue'
import SecundaVidista from './SecundaVidista.vue'
import TerteraVidista from './TerteraVidista.vue'
import QuatarVidista from './QuatarVidista.vue'
import QuintaVidista from './QuintaVidista.vue'

const routes = [
  { path: '/', component: PrimaVidista },
  { path: '/secunda', component: SecundaVidista },
  { path: '/tertera', component: TerteraVidista },
  { path: '/quatar', component: QuatarVidista },
  { path: '/quinta', component: QuintaVidista },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router