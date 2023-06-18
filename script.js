// let T_Time=5;
// let P_Time=4;
// let C_Time=10;
let T_Money = 1500;
let P_Money = 1000;
let C_Money = 3000;
let T_Earn;
let P_Earn;
let C_Earn;
let T_Count = 0;
let P_Count = 0;
let C_Count = 0;
let sum = 0;

function MaxProfit(input1) {
  console.log("MaxProfit", input1);

  if (input1 > 5) {
    T_Earn = (input1 - 5) * 1500;
  } else {
    T_Earn = 0;
  }

  if (input1 > 4) {
    P_Earn = (input1 - 4) * 1000;
  } else {
    P_Earn = 0;
  }

  if (input1 > 10) {
    C_Earn = (input1 - 10) * 3000;
  } else {
    C_Earn = 0;
  }

  console.log(T_Earn, P_Earn, C_Earn);

  let max = Math.max(T_Earn, P_Earn, C_Earn);
  console.log(max);
  sum = sum + max;
  if (max !== 0) {
    if (max === T_Earn) {
      input1 = input1 - 5;
      T_Count++;
    } else if (max === P_Earn) {
      input1 = input1 - 4;
      P_Count++;
    } else {
      input1 = input1 - 10;
      C_Count++;
    }
  }

  console.log(input1);
  console.log(`T:${T_Count}`, `P:${P_Count}`, `C:${C_Count}`);
  return input1;
}

function InputValue() {
  let input = document.getElementById("inputTime").value;
  sum=0;
  T_Count=0;
  P_Count=0;
  C_Count=0;

  console.log("inputValue", input);
  //MaxProfit(input)
  count_while = 0;
  while (input > 4) {
    input = MaxProfit(input);
  }
  let earning = (document.getElementById("sum").innerHTML = `$${sum}`);
  let solution = (document.getElementById(
    "solution"
  ).innerHTML = `T:${T_Count},P:${P_Count},C:${C_Count}`);
  console.log(sum);
}
InputValue();
