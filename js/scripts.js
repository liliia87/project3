function createAnArray(number){
  const ArrayLength = number;
  const A = [];
  let k=0;

  for (let i=0; i<=ArrayLength; i+=1){
    A[i] = k;
    k++;
  }

  return A;
}

function replaceSpecialNumbers(arr){
  var a = arr.toString().split(",");
  //alert(a.length);
  let newArray = [];
  for (let i=0; i<=a.length-1; i+=1){
    if(a[i].includes("3")){
      newArray.push("Won't you be my neighbor!");
    } 
    else if(a[i].includes("2")){
      newArray.push("Boo!");
    } 
    else if(a[i].includes("1")){
      newArray.push("Beep!");
    } 
    else if((a[i].includes("3")=== false)&&(a[i].includes("2") === false) && (a[i].includes("1") === false)) {
      newArray.push(a[i]);
    }
  }

  return newArray;

}


$(document).ready(function(){
  $("form#form1").submit(function(event){
    event.preventDefault();
    $("#hidden").show();
    $("#page-1").html("");
    const number = $("#sentence1").val();
    const NewArray = createAnArray(number);

    $("#page-1").html("input: "+ number +"<br>"+"output: "+ replaceSpecialNumbers(NewArray));
    //$("#page-1").html("output: "+ replaceSpecialNumbers(NewArray));
  });
});