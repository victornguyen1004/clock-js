let section = document.querySelector("section"),
icons = document.querySelector(".icons");

icons.onclick = () => {
    section.classList.toggle("dark");
}

setInterval(()=>{
    let date = new Date();
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

    let d;
    d = hour < 12 ? "AM" : "PM";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour == 0 ? hour = 12 : hour;

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;

    console.log(hour, minute, second);
    document.querySelector(".hour_num").innerText = hour;
    document.querySelector(".minute_num").innerText = minute;
    document.querySelector(".second_num").innerText = second;
    document.querySelector(".am_pm").innerText = d;
}, 1000)