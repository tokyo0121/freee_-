// 年月日表示
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth() + 1;
const day = date.getDate();
const today = `${year}年${month}月${day}日`;
document.querySelector('#today').innerHTML = `今日は ${today} です！`

//アナログ時計を表示
setInterval(() => {
  const now = new Date();

  const h = now.getHours();
  const m = now.getMinutes();
  const s = now.getSeconds();

  const degH = h * (360 / 12) + m * (360 / 12 / 60);
  const degM = m * (360 / 60);
  const degS = s * (360 / 60);

  const elementH = document.querySelector('.lineHour');
  const elementM = document.querySelector('.lineMin');
  const elementS = document.querySelector('.lineSec');

  elementH.style.transform = `rotate(${degH}deg)`;
  elementM.style.transform = `rotate(${degM}deg)`;
  elementS.style.transform = `rotate(${degS}deg)`;
}, 50);

// 出勤時間入力
function starttime(){
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let label = `${hour}:${minutes}`;

  document.querySelector('#startTime').innerHTML = `${label}`;

}

// 退勤時間入力
function endtime(){
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let label = `${hour}:${minutes}`;

  document.querySelector('#endTime').innerHTML = `${label}`;

  //勤務時間
  let startLabel = document.querySelector('#startTime').innerHTML;
  let endLabel = document.querySelector('#endTime').innerHTML;

  let startTimeLabel = startLabel.split(':');
  let startMin = startTimeLabel[1];
  let startHour = startTimeLabel[0];

  let endTimeLabel = endLabel.split(':');
  let endMin = endTimeLabel[1];
  let endHour = endTimeLabel[0];

  let workTimeMin = parseInt(endMin) - parseInt(startMin);
  let workTimeHour = parseInt(endHour) - parseInt(startHour);
  let workMin = workTimeMin;
  let workHour = workTimeHour;
  if (workTimeMin < 0) {
    workMin = 60 + workTimeMin;
    workHour = workHour - 1;
  } else{ }

  document.querySelector('#workTime').innerHTML = `${workHour}:${workMin}`;

  // console.log(`${startMin}`);
  // console.log(`${startHour}`);
  // console.log(`${endMin}`);
  // console.log(`${endHour}`);
  // console.log(`${workMin}`);
  // console.log(`${workHour}`);

}

// 労働時間を計測する
// function worktime(){
//   const startLabel = document.querySelector('#startTime');
//   const endLabel = document.querySelector('#endTime');
//   const workTimeSec = endLabel - startLabel;
//   const workTimeHour = workTimeSec / (60 * 60 * 1000);
//
//   console.log(`${workTimeHour}`);
//
//   document.querySelector('#workTime').innerHTML = `${workTimeHour}`;
// }
