<!-- nav-bar -->
<template>
<v-app>
  <v-app-bar image="./assets/bar-bg.jpg">
    <v-container class="d-flex align-center">
      <v-app-bar-title>
        <RouterLink to="/" id="title" class="custom-title text-h4 font-weight-bold">
          <v-icon class="mr-2">mdi-eye-circle-outline</v-icon>眼球鐘
        </RouterLink>
      </v-app-bar-title>
      <v-btn prepend-icon="mdi-home" to="/">首頁</v-btn>
      <v-btn prepend-icon="mdi-list-status" to="/list">事項</v-btn>
      <v-btn prepend-icon="mdi-cog" to="/settings">設定</v-btn>
    </v-container>
  </v-app-bar>
  <v-main class="eyes">
    <!-- Component = 目前該顯示的路由元件 -->
    <router-view v-slot="{Component}">
      <!--
        keep-alive 保持被包住的元件不被銷毀
        使用 include 指定只有 HomeView 這個元件不被銷毀
      -->
      <!--
        component = 動態元件
        使用 id 綁定的元件
      -->
      <keep-alive include="HomeView">
        <component :is="Component"></component>
      </keep-alive>
    </router-view>
  </v-main>
  <v-footer id="footer" class="d-flex flex-column w-100 bg-green">
    <strong>
    看得你心發寒
    </strong>
    <div class="py-2 text-center w-100">
      &COPY; {{ new Date().getFullYear() }} — <strong>Hello</strong>
    </div>
  </v-footer>
</v-app>
</template>

<style scoped>
.eyes{
  background-image: url(./assets/eyes.jpg);
  background-repeat: repeat;
}

#title{
  text-decoration: none;
  color: aqua;
}

#footer{
  position: absolute;
  bottom: 0;
}
</style>

<script setup>

</script>
