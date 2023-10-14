import React from 'react';
import Login from './Login';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';



const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/browser",
      element: <Browse />
    }
  ])

  //**** we are putting this code into header */
  // // we are using this to check authentication and update the store
  // useEffect(()=> {
  //   onAuthStateChanged(auth, (user) => {
  //     console.log("Body auth", auth);
  //     if (user) {
  //       // User is signed in
  //       const {uid, email, displayName, photoURL } = user;
  //       dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
  //       //navigate("/browser");   //we can't use Navigate here we can only use itnside child component
  //     } else {
  //       // User is signed out
  //       dispatch((removeUser()));
  //     }
  //   });
    
  // },[]);

  return (
    <div>
      <RouterProvider  router={appRouter}/>
    </div>

  )
}

export default Body;