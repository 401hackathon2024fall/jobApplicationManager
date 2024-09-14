import React, { useState } from 'react';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Modal, Box } from '@mui/material';

const AddJob = () => {
  const [jobs, setJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    position: '',
    company: '',
    location: '',
    status: 'Applied',
    date: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleStatusChange = (e) => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      status: e.target.value,
    }));
  };

  const handleAddJob = () => {
    setJobs((prevJobs) => [...prevJobs, jobDetails]);
    setJobDetails({
      position: '',
      company: '',
      location: '',
      status: 'Applied',
      date: '',
    });
    setModalOpen(false);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Button
        variant="contained"
        onClick={() => setModalOpen(true)}
        style={{ margin: '10px' }}
      >
        Add Job
      </Button>

      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 24,
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            gap: 2, // Adds space between components
          }}
        >
          <form>
            <TextField
              fullWidth
              label="Position"
              name="position"
              value={jobDetails.position}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Company"
              name="company"
              value={jobDetails.company}
              onChange={handleInputChange}
              margin="normal"
            />
            <TextField
              fullWidth
              label="Location"
              name="location"
              value={jobDetails.location}
              onChange={handleInputChange}
              margin="normal"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Status</InputLabel>
              <Select
                name="status"
                value={jobDetails.status}
                onChange={handleStatusChange}
              >
                <MenuItem value="Applied">Applied</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
                <MenuItem value="Accepted">Accepted</MenuItem>
                <MenuItem value="Interview">Interview</MenuItem>
              </Select>
            </FormControl>
            <TextField
              fullWidth
              label="Date"
              type="date"
              name="date"
              value={jobDetails.date}
              onChange={handleInputChange}
              margin="normal"
              InputLabelProps={{ shrink: true }}
            />
            <Button
              variant="contained"
              onClick={handleAddJob}
              sx={{ mt: 2 }} // Ensures spacing at the top
            >
              Add Job
            </Button>
          </form>
        </Box>
      </Modal>

      {/* Render the list of jobs */}
      <table>
        <thead>
          <tr>
            <th>Position</th>
            <th>Company</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.position}</td>
              <td>{job.company}</td>
              <td>{job.status}</td>
              <td>{job.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default AddJob;
