<template>
  <div class="bg-white m-8 p-4">
    <div>
      <h2 class="text-3xl text-center p-8 mb-4">{{ currentMonthName }}</h2>
    </div>
    <div class="rounded shadow-md grid grid-cols-7">
      <div
        v-for="(c, i) in calendarEvents"
        :key="i"
        class="date_conatiner border"
        @click="addPlan"
      >
        <h5 class="font-medium text-center p-1">
          {{ c.date.split('-')[2] }}
        </h5>
        <div v-for="(p, i) in c.planifications" :key="i" class="date_content">
          <p
            v-if="i < 4"
            class="hidden md:block text-sm"
            @click.stop="getPlan(p)"
          >
            {{ p.title }}
          </p>
          <p
            v-else-if="i === 4"
            class="text-xs rounded-full shadow-md w-20 py-1 px-3 m-auto bg-gray-200 text-center block"
            @click.stop="getAllPlan(c.planifications)"
          >
            More...
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppCalendar',
  props: {
    dummyData: { type: Object, default: () => {} },
  },
  data() {
    return {
      currentDate: null,
      currentMonthName: null,
      totalMonthDays: 0,
      calendarEvents: [],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
    };
  },
  beforeMount() {
    // const hey = JSON.parse(JSON.stringify(this.dummyData));
    this.setInitialDate();
    const monthlyPlan = this.getMonthlyPlan(this.dummyData.planifications);
    this.fetchPlanifications(monthlyPlan);
  },
  methods: {
    setInitialDate() {
      this.currentDate = new Date();
      this.currentMonthName = this.months[this.currentDate.getMonth()];
      this.totalMonthDays = new Date(
        this.currentDate.getFullYear(),
        this.currentDate.getMonth() + 1,
        0
      ).getDate();
    },
    getMonthlyPlan(planifications) {
      const monthlyPlan = [];
      for (const plan of planifications) {
        const { from, to } = plan.dates;
        const planificationFromMonth = parseFloat(from.split('-')[1]);
        const planificationToMonth = parseFloat(to.split('-')[1]);
        const currentMonth = this.currentDate.getMonth() + 1;
        if (
          !monthlyPlan.includes(plan) &&
          (planificationFromMonth === currentMonth ||
            planificationToMonth === currentMonth)
        )
          monthlyPlan.push(plan);
      }
      return monthlyPlan;
    },
    fetchPlanifications(monthlyPlan) {
      this.calendarEvents = [...Array(this.totalMonthDays)].map((event, i) => {
        event = {};
        event.planifications = [];
        const day = i + 1;
        event.date = `${this.currentDate.getFullYear()}-${
          this.currentDate.getMonth() + 1
        }-${day}`;
        for (const plan of monthlyPlan) {
          const allEventDates = this.getEventsDates(
            plan.dates.from,
            plan.dates.to
          );
          for (const eventDate of allEventDates) {
            if (day === parseFloat(eventDate.split('-')[2]))
              event.planifications.push(plan);
          }
        }
        return event;
      });
    },
    getEventsDates(dayFromPlan, dayToPlan) {
      for (
        var dateRange = [], dateFrom = new Date(dayFromPlan);
        dateFrom <= new Date(dayToPlan);
        dateFrom.setDate(dateFrom.getDate() + 1)
      ) {
        dateRange.push(new Date(dateFrom));
      }
      const formatRange = dateRange
        .map((v) => v.toISOString())
        .map((el) => el.split('T')[0]);
      return formatRange;
    },
    getPlan(plan) {
      // TODO: modify or delete plan
      console.log('p: ', plan);
    },
    getAllPlan(plans) {
      // TODO: modify or delete all plans
      console.log('ps: ', plans);
    },
    addPlan() {
      // TODO: Add plan
      console.log('ADD');
    },
  },
};
</script>

<style scoped>
.date_conatiner {
  width: calc(100%);
  height: 165px;
  overflow: hidden;
  white-space: nowrap;
}
.date_content {
  /* width: calc(90%); */
  margin: 0 10px;
  padding: 2px 0;
  overflow: hidden;
  /* width: 90%; */
}
</style>
