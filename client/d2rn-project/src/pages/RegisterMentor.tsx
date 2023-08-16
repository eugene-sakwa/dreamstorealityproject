import { useState } from "react";
function RegisterMentor() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [title, setTitle] = useState("");
  const [industry, setIndustry] = useState("");
  const [bio, setBio] = useState("");
  const [primaryContact, setPrimaryContact] = useState("");
  const [location, setLocation] = useState("");
  const [availability, setAvailability] = useState("");
  const [skillsTags, setSkillsTags] = useState("");
  const [roleDescription, setRoleDescription] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [mentorRegistered, setMentorRegistered] = useState<boolean>(false);


  const handleRegisterMentor = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const newMentor = {
      firstName,
      lastName,
      title,
      industry,
      bio,
      primaryContact,
      location,
      availability,
      skillsTags,
      roleDescription
    }
    try {
      await fetch("http://localhost:8080/registermentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newMentor),
      });
      setMentorRegistered(!mentorRegistered);
      setFirstName('');
      setLastName('');
      setTitle('');
      setIndustry('');
      setBio('');
      setPrimaryContact('');
      setLocation('');
      setAvailability('');
      setSkillsTags('');
      setRoleDescription('');
    } catch (err) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">

      <h2 className="text-4xl font-bold text-center text-primary mb-4 p-4">
        Mentor Registration
      </h2>
      <div className="w-[600px] text-primary">
        <form
          onSubmit={handleRegisterMentor}
          className="grid gap-2   "
          action="/submit-mentor"
          method="POST"
        >
          <label htmlFor="firstName">First Name:</label>
          <input
            className="border-2 border-primary rounded-md p-2"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
            type="text"
            id="firstName"
            name="firstName"
            required
          />

          <label htmlFor="lastName">Last Name:</label>
          <input
            className="border-2 border-primary rounded-md p-2"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
            type="text"
            id="lastName"
            name="lastName"
            required
          />
          <br />

          <label htmlFor="title">Title:</label>
          <input
            className="border-2 border-primary rounded-md p-2"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            type="text"
            id="title"
            name="title"
            required
          />
          <br />

          <label htmlFor="industry">Industry:</label>
          <input
            className="border-2 border-primary rounded-md p-2"
            onChange={(e) => {
              setIndustry(e.target.value);
            }}
            value={industry}
            type="text"
            id="industry"
            name="industry"
            required
          />
          <br />

          <label htmlFor="bio">Bio:</label>
          <textarea
            onChange={(e) => {
              setBio(e.target.value);
            }}
            className="border-2 border-primary rounded-md p-2"
            value={bio}
            id="bio"
            name="bio"
            rows={4}
            required
          ></textarea>
          <br />

          <label htmlFor="primaryContact">Primary Contact:</label>
          <input
            className="border-2 border-primary rounded-md p-2"
            onChange={(e) => {
              setPrimaryContact(e.target.value);
            }}
            value={primaryContact}
            type="text"
            id="primaryContact"
            name="primaryContact"
            required
          />
          <br />

          <label htmlFor="location">Location:</label>
          <input
            className="border-2 border-primary rounded-md p-2"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            value={location}
            type="text"
            id="location"
            name="location"
            required
          />
          <br />

          <label htmlFor="availability">Availability:</label>
          <input
            className="border-2 border-primary rounded-md p-2"
            onChange={(e) => {
              setAvailability(e.target.value);
            }}
            value={availability}
            type="text"
            id="availability"
            name="availability"
            required
          />
          <br />

          <label htmlFor="skillsTags">Skills Tags (comma-separated):</label>
          <input
            className="border-2 border-primary rounded-md p-2"
            onChange={(e) => {
              setSkillsTags(e.target.value);
            }}
            value={skillsTags}
            type="text"
            id="skillsTags"
            name="skillsTags"
            required
          />
          <br />

          <label htmlFor="roleDescription">Role Description:</label>
          <textarea
            onChange={(e) => {
              setRoleDescription(e.target.value);
            }}
            className="border-2 border-primary rounded-md p-2"
            value={roleDescription}
            id="roleDescription"
            name="roleDescription"
            rows={4}
            required
          ></textarea>
          <br />

          <button
            className="px-4 py-2 mb-12  bg-accent text-white rounded-lg font-semibold"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterMentor;
