function result (){

    let tableNum = document.getElementById("tableNum").value
    let rangs = document.getElementById("rangs").value
    let empty = ""

    for(i = 1; i <= rangs; i++){
        empty  += tableNum + " x " + i + " = " + tableNum * i + "<br>" + "<hr>"
        document.getElementById("displayData").innerHTML = empty
    }
}

function reload (){
    window.location.reload()
};