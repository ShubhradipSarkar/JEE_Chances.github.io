function f1() {
    var str = document.getElementById("fname").value;
    var str_category=document.getElementById("catname").value;
    let str3 = "&category=";
    
    let str_category_addition = str3+str_category;
    let str2 = "https://script.google.com/macros/s/AKfycbxJMiE8kFsHuw52ZbInP5_yQxKOTzVpDbjiG0YOH498Zu-HMqb-KAn4OwKWcka3vZ1pew/exec?program_name=";
    console.log(str2 + str + str_category_addition);

    window.location.href = (str2 + str + str_category_addition);



}
