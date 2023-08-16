// import calltoaction from "../images/logo.png";

function CallToAction() {
  return (
    <div
      className="bg-primary flex flex-col items-center"
    // className="card bg-bottom bg-cover bg-no-repeat text-center rounded-t-sm"
    // style={{ backgroundImage: `url(${calltoaction})` }}
    >
      <div className="card-body w-[1100px]">
        <h2 className="text-5xl text-white font-bold p-3 text-center">
          Start Your Inspiring Journey Here!
        </h2>
        <p className="pt-12 text-center text-background font-semibold text-2xl">
          Unlock your potential and embark on a journey of growth with Dreams to
          Reality Network. Whether you're seeking guidance as a mentee or eager
          to share your expertise as a mentor, our platform connects you with a
          vibrant community of individuals ready to make an impact.
        </p>
        <p className="pt-12 text-center text-background font-semibold text-2xl">
          As a mentee, enjoy personalized support and guidance from mentors
          wisemifont-semibold your community, while mentors expand their knowledge, refine
          their skills, and foster empathy through meaningful interactions.
          Together, we believe that small actions can lead to profound impacts.
        </p>

        <p className="pt-12 text-center text-background font-semibold text-2xl">
          Join us today and be part of a transformative experience."
        </p>
        <div className="card-actions justify-center gap-5 pt-12">
          <button className="btn w-52 bg-[#F3A953] btn-primary h-16 text-primary">
            <a href="/register">Register</a>
          </button>
          <button className="btn w-52 bg-[#F3A953] glass btn-primary h-16 text-primary">
            <a href="/mentors">Find Mentors</a>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CallToAction;
