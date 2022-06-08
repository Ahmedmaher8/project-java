
var i = 0;
var images = [];

images[0] = "images/m5.webp";
images[1] = "images/im4.jpeg";
images[2] = "images/m4.webp";
images[3] = "images/im1.jpg";


function prev() {
    document.slide.src = images[i];
    if (i <= 0) {
        i = images.length - 1;
    }
    else {
        i--;
    }
}

function next() {
    document.slide.src = images[i];
    if (i >= images.length - 1) {
        i = 0;
    }
    else {
        i++;
    }
}


//==================================================

var cars = [
    {
        img: "imagess/photo1.jpg",
        head: "Car1",
        discreption: "lputate at, tempus viverra turpis. Fusce condimentum nunc acs"
    },

    {
        img: "imagess/photo2.jpg",
        head: "Car2",
        discreption: "lputate at, tempus viverra turpis. Fusce condimentum nunc acs"
    },

    {
        img: "imagess/photo1.jpg",
        head: "Car3",
        discreption: "lputate at, tempus viverra turpis. Fusce condimentum nunc acs"
    },

    {
        img: "imagess/photo4.jpg",
        head: "Car4",
        discreption: "lputate at, tempus viverra turpis. Fusce condimentum nunc acs"
    },

    {
        img: "imagess/photo5.jpg",
        head: "Car5",
        discreption: "lputate at, tempus viverra turpis. Fusce condimentum nunc acs"
    },


    {
        img: "imagess/photo6.jpg",
        head: "Car6",
        discreption: "lputate at, tempus viverra turpis. Fusce condimentum nunc acs"
    },

]

var btnCars = document.getElementById("btnCar");

btnCars.addEventListener("click", function () {
    var contentCars = "";

    for (var i = 0; i < tires.length; i++) {

        contentCars += ` <div class="col-md-4 my-5">
<div class="">
  <img src="${cars[i].img}" class="img-fluid" id="im1" alt="">
  <div class="caption ">
    <h2>${cars[i].head}</h2>
    <p>${cars[i].discreption}</p>
  </div>
</div>
</div>`
    }
    document.getElementById("taab").innerHTML = contentCars;
})



var tires = [{
    img: "imagess/t1.png",
    head: "tire1",
    discreption: "Compared to conventional tires, Mercedes Original tires are designed for low rolling resistance"
},
{
    img: "imagess/t2.png",
    head: "tire2",
    discreption: "Compared to conventional tires, Mercedes Original tires are designed for low rolling resistance"
},
{
    img: "imagess/t3.png",
    head: "tire3",
    discreption: "Compared to conventional tires, Mercedes Original tires are designed for low rolling resistance"
},
{
    img: "imagess/t4.png",
    head: "tire4",
    discreption: "Compared to conventional tires, Mercedes Original tires are designed for low rolling resistance"
},
{
    img: "imagess/t6.png",
    head: "tire5",
    discreption: "Compared to conventional tires, Mercedes Original tires are designed for low rolling resistance"
},
{
    img: "imagess/t5.png",
    head: "tire6",
    discreption: "Compared to conventional tires, Mercedes Original tires are designed for low rolling resistance"
},
]

var btnTires = document.getElementById("btnTires");

btnTires.addEventListener("click", function () {
    var contentTires = "";

    for (var i = 0; i < tires.length; i++) {

        contentTires += ` <div class="col-md-4 my-5">
<div class="">
  <img src="${tires[i].img}" class="img-fluid" id="im1" alt="">
  <div class="caption ">
    <h2>${tires[i].head}</h2>
    <p>${tires[i].discreption}</p>
  </div>
</div>
</div>`
    }
    document.getElementById("taab").innerHTML = contentTires;
})



var branch = [{
    head: "Cairo branch",
    tel: " Tel: 0124525",
    discreption: "Branch Manager : moahamed ahmed"
},
{
    head: "Alex branch",
    tel: "Tel: 0124525",
    discreption: "Branch Manager : moahamed ali"
},
{
    head: "October branch",
    tel: "Tel: 0124525",
    discreption: "Branch Manager : mazen mohamed"
},

]

var btnBranch = document.getElementById("btnBranch");

btnBranch.addEventListener("click", function () {
    var contentBranch = "";

    for (var i = 0; i < branch.length; i++) {

        contentBranch += ` <div class="col-md-4 my-5">
<div class="">
  <div class="caption ">
    <h2>${branch[i].head}</h2><br>
    <h3>${branch[i].tel}</h3>
    <p>${branch[i].discreption}</p>
  </div>
</div>
</div>`
    }
    document.getElementById("taab").innerHTML = contentBranch;
})

//==========================================================




var uname = document.getElementById("uname");
var unamerg = /^[a-zA-Z]{5,}$/;
var spanun = document.getElementById("sp1");


var pass= document.getElementById("pas");
var passreg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
var spanpa = document.getElementById("sp2");



var mail = document.getElementById("mail");
var mailreg = /^[a-z0-9]{5,}@[a-z]{4,}.com$/;
var spanma = document.getElementById("sp3");


uname.addEventListener('input', function () {
    if (unamerg.test(uname.value)) {
        uname.style.border = `solid 2px green`;
        spanun.style.display = "none";

    } else {

        uname.style.border = `solid 2px red`
        spanun.style.display = "block";

    }
})


pass.addEventListener('input', function () {
    if (passreg.test(pass.value)) {
        pass.style.border = `solid 2px green`;
        spanpa.style.display = "none";

    } else {

        pass.style.border = `solid 2px red`
        spanpa.style.display = "block";

    }
})


mail.addEventListener('input', function () {

    if (mailreg.test(mail.value)) {

        mail.style.border = `solid 2px green`;
        spanma.style.display = "none";
    }
    else {
        mail.style.border = `solid 2px red`;
        spanma.style.display = "block";

    }
})



//==============================================================




function topFunction() {
    document.body.scrollTop = 0;
}



















