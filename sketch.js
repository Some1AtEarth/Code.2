var weight = [200, 134, 64, 343, 35, 67]
sum = 0
function average()
{ 
  for (let i = 0; i < weight.length; i++) {
    sum = sum + weight[i]
    console.log(sum)
  }
  average = sum/weight.length
  console.log(average)
}
function setup() 
{
  createCanvas(400,400);
  average();
}

function draw() 
{
background(51);

}

