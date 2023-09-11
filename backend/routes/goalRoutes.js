const express = require("express")
const router = express.Router()
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controllers/get-goals/getGoals")

router.route("/").get(getGoals).post(setGoal)
router.route("/:id").delete(deleteGoal).put(updateGoal)

module.exports = router
