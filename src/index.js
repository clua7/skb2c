import express from 'express';
import cors from 'cors';

import canonize from "./canonize";

const app = express();
app.use(cors());
app.get('/task2C', (req, res) => {
  const name = req.query.username;
  const username = canonize(name);
  res.send('@' + username[5].replace("@", ""));

});


app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
