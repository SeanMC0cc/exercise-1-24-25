
function verifyOrder(){
    var order = document.getElementById('inputChoice').value;

    switch (order) {
        case "C":
            document.getElementById('choiceResult').innerHTML = "You ordered a ryzen 5, Geforce 1050ti, 16GB RAM, 1TB SSD! 💻";
            break;
        case "M":
            document.getElementById('choiceResult').innerHTML = "You ordered an i7, RTX 3060, 32GB RAM, 1TB SSD! 💻";
            break;
        case "H":
            document.getElementById('choiceResult').innerHTML = "You ordered an i9, RTX 4090, 64GB RAM, 4TB SSD! 💻";
            break;
        case "1":
            document.getElementById('choiceResult').innerHTML = "You ordered an i9, RTX 5090, 128GB RAM, 16TB SSD! 💻";
            break;
        default:
            document.getElementById('choiceResult').innerHTML = "Your order in not available! Please try again!";
    }
}