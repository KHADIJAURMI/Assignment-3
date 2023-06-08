
/*Problem no:1
Converting the kilometer to meter*/
function kilometerToMeter(num)
{
   if (num>0){
      var kiloToMeter=num*1000;
      return kiloToMeter;
   }
   else{
        return undefined;
   }

}
//user input
var result=kilometerToMeter(15);
console.log("The kilometer is converting to meter : ",result);

var result=kilometerToMeter(-4);
console.log("The kilometer is converting to meter : ",result);

/*Problem no:2
Calculting  the budget*/

function budgetCalculator(watch, mobile,laptop)
{
  if (watch>0 && mobile>0 && laptop>0){
   costOfWatch  = watch*50;
   costOfMobile = mobile*100;
   costOfLaptop = laptop*500;

   totalCost = costOfWatch+costOfMobile+costOfLaptop;
   return totalCost;
}
else{
  return undefined;
 }
}
//user input
var budget1=budgetCalculator(3,5,6);
console.log("The Total budget of smart device : ",budget1);

var budget2=budgetCalculator(10,20,30);
console.log("The Total budget of smart device : ",budget2);

var budget3=budgetCalculator(-10,-20,-30);
console.log("The Total budget of smart device : ",budget3);

/*Problem no:3
Calculting  the Hotel Cost*/
function hotelCost(days)
{
if(days>0){
  if(days<=10)
  {
      var cost=days*100;
      return cost;
  }
  else if(days<=20)
  {
      var firstCost=10*100;
      var remain=days-10;
      var remaniCost=remain*80;
      var cost=firstCost+remaniCost;
      return cost;
  }
  else if(days>20){
    var firstCost=10*100;
    var remain=days-10;
    var secondCost=20*80;
    var remain=days-20;
    var remaniCost=remain*50;
    var cost=firstCost+remaniCost+secondCost;
    return cost;
  }
}
  else{
    return undefined;
  } 
}
//user input
var costOfTourist1=hotelCost(-5);
console.log("The total Hotel cost of user1 : ",costOfTourist1);

var costOfTourist2=hotelCost(10);
console.log("The total Hotel cost of user2 : ",costOfTourist2);

var costOfTourist3=hotelCost(30);
console.log("The total Hotel cost of user3 : ",costOfTourist3);


function megaFriend(str)
{ 
    let long=str[0];
    console.log("Number of my Friend list : ",str.length);
   for(let i=1;i<str.length;i++){
        if(str[i].length>long.length)
        {
            long=str[i]; 
        }
   }
    return long;
}


let string_long=["Maisha","TANHA","RUMI","MARIA","URMI","MOUSUMI"];
console.log("The longest name in this list : ",megaFriend(string_long));

let string_long2=["Billal","Sultan","Masum","Tarek","Abdullah","Ibrahim","Sagor"];
console.log("The longest name in this list : ",megaFriend(string_long2));