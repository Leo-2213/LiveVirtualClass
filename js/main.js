function fun1()
{
    if(form1.name.value=="")
    {
        alert("Name is required");
        return false;
    }
    else if(form1.designation.value=="")
    {
        alert("Designation is required");
        return false;
    }
    else if(form1.email.value=="")
    {
        alert("email is required");
        return false;
    }
    else{
        return true;
    }

}

function fun2()
{
    var maths= eval(form2.Maths.value);
    var science= eval(form2.Science.value);
    var computer= eval(form2.Computer.value);

    form2.total.value=maths+science+computer;  
    form2.percMarks.value=Math.round((maths+science+computer)/3);  
    form2.maxMarks.value=Math.max(maths,science,computer);
}

function onloadInstruction()
{
    window.open("instruction.html", "onloadwindow", "height=100px, width=200px");

}

function getInstruction()
{
    var id=document.getElementById("courseDetails").value;
    if(id=="mevn")
    window.open("mevn.html", "onloadwindow", "height=100px, width=200px");
    else if(id=="mern")
    window.open("mern.html", "onloadwindow", "height=100px, width=200px");
    else if(id=="mean")
    window.open("mean.html", "onloadwindow", "height=100px, width=200px");
}

function checkSubscription()
{
    prompt("your name");
    var countryName=prompt("Enter your country name");

    if(countryName=="India")
    {
        alert("Congo.....!! you got 50% off");
    }
}


function calculateScore()
{
    var score=0;
    for(var i=1;i<=2;i++)
    {
        var ques=document.getElementsByName('a'+i);
        for(var j=0;j<=2;j++)
        {
            var options=ques[j];
            if(options.value=="correct" && options.checked)
            score+=2;
        }
    }
    alert("your Score for the test is " + score);
}