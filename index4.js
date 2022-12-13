
 let heightInput = document.querySelector("#height");
 let weightInput = document.querySelector("#weight");
 let calculateButton = document.querySelector("#calculate");
 let  result = document.querySelector("#result");
 let statement = document.querySelector("#result-statement");
 let BMI, height, weight;
 
 calculateButton.addEventListener("click", ()=>{
 
     height = heightInput.value;
     weight = weightInput.value;
     BMI = weight/(height**2); 
     result.innerText = BMI;
 
 
     if(BMI < 18.5){
         statement.innerText = "ان وزنك أقل من الوزن الطبيعي حاول انك ترفعه اكثر";    
     }else if((BMI > 18.5) && (BMI < 24.9)){
         statement.innerText = "احسنت وزنك مثالي حاول ان توازن حياتك لتبقى في صحة";
     }else if((BMI > 25) && (BMI < 29.9 )){
         statement.innerText = " انت من اصحاب الوزن الزائد";
     }else{
         statement.innerText = " انك تعاني من السمنه الزائدة , انت حقا تحتاج الى مساعدة نفسك وانت تستطيع في فعلها";
     }
 });