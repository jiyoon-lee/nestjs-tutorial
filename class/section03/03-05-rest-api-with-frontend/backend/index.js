import cors from "cors";
import express from "express";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import {
  checkEmail,
  getWelcomeTemplate,
  sendTemplateToEmail,
} from "./email.js";
import { Board } from "./models/board.mode.js";
import { checkPhone, getToken, sendTokenToSMS } from "./phone.js";
import { options } from "./swagger/config.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(options));

app.get("/boards", async function (req, res) {
  const result = await Board.find();

  res.send(result);
});

app.post("/boards", async function (req, res) {
  console.log(req);
  console.log("===============");
  console.log(res.body);

  const board = new Board({
    writer: req.body.writer,
    title: req.body.title,
    contents: req.body.contents,
  });
  await board.save();

  res.send("게시물 등록에 성공하였습니다.");
});

app.post("/token/phone", function (req, res) {
  const myPhone = req.body.qqq;

  const isValid = checkPhone(myPhone);
  if (isValid === false) {
    return;
  }

  const myToken = getToken();

  sendTokenToSMS(myPhone, myToken);

  res.send("인증완료");
});

app.post("/users", function (req, res) {
  const { name, age, school, email } = {
    name: "지윤",
    age: 30,
    school: "Seoul",
    email: "jiyoon3421@gmail.com",
  };

  const isValid = checkEmail(email);

  if (isValid === false) {
    return;
  }

  const myTemplate = getWelcomeTemplate({ name, age, school });

  sendTemplateToEmail(email, myTemplate);

  res.send("가입완료!!!");
});

mongoose.set("debug", true);

mongoose
  .connect("mongodb://my-database:27017/myDocker")
  .then(() => console.log("db 접속에 성공하였습니다."))
  .catch(() => console.log("db 접속에 실패하였습니다."));

app.listen(4000);
