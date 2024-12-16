const express = require("express");
const myCollectionController = require("../controllers/myCollectionController");

const myCollectionRouter = express.Router();

myCollectionRouter.post("/userLogin", myCollectionController.login);
myCollectionRouter.post("/userRegisteration", myCollectionController.register);
myCollectionRouter.post("/search", myCollectionController.search);
myCollectionRouter.get(
  "/addToDestinations/:destination",
  myCollectionController.redirectToWanttogo
);
myCollectionRouter.post(
  "/addToDestinations/:destination",
  myCollectionController.addDestination
);
module.exports = myCollectionRouter;
