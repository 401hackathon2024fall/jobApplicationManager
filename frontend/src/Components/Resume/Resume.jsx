// Filename - resume.jsx
import { useState, useEffect } from "react";
import "./resume.css";

function Resume({ masterResume }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [experience, setExperience] = useState("");
    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [about, setAbout] = useState("");

    // Initialize state with master resume data if provided
    useEffect(() => {
        if (masterResume) {
            setFirstName(masterResume.firstName || "");
            setLastName(masterResume.lastName || "");
            setEmail(masterResume.email || "");
            setContact(masterResume.contact || "");
            setExperience(masterResume.experience || "");
            setResume(masterResume.resume || null);
            setUrl(masterResume.url || "");
            setAbout(masterResume.about || "");
        }
    }, [masterResume]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            firstName,
            lastName,
            email,
            contact,
            experience,
            resume,
            url,
            about
        );
        // Add your form submission logic here, e.g., save to a new resume file
    };

    const handleReset = () => {
        // Reset state to master resume data
        if (masterResume) {
            setFirstName(masterResume.firstName || "");
            setLastName(masterResume.lastName || "");
            setEmail(masterResume.email || "");
            setContact(masterResume.contact || "");
            setExperience(masterResume.experience || "");
            setResume(masterResume.resume || null);
            setUrl(masterResume.url || "");
            setAbout(masterResume.about || "");
        }
    };

    return (
        <div>
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
                    <label htmlFor="experience">Experience*</label>
                    <textarea
                        name="experience"
                        id="experience"
                        cols="30"
                        rows="5"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        placeholder="Describe your experience"
                        required
                    ></textarea>
                    <label htmlFor="file">Upload Resume*</label>
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) => setResume(e.target.files[0])}
                        required
                    />
                    <label htmlFor="url">Enter URL*</label>
                    <input
                        type="url"
                        name="url"
                        id="url"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        placeholder="Enter URL"
                        required
                    />
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="About yourself"
                    ></textarea>
                    <button type="button" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit">Submit</button>
                </form>
            </fieldset>
        </div>
    );
}

export default Resume;
