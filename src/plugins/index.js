/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from "./webfontloader"
import vuetify from "./vuetify"
import pinia from "../store"
import router from "../router"

/**
 *
 * @param {object} app - Vue app instance
 */
export function registerPlugins(app) {
  loadFonts()
  app.use(vuetify).use(pinia).use(router)
}
