import { Link } from "react-router-dom";
import img from "../assets/images/login/login.svg";
const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Form submitted ");
  };
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 mr-10">
          <img src={img} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-3xl font-bold">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-warning" value="Login" />
            </div>
          </form>
          <p className="text-center pb-5">
            New to Car Doctor? Please{" "}
            <Link className="text-orange-500 text-bold" to={"/signup"}>
              Sing Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
