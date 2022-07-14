import express, { application } from "express";
import Token from "./models/token.model.js";
import mongoose from "mongoose";
import { checkValidationPhone, getToken, sendTokenToSMS } from "./phone";

const app = express();
app.use(express.json());

app.patch("/tokens/phone", async (req, res) => {
  const myphone = req.body.phone;

  const isValid = checkValidationPhone(myphone);
  if (isValid === false) {
    return;
  }
  const mytoken = getToken();

  sendTokenToSMS(myphone, mytoken);
  res.send("인증완료!!!");
});
