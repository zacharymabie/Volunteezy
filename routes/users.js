const { User } = require("../models/user.js");
const { UserFollow } = require("../models/userFollow.js");
const express = require("express");
const router = express.Router();

//cloudinary
// const cloudinary = require("cloudinary");
// const nanoid = require("nanoid");

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_KEY,
//   api_secret: process.env.CLOUDINARY_SECRET,
// });

// const FILE_TYPE_MAP = {
//   "image/png": "png",
//   "image/jpg": "jpg",
//   "image/jpeg": "jpeg",
// };

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     const isValid = FILE_TYPE_MAP[file.mimetype];
//     let uploadError = new Error("invalid image type");
//     if (isValid) {
//       uploadError = null;
//     }
//     cb(uploadError, "public/uploads");
//   },
//   filename: function (req, file, cb) {
//     const fileName = file.originalname.split(" ").join("-");
//     const extension = FILE_TYPE_MAP[file.mimetype];
//     cb(null, `PP${fileName}-${Date.now()}.${extension}`);
//   },
// });

// const uploadOptions = multer({ storage: storage });

router.get(`/`, async (req, res) => {
  const userList = await User.find().select("-passwordHash");

  if (!userList) {
    res.status(500).json({ success: false });
  }
  res.send(userList);
});

router.get(`/:id`, async (req, res) => {
  const user = await User.findById(req.params.id)
    .select("-passwordHash")
    .populate("exerciseList");

  if (!user) {
    res
      .status(500)
      .json({ message: "The user with the given ID was not found" });
  }
  res.status(200).send(user);
});

router.get(`/get/count`, async (req, res) => {
  const userCount = await User.countDocuments((count) => count).clone();
  if (!userCount) {
    res.status(500).json({ success: false });
  }
  res.send({ userCount: userCount });
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const secret = process.env.secret;
  if (!user) {
    return res.status(400).send("User not found");
  }

  if (user && bcrypt.compareSync(req.body.password, user.passwordHash)) {
    const token = jwt.sign(
      {
        userId: user.id,
        isAdmin: user.isAdmin,
      },
      secret,
      { expiresIn: "1d" }
    );

    res.status(200).send({ user: user.email, token: token });
  } else {
    res.status(400).send("Wrong Password");
  }
});

router.post(
  "/register",
  uploadOptions.single("profilePic"),
  async (req, res) => {
    // const fileName = req.file.filename;
    // const basePath = `${req.protocol}://${req.get("host")}/public/uploads/`;

    let user = new User({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      passwordHash: bcrypt.hashSync(req.body.password, 10),
      // isAdmin: req.body.isAdmin,
      // age: req.body.age,
      // weight: req.body.weight,
      // height: req.body.height,
      // profilePic: `${basePath}${fileName}`
    });
    user = await user.save();

    if (!user) return res.status(400).send("User cannot be created");

    res.send(user);
  }
);

router.put("/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      age: req.body.age,
      weight: req.body.weight,
      height: req.body.height,
    },
    { new: true }
  );
  if (!user) return res.status(400).send("user cannot be created");

  res.send(user);
});

//SET BIO
router.put("/setbio/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      bio: req.body.bio,
    },
    { new: true }
  );
  if (!user) return res.status(400).send("user cannot be created");

  res.send(user);
});

router.put(
  "/setprofilepic/:id",
  uploadOptions.single("profilePic"),
  async (req, res) => {
    // if(!req.file)return res.status(400).send('No image in the request');

    // const fileName = req.file.filename
    // const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    // const url = `${basePath}${fileName}`;

    let url = "";
    // if(req.file){
    //     const fileName = req.file.filename
    //     const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`;
    //     url = `${basePath}${fileName}`
    // }
    try {
      console.log("TRY");
      const result = await cloudinary.uploader.upload(req.body.image, {
        public_id: nanoid(),
        resource_type: "jpg",
      });
      console.log(result);
      url = result.secure_url;
      // public_id = result.public_id
    } catch (err) {
      console.log(err);
    }
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        profilePic: url,
      },
      { new: true }
    );
    if (!user) return res.status(400).send("user cannot be created");

    res.send(user);
  }
);

router.put("/newfollower/:id", async (req, res) => {
  const followers = Promise.all(
    req.body.followed.map(async (follower) => {
      let newFollower = new UserFollow({
        user: follower.user,
        // followedUser: follower.followedUser,
      });
      newFollower = await newFollower.save();
      return newFollower._id;
    })
  );
  const followedArr = await followers;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      followed: followedArr,
    },
    { new: true }
  );
  if (!user) return res.status(400).send("user cannot be created");

  res.send(user);
});

router.put("/newfollowing/:id", async (req, res) => {
  const following = Promise.all(
    req.body.following.map(async (following) => {
      let newFollowing = new UserFollow({
        user: following.user,
        // followedUser: following.followedUser,
      });
      newFollowing = await newFollowing.save();
      return newFollowing._id;
    })
  );
  const followingArr = await following;

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      following: followingArr,
    },
    { new: true }
  );
  if (!user) return res.status(400).send("user cannot be created");

  res.send(user);
});

//get followers
router.get(`/followers/:id`, async (req, res) => {
  const user = await User.findById(req.params.id).select("followed")
  .populate({ path: "followed", populate: "user" })


  if (!user) {
    res
      .status(500)
      .json({ message: "The user with the given ID was not found" });
  }
  res.status(200).send(user);
});

//get following
router.get(`/following/:id`, async (req, res) => {
  const user = await User.findById(req.params.id).select("following")
  .populate({ path: "following", populate: "user" });

  if (!user) {
    res
      .status(500)
      .json({ message: "The user with the given ID was not found" });
  }
  res.status(200).send(user);
});


router.delete("/:id", (req, res) => {
  User.findByIdAndRemove(req.params.id)
    .then(async (user) => {
      if (user) {
        await user.followed.map(async (follower) => {
          await UserFollow.findByIdAndRemove(follower);
        });
        await user.following.map(async (whoever) => {
          await UserFollow.findByIdAndRemove(whoever);
        });
        return res
          .status(200)
          .json({ success: true, message: "user is deleted" });
      } else {
        return res
          .status(404)
          .json({ success: false, message: "user not found" });
      }
    })
    .catch((err) => {
      return res.status(400).json({ success: false, error: err });
    });
});

// Change exercise list of specific user/
router.put("/list/:id", async (req, res) => {
  if (req.body.exercises != undefined) {
    const exercisesIds = req.body.exercises;
    exercisesIds.map(async (exerciseId) => {
      const exercise = await Exercise.findById(exerciseId);
      if (!exercise) return res.status(400).send("Invalid Exercises");
    });
  }
  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      exerciseList: req.body.exercises,
    },
    {
      new: true,
    }
  );
  if (!user)
    return res.status(404).send("The user's exercise list cannot be changed");

  res.send(user);
});

module.exports = router;