const express = require("express");
const router = express.Router();
const sales = require("./salesMode");

router.get("/", async (req, res) => {
  const data = await sales.find({});
  res.send(data);
});

router.post("/", async (req, res) => {
  try {
    const salesData = sales(req.body);
    await salesData.save();
    res.status(200).send({
      message: "sales Added Successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

router.delete("/:id", async (req, res) => {
  sales.deleteOne({ _id: req.params.id }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: "sales Deleted Successfully!",
      });
    }
  });
});

router.patch("/:id", async (req, res) => {
  sales.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body }, (err) => {
    if (err) {
      res.status(500).send({
        message: err.message,
      });
    } else {
      res.status(200).send({
        message: "sales Updated Successfully!",
      });
    }
  });
});

router.get("/:id", async (req, res) => {
  try {
    const foundSale = await sales.findById(req.params.id);
    res.send(foundSale);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
});

module.exports = router;
