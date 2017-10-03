/**
 * Created by h205p2 on 9/28/17.
 */
function onSubmit(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var sign = determineSign(day, month);
    document.getElementById("output").innerHTML =  sign;
}



function determineSign(day, month) {
    var sign = "";
    if (month == 0 && day >= 20 || month == 1 && day <= 18) {
        sign = "Aquarius";
    }
    if (month == 1 && day >= 19 || month == 2 && day <= 20) {
        sign = "Pisces";
    }
    if (month == 2 && day >= 21 || month == 3 && day <= 19) {
        sign = "Aries";
    }
    if (month == 3 && day >= 20 || month == 4 && day <= 20) {
        sign = "Taurus";
    }
    if (month == 4 && day >= 21 || month == 5 && day <= 20) {
        sign = "Gemini";
    }
    if (month == 5 && day >= 21 || month == 6 && day <= 22) {
        sign = "Cancer";
    }
    if (month == 6 && day >= 23 || month == 7 && day <= 22) {
        sign = "Leo";
    }
    if (month == 7 && day >= 23 || month == 8 && day <= 22){
        sign = "Virgo";
    }
    if (month == 8 && day >= 23 || month == 9 && day <= 22){
        sign = "Libra";
    }
    if (month == 9 && day >= 23 || month == 10 && day <= 21) {
        sign = "Scorpio"
    }
    if (month == 10 && day >= 22 || month == 11 && day <= 21) {
        sign = "Sagittarius";
    }
    if (month == 11 && day >= 22 || month == 0 && day <= 19) {
        sign = "Capricorn";
    }
    console.log(sign);
    return sign;
}

/*function determineHoroscope(sign) {
    var horoscope = "";
    if (sign = Aquarius) {
        horoscope =
    }
}

*/

















