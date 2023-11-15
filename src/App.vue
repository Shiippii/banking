<template>
  <v-app>
    <v-app-bar>
      <v-app-bar-nav-icon />
      <v-app-bar-title>Dashboard</v-app-bar-title>
      <v-spacer />
      <v-btn icon>
        <v-icon icon="mdi-theme-light-dark" @click="toggleTheme()"></v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from "vuetify"

const theme = useTheme()

/**
 * Toggles the global theme between light and dark.
 */
function toggleTheme() {
  // TODO save in store
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark"
}
</script>
