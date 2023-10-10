
function validate() {
    let vote=document.getElementById("input").value
    let result=document.getElementById("priya")
    if(vote>18){
        result.innerHTML="PERSON IS ELIGIBLE FOR VOTE👍"
    }
    else{
        result.innerHTML="PERSON IS NOT ELIGIBLE FOR VOTE👎"
    }

}

