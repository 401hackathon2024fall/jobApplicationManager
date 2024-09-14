import React, { useState, useEffect } from 'react';
import { Button, TextField, MenuItem, Select, FormControl, InputLabel, Modal, Box } from '@mui/material';
import axios from "axios";

const AddJob = () => {
  
  const [jobs, setJobs] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [jobDetails, setJobDetails] = useState({
    position: '',
    company: '',
    status: 'Applied',
    date: '',
  });

  // Fetch data from the Django REST API when the component mounts
  useEffect(() => {
    axios.get('http://localhost:8000/app/jobs')  // Change to your actual API URL
      .then(response => {
        setJobs(response.data);  // Set the jobs data in state
      })
      .catch(error => {
        console.error("There was an error fetching the jobs!", error);
      });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'date') {
      // Format the date to YYYY-MM-DD
      const formattedDate = new Date(value).toISOString().split('T')[0]; // Extracts the date part

      console.log(formattedDate);
      setJobDetails((prevDetails) => ({
        ...prevDetails,
        [name]: formattedDate,
      }));
    } else {
      setJobDetails((prevDetails) => ({
        ...prevDetails,
        [name]: value,
      }));
    }
  };

  const handleStatusChange = (e) => {
    setJobDetails((prevDetails) => ({
      ...prevDetails,
      status: e.target.value,
    }));
  };

  const handleAddJob = () => {
    // Send job details to the Django REST API
    axios.post('http://localhost:8000/app/jobs', jobDetails, {
    headers: {
      'Content-Type': 'application/json', // Ensure the content type is JSON
    },
  })
      .then(response => {
        // Add the new job to the state (so the table updates without page reload)
        setJobs((prevJobs) => [...prevJobs, response.data]);
        // Clear the input fields
        setJobDetails({
          position: '',
          company: '',
          status: '',
          date: '',
        });
        setModalOpen(false);  // Close the modal
      })
      .catch(error => {
        console.error("There was an error adding the job!", error);
      });
  };

  const handleDeleteJob = (jobId) => {
    axios.delete(`http://localhost:8000/app/jobs/${jobId}/`, {
      headers: {
        'Content-Type': 'application/json', // Ensure the content type is JSON
      },
    })
      .then(response => {
        // Remove the deleted job from the state
        setJobs((prevJobs) => prevJobs.filter((job) => job.id !== jobId));
        console.log("Job deleted successfully");
      })
      .catch(error => {
        console.error("There was an error deleting the job!", error);
      });
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '20px', marginLeft: '10px', marginRight: '10px'}}>
      <Button
        variant="contained"
        onClick={() => setModalOpen(true)}
        style={{ margin: '10px', backgroundColor: 'green', color: 'orange', width: '50%', justifyContent: 'center'}}
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
              style={ {backgroundColor: 'green', color: 'orange'} }
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
            <th>Actions</th> {/* Add a new header for actions */}
          </tr>
        </thead>
        <tbody>
          {jobs.map((job, index) => (
            <tr key={index}>
              <td>{job.position}</td>
              <td>{job.company}</td>
              <td>{job.status}</td>
              <td>{job.date}</td>
              <td>
                <Button
                  variant="outlined"
                  style={ {backgroundColor: 'green', color: 'orange'} }
                  color="error"
                  onClick={() => handleDeleteJob(job.id)} // Pass the job ID to the delete handler
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddJob;
