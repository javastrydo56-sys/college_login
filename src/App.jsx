import React, { useState } from "react";

export default function CollegeAuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <style>{`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
          font-family: 'Poppins', sans-serif;
        }

        body{
          background: linear-gradient(135deg,#0f172a,#1d4ed8);
        }

        .container{
          width:100%;
          height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
        }

        .card{
          width:1000px;
          max-width:100%;
          height:600px;
          background:white;
          border-radius:25px;
          overflow:hidden;
          display:flex;
          box-shadow:0 10px 40px rgba(0,0,0,0.3);
        }

        .left{
          width:50%;
          background:linear-gradient(135deg,#2563eb,#1e40af);
          color:white;
          padding:60px;
          display:flex;
          flex-direction:column;
          justify-content:center;
        }

        .left h1{
          font-size:50px;
          margin-bottom:20px;
        }

        .left p{
          font-size:18px;
          line-height:1.8;
          color:#dbeafe;
          margin-bottom:30px;
        }

        .left button{
          width:220px;
          padding:14px;
          border:none;
          border-radius:10px;
          background:white;
          color:#1e40af;
          font-size:16px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
        }

        .left button:hover{
          transform:scale(1.05);
        }

        .right{
          width:50%;
          display:flex;
          justify-content:center;
          align-items:center;
          background:#f8fafc;
        }

        .form-box{
          width:80%;
        }

        .form-box h2{
          font-size:35px;
          margin-bottom:30px;
          color:#1e3a8a;
          text-align:center;
        }

        .input-box{
          margin-bottom:18px;
        }

        .input-box input{
          width:100%;
          padding:15px;
          border:1px solid #cbd5e1;
          border-radius:10px;
          outline:none;
          font-size:15px;
        }

        .input-box input:focus{
          border-color:#2563eb;
        }

        .submit-btn{
          width:100%;
          padding:15px;
          border:none;
          border-radius:10px;
          background:#2563eb;
          color:white;
          font-size:17px;
          font-weight:bold;
          cursor:pointer;
          transition:0.3s;
          margin-top:10px;
        }

        .submit-btn:hover{
          background:#1d4ed8;
        }

        .switch{
          text-align:center;
          margin-top:20px;
          color:#475569;
        }

        .switch span{
          color:#2563eb;
          font-weight:bold;
          cursor:pointer;
        }

        @media(max-width:900px){

          .card{
            flex-direction:column;
            height:auto;
          }

          .left,
          .right{
            width:100%;
          }

          .left{
            padding:40px;
            text-align:center;
            align-items:center;
          }

          .form-box{
            width:90%;
            padding:40px 0;
          }

        }

      `}</style>

      <div className="container">
        <div className="card">

          <div className="left">
            <h1>Campus login</h1>

            <p>
              Welcome to the College Management System.
              Access attendance, results, courses, events,
              and student dashboard in one place.
            </p>

            <button onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Create Account" : "Back to Login"}
            </button>
          </div>

          <div className="right">
            <div className="form-box">

              <h2>
                {isLogin ? "Student Login" : "Student Register"}
              </h2>

              {!isLogin && (
                <>
                  <div className="input-box">
                    <input type="text" placeholder="Full Name" />
                  </div>

                  <div className="input-box">
                    <input type="text" placeholder="Department" />
                  </div>
                </>
              )}

              <div className="input-box">
                <input type="email" placeholder="College Email" />
              </div>

              <div className="input-box">
                <input type="password" placeholder="Password" />
              </div>

              {!isLogin && (
                <div className="input-box">
                  <input type="password" placeholder="Confirm Password" />
                </div>
              )}

              <button className="submit-btn">
                {isLogin ? "Login" : "Register"}
              </button>

              <div className="switch">
                {isLogin
                  ? "Don't have an account?"
                  : "Already have an account?"}

                <span onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? " Register" : " Login"}
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}