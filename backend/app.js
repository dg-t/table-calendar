const fs = require('fs');
// const express = require('express');
const express = require('express');

const app = express();

app.use(express.json());

// app.get('/', (req, res) => {
//     // res.status(200).send('Hello');
//     res.status(200).json({message: 'Hello', app: 'table-calendar'});
// });

// app.post('/', (req, res) => {
//     res.status(200).send('Post req...');
// });

const calendar = JSON.parse(
  fs.readFileSync(`${__dirname}/dev-data/dummy-calendar.json`)
);

app.get('/api/v1/calendar', (req, res) => {
  // NOTE: data: {calendar: calendar} FIRST calendar same as endpoint, second calendar is the data!
  res.status(200).json({
    status: 'success',
    results: calendar.length,
    data: { calendar },
  });
});

app.post('/api/v1/calendar', (req, res) => {
  //   console.log(req.body);
  const newId = calendar[calendar.length - 1].id + 1;
  const newCalendar = { ...req.body, id: newId };
  //   const newCalendar = Object.assign({ id: newId }, req.body);
  calendar.push(newCalendar);
  fs.writeFile(
    `${__dirname}/dev-data/dummy-calendar.json`,
    JSON.stringify(calendar),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          calendar: newCalendar,
        },
      });
    }
  );
  //   res.send('Sent');
});

const port = 3001;
app.listen(port, () => {
  console.log('Hello port: ', port);
});
