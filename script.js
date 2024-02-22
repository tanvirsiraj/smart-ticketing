function allSeatArea(event) {
  //   console.log(event.target.id);
  if (event.target.tagName === "BUTTON") {
    event.target.classList.add(
      "bg-[#1DD100]",
      "rounded-lg",
      "py-2",
      "text-white"
    );

    // const selectedSeat = document.getElementById(event.target.id);

    const seatLeftElement = document.getElementById("seat-left");
    const currentSeat = seatLeftElement.innerText;
    console.log(currentSeat);
    const updatedSeat = parseInt(currentSeat) - 1;
    seatLeftElement.innerText = updatedSeat;

    const totalTicketElement = document.getElementById("totalTicket");
    const totalTicket = parseInt(totalTicketElement.innerText) + 1;
    totalTicketElement.innerText = totalTicket;

    const ticketDetails = document.getElementById("ticketDetails");

    ticketDetails.classList.add("border-b-2");

    const newTicketDiv = document.createElement("div");
    newTicketDiv.classList.add(
      "flex",
      "justify-between",
      "items-center",
      "my-2"
    );
    newTicketDiv.innerHTML = `
 
        <h3>${event.target.id}</h3>
        <h3 class="text-right">Economy</h3>
        <h3>$550</h3>
   
    `;

    // Append the new div to the ticketDetails container
    ticketDetails.appendChild(newTicketDiv);

    const totalPriceField = (document.getElementById("totalPrice").innerText =
      totalTicket * 550);

    if (totalTicket === 4) {
      document.getElementById("apply").removeAttribute("disabled");
      document.getElementById("apply").addEventListener("click", () => {
        const couponText = document.getElementById("coupon").value;
        const totalPrice = parseFloat(
          document.getElementById("totalPrice").innerText
        );
        console.log(totalPrice);
        if (couponText === "NEW15") {
          const discountPrice = totalPrice - parseFloat(totalPrice * 0.15);
          console.log(discountPrice);
          document.getElementById("grandTotal").innerText =
            parseFloat(discountPrice);
        } else if (couponText === "Couple 20") {
          const discountPrice = totalPrice - parseFloat(totalPrice * 0.2);
          console.log(discountPrice);
          document.getElementById("grandTotal").innerText =
            parseFloat(discountPrice);
        }
      });
    }

    const numberField = document.getElementById("number").value;
    console.log(numberField);
    if (
      parseInt(document.getElementById("totalTicket").innerText) > 0 &&
      numberField !== ""
    ) {
      document.getElementById("next").removeAttribute("disabled");
    }
  }
}

document.getElementById("number").addEventListener("blur", () => {
  const numberField = document.getElementById("number").value;
  console.log(numberField);
  if (
    parseInt(document.getElementById("totalTicket").innerText) > 0 &&
    numberField !== ""
  ) {
    document.getElementById("next").removeAttribute("disabled");
  }
});
