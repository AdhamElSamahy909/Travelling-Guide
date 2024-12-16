const { MongoClient } = require("mongodb");
const multer = require("multer");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const collection = client.db("myDB").collection("myCollection");

exports.login = async (req, res) => {
  console.log(req.body.username, req.body.password);

  const data = await collection.findOne({
    username: req.body.username,
    password: req.body.password,
  });

  console.log("Data is, ", data);

  if (data) {
    req.session.user = {
      id: data._id,
      username: data.username,
    };

    console.log(req.session);

    res.json({
      success: true,
    });
  } else
    res.json({
      success: false,
      message: "user not found, please enter username and password again",
    });
};

exports.register = async (req, res) => {
  const data = await collection.insertOne({
    username: req.body.username,
    password: req.body.password,
    destinations: [],
  });

  if (data) res.json({ success: true });
  else res.json({ success: false });
};

exports.addDestination = async (req, res) => {
  const user = await collection.findOne({
    username: req.session.user.username,
  });

  if (!user) res.redirect("/login");

  console.log("USER: ", user);
  console.log("CITY: ", req.params.destination);

  if (!user.destinations.includes(req.params.destination)) {
    await collection.updateOne(
      { username: user.username },
      { $push: { destinations: req.params.destination } }
    );

    res.json({ success: true });
  } else {
    res.json({
      success: false,
      message: "Destination already exists in wanttogo list",
    });
  }
};

exports.redirectToWanttogo = (req, res) => {
  req.redirect("/wanttogo");
};

exports.search = async (req, res) => {
  let destinations = [
    "annapurna",
    "bali",
    "inca",
    "paris",
    "rome",
    "santorini",
  ];

  const subString = req.body.Search;
  console.log("jni: ", req.body.Search);
  destinations = destinations.filter((dest) => dest.includes(subString));

  req.session.destinations = destinations;

  res.json({ redirect: "/searchresults" });
};
