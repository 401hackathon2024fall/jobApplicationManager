// Filename - resume.jsx
import { useState, useEffect } from "react";
import "./resume.css";

function Resume({ masterResume }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [gender, setGender] = useState("male");
    const [subjects, setSubjects] = useState({
        english: true,
        maths: false,
        physics: false,
    });
    const [resume, setResume] = useState(null);
    const [url, setUrl] = useState("");
    const [selectedOption, setSelectedOption] = useState("");
    const [about, setAbout] = useState("");

    // Initialize state with master resume data if provided
    useEffect(() => {
        if (masterResume) {
            setFirstName(masterResume.firstName || "");
            setLastName(masterResume.lastName || "");
            setEmail(masterResume.email || "");
            setContact(masterResume.contact || "");
            setGender(masterResume.gender || "male");
            setSubjects(masterResume.subjects || {
                english: true,
                maths: false,
                physics: false,
            });
            setResume(masterResume.resume || null);
            setUrl(masterResume.url || "");
            setSelectedOption(masterResume.selectedOption || "");
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
            gender,
            selectedOption,
            subjects,
            resume,
            url,
            about
        );
        // Add your form submission logic here, e.g., save to a new resume file
    };

    const handleSubjectChange = (sub) => {
        setSubjects((prev) => ({
            ...prev,
            [sub]: !prev[sub],
        }));
    };

    const handleReset = () => {
        // Reset state to master resume data
        if (masterResume) {
            setFirstName(masterResume.firstName || "");
            setLastName(masterResume.lastName || "");
            setEmail(masterResume.email || "");
            setContact(masterResume.contact || "");
            setGender(masterResume.gender || "male");
            setSubjects(masterResume.subjects || {
                english: true,
                maths: false,
                physics: false,
            });
            setResume(masterResume.resume || null);
            setUrl(masterResume.url || "");
            setSelectedOption(masterResume.selectedOption || "");
            setAbout(masterResume.about || "");
        }
    };

    return (
        <div>
            <h1>Form in React</h1>
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
                    <label>Gender*</label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="male">Male</label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        id="female"
                        checked={gender === "female"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="female">Female</label>
                    <input
                        type="radio"
                        name="gender"
                        value="other"
                        id="other"
                        checked={gender === "other"}
                        onChange={(e) => setGender(e.target.value)}
                    />
                    <label htmlFor="other">Other</label>
                    <label htmlFor="subjects">Your best Subject</label>
                    <input
                        type="checkbox"
                        name="subjects"
                        id="english"
                        checked={subjects.english}
                        onChange={() => handleSubjectChange("english")}
                    />
                    <label htmlFor="english">English</label>
                    <input
                        type="checkbox"
                        name="subjects"
                        id="maths"
                        checked={subjects.maths}
                        onChange={() => handleSubjectChange("maths")}
                    />
                    <label htmlFor="maths">Maths</label>
                    <input
                        type="checkbox"
                        name="subjects"
                        id="physics"
                        checked={subjects.physics}
                        onChange={() => handleSubjectChange("physics")}
                    />
                    <label htmlFor="physics">Physics</label>
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
                    <label htmlFor="select">Select your choice</label>
                    <select
                        name="select"
                        id="select"
                        value={selectedOption}
                        onChange={(e) => setSelectedOption(e.target.value)}
                    >
                        <option value="" disabled>
                            Select your Answer
                        </option>
                        <optgroup label="Beginner">
                            <option value="1">HTML</option>
                            <option value="2">CSS</option>
                            <option value="3">JavaScript</option>
                        </optgroup>
                        <optgroup label="Advanced">
                            <option value="4">React</option>
                            <option value="5">Node</option>
                            <option value="6">Express</option>
                            <option value="7">MongoDB</option>
                        </optgroup>
                    </select>
                    <label htmlFor="about">About</label>
                    <textarea
                        name="about"
                        id="about"
                        cols="30"
                        rows="10"
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder="About yourself"
                        required
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
