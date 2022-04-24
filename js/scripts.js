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

// function replaceSpecialNumbers(arr){
//   var a = arr.toString().split(",");
//   //alert(a.length);
//   let newArray = [];
//   for (let i=0; i<=a.length-1; i+=1){
//     if(a[i].includes("3")||(a[i].includes("32"))){
//       newArray.push("Won't you be my neighbor!");
//     } else{
//       newArray.push(a[i]);
//     }
//   }
//   let modifyedArray = [];
//   for (let i=0; i<=newArray.length-1; i+=1){
//     if(newArray[i].includes("2")){
//       modifyedArray.push("Boo!");
//     } else{
//       modifyedArray.push(newArray[i]);
//     }
//   }
//   let arrayWithoutThree = [];
//   for (let i=0; i<=modifyedArray.length-1; i+=1){
//     if(modifyedArray[i].includes("1")){
//       arrayWithoutThree.push("Beep!");
//     } else{
//       arrayWithoutThree.push(modifyedArray[i]);
//     }
//   }

//   return arrayWithoutThree;

// }
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