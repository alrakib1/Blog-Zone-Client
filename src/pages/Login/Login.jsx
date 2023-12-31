import { Link, useLocation, useNavigate } from "react-router-dom";
import './login.scss'
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

    const {signInUser, handleGoogleSignIn} = useContext(AuthContext);
    const handleLogin = (e) =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log({email,password})
        signInUser(email,password).then(()=>{
            // console.log(result.user)
            Swal.fire({
              title: "Log in Successful!",
              icon: "success"
            });

            setTimeout(() => {
              navigate(from, { replace: true });
            }, 2000);

        }).catch(()=>{
         
          Swal.fire({
            title: "Email or Password incorrect!",
            text: "Please check your email and password again",
            icon: "error"
          });
        })

    }

    const handleGoogle = ()=>{
      handleGoogleSignIn().then(()=>{
        Swal.fire({
          title: "Log in Successful!",
          icon: "success"
        });
  
        
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 2000);
      });
      
    }

    return (
        <div className="hero min-h-screen bg-base-200">
          <Helmet>
                <title>Blog-Zone || Login</title>
            </Helmet>
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login Now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleLogin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
        </div>
        <div className="form-control mt-6">
          <button className="btn register-btn normal-case">Login</button>
        </div>
      </form>
      <p className="text-center mb-3">New here? <Link className="hover:text-white p-1 hover:bg-[#1976D2]" to='/register'>Register</Link></p>
      <p className="text-center mb-2">or</p>
      <button className="btn mb-10" onClick={()=>handleGoogle()}><FaGoogle/> sign In</button>
    </div>
  </div>
</div>
    );
};


export default Login;