import mosh from "../../images/mosh.jpg";


function Bookmarks(){
    return(
        <div>
            <head>
                <title>Bookmarks</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="../assets/css/main.css" />
                <noscript><link rel="stylesheet" href="../assets/css/noscript.css" /></noscript>
            </head>
            <body className="is-preload">

                    <div id="wrapper">

                            <header id="header">
                                <h1>Bookmarks</h1>
                            </header>

                            <div id="main">

                                    <section style={{"background-color":"aliceblue"}} id="content" className="main">
                                        <div className="post">
                                            <div className="post-header">
                                            <img src={mosh} alt="Profile Picture" className="profile-picture"/>
                                            <div className="username">John Doe</div>
                                            </div>
                                            <img src="post-image.jpg" alt="Post Image" className="post-image"/>
                                            <p className="post-content">This is an example post on my social media profile.</p>
                                            <div className="post-footer">
                                            <div className="icon-size participating-count">
                                                <span className="icon style1 fa-lg fa-thumbs-up"></span>
                                            </div>
                                            <div className="icon-size comment-count">
                                                <span className="icon style1 fa-lg fa-comment"></span>
                                            </div>
                                            <div className="icon-size bookmark">
                                                <span className="icon style1 fa-lg fa-bookmark"></span>
                                            </div>
                                            <div className="icon-size share">
                                                <span className="icon style1 fa-lg fa-paper-plane"></span>
                                            </div>
                                            </div>
                                        </div>                
                                        <div className="post">
                                            <div className="post-header">
                                            <img src={mosh} alt="Profile Picture" className="profile-picture"/>
                                            <div className="username">John Doe</div>
                                            </div>
                                            <img src="post-image.jpg" alt="Post Image" className="post-image"/>
                                            <p className="post-content">This is an example post on my social media profile.</p>
                                            <div className="post-footer">
                                            <div className="icon-size participating-count">
                                                <span className="icon style1 fa-lg fa-thumbs-up"></span>
                                            </div>
                                            <div className="icon-size comment-count">
                                                <span className="icon style1 fa-lg fa-comment"></span>
                                            </div>
                                            <div className="icon-size bookmark">
                                                <span className="icon style1 fa-lg fa-bookmark"></span>
                                            </div>
                                            <div className="icon-size share">
                                                <span className="icon style1 fa-lg fa-paper-plane"></span>
                                            </div>
                                            </div>
                                        </div> 
                                        <div className="post">
                                            <div className="post-header">
                                            <img src={mosh} alt="Profile Picture" className="profile-picture"/>
                                            <div className="username">John Doe</div>
                                            </div>
                                            <img src="post-image.jpg" alt="Post Image" className="post-image"/>
                                            <p className="post-content">This is an example post on my social media profile.</p>
                                            <div className="post-footer">
                                            <div className="icon-size participating-count">
                                                <span className="icon style1 fa-lg fa-thumbs-up"></span>
                                            </div>
                                            <div className="icon-size comment-count">
                                                <span className="icon style1 fa-lg fa-comment"></span>
                                            </div>
                                            <div className="icon-size bookmark">
                                                <span className="icon style1 fa-lg fa-bookmark"></span>
                                            </div>
                                            <div className="icon-size share">
                                                <span className="icon style1 fa-lg fa-paper-plane"></span>
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

export default Bookmarks;