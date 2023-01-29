

function Leaderboard(){
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
                                        <th>Rank</th>
                                        <th>Name</th>
                                        <th>Score</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>John Doe</td>
                                        <td>1000</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jane Smith</td>
                                        <td>900</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td>Bob Johnson</td>
                                        <td>800</td>
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
