import { useEffect, useState } from "react";
import MentorCard from "../Components/MentorCard";
import { Mentor } from "../Components/MentorCard";

function Mentors() {
  const [mentors, setMentors] = useState<Mentor[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/mentors", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setMentors(data));
  }, []);

  console.log(mentors);
  return (
    <div>
      <h2 className="text-center text-6xl pt-12 text-primary font-bold">Mentors</h2>
      <div className="grid grid-cols-2 gap-2">
        {mentors.map((element) => (
          <MentorCard key={element.id} element={element} />
        ))}
      </div>
    </div>
  );
}
export default Mentors;
