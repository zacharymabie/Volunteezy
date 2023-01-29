

function Profile (){
    return(
        <div>
            <head>
                <title>My Profile</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="assets/css/main.css" />
                <noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
            </head>
            <body className="is-preload">

                    <div id="wrapper">

                            <header id="header">
                                <h1>My Profile</h1>
                            </header>

                            <div id="main">

                                <section id="profile" class="main">
                                    <div className="spotlight">
                                        <div className="content">
                                            <header className="major" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                                                <h2>First Last</h2>
                                                <div style={{display:"flex", justifyContent:"right",}}>
                                                    <span className="icon solid style1 fa-lg fa-bookmark" style={{margin:"20px"}}></span>
                                                    <span className="icon solid style1 fa-lg fa-bars" style={{margin:"20px"}}></span>
                                                </div>
                                            </header>
                                            <div style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}} >
                                                <div style={{width:" 40%"}} ><img style={{width:"300px", height:"300px"}} src="http://mnquants.com/images/zach.jpg" alt="" /></div>
                                                <div style={{width:"60%"}}>
                                                    <div style={{display:"flex", flexDirection:"row", justifyContent:"space-evenly"}}>
                                                        <span style={{width:"250px", height:"70px",}}>
                                                            <p style={{paddingTop:"60px" , fontWeight:"bold",fontSize:50, display:"flex", justifyContent:"center", alignItems:"center"}}>Rank: #30</p>
                                                        </span>
                                                        <span style={{width:"250px", height:"70px",}}>
                                                            <p style={{paddingTop:"60px" , fontWeight:"bold",fontSize:50, display:"flex", justifyContent:"center", alignItems:"center"}}>Hours: 129</p>
                                                        </span>
                                                    </div>
                                                    <div style={{paddingTop:"150px"}}>
                                                        <p style={{fontSize:25}}>Bio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default Profile;