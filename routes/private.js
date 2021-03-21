// new private route that will check for a user
// this private information will become the dashboard
// assuming admin privilages

const express = require("express");
const router = express.Router();
const { getPrivateData } = require('../controllers/private') 
// the protect middleware will stop unauthorised access to this private route
const { protect } = require("../middleware/protect")

// create a new private route
router.route("/").get(protect, getPrivateData); // get request to test for private data

// export router
module.exports = router;