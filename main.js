setInterval(function clock(){
    const date = new Date();
    let sec = date.getSeconds();
    if (date.getSeconds() < 10) sec = "0" + date.getSeconds();
    let minute = date.getUTCMinutes();
    if (date.getMinutes() < 10) minute = "0" + date.getMinutes();
    let hour = date.getHours();
    if (date.getHours() < 10) hour = "0" + date.getHours();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    console.log(day, month, year);
    let showDate = document.getElementById('date');
    let showTime = document.getElementById('time');
    // console.log(sec, minute, hour);
    showTime.innerHTML = hour + " : " + minute + " : " + sec;
    showDate.innerHTML = 'Day: ' + day + ' Month: ' + month + ' Year: ' + year;
    // setTimeout(clock, 1000);
}, 1000);
// function Clock() {
//     const date = new Date();
//     let sec = date.getSeconds();
//     if (date.getSeconds() < 10) sec = "0" + date.getSeconds();
//     let minute = date.getUTCMinutes();
//     if (date.getMinutes() < 10) minute = "0" + date.getMinutes();
//     let hour = date.getHours();
//     if (date.getHours() < 10) hour = "0" + date.getHours();
//     let day = date.getDate();
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear();
//     console.log(day, month, year);
//     let showDate = document.getElementById('date');
//     let showTime = document.getElementById('time');
//     // console.log(sec, minute, hour);
//     showTime.innerHTML = hour + " : " + minute + " : " + sec;
//     showDate.innerHTML = 'Day: ' + day + ' Month: ' + month + ' Year: ' + year;
//     setTimeout(clock, 1000);
// }