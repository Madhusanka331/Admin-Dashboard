const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection  successfully");
})

const LecturerRouter = require('./routes/Lecturer');
const studentRouter = require('./routes/student');
const SubTypeRouter = require('./routes/SubType');
const DocumentRouter = require('./routes/Document');
const MarkingschemeRouter = require('./routes/Markingscheme');
const GroupRouter = require('./routes/Group');
const AlloCatePanelMembersRouter = require('./routes/AlloCatePanelMembers');



app.use('/Lecturer', LecturerRouter);
app.use('/student', studentRouter);
app.use('/SubType', SubTypeRouter);
app.use('/Document', DocumentRouter);
app.use('/Markingscheme', MarkingschemeRouter);

app.use('/Group',GroupRouter);
app.use('/AlloCatePanelMembers', AlloCatePanelMembersRouter);



app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});