const express = require("express");
const viewsController = require("../controllers/viewsController");

const viewsRouter = express.Router();

viewsRouter.get("/", viewsController.redirectToLogin);
viewsRouter.get("/login", viewsController.getLoginPage);
viewsRouter.get("/registration", viewsController.getRegistrationPage);
viewsRouter.get("/home", viewsController.getHomePage);
viewsRouter.get("/wanttogo", viewsController.getWanttotogoPage);
viewsRouter.get("/searchresults", viewsController.getSearchresultsPage);
viewsRouter.get("/:view", viewsController.getViewPage);
// viewsRouter.get("/hiking", viewsController.getHikingPage);
// viewsRouter.get("/cities", viewsController.getCitiesPage);
// viewsRouter.get("/islands", viewsController.getIslandsPage);
// viewsRouter.get("/wanttogo", viewsController.getWanttogoPage);
// viewsRouter.get("/bali", viewsController.getWanttogoPage);
// viewsRouter.get("/santorini", viewsController.getWanttogoPage);
// viewsRouter.get("/inca", viewsController.getIncaPage);
// viewsRouter.get("/annapurna", viewsController.getAnnapurnaPage);
// viewsRouter.get("/paris", viewsController.getParisPage);
// viewsRouter.get("/rome", viewsController.getRomePage);

module.exports = viewsRouter;
