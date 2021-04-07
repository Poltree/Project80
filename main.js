function getParagraph1(){
    var inputs=[];
    for( var i = 1; i<=6 ; i++){
        inputs.push(document.getElementById("input_box_" + i).value);
    }
    inputs.join(". ")
        document.getElementById("Paragraph").innerHTML = inputs.join(". ")

}
function getParagraph2(){
     var input=[];
    for( var i=7; i<=12 ; i++){
        input.push(document.getElementById("input_box_" + i).value);
    }
    input.join(". ")
        document.getElementById("Paragraph2").innerHTML = input.join(". ")
}
