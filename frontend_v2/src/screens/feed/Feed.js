import mosh from "../../images/mosh.jpg"
import React, { useEffect, useState } from 'react';
import axios from "axios";
import Button from '../../../node_modules/react-bootstrap/Button';
import Form from '../../../node_modules/react-bootstrap/Form';
import Modal from '../../../node_modules/react-bootstrap/Modal';
axios.defaults.baseURL = "http://localhost:3000/"
axios.defaults.headers.common['Access-Control-Allow-Origin'] = "*"

function Feed(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [feed1, setFeed1] = useState({});
    const [feed2, setFeed2] = useState({});
    const [feed3, setFeed3] = useState({});
    const [user1, setUser1] = useState({});
    const [user2, setUser2] = useState({});
    const [user3, setUser3] = useState({});
    

    const options = {
        headers:{
            Accept: "application/json"
        },
        params:{
            "userId": "63d69fa7bd943d4d7b74345a",
            "token": "password"
        }
    }
  
    const getFeedData = () => {
      axios.get(`feed`, options)
      .then((res) => {
        console.log(res.data)
        setFeed1(res.data[0]);
        axios.get(`user/${res.data[0].authorId}/profile`)
        .then((res) => {
            setUser1(res.data)
        })
        .catch((error) => {
          console.log("API Error", error);
        });
        setFeed2(res.data[1]);
        axios.get(`user/${res.data[1].authorId}/profile`)
        .then((res) => {
            setUser2(res.data)
        })
        .catch((error) => {
          console.log("API Error", error);
        });
        setFeed3(res.data[2]);
        axios.get(`user/${res.data[2].authorId}/profile`)
        .then((res) => {
            setUser3(res.data)
        })
        .catch((error) => {
          console.log("API Error", error);
        });
      })
      .catch((error) => {
        console.log("API Error", error);
      });
    }

    const fillUser = () => {
    }
  
    useEffect(() => {
      getFeedData();
      fillUser()

      document.title = "Volunteezy";
    }, []);


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
                                            <img src={user1.profilePic} alt="Profile Picture" className="profile-picture"/>
                                            <div className="username">{user1.name}</div>
                                            </div>
                                            <img src={feed1.attachment} alt="" className="post-image"/>
                                            <p className="post-content">{feed1.content}</p>
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
                                            <img src={user2.profilePic} alt="Profile Picture" className="profile-picture"/>
                                            <div className="username">{user2.name}</div>
                                            </div>
                                            <img src={feed2.attachment} alt="Post Image" className="post-image"/>
                                            <p className="post-content">{feed2.content}</p>
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
                                            <img src={user3.profilePic} alt="Profile Picture" className="profile-picture"/>
                                            <div className="username">{user3.name}</div>
                                            </div>
                                            <img src={feed3.attachment} alt="Post Image" className="post-image"/>
                                            <p className="post-content">{feed3.content}</p>
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