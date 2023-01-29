import React from 'react';
import Home from './Home';
import Bookmarks from './screens/bookmarks/Bookmarks';
import Feed from './screens/feed/Feed';
import Leaderboard from './screens/leaderboard/Leaderboard';
import Profile from './screens/profile/Profile';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
  {
    path:"/feed",
    element:<Feed/>
  }
]);

function App(){
  return (
    <React.StrictMode>
      {/* <BrowserRouter>
      <Route path="/" exact component={Home}/>
      <Route path="/feed" component={Feed}/>
      </BrowserRouter> */}
      {/* <Home/> */}
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;