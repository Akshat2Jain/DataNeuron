const express = require("express");
const { ComponentDb, CountDb } = require("./db");
const router = express.Router();
const timer = new Date();
router.post("/addData", async function (req, res) {
  try {
    const id = req.body.componentId;
    const data = req.body.data;
    const startTime = performance.now();
    await ComponentDb.deleteOne({ componentId: id });
    const component = await ComponentDb.create({
      componentId: id,
      data: data,
    });
    const count = await CountDb.findOneAndUpdate(
      {},
      {
        $inc: { addCount: 1 },
      },
      { upsert: true, new: true }
    );
    const executionTime = performance.now() - startTime;
    console.log(`Execution time for Add API: ${executionTime.toFixed(2)} ms`);
    res
      .status(200)
      .json({ msg: "New data added succesfully", component, count });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

router.post("/updateData", async function (req, res) {
  try {
    const id = req.body.componentId;
    const data = req.body.data;
    const startTime = performance.now();
    const Comp = await ComponentDb.findOne({ componentId: id });
    await ComponentDb.updateOne(
      {
        _id: Comp._id,
      },
      {
        data: data,
      }
    );
    const count = await CountDb.findOneAndUpdate(
      {},
      {
        $inc: { updateCount: 1 },
      },
      { upsert: true, new: true }
    );
    const Comp2 = await ComponentDb.findOne({ componentId: id });
    const executionTime = performance.now() - startTime;
    console.log(
      `Execution time for Update API: ${executionTime.toFixed(2)} ms`
    );
    res.status(200).json({
      msg: "Data Updated Succesfully",
      Comp2,
      count,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});

router.get("/getCount", async function (req, res) {
  try {
    const count = await CountDb.findById({ _id: "663af60299ddfec86e3bb533" });
    res.status(200).json({ count });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Something went wrong",
    });
  }
});
module.exports = router;
