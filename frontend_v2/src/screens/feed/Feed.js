import mosh from "../../images/mosh.jpg"
import React, { useState } from 'react';
import Button from '../../../node_modules/react-bootstrap/Button';
import Form from '../../../node_modules/react-bootstrap/Form';
import Modal from '../../../node_modules/react-bootstrap/Modal';

function Feed(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div>
            <head>
                <title>Feed</title>
                <meta charset="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
                <link rel="stylesheet" href="../assets/css/main.css" />
                <noscript><link rel="stylesheet" href="../assets/css/noscript.css" /></noscript>
            </head>
            <body className="is-preload">

                    <div id="wrapper">

                            <header id="header">
                                <h1>Feed</h1>
                            </header>

                            <div id="main">

                                    <>
                                    <Button variant="primary" onClick={handleShow} style={{"background-color":"aliceblue", display: 'flex', justifyContent: 'center'}}>
                                        Create New Post!
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header>
                                        <Modal.Title>Create Post</Modal.Title>
                                        </Modal.Header>
                                        <Form>
                                        <Form.Group className="p-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Label>Write your post here:</Form.Label>
                                            <Form.Control as="textarea" rows={3} />
                                        </Form.Group>

                                        <Form.Group controlId="formFile" className="mb-3">
                                        <Form.Label>Insert Image</Form.Label>
                                        <Form.Control type="file" multiple />
                                        </Form.Group>

                                        </Form>
                                        <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Cancel
                                        </Button>
                                        <Button variant="primary" onClick={handleClose}>
                                            Post
                                        </Button>
                                        </Modal.Footer>
                                    </Modal>
                                    </>

                                    <section style={{"background-color":"aliceblue"}} id="content" className="main">
                                        <div className="post">
                                            <div className="post-header">
                                            <img src={mosh} alt="Profile Picture" className="profile-picture"/>
                                            <div className="username">John Doe</div>
                                            </div>
                                            <img alt="Post Image" className="post-image"/>
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

export default Feed;