import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { useState } from 'react';
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import RedditIcon from '@material-ui/icons/Reddit';
import FacebookIcon from '@material-ui/icons/Facebook';


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } 
  

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


 const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: '',
    email: '',
    password: '',
    success: false
  })



  const googleProvider = new firebase.auth.GoogleAuthProvider();
  const fbProvider = new firebase.auth.FacebookAuthProvider();

  const handelGoogleSignIn = () => {
    firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const{displayName, email, photoURL} = result.user;
    const signedInUser ={
      isSignedIn: true,
      name: displayName,
      email: email,
      image: photoURL
    };
    setLoggedInUser(signedInUser);
    setUser(signedInUser);
    history.replace(from) 


  }).catch((error) => {
    const errorMessage = error.message;   
     console.log(errorMessage);
  });
  }




  const handelFacebookSignIn = () => {
    firebase
  .auth()
  .signInWithPopup(fbProvider)
  .then((result) => {
    const{displayName, email } = result.user;
    const signedInUser ={
      isSignedIn: true,
      name: displayName,
      email: email
    };
    setLoggedInUser(signedInUser);
    setUser(signedInUser);
    history.replace(from)
  })
  .catch((error) => {
    const errorMessage = error.message;   
    console.log(errorMessage);
  });
  }



  const handleBlur = (e) => {
  
    let isFieldValid = true;
    let matchPassword = true;
  
    if (e.target.name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(e.target.value)
     
    }
    if (e.target.name === "password") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && passwordHasNumber;
      
    }
    if (e.target.name === "confirmPassword") {
      const isPasswordValid = e.target.value.length > 6;
      const passwordHasNumber =  /\d{1}/.test(e.target.value);
      matchPassword = isPasswordValid && passwordHasNumber;
    }
    if (isFieldValid && matchPassword) {
      const newUserInfo = {...user};
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }
  }



  
  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => { 
              const newUserInfo = {...userCredential.user};
              newUserInfo.success = true;
              newUserInfo.displayName = user.name;
              setLoggedInUser(newUserInfo);
              setUser(newUserInfo);
              updateUserName(user.name);
              history.replace(from)
    
            })
            .catch((error) => {
              const newUserInfo = {...user};
              newUserInfo.error = error.message;
              newUserInfo.success = false;
              setUser(newUserInfo);
           });  
       }
       if (!newUser && user.email && user.password) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((userCredential) => {
          const newUserInfo = {...userCredential.user};
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          setUser(newUserInfo);
          updateUserName(user.name);
          history.replace(from)
        })
        .catch((error) => {
          const newUserInfo = {...user};
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
       }
     e.preventDefault();
    }
    
  
    
  const updateUserName = name => {
    const user = firebase.auth().currentUser;
      user.updateProfile({
        displayName: name
      }).then(function() {
         console.log("Update success");
      }).catch(function(error) {
        console.log(error);
      });
  }
    return (
        <div className="container" style={{height: "75vh"}}>
        <div className="row d-flex justify-content-center align-items-center mt-lg-4">
         <div className="col-lg-8 col-md-10 col-12 mt-4">
         <div className="card px-2 py-3">
          <div className="card-title">
            <h3> {newUser ? "Create an account" : "Login"}</h3> 
          </div>
             <form onSubmit={handleSubmit}>
              <div className="my-3">
                  {newUser && <input type="text" name="name" onBlur={handleBlur} className="form-control" placeholder="Entry Your Name" />}
                </div>
                <div className="my-2">
                  <input type="email" name="email" onBlur={handleBlur} className="form-control" placeholder="User Email" required/>
                </div>
                <div className="my-2">
                  <input type="password" name="password" onBlur={handleBlur} className="form-control" placeholder="Password" required/>
                </div>
                <div className="my-2">
                  {newUser && <input type="password" name="confirmPassword" onBlur={handleBlur} className="form-control" placeholder="Confirm Password" required/>}
                </div>
                <div className="my-2">
                  <input type="submit" className="form-control bg-danger text-white py-2" value={newUser ? "Create an account" : "Login"} />
                </div>
             </form>
              <p className="text-center">{newUser ? "Already have an account?" : "Don't have an account?"} <span  style={{cursor: "pointer"}} className="text-danger login__create" onClick={() => setNewUser(!newUser)}>{newUser ? "Login" : "Create an account"}</span></p>
         </div>
         <div className="div text-center mt-2">
           <span className="or__text">Or</span>
         </div>
          
          <div className="my-3 d-flex justify-content-center">
                <button className="btn btn-outline-primary mx-2 rounded-pill my-2 text-center" onClick={handelGoogleSignIn}><RedditIcon/>  Google</button> <br/>
                <button className="btn btn-outline-info mx-2 rounded-pill my-2 text-center" onClick={handelFacebookSignIn}><FacebookIcon/> Facebook</button>
          </div>
         </div>
        </div>
    
       
      </div>  
    );
};

export default Login;