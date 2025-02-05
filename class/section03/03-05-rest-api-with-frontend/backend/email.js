import nodemailer from "nodemailer";
import { getToday } from "./utils.js";

export function checkEmail(email) {
  if (email === undefined || email.includes("@") === false) {
    return false;
  } else {
    return true;
  }
}

export function getWelcomeTemplate({ name, age, school }) {
  const myTemplate = `
    <html>
      <body>
        <h1>${name}님 가입을 환영합니다!!!</h1>
        <hr />
        <div>이름: ${name}</div>
        <div>나이: ${age}</div>
        <div>학교: ${school}</div>
        <div>기념일: ${getToday()}</div>
      </body>
    </html>
  `;

  return myTemplate;
}

export async function sendTemplateToEmail(email, result) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "jiyoon3421@gmail.com",
      pass: "rnyh lvsu ccwa cnay",
    },
  });

  const info = await transporter.sendMail({
    from: "jiyoon3421@gmail.com",
    to: email,
    subject: "가입을 축하합니다",
    html: result,
  });

  console.log("Message sent: %s", info.messageId);
}
