const routes = require_("express").Router();
const TaskController = require("../controller/TaskController")

routes.get("/", TaskController.getAll)

module.exports = routes