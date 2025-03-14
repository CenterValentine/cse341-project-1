const express = require('express');
const mongodb = require('./data/database')
const app = express();
const bodyParser = require('body-parser');
const swaggerRoutes = require('./routes/swagger');
const cors = require('cors');


const corsOptions = {
    origin: '*',
    methods: 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
};


app.use(swaggerRoutes);

app.use(cors(corsOptions));

const port = process.env.PORT || 3000;
app.use(bodyParser.json());

app.use('/', require('./routes'));

mongodb.initDb((err) => {
    if(err){console.log(err);}
    else{
        app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
    }

});

