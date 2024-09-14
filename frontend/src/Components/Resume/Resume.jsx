import { useState, useEffect } from "react";
import "./resume.css";
import { Box, Button, HStack, Text } from "@chakra-ui/react"; // Chakra UI components

function Resume({ masterResume }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [experiences, setExperiences] = useState([]); // To store multiple experience entries
  const [selectedExperienceIndex, setSelectedExperienceIndex] = useState(null); // To track the experience being edited
  const [resume, setResume] = useState(null);
  const [url, setUrl] = useState("");
  const [about, setAbout] = useState("");

  useEffect(() => {
    if (masterResume) {
      setFirstName(masterResume.firstName || "");
      setLastName(masterResume.lastName || "");
      setEmail(masterResume.email || "");
      setContact(masterResume.contact || "");
      setExperiences(masterResume.experiences || []);
      setResume(masterResume.resume || null);
      setUrl(masterResume.url || "");
      setAbout(masterResume.about || "");
    }
  }, [masterResume]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExperience = { position, employer, city, startDate, endDate, description };

    if (selectedExperienceIndex !== null) {
      const updatedExperiences = [...experiences];
      updatedExperiences[selectedExperienceIndex] = newExperience;
      setExperiences(updatedExperiences);
    } else {
      setExperiences([...experiences, newExperience]);
    }

    setSelectedExperienceIndex(null);
    clearExperienceForm();
  };

  const clearExperienceForm = () => {
    setPosition("");
    setEmployer("");
    setCity("");
    setStartDate("");
    setEndDate("");
    setDescription("");
  };

  const handleExperienceClick = (index) => {
    const experience = experiences[index];
    setPosition(experience.position);
    setEmployer(experience.employer);
    setCity(experience.city);
    setStartDate(experience.startDate);
    setEndDate(experience.endDate);
    setDescription(experience.description);
    setSelectedExperienceIndex(index);
  };

  const handleReset = () => {
    if (masterResume) {
      setFirstName(masterResume.firstName || "");
      setLastName(masterResume.lastName || "");
      setEmail(masterResume.email || "");
      setContact(masterResume.contact || "");
      setExperiences(masterResume.experiences || []);
      setResume(masterResume.resume || null);
      setUrl(masterResume.url || "");
      setAbout(masterResume.about || "");
    }
    setSelectedExperienceIndex(null);
    clearExperienceForm(); 
  };

  const [position, setPosition] = useState("");
  const [employer, setEmployer] = useState("");
  const [city, setCity] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="App">
      <h1>Master Resume</h1>
      <fieldset>
        <form onSubmit={handleSubmit}>
          <label htmlFor="firstname">First Name*</label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="Enter First Name"
            required
          />
          <label htmlFor="lastname">Last Name*</label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Enter Last Name"
            required
          />
          <label htmlFor="email">Enter Email*</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <label htmlFor="contact">Contact*</label>
          <input
            type="tel"
            name="contact"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter Mobile number"
            required
          />

          <h3>{selectedExperienceIndex !== null ? "Edit Experience" : "Add Experience"}</h3>
          <label>Position*</label>
          <input
            type="text"
            name="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position Title"
            required
          />
          <label>Employer*</label>
          <input
            type="text"
            name="employer"
            value={employer}
            onChange={(e) => setEmployer(e.target.value)}
            placeholder="Employer Name"
            required
          />
          <label>City</label>
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="City"
          />
          <label>Start Date*</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
          <label>Description</label>
          <textarea
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Job Description"
          ></textarea>

          <Button type="submit" colorScheme="blue">
            {selectedExperienceIndex !== null ? "Update Experience" : "Add Experience"}
          </Button>

          <Button type="button" colorScheme="gray" onClick={handleReset}>
            Reset
          </Button>
        </form>
      </fieldset>

      <h3>Experiences</h3>
      {experiences.length === 0 ? (
        <Text>No experiences added yet.</Text>
      ) : (
        experiences.map((experience, index) => (
          <Box
            key={index}
            p={2}
            borderWidth={1}
            borderRadius="md"
            mb={2}
            onClick={() => handleExperienceClick(index)}
            className="experience-row"
            cursor="pointer"
          >
            <HStack>
              <Text>{experience.position}</Text>
              <Text>-</Text>
              <Text>{experience.employer}</Text>
            </HStack>
          </Box>
        ))
      )}
    </div>
  );
}

export default Resume;
