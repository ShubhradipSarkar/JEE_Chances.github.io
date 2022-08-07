function f1() {
    var str = document.getElementById("fname").value;

    let str2 = "https://script.google.com/macros/s/AKfycbxJMiE8kFsHuw52ZbInP5_yQxKOTzVpDbjiG0YOH498Zu-HMqb-KAn4OwKWcka3vZ1pew/exec?program_name=";
    console.log(str2 + str);

    window.location.href = (str2 + str);



}
