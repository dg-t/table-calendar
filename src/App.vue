<template>
  <div class="bg-gray-100 h-screen">
    <h1>Table Calendar</h1>
    <CalendarPage />
  </div>
</template>

<script>
import CalendarPage from './views/calendar/CalendarPage.vue';

export default {
  name: 'App',
  components: {
    CalendarPage,
  },
};
</script>
