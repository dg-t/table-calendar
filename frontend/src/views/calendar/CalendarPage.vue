<template>
  <AppCalendar :dummy-data="dummyData" />
</template>

<script>
import AppCalendar from '../../components/calendar/AppCalendar.vue';

export default {
  name: 'CalendarPage',
  components: {
    AppCalendar,
  },
  data() {
    return {
      dummyData: {
        userName: 'Jamie Yato',
        planifications: [
          {
            dates: { from: '2022-11-20', to: '2022-11-23' },
            title: 'Title plan',
            description: 'Description plan',
            status: 'open',
          },
          {
            dates: { from: '2022-11-13', to: '2022-11-16' },
            title: 'Title plan 2',
            description: 'Description plan 2',
            status: 'inprogress',
          },
          {
            dates: { from: '2022-11-05', to: '2022-11-20' },
            title: 'Very Long Title - Title plan 3 - Test Long text',
            description: 'Description plan 3',
            status: 'completed',
          },
          {
            dates: { from: '2022-11-20', to: '2022-11-25' },
            title: 'Title plan 3',
            description: 'Description plan 3',
            status: 'completed',
          },
          {
            dates: { from: '2022-11-20', to: '2022-11-25' },
            title: 'Title plan 3',
            description: 'Description plan 3',
            status: 'completed',
          },
          {
            dates: { from: '2022-11-20', to: '2022-11-25' },
            title: 'Title plan 3',
            description: 'Description plan 3',
            status: 'completed',
          },
          {
            dates: { from: '2022-11-20', to: '2022-11-25' },
            title: 'Title plan 3',
            description: 'Description plan 3',
            status: 'completed',
          },
          {
            dates: { from: '2022-11-20', to: '2022-11-25' },
            title: 'Title plan 3',
            description: 'Description plan 3',
            status: 'completed',
          },
          {
            dates: { from: '2022-11-20', to: '2022-11-25' },
            title: 'Title plan 3',
            description: 'Description plan 3',
            status: 'completed',
          },
          {
            dates: { from: '2022-11-20', to: '2022-11-25' },
            title: 'Title plan 3',
            description: 'Description plan 3',
            status: 'completed',
          },
          {
            dates: { from: '2022-11-20', to: '2022-11-25' },
            title: 'Title plan 4',
            description: 'Description plan 3',
            status: 'completed',
          },
          {
            dates: { from: '2022-11-20', to: '2022-11-25' },
            title: 'Title plan 3',
            description: 'Description plan 3',
            status: 'completed',
          },
        ],
      },
    };
  },
};
</script>
