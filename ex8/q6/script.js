function calcTotal(){
    let adultPrice = 10;
    let childrenPrice = 5;

    let adultTickets = document.getElementById("adults").value || 0;
    let childTickets = document.getElementById("children").value || 0;
    
    let totalPrice = adultPrice*adultTickets + childrenPrice*childTickets;

    let totalField = document.getElementById("total");
    totalField.value = totalPrice;
}