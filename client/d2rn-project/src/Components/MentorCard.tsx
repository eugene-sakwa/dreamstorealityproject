export type MentorCardProps = {
  element: Mentor;
};

export interface Mentor {
  id: number;
  firstName: string;
  lastName: string;
  title: string;
  industry: string;
  bio: string;
  primaryContact: string;
  location: string;
  availability: string;
  skillsTags: string[];
  roleDescription: string;
}

function MentorCard({ element }: MentorCardProps) {
  console.log(element);
  return (
    <div className="py-24 mx-4 ">
      <div className="card grid grid-cols-2  bg-base-100 shadow-xl overflow-hidden ">
        <div className="flex-1 flex">
          <img
            className="flex-1"
            src="https://picsum.photos/500"
            alt="profilepic"
          />
        </div>
        <div className="flex flex-col text-primary justify-around p-3 gap-1">
          <h2 className="card-title text-2xl font-bold">

            {element.firstName} {element.lastName}
          </h2>
          <p className="font-semibold ">Title: {element.title}</p>
          <p>Industry: {element.industry}</p>
          <div>
            <p>Bio: {element.bio}</p>
            <p className="text-sm font-bold">Location: {element.location}</p>
            <p>Availability: {element.availability}</p>
            <p>Skills: {element.skillsTags}</p>
          </div>
          <p>Role Description: {element.roleDescription}</p>
          <p>Contact: {element.primaryContact}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary">Contact</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default MentorCard;

