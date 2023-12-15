// Utilities
import { createPinia } from 'pinia'
import piniaPlugPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPlugPersistedstate)

export default pinia
