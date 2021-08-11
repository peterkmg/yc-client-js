<template>
  <div class="app-wrapper">
    <SideBar />
    <div class="main-container">
      <div>
        <TopBar />
        <!-- <TagsView v-if="needTagsView" /> -->
      </div>
      <router-view />
    </div>
  </div>
</template>
