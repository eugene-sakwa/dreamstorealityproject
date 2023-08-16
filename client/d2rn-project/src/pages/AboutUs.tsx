
function AboutUs() {
  return (
    <>
      <div className="hero min-h-screen bg-accent p-12 rounded-t-xl">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://picsum.photos/1000/500"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-4xl font-semibold text-white">History</h1>
            <p className="py-4 text-white text-xl font-thin leading-loose">
              Founded in 2022, Dreams to Reality Network emerged from a personal
              journey of exploration and growth. After relocating to Barcelona,
              our founder embarked on a web development learning path,
              encountering the familiar struggle of finding a supportive and
              impactful community. Through the struggle, a realization dawned:
              even as a novice in web development, our founder's background as a
              network engineer brought unique value to the community, a
              perspective previously unrecognized. This insight highlighted the
              untapped potential of individuals, sparking the idea to create a
              platform that seamlessly connects mentors and mentees. With this
              vision, Dreams to Reality Network was born – a space designed to
              bridge the gap, empower learning, and harness the collective
              wisdom of mentors and mentees. Every individual possesses a
              treasure trove of experiences, and our platform aims to unlock
              their transformative potential, shaping learning into a shared
              journey of growth.
            </p>
          </div>
        </div>
      </div>

      <div className="p-24 text-center bg-white">
        <h2 className="text-3xl text-secondary pb-2">Mission Statement</h2>
        <p className="text-2xl text-slate-800">
          Catalyzing growth and transformation by connecting experienced mentors
          with ambitious mentees, paving the way for collective success stories.
        </p>
        <h2 className="text-3xl text-secondary p-4">Vision Statement</h2>
        <p className="text-2xl text-slate-800">
          To create a world where every dream finds guidance and every
          mentorship journey leads to tangible, positive impact.
        </p>
        <h2 className="text-3xl text-secondary p-4">Social Responsibility</h2>
        <p className="text-2xl text-slate-800">
          We take pride in our initiative to foster social change, promoting
          diversity, and leveraging mentorship to create a more equitable world.
        </p>
        <h2 className="text-3xl text-secondary p-4">Future plans</h2>
        <ol>
          <li className="text-xl text-slate-600 p-2">
            Our roadmap includes collaborating with educational institutions to
            integrate mentorship programs, bridging the gap between education
            and real-world success.
          </li>
          <li className="text-xl text-slate-600 p-2">
            We aspire to establish strategic partnerships with businesses to
            provide a pathway for our mentees to transition into impactful roles
            within these organizations.
          </li>
          <li className="text-xl text-slate-600 p-2">
            In the future, we aim to introduce advanced mentorship tools and
            resources, enhancing the quality and impact of mentorship
            relationships.
          </li>
          <li className="text-xl text-slate-600 p-2">
            We envision expanding our platform's reach to connect mentors and
            mentees on a global scale, building a network that spans continents.
          </li>
        </ol>
      </div>
    </>
  );
}
export default AboutUs;
