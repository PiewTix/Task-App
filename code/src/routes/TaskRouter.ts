let express = require('express');

let router = express.Router()

import {TaskController} from "../Controller/TaskController"

router.get("/all", TaskController.getAllTasks)

router.get("/id/:id", TaskController.getTaskById);

router.put("/id/:id", TaskController.updateTask);

router.post("/create", TaskController.createTask);



module.exports = router