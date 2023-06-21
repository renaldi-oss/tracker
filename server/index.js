const express = require('express');
const helmet = require('helmet');
const app = express();
const cors = require('cors');
const Job = require('./models/Job');

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes

// Create
app.post('/job', async (req, res) => {
  try {
    const { company_name, job_role, date_applied, app_status } = req.body;
    const newJob = await Job.create({
      company_name,
      job_role,
      date_applied,
      app_status,
    });
    res.status(201).json(newJob);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

// Get All
app.get('/job', async (req, res) => {
  try {
    const allJobs = await Job.findAll();
    res.json(allJobs);
  } catch (err) {
    console.log(err.message);
  }
});

// Get a job app
app.get('/job/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const jobApp = await Job.findByPk(id);
    res.json(jobApp);
  } catch (error) {
    console.log(error.message);
  }
});

// Update
app.put('/job/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedJob = await Job.update(req.body, {
      where: { id },
    });
    res.json(updatedJob);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Delete
app.delete('/job/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Job.destroy({ where: { id } });
    res.json({ message: 'Job has been deleted.' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Server error' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});