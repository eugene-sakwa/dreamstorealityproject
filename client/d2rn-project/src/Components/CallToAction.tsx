import calltoaction from "../images/calltoaction.png";

function CallToAction() {
  return (
    <div
      className="card bg-bottom bg-cover bg-no-repeat text-center rounded-t-sm"
      style={{ backgroundImage: `url(${calltoaction})` }}
    >
      <div className="card-body">
        <h2 className="text-3xl text-primary p-3 text-center">
          Start Your Inspiring Journey Here!
        </h2>
        <p className="text-center text-background font-thin text-xl">
          Unlock your potential and embark on a journey of growth with Dreams to
          Reality Network. Whether you're seeking guidance as a mentee or eager
          to share your expertise as a mentor, our platform connects you with a
          vibrant community of individuals ready to make an impact.
        </p>
        <p className="text-center text-background font-thin text-xl">
          As a mentee, enjoy personalized support and guidance from mentors
          within your community, while mentors expand their knowledge, refine
          their skills, and foster empathy through meaningful interactions.
          Together, we believe that small actions can lead to profound impacts.
        </p>

        <p className="text-center text-background font-thin text-xl">
          Join us today and be part of a transformative experience."
        </p>
        <div className="card-actions justify-center gap-5">
          <button className="btn btn-primary">
            <a href="/register">Register</a>
          </button>
          <button className="btn glass btn-secondary">
            <a href="/mentors">Find Mentors</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CallToAction;
