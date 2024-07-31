// 1.
function alertonClick(){
    alert("Welcome")
}
// 2,
function mobile1() {
    alert('Thank You For Purchasing Vivo V30 5G!');
};
function mobile2() {
    alert('Thank You For Purchasing Vivo V30 5G!');
};
function mobile3() {
    alert('Thank You For Purchasing Vivo V30 5G!');
};

// 3.

function deleteRow(button) {
    // Get the row containing the button
    var row = button.parentNode.parentNode;
    // Delete the row
    row.parentNode.removeChild(row);
}





// 4.

function zoomIn(e) {
    e.src = 'images/icegif-5598.gif';
};
function zoomOut(e) {
    e.src = 'images/hands-protecting-globe-green-tree-tropical-nature-summer-background-ecology-environment-concept-ai-generative-271656882.webp';
};






// 5.

var count = 0;
function increase() {
    count++;
    document.getElementById('counter').innerText = count;
};
function decrease() {
    count--;
    document.getElementById('counter').innerText = count;
};