import { Link } from "react-router-dom";
import image from "../../assets/Signup.jpg";
const SignUp = () => {
    const handleSignIn = e =>{
        e.preventDefault();
        const form = e.target;
        const userInfo = {
            name:form.name.value,
            email:form.email.value,
            password:form.password.value,
            photo:form.photo.value,
        }
        console.log(userInfo)
    }
  return (
    <div className="flex gap-4 p-3">
      <div className="card shrink-0 w-full max-w-md mx-auto shadow-2xl bg-base-100">
        <form className="card-body" onSubmit={handleSignIn}>
          <h2 className="text-lg font-bold">Sign Up Our Platform</h2>
          <p>If you already have an account. You can Login here <Link to={'/login'} className="text-blue-500 underline">Login</Link></p>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="your name"
              className="input input-bordered"
              required
            />
          </div>
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
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo url"
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
            <button className="btn bg-[#B827AF] text-white">SignUp</button>
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

export default SignUp;
