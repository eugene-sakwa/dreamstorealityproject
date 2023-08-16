import { useState } from "react";
import bcrypt from "bcryptjs";
function RegisterUser() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [registered, setRegistered] = useState<boolean>(false);

  const handleRegisterUser = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const saltRounds = 10;

    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(password, salt);
     const newUser = {
      userName,
      email,
      password:hash,
      salt: salt
    };
    try {
      setLoading(true);
      await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      setRegistered(!registered);
      setUserName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(true);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border  border-accent p-5 mx-auto my-16 max-w-md rounded-md text-black text-lg">
      {!registered ? (
        <form className="flex flex-col  p-8" onSubmit={handleRegisterUser}>
          <label htmlFor="userName">Username</label> <br />
          <input
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            className="hover:border border-accent"
            type="text"
            id="userName"
            name="userName"
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
            className="hover:border border-accent"
            type="text"
            id="email"
            name="email"
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input 
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            className="hover:border border-accent"
            type="text"
            id="password"
            name="password"
            required
          />
          <br />
          <button className="bg-orange-500 px-8 py-1 rounded-lg text-white font-thin" type="submit">
            {loading ? "Creating user..." : "Register User"}
          </button>
        </form>
      ) : (
        <div className="text-center py-12">
          <p className="p-6 text-secondary text-xl font-thin">Registration Successful</p>
          <a className="btn btn-primary  px-8 py-1 rounded-lg text-white" href="/login">
            Login
          </a>
        </div>
        
      )}
      {error && <div>Some error occur</div>}
    </div>
  );
}

export default RegisterUser;

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            className="input input-bordered"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="text"
            placeholder="password"
            className="input input-bordered"
          />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </div>
  </div>
</div>;
