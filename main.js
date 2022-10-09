function getCurrentTime() {
  const date = new Date();
  let hours = date.getHours();
  hours = hours > 12 ? hours - 12 : '0' + hours;
  const minutes = date.getMinutes();
  const formatedMinutes = minutes >= 10 ? minutes : '0' + minutes;
  const seconds = date.getSeconds();
  const formatedseconds = seconds >= 10 ? seconds : '0' + seconds;

  return date.getHours() > 12
    ? `Hours:Minutes:second: ${hours}:${formatedMinutes}:${formatedseconds} P.M.`
    : `Hours:Minutes:second: ${hours}:${formatedMinutes}:${formatedseconds} A.M.`;
}

const selectH1 = document.querySelector('h1');
setInterval(() => {
  selectH1.textContent = getCurrentTime();
}, 1000);
