import { useContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from "react-simple-captcha";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin";

const Login = () => {
  const [disabled, setDesabled] = useState(true);
  const { Login } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    Login(email, password).then((result) => {
      const signInUser = result.user;
      console.log("Signed In User", signInUser);
      Swal.fire({
        title: "Login Success",
        icon: "success",
      });
      navigate(from, { replace: true });
    });
  };

  const handleCaptcha = (e) => {
    const captchaValue = e.target.value;
    console.log(captchaValue);
    if (validateCaptcha(captchaValue) == true) {
      setDesabled(false);
    }
  };
  return (
    <div className="container mx-auto hero min-h-screen bg-base-200">
      <Helmet>
        <title>Bistro Boss | Login</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card w-full md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                type="password"
                name="password"
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
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                name="captcha"
                onBlur={handleCaptcha}
                placeholder="Type your captcha"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <input disabled={disabled} className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <div>
            <p className="text-center mb-4">
              New here? Go to{" "}
              <Link className="text-orange-400" to="/signup">
                Sign Up
              </Link>
            </p>
          </div>
          <SocialLogin></SocialLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
