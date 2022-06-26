function error() {
    first();
    second();
    email();
    password();
}


function first() {

    var first = document.getElementById("one").value;

    var regexp = /^[a-zA-Z ]{2,30}$/;


    if(regexp.test(first))
    {
        document.getElementById("img1").style.display = "none";
        document.getElementById("firsterror").style.display = "none";
    }
    else 
    {
        document.getElementById("img1").style.display = "block";
        document.getElementById("firsterror").style.display = "block";
    }
}

function second() {

    var second = document.getElementById("two").value;

    var regexp = /^[a-zA-Z ]{2,30}$/;


    if(regexp.test(second))
    {
        document.getElementById("img2").style.display = "none";
        document.getElementById("seconderror").style.display = "none";
    }
    else 
    {
        document.getElementById("img2").style.display = "block";
        document.getElementById("seconderror").style.display = "block";
    }
}

function email() {

    var email = document.getElementById("three").value;

    var regexp = /^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/;

    if(regexp.test(email))
    {
        document.getElementById("img3").style.display = "none";
        document.getElementById("mailerror").style.display = "none";
    }
    else 
    {
        document.getElementById("img3").style.display = "block";
        document.getElementById("mailerror").style.display = "block";
    }
}

function password() {

    var password = document.getElementById("four").value;

    var regexp = /^[a-zA-Z ]{2,30}$/;

    if(regexp.test(password))
    {
        document.getElementById("img4").style.display = "none";
        document.getElementById("passworderror").style.display = "none";
    }
    else 
    {
        document.getElementById("img4").style.display = "block";
        document.getElementById("passworderror").style.display = "block";
    }
}



// document.getElementById("img1").style.display = "none";
//         document.getElementById("img2").style.display = "none";
//         document.getElementById("img3").style.display = "none";
//         document.getElementById("img3").style.display = "none";
//         document.getElementById("firsterror").style.display = "none";
//         document.getElementById("seconderror").style.display = "none";
//         document.getElementById("mailerror").style.display = "none";
//         document.getElementById("passworderror").style.display = "none";
//         document.getElementById("maileg").style.display = "none";

// document.getElementById("img1").style.display = "block";
// document.getElementById("img2").style.display = "block";
// document.getElementById("img3").style.display = "block";
// document.getElementById("img4").style.display = "block";
// document.getElementById("firsterror").style.display = "block";
// document.getElementById("seconderror").style.display = "block";
// document.getElementById("mailerror").style.display = "block";
// document.getElementById("passworderror").style.display = "block";
// document.getElementById("maileg").style.display = "block";


///^([a-z 0-9\.-]+)@([a-z0-9-]+).([a-z]{2,8})(.[a-z]{2,8})$/ /^([a-z A-Z])$/

// document.getElementById("rgt").style.margin = "0 0 0 0"
// document.getElementById("rgt").style.margin = "-50px 0 0 0"