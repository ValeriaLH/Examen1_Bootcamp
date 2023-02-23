function removeAlert() {
    var alert_element = document.querySelector('.alert');
    alert_element.remove();
}

function displayAlert(carrito) {
    console.log(carrito);
    alert("Your Cart is empty!");
}

function mouseOver() {
    var my_image = document.querySelector('.imagen-1');
    my_image.src = "images/assets/succulents-2.jpg"
}

function mouseOut() {
    var my_image = document.querySelector('.imagen-1');
    my_image.src = "images/assets/succulents-1.jpg"
}

