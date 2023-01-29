import React from 'react';
import './assets/css/main.css';
import favicon from './images/favicon.png';
import pic01 from './images/pic01.jpg';
import volunteezy_logo from './images/volunteezy_logo.png';
import {Link} from 'react-router-dom';
import mosh from './images/mosh.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';
axios.defaults.baseURL = "http://localhost:3000/"
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"

function Home() {
  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});
  const [myProfile, setMyProfile] = useState({});


  const getLeaderboardData = () => {
    axios.get(`leaderboard`)
    .then((res) => {
      console.log(res.data)
      setFirst(res.data[0]);
      setSecond(res.data[1]);
      setThird(res.data[2]);
      setMyProfile(res.data[4]);
    })
    .catch((error) => {
      console.log("API Error", error.response.data);
    });
  }

  useEffect(() => {
    getLeaderboardData();
    // processData();
    document.title = "Volunteezy";
  }, []);

  return (
    <div>

      <div>
        <title>Volunteezy</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
        <link rel="stylesheet" href="assets/css/main.css" />
        <link rel="icon" type="image/x-icon" href={favicon}/>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="scripts/index.js"></script>
        <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
      </div>
      <body className="is-preload">
    
          <div id="wrapper">
    
              <header id="header">
                <span className="logo"><img src={volunteezy_logo} alt=""/></span>
                <h1>Volunteering Made Easy</h1>
              </header>

              <nav id="nav">
                <ul>
                  <li><a href="#leaderboard" className="active">Leaderboard</a></li>
                  <li><a href="#feed">Feed</a></li>
                  <li><a href="#profile">Profile</a></li>
                  <li><a href="#bookmarks">Bookmarks</a></li>
                </ul>
              </nav>
    
              <div id="main">
    
                  <section id="leaderboard" className="main special">
                    <header className="major">
                      <h2>Leaderboard: Top Volunteers in Your Community!</h2>
                    </header>
                    <ul className="features">
                      <li className="top3">
                        <img style={{width:"235px", height:"235px", borderColor:"silver", borderWidth:"4px"}} className="icon solid major style1 fa-code" src={second.profilePic} alt=""/>
                        <h3 style={{fontSize:"28px", fontWeight:"bold"}}>{second.name}</h3>
                        <p style={{fontSize:"22px", }}>Second</p>
                      </li>
                      <li className="top3">
                        {/* <span style={{borderColor:"gold", borderWidth:"4px"}} className="icon major style3 fa-copy"></span> */}
                        <img style={{width:"235px", height:"235px", borderColor:"gold", borderWidth:"4px"}} className="icon solid major style1 fa-code" src={first.profilePic} alt=""/>
                        <h3 style={{fontSize:"28px", fontWeight:"bold"}}>{first.name}</h3>
                        <p style={{fontSize:"22px", }}>First</p>
                      </li>
                      <li className="top3">
                        {/* <span style={{borderColor:"#CD7F32", borderWidth:"4px"}} className="icon major style5 fa-gem"></span> */}
                        <img style={{width:"235px", height:"235px", borderColor:"#CD7F32", borderWidth:"4px"}} className="icon solid major style1 fa-code" src={third.profilePic} alt=""/>
                        <h3 style={{fontSize:"28px", fontWeight:"bold"}}>{third.name}</h3>
                        <p style={{fontSize:"22px",}}>Third</p>
                      </li>
                    </ul>
                    <footer className="major">
                      <ul className="actions special">
                        {/* <li><a href="screens/leaderboard/Leaderboard.js" className="button">View More</a></li> */}
                        <span style={{backgroundColor:"aliceblue", border: "1px solid black", padding:"10px", borderRadius:"10px"}}><Link to={`leaderboard`}>View Leaderboard</Link></span>
                      </ul>
                    </footer>
                  </section>
    
                  <section id="feed" className="main special">
                    <header className="major">
                      <h2>Feed</h2>
                      <p>View listings by members of your community, find out what opportunities are available for you to help out and make your community a better place!</p>
                    </header>
                    <footer className="major">
                      <ul className="actions special">
                        {/* <li><a href="" className="button">View More</a></li> */}
                        <span style={{backgroundColor:"aliceblue", border: "1px solid black", padding:"10px", borderRadius:"10px"}}><Link to={`feed`}>View Feed</Link></span>
                      </ul>
                    </footer>
                  </section>
    
                <section id="profile" className="main">
                  <div className="spotlight">
                    <div className="content">
                      <header className="major">
                        <h2>My Profile</h2>
                      </header>
                      <ul className="features">
                          <h3>View your posts, hourly commitment records, and community ranking</h3>
                      </ul>
                      <footer className="major">
                        <ul className="actions special">
                          {/* <li><a href="screens/profile/Profile.js" className="button">View More</a></li> */}
                        <span style={{backgroundColor:"aliceblue", border: "1px solid black", padding:"10px", borderRadius:"10px"}}><Link to="/profile" state={{ id : myProfile.userId, ranking:"5"}}>View Profile</Link></span>
                        </ul>
                      </footer>
                    </div>
                    <span className="image"><img src={myProfile.profilePic} alt="" /></span>
                  </div>
                </section>
    
    
                  <section id="bookmarks" className="main special">
                    <header className="major">
                      <h2>Bookmarks</h2>
                      <p>View your saved volunteer activities and user profiles</p>
                    </header>
                    <footer className="major">
                      <ul className="actions special">
                        {/* <li><a href="screens/bookmark.html" className="button">View bookmarks</a></li> */}
                        <span style={{backgroundColor:"aliceblue", border: "1px solid black", padding:"10px", borderRadius:"10px"}}><Link to={`bookmarks`}>View Bookmarks</Link></span>
                      </ul>
                    </footer>
                  </section>
    
              </div>
    
              <footer id="footer">
                <p className="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
              </footer>
    
          </div>
    
          <script src="assets/js/jquery.min.js"></script>
          <script src="assets/js/jquery.scrollex.min.js"></script>
          <script src="assets/js/jquery.scrolly.min.js"></script>
          <script src="assets/js/browser.min.js"></script>
          <script src="assets/js/breakpoints.min.js"></script>
          <script src="assets/js/util.js"></script>
          <script src="assets/js/main.js"></script>
    
      </body>
    </div>
  );
}

export default Home;
