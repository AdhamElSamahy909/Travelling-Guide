const express = require("express");

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const collection = client.db("myDB").collection("myCollection");

exports.getLoginPage = (req, res) => {
  res.render("login", {
    message: null,
  });
};

exports.getHomePage = (req, res) => {
  res.render("home");
};

exports.redirectToLogin = (req, res) => {
  res.redirect("/login");
};

exports.getRegistrationPage = (req, res) => {
  res.render("registration");
};

exports.getWanttogoPage = (req, res) => {
  res.render("wanttogo");
};

exports.getViewPage = (req, res) => {
  if (req.session.user) {
    console.log("Session is, ", req.session);
    console.log("User is, ", req.session.user);
    console.log("username: ", req.session.user.username);
    res.render(req.params.view);
  } else {
    res.redirect("/login");
  }
};

exports.getWanttotogoPage = async (req, res) => {
  if (req.session.user) {
    const user = await collection.findOne({
      username: req.session.user.username,
    });

    const destinations = user.destinations;

    console.log("DESTS: ", destinations);

    res.render("wanttogo", { destinations });
  } else {
    res.redirect("/login");
  }
};

exports.getSearchresultsPage = async (req, res) => {
  const data = req.session.destinations || [];

  console.log(data);

  res.render("searchresults", { data });

  delete req.session.destinations;
};

// exports.getHikingPage = (req, res) => {
//   res.render("hiking");
// };

// exports.getCitiesPage = (req, res) => {
//   res.render("cities");
// };

// exports.getIslandsPage = (req, res) => {
//   res.render("islands");
// };

// exports.getBaliPage = (req, res) => {
//   res.render("bali");
// };

// exports.getSantoriniPage = (req, res) => {
//   res.render("santorini");
// };

// exports.getAnnapurnaPage = (req, res) => {
//   res.render("annapurna");
// };

// exports.getParisPage = (req, res) => {
//   res.render("paris");
// };

// exports.getRomePage = (req, res) => {
//   res.render("rome");
// };
