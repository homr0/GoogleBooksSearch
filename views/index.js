const path = require("path");
const router = require("express").Router();
const booksController = require("../controllers/booksController");
// const apiRoutes = require("./api");

// API Routes
// router.use("/api", apiRoutes);
// Matches with "/api/books"
router.route("/api/books")
  .get(booksController.findAll)
  .post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/api/books/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
