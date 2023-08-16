import Hero from "../Components/Hero";

function Home() {
  return (
    <>
      <main>
        <Hero />

        <div className="bg-accent text-primary py-16">
          <h2 className="text-3xl font-semibold text-center pb-6">
            Why Choose Us
          </h2>
          <ul className="steps steps-vertical">
            <li className="step step-secondary font-thin text-xl">
            At Dreams to Reality Network, we stand out by fostering meaningful
              connections within your own community. As a mentee, you'll benefit
              from a personalized and close-knit relationship with your mentor,
              ensuring tailored guidance and continuous progress monitoring.
            </li>
            <li className="step step-secondary font-thin text-xl">
              For mentors, the act of mentoring not only empowers others but
              also deepens their expertise and hones essential soft skills,
              including empathy and communication.
            </li>
            <li className="step step-secondary font-thin text-xl">
              Our unique approach brings mentors and mentees together within the
              same community, allowing them to witness firsthand the
              transformative impact they collectively create, leaving a lasting
              legacy of growth and positive change
            </li>
          </ul>
        </div>
      </main>
    </>
  );
}
export default Home;
