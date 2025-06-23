// prettier.config.js
/** @type {import("prettier").Config} */
module.exports = {
  semi: true,                // 문장 끝에 세미콜론 붙임
  singleQuote: true,         // 작은따옴표 사용 ('대신 " 안씀)
  tabWidth: 2,               // 들여쓰기 간격
  trailingComma: 'es5',      // ES5에서 허용되는 곳에만 trailing comma
  printWidth: 100,           // 한 줄 최대 길이
  arrowParens: 'avoid',      // 화살표 함수의 매개변수가 하나일 경우 괄호 생략
  endOfLine: 'auto'          // OS에 맞는 줄바꿈 방식 사용
};
