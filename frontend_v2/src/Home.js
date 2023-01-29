import React from 'react';
import { useEffect } from 'react';
import './assets/css/main.css';
import favicon from './images/favicon.png';
import pic01 from './images/pic01.jpg';
import volunteezy_logo from './images/volunteezy_logo.png';
import {Link} from 'react-router-dom';

function Home() {
  useEffect(() => {
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
                        <span className="icon solid major style1 fa-code"></span>
                        <h3>Second Place</h3>
                        <p>Name here</p>
                      </li>
                      <li className="top3">
                        <span className="icon major style3 fa-copy"></span>
                        <h3>First Place</h3>
                        <p>Name here</p>
                      </li>
                      <li className="top3">
                        <span className="icon major style5 fa-gem"></span>
                        <h3>Third Place</h3>
                        <p>Name here</p>
                      </li>
                    </ul>
                    <footer className="major">
                      <ul className="actions special">
                        <li><a href="screens/leaderboard/Leaderboard.js" className="button">View More</a></li>
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
                        <li><Link to={`feed`}>View More</Link></li>
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
                        <li>
                          <span className="fa-regular fa-square-poll-vertical"></span>
                          <h3>Personal Bio</h3>
                          <p>Placement Bio</p>
                        </li>
                      </ul>
                      <footer className="major">
                        <ul className="actions special">
                          <li><a href="screens/profile/Profile.js" className="button">View More</a></li>
                        </ul>
                      </footer>
                    </div>
                    <span className="image"><img src="http://mnquants.com/images/zach.jpg" alt="" /></span>
                  </div>
                </section>
    
    
                  <section id="bookmarks" className="main special">
                    <header className="major">
                      <h2>Bookmarks</h2>
                      <p>View your saved volunteer activities and user profiles</p>
                    </header>
                    <footer className="major">
                      <ul className="actions special">
                        <li><a href="screens/bookmark.html" className="button">View bookmarks</a></li>
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
