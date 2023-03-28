window.onload = function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init('y2KskKdDcisGmFjzf');
    console.log("Init Run successful")
};

var basicOption = document.getElementById('basicOption');
var proOption = document.getElementById('proOption');
var orderForm = document.getElementById('orderForm');

function displayBasicPrice() {

    var numPairs = document.getElementById('numPairs').value;
    if (numPairs === "") {
        window.alert("Error! Number of Pairs is empty!");
        console.log("Clicked");
        return;
    }
    document.getElementById('total').innerHTML = "R " + (60 * numPairs) + ".00  (" + numPairs + " pairs)";
    document.getElementById('order_type').innerHTML = "BASIC";
    document.getElementById('order_price').innerHTML = "R 60.00";

};

function displayProPrice() {

    var numPairs = document.getElementById('numPairs').value;
    if (numPairs === "") {
        alert("Error! Number of Pairs is empty!");
        return;
    }
    document.getElementById('total').innerText = "R " + (80 * numPairs) + ".00  (" + numPairs + " pairs)";
    document.getElementById('order_type').innerText = "PRO";
    document.getElementById('order_price').innerHTML = "R 80.00";
};


function submitForm(event) {
    const email_ID = document.getElementById('email_ID');
        const hidden_order_type = document.getElementById('hidden_order_type');
        const hidden_order_price = document.getElementById('hidden_order_price');
        const hidden_order_total = document.getElementById('hidden_order_total');

        event.preventDefault();
        // generate a five digit ID for the email variable
        this.email_ID.value = Math.random() * 100000 | 0;

        this.hidden_order_type.value = document.getElementById('order_type').innerHTML;
        this.hidden_order_price.value = document.getElementById('order_price').innerHTML;
        this.hidden_order_total.value = document.getElementById('total').innerHTML;

        // these IDs from the previous steps
        emailjs.sendForm('order_service', 'orderForm', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Email has been successfully sent with ID: ' + email_ID.value);
                window.location.reload(true);
            }, function(error) {
                console.log('FAILED...', error);
                window.alert('Service FAILED...', error);
                window.location.reload(true);
            });
}
        
orderForm.addEventListener("submit", submitForm);
basicOption.addEventListener("click", displayBasicPrice);
proOption.addEventListener("click", displayProPrice);

