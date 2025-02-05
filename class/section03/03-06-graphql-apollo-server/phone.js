import coolsms from "coolsms-node-sdk";
const mySMS = coolsms.default;

export function checkPhone(myPhone) {
  if (myPhone.length < 10 || myPhone.length > 11) {
    console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해 주세요!!!");
    return false;
  } else {
    return true;
  }
}

export function getToken() {
  const result = String(Math.floor(Math.random() * 1000000)).padStart(6, "0");
  console.log(result);
  return result;
}

export function sendTokenToSMS(myPhone, result) {
  const manageService = new mySMS(
    "NCSF9H7D6NKKB95S",
    "W1SSBGCOHBIXPCVAONK30LM0RFTVQTI5"
  );

  manageService.sendOne({
    to: "01083848558",
    from: "01083848558",
    text: "한글 45자, 영자 90자 이하 입력되면 자동으로 SMS 타입의 메시지가 발송됩니다.",
  });
  console.log(myPhone + "번호로 인증번호 " + result + "를 전송합니다.");
}
