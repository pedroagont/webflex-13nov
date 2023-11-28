const express = require('express');
const app = express();
const port = 3000;

const notesDb = [
  { id: 1, content: 'learn html' },
  { id: 2, content: 'learn css' },
  { id: 3, content: 'learn js' },
  { id: 4, content: 'learn jquery' },
];

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pedro', (req, res) => {
  res.send('Hello Pedro!');
});

app.get('/notes', (req, res) => {
  const templateVars = { notes: notesDb };
  res.render('notes', templateVars);
});

app.get('/notes/new', (req, res) => {
  res.render('notes-new');
});

app.get('/api/notes', (req, res) => {
  res.send(notesDb);
});

app.post('/api/notes', (req, res) => {
  const content = req.body.content;
  if (content === '') {
    res.status(400).json('Missing content!');
    return;
  }

  notesDb.push({ id: 123, content });
  res.redirect('/notes');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
