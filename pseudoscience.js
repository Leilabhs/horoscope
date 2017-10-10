/**
 * Created by h205p2 on 9/28/17.
 */
function onSubmit(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var sign = determineSign(day, month);
    var horoscope = determineHoroscope(sign);
    var image = determineImage(sign);
    document.getElementById("output").innerHTML =  sign + ": " + horoscope;
    document.getElementById("theImage").innerHTML = image;
}



function determineSign(day, month) {
    var sign;
    if (month === "Jan" && day >= 20 || month === "Feb" && day <= 18) {
        sign = "Aquarius";
    }
    if (month === "Feb" && day >= 19 || month === "Mar" && day <= 20) {
        sign = "Pisces";
    }
    if (month === "Mar" && day >= 21 || month === "Apr" && day <= 19) {
        sign = "Aries";
    }
    if (month === "Apr" && day >= 20 || month === "May" && day <= 20) {
        sign = "Taurus";
    }
    if (month === "May" && day >= 21 || month === "Jun" && day <= 20) {
        sign = "Gemini";
    }
    if (month === "Jun" && day >= 21 || month === "Jul" && day <= 22) {
        sign = "Cancer";
    }
    if (month === "Jul" && day >= 23 || month === "Aug" && day <= 22) {
        sign = "Leo";
    }
    if (month === "Aug" && day >= 23 || month === "Sep" && day <= 22){
        sign = "Virgo";
    }
    if (month === "Sep" && day >= 23 || month === "Oct" && day <= 22){
        sign = "Libra";
    }
    if (month === "Oct" && day >= 23 || month === "Nov" && day <= 21) {
        sign = "Scorpio";
    }
    if (month === "Nov" && day >= 22 || month === "Dec" && day <= 21) {
        sign = "Sagittarius";
    }
    if (month === "Dec" && day >= 22 || month === "Jan" && day <= 19) {
        sign = "Capricorn";
    }
    console.log(sign);
    return sign;
}

function determineHoroscope(sign) {
    var horoscope = "";
    if (sign === "Aquarius") {
        horoscope = "Aqua horoscope";
    }
    if (sign === "Pisces") {
        horoscope = "Pisces horoscope";
    }
    if (sign === "Aries") {
        horoscope = "Aries horoscope";
    }
    if (sign === "Taurus") {
        horoscope = "Taurus horoscope";
    }
    if (sign === "Gemini") {
        horoscope = "Gemini horoscope";
    }
    if (sign === "Cancer") {
        horoscope = "Cancer horoscope";
    }
    if (sign === "Leo") {
        horoscope = "Leo horoscope";
    }
    if (sign === "Virgo") {
        horoscope = "Virgo horoscope";
    }
    if (sign === "Libra") {
        horoscope = "Libra horoscope";
    }
    if (sign === "Scorpio") {
        horoscope = "Scorpio horoscope";
    }
    if (sign === "Sagittarius") {
        horoscope = "Sagit horoscope";
    }
    if (sign === "Capricorn") {
        horoscope = "Capri horoscope";
    }
    console.log(horoscope);
    return horoscope;
}

function determineImage(sign) {
    var theImage;
    if(sign==="Aquarius"){
        theImage = "<img src='https://4.imimg.com/data4/FN/LI/MY-3809364/water-cups-250x250.jpg' alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Pisces"){
        theImage = "<img src='https://a-z-animals.com/media/animals/images/original/fish8.jpg' alt= 'horoscopeImage'" +
            " style='width:126px;'>";
    }
    if(sign==="Aries"){
        theImage = "<img src='https://www.extremetech.com/wp-content/uploads/2016/02/DRAM-Feature-640x354.jpg'" +
            " alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Taurus"){
        theImage = "<img src='https://static.pexels.com/photos/16009/pexels-photo.jpg'" +
            " alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Gemini"){
        theImage = "<img src='https://img.buzzfeed.com/buzzfeed-static/static/2016-04/27/16/campaign_images/webdr11/" +
            "fred-and-george-pranks-2-13534-1461787296-5_dblbig.jpg' alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Cancer"){
        theImage = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Ocypode-ceratophthalma-horned-" +
            "ghost-crab-krabi-thailand.jpg/1200px-Ocypode-ceratophthalma-horned-ghost-crab-krabi-thailand.jpg'" +
            " alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Leo"){
        theImage = "<img src='https://i.pinimg.com/736x/2d/41/55/2d4155fc3c3aae9e5eb9d3425860d119--exotic-animals-" +
            "nature-animals.jpg' alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Virgo"){
        theImage = "<img src='https://www.johnsonbanks.co.uk/content/projects/virgin-atlantic-plane2.jpg'" +
            " alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Libra"){
        theImage = "<img src='https://www.sks-science.com/images/OHAU-CS200LRG.jpg'" +
            " alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Scorpio"){
        theImage = "<img src='https://fthmb.tqn.com/LDk2_Ya6PSK4HfXcuMgO5I-JQf0=/960x0/filters:no_upscale()/" +
            "GettyImages-98220300-595593fa3df78cdc295d4e52.jpg' alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Saggitarius"){
        theImage = "<img src='http://vignette2.wikia.nocookie.net/archer/images/3/3f/Sterling_Archer_Standing_POSE." +
            "png/revision/latest?cb=20151123090437' alt= 'horoscopeImage' style='width:126px;'>";
    }
    if(sign==="Capricorn"){
        theImage = "<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hausziege_04.jpg/" +
            "1200px-Hausziege_04.jpg' alt= 'horoscopeImage' style='width:126px;'>";
    }
    console.log(theImage);
    return theImage;
}
















