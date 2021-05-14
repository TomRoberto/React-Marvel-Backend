const express = require("express");
const router = express.Router();
const axios = require("axios");
const { response } = require("express");

router.get("/comics", async (req, res) => {
  try {
    const skip = (req.query.page - 1) * 100;
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics?apiKey=${process.env.MARVEL_API_KEY}&skip=${skip}&title=${req.query.search}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
