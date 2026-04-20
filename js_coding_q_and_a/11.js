var num1="123"
var num2="899"

var final =""
var carry=0

var maxLen=Math.max(num1.length,num2.length)

while(maxLen !== 0){
  var n1=num1 % 10
  var n2=num2 % 10
  
  var c=0
  var sum=parseInt(n1) + parseInt(n2)
  sum=sum.toString()
  if(sum.length > 1){
    c=sum[0]
    sum = sum[sum.length-1]
  }else{
    c=0
  }
  var res= parseInt(sum) + parseInt(carry);
  var final = res.toString() + final

  carry= c
  
  num1 = num1.slice(0,num1.length-1)
  num2 = num2.slice(0,num2.length-1)
  
  maxLen =maxLen -1
}


console.log(final)


