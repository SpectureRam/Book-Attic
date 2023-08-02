import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./firebase";
import img from './pro.png'

const AuthDetails = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {authUser ? (
        <>
         <div style={{display:"inline-flex",marginTop:"4px"}}>
          <img style={{height:"40px"}} src={img} alt="" />
          {/* <p>{`${authUser.email}`}</p> */}
          <button style={{marginLeft:"10px"}} onClick={userSignOut}>Sign Out</button>
          </div>
        </>
      ) : (
         <p><Link to={"/register"}>Register</Link></p>
      )}
    </div>
  );
};

export default AuthDetails