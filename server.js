const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/lifeCareHospitalDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Appointment Schema
const appointmentSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    department: String,
    date: String,
    time: String,
    message: String
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

// POST route to save appointments
app.post("/appointments", async (req, res) => {
    try {
        const appointment = new Appointment(req.body);
        await appointment.save();
        res.status(201).json({ message: "Appointment booked successfully!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
