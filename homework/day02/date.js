const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();

console.log(`오늘은 ${year}년 ${String(month).padStart(2, "0")}월 ${String(day).padStart(2, "0")}일 ${String(hour).padStart(2, "0")}:${String(
    minute
  ).padStart(2, "0")}:${String(second).padStart(2, "0")}입니다.`
);
