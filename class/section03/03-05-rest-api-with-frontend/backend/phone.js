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
    "PYCBY0YN8TKZTNRBUV2WONYUZF8O626E"
  );

  manageService.sendOne({
    to: myPhone,
    from: "01083848558",
    text: `안녕하세요?! 요청하신 인증번호는 ${result} 입니다.`,
  });
  console.log(myPhone + "번호로 인증번호 " + result + "를 전송합니다.");
}
