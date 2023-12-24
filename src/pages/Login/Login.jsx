import { Link, useLocation, useNavigate } from "react-router-dom";
import image from "../../assets/Signup.jpg";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
const Login = () => {
  const { loggedInUser, googleLogIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const form = location?.state?.from?.pathname || '/';
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loggedInUser(email, password).then((result) => {
      form.reset();
      if (result.user) {
        toast.success("Log in successfully!");
        navigate(form, {replace:true})
      }
    });
  };
  const handleGoogleLogin = () => {
    googleLogIn().then((result) => {
      if (result.user) {
        toast.success("Log in successfully");
        navigate(form, {replace:true})
      }
    });
  };
  return (
    <div className="flex gap-4 p-3">
      <div className="card shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100 max-h-screen">
        <form className="card-body" onSubmit={handleLogin}>
          <h2 className="text-xl font-bold text-center">Login</h2>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="your email"
              className="input input-bordered"
              required
            />
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="your password"
                className="input input-bordered"
                required
              />
            </div>
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#B827AF] text-white">Login</button>
          </div>
          <div className="text-center">
            <p className="mt-4">
              If you do not have an account. You can register here{" "}
              <Link to={"/sign-up"} className="text-blue-500 underline">
                SignUp
              </Link>
            </p>
            <p className="text-center my-4">Or Continue With</p>
            <button
              onClick={handleGoogleLogin}
              className="btn btn-ghost text-[#B827AF] btn-outline w-3/4"
            >
              Login With Google
            </button>
          </div>
        </form>
      </div>
      <img
        className="object-cover w-1/2 mx-auto max-h-screen"
        src={image}
        alt=""
      />
    </div>
  );
};

export default Login;
