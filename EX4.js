// let div = document.createElement('div');
// let paragraph = document.createElement('p');
// let ol = document.createElement('ol');

let div = document.createElement("div");
div.id = "userinputs";

let paragraph = document.createElement("p");
paragraph.textContent = "this is a paragraph";

let ol = document.createElement("ol");

let li1 = document.createElement("li");
li1.textContent = "Gender: male";

let li2 = document.createElement("li");
li2.textContent = "Age: 21";

let li3 = document.createElement("li");
li3.textContent = "Order: coffee";

ol.appendChild(li1);
ol.appendChild(li2);
ol.appendChild(li3);

div.appendChild(paragraph);
div.appendChild(ol);

document.body.appendChild(div);
