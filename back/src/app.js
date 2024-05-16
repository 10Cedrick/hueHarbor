const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const apiRoutes = require('./routes/api');

const app = express()
const port = 3333
const http = require('http').Server(app)

app.use(cors({origin: '*'}))
app.use(bodyParser.json())
app.get('/', (req, res) => {
    res.send('Hello world 🚀');
})
app.use('/api', apiRoutes);

http.listen(port, () =>
    console.log(`App listening on http://localhost:${port} ! 🚀🚀`)
  );