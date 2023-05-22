// Change document background color to
// silver
document.getElementById('document').style.background= 'Silver'

// Change the font case for h3 title tags to
// uppercase
let heading = document.getElementsByTagName("h3");
for (let i = 0; i < heading.length; i++) {
  heading[i].style.textTransform = "uppercase";
}

// / Change the font color for h1 title tag to
// green

document.getElementById('title').style.color = 'green'

// Add one more fruit to the fruits list

let fruit= document.createElement('li');
fruit.innerHTML =' Apples'
document.getElementById('fruList').appendChild(fruit)

// Add one more vegetable to the vegetables
// list

let vegetable= document.createElement('li');
vegetable.innerHTML ='Cabbage'
document.getElementById('vegList').appendChild(vegetable)