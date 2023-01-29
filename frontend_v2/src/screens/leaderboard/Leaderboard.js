import {Link} from 'react-router-dom';
import React from 'react';
import { useState, useEffect } from 'react';
import axios from "axios";
axios.defaults.baseURL = "http://localhost:3000/"
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"


function Leaderboard(props){

    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [third, setThird] = useState("");
    const [fourth, setFourth] = useState("");
    const [fifth, setFifth] = useState("");
    const [sixth, setSixth] = useState("");
    const [seventh, setSeventh] = useState("");
    const [eighth, setEighth] = useState("");
    const [ninth, setNinth] = useState("");
    const [tenth, setTenth] = useState("");



  
    const getLeaderboardData = () => {
      axios.get(`leaderboard`)
      .then((res) => {
        console.log(res.data)
        setFirst(res.data[0])
        setSecond(res.data[1])
        setThird(res.data[2])
        setFourth(res.data[3])
        setFifth(res.data[4])
        setSixth(res.data[5])
        setSeventh(res.data[6])
        setEighth(res.data[7])
        setNinth(res.data[8])
        setTenth(res.data[9])


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
  

    return(
        <div>
            <head>
                <title>Leaderboard</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="../assets/css/main.css" />
                <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
            </head>
            <body class="is-preload">

                    <div id="wrapper">

                            <header id="header">
                                <h1>Leaderboard</h1>
                                <p>The top volunteers in your community!</p>
                            </header>

                            <div id="main">

                                {/* <div class="leaderboard-row">
                                    <img class="leaderboard-pic" src="../images/mosh.jpg" >
                                    <p>First Last</p>
                                </div> */}

                                <table>
                                    <thead>
                                    <tr>
                                        <th>Ranking</th>
                                        <th>Name</th>
                                        <th>Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>
                                            <Link to="../profile" state={{ id : first.userId, ranking:"1"}}>
                                            {first.name}
                                            </Link>
                                        </td>
                                        <td>{first.score}</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>
                                            <Link to="../profile" state={{ id : second.userId, ranking: "2"}}>
                                                {second.name}
                                            </Link>                                            
                                        </td>
                                        <td>{second.score}</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>
                                            <Link to="../profile" state={{ id : third.userId, ranking: "3"}}>
                                                {third.name}
                                            </Link>
                                        </td>
                                        <td>{third.score}</td>
                                    </tr>
                                    <tr>
                                        <td>4</td>
                                        <td>
                                            <Link to="../profile" state={{ id : fourth.userId, ranking: "4"}}>
                                                {fourth.name}
                                            </Link>                                            
                                        </td>
                                        <td>{fourth.score}</td>
                                    </tr>
                                    <tr>
                                        <td>5</td>
                                        <td>
                                            <Link to="../profile" state={{ id : fifth.userId, ranking: "5"}}>
                                                {fifth.name}
                                            </Link>                                            
                                        </td>
                                        <td>{fifth.score}</td>
                                    </tr>
                                    <tr>
                                        <td>6</td>
                                        <td>
                                            <Link to="../profile" state={{ id : sixth.userId, ranking: "6"}}>
                                                {sixth.name}
                                            </Link>                                            
                                        </td>
                                        <td>{sixth.score}</td>
                                    </tr>
                                    <tr>
                                        <td>7</td>
                                        <td>
                                            <Link to="../profile" state={{ id : seventh.userId, ranking: "7"}}>
                                                {seventh.name}
                                            </Link>                                            
                                        </td>
                                        <td>{seventh.score}</td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td>
                                            <Link to="../profile" state={{ id : eighth.userId, ranking: "8"}}>
                                                {eighth.name}
                                            </Link>                                            
                                        </td>
                                        <td>{eighth.score}</td>
                                    </tr>
                                    <tr>
                                        <td>9</td>
                                        <td>
                                            <Link to="../profile" state={{ id : ninth.userId, ranking:"9" }}>
                                                {ninth.name}
                                            </Link>                                            
                                        </td>
                                        <td>{ninth.score}</td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td>
                                            <Link to="../profile" state={{ id : tenth.userId, ranking: "10"}}>
                                                {tenth.name}
                                            </Link>                                            
                                        </td>
                                        <td>{tenth.score}</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>

                            <footer id="footer">
                                <p class="copyright">&copy; Untitled. Design: <a href="https://html5up.net">HTML5 UP</a>.</p>
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

export default Leaderboard;
