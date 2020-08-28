async function showMore() {
    var li = document.createElement("li"); // Create a <li> node
    var t = document.createTextNode("more list item 1"); // Adds text to node
    li.appendChild(t);
    document.getElementById("list").appendChild(li);
    var li1 = document.createElement("li"); // Create a <li> node
    var t1 = document.createTextNode("more list item 2"); // Adds text to node
    li1.appendChild(t1);
    document.getElementById("list").appendChild(li1);
    var li2 = document.createElement("li"); // Create a <li> node
    var t2 = document.createTextNode("more list item 3"); // Adds text to node
    li2.appendChild(t2);
    document.getElementById("list").appendChild(li2);
    var li3 = document.createElement("li"); // Create a <li> node
    var t3 = document.createTextNode("more list item 4"); // Adds text to node
    li3.appendChild(t3);
    document.getElementById("list").appendChild(li3);
    var li4 = document.createElement("li"); // Create a <li> node
    var t4 = document.createTextNode("more list item 5"); // Adds text to node
    li4.appendChild(t4);
    document.getElementById("list").appendChild(li4);
}