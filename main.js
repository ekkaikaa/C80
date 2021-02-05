function getpara1() {
    var inputs=[] 
}

    for(var i = 1; i<= 6; i++)
    {
        inputs.push(document.getElementById("p1input_box_" + i ).value);
    }

    document.getElementById("showp1").innerHTML = inputs.join(". ")

    function getpara2() {
        var inputs2=[] 
    }
    
        for(var j = 1; j<= 6; j++)
        {
            inputs.push(document.getElementById("p1input_box_" + j ).value);
        }
    
        document.getElementById("showp2").innerHTML = inputs.join(". ")
