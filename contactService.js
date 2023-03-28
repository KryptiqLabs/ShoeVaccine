function submitForm(event) {
    const ticket_ID = document.getElementById('ticket_ID');
        // const hidden_order_type = document.getElementById('hidden_order_type');
        // const hidden_order_price = document.getElementById('hidden_order_price');
        // const hidden_order_total = document.getElementById('hidden_order_total');

        event.preventDefault();
        // generate a five digit ID for the ticket variable
        this.ticket_ID.value = Math.random() * 100000 | 0;

        // this.hidden_order_type.value = document.getElementById('order_type').innerHTML;
        // this.hidden_order_price.value = document.getElementById('order_price').innerHTML;
        // this.hidden_order_total.value = document.getElementById('total').innerHTML;

        // these IDs from the previous steps
        emailjs.sendForm('contact_service', 'contactForm', this)
            .then(function() {
                console.log('SUCCESS!');
                alert('Your Enquiry has been successfully submitted.\nA new Ticket was issued with ticket_ID: ' + ticket_ID.value);
                window.location.reload(true);
            }, function(error) {
                console.log('FAILED...', error);
                window.alert('Service FAILED...\nPlease contact the Site Admin', error);
                window.location.reload(true);
            });
}
        
orderForm.addEventListener("submit", submitForm);