const fs = require('fs');
// const express = require('express');
const express = require('express');

const app = express();

app.use(express.json());

const calendars = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/dummy-calendar.json`)
);

const getAllCalendars = (req, res) => {
  // NOTE: data: {calendars: calendars} FIRST calendars same as endpoint, second calendars is the data!
  res.status(200).json({
    status: 'success',
    results: calendars.length,
    data: { calendars },
  });
};
const getCalendar = (req, res) => {
  console.log(req.params); // url params
  const id = parseInt(req.params.id);
  const calendar = calendars.find((el) => el.id === id);

  if (!calendar)
    return res.status(404).json({ status: 'failed', message: 'Invalid id' });

  res.status(200).json({
    status: 'success',
    data: { calendar },
  });
};

const createCalendar = (req, res) => {
  //   console.log(req.body);
  const newId = calendars[calendars.length - 1].id + 1;
  const newCalendars = { ...req.body, id: newId };
  //   const newCalendars = Object.assign({ id: newId }, req.body);
  calendars.push(newCalendars);
  fs.writeFile(
    `${__dirname}/dev-data/dummy-calendar.json`,
    JSON.stringify(calendars),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          calendars: newCalendars,
        },
      });
    }
  );
  //   res.send('Sent');
};
const updateCalendar = (req, res) => {
  const id = parseInt(req.params.id);

  if (id > calendars.length - 1)
    return res.status(404).json({ status: 'failed', message: 'Invalid id' });

  res.status(200).json({
    status: 'success',
    data: 'Updated calendar here...',
  });
};
const deleteCalendar = (req, res) => {
  console.log(req.params); // url params
  const id = parseInt(req.params.id);

  if (id > calendars.length - 1)
    return res.status(404).json({ status: 'failed', message: 'Invalid id' });

  res.status(204).json({
    status: 'success',
    data: null,
  });
};

// app.get('/api/v1/calendars', getAllCalendars);
// app.post('/api/v1/calendars', createCalendar);
// // With optional parameters // app.get('/api/v1/calendars/:id/:optional?', getCalendar)
// app.get('/api/v1/calendars/:id', getCalendar);
// app.patch('/api/v1/calendars/:id', updateCalendar);
// app.delete('/api/v1/calendars/:id', deleteCalendar);

app.route('/api/v1/calendars').get(getAllCalendars).post(createCalendar);
app
  .route('/api/v1/calendars/:id')
  .get(getCalendar)
  .patch(updateCalendar)
  .delete(deleteCalendar);

const port = 3001;
app.listen(port, () => {
  console.log('Hello port: ', port);
});
