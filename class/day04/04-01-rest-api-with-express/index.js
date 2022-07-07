// const express = require("express");
import express from "express";

const app = express();

app.get("/aaa", (req, res) => {
  res.send("Hello World! 반가워요!");
});

app.post("/qqq", (req, res) => {});

// 접속을 기다리는 API
app.listen(3000, () => {
  console.log(`Example app listening on port 3000`);
});
