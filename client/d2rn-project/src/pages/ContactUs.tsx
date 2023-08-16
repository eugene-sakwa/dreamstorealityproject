function ContactUs() {
  return (
    <div className="flex justify-center items-center p-24">
      <div>
        <h2 className="text-center font-semibold text-3xl text-secondary p-4">
          Let's have a talk
        </h2>
        <div className="card bg-accent text-primary p-4 mb-4">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center">
              Our information!
            </h2>
            <p className="font-semibold text-center">Address:</p>
            <p className="font-semibold text-center">
              Plaza Ernest Lluch i Martin 5, 08019 Barcelona
            </p>
            <p className="font-semibold text-center">
              Telephone: +34 674 872 005
            </p>
            <p className="font-semibold text-center">Email: info@d2rn.org</p>
          </div>
        </div>
        <form className="text-center text-xl border p-12 rounded-xl border-accent text-secondary">
          <div className="flex flex-col gap-4 my-4">
            <div className="flex flex-row justify-between items-centerS">
              <label htmlFor="firstName">First Name</label>
              <input
                className="rounded transition duration-300  ease-in-out hover:shadow-2xl focus:outline focus:outline-accent"
                type="text"
                name="firstName"
                id="firstName"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="lastName">Last Name</label>
              <input
                className="rounded transition duration-300  ease-in-out hover:shadow-2xl focus:outline focus:outline-accent"
                type="text"
                name="lastName"
                id="lastName"
              />
            </div>
            <div className="flex flex-row justify-between items-center">
              <label htmlFor="email">E mail</label>
              <input
                className="rounded transition duration-300  ease-in-out hover:shadow-2xl focus:outline focus:outline-accent"
                type="text"
                name="email"
                id="email"
              />
            </div>
          </div>

          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text text-xl text-secondary">
                Area of Interest
              </span>
            </label>
            <select className="text-lg select select-bordered">
              <option disabled selected value="">
                Select One
              </option>
              <option value="mentor">Mentor</option>
              <option value="mentee">Mentee</option>
              <option value="business">Business Entity</option>
              <option value="educational">Educational Institute</option>
            </select>
            <label className="label"></label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl text-secondary">
                How may we be of service?
              </span>
            </label>
            <textarea
              className="text-secondary text-xl textarea textarea-bordered h-36 border-1 border-accent"
              placeholder="Your message"
            ></textarea>
          </div>
          <button className="btn md:btn-md btn-secondary mt-8">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

// //glass
// <button className="btn glass">Glass button</button>
// //responsive
// <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
