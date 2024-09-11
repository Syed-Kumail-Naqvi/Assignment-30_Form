var fullName = document. getElementById("fullName");
var fatherName = document. getElementById("fatherName");
var rollNumber = document. getElementById("rollNumber");
var email = document. getElementById("email");
var phoneNo = document. getElementById("phoneNo");
var doBirth = document. getElementById("doBirth");
var result = document. getElementById("output");
var submit = document. getElementById("submit");

function submitValue (){

    output.innerHTML =  fullName.value;
    output2.innerHTML = fatherName.value; 
    output3.innerHTML = rollNumber.value;
    output4.innerHTML = email.value;
    output5.innerHTML = phoneNo.value;
    output6.innerHTML = doBirth.value;   
}

submit.addEventListener('click', submitValue);