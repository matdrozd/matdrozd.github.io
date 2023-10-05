function calculateROI() {
    var invoiceCount = document.getElementById("invoiceCount").value;
    var costCount = document.getElementById("costCount").value;
    var employeeCount = document.getElementById("employeeCount").value;
    var businessType = document.getElementById("businessType").value;

    var avgMinutesSavedPerInvoice = 10;
    var avgMinutesSavedPerCost = 5;
    var avgMinutesSavedPerEmployee = 60;

    var priceDict = { "B2B": 299, "B2C": 49 };
    var price = priceDict[businessType];

    // Now calculate the total time saved
    var savedTimeInvoices = invoiceCount * avgMinutesSavedPerInvoice / 60;
    var savedTimeCosts = costCount * avgMinutesSavedPerCost / 60;
    var savedTimeEmployees = employeeCount * avgMinutesSavedPerEmployee / 60;
    var totalMinutesSaved = savedTimeInvoices + savedTimeCosts + savedTimeEmployees / 60;

    // Now calculate the total time saved
    var totalMinutesSaved = (invoiceCount * avgMinutesSavedPerInvoice) + (costCount * avgMinutesSavedPerCost) + (employeeCount * avgMinutesSavedPerEmployee);

    // Now we need to calculate the cost saved. Let's assume the average cost per minute of an employee's time is €0.20
    var labourCost = 0.4
    var costSaved = totalMinutesSaved * labourCost;

    // Set the color based on whether ROI is negative or positive.
    
    // Now calculate ROI
    var roi = ((costSaved - price) / price) * 100;
    var color = roi < 0 ? 'red' : 'green';
    console.log(roi)
    console.log(color)

    document.getElementById("costOfSoftware").innerHTML = `The cost of the software is: <b>${price} Euro</b>`;
    document.getElementById("savedTimeInvoices").innerHTML = `The time saved from invoices is: <b>${savedTimeInvoices.toFixed(2)} h</b>`;
    document.getElementById("savedTimeCosts").innerHTML = `The time saved from cost counts is: <b>${savedTimeCosts.toFixed(2)} h</b>`;
    document.getElementById("labourCost").innerHTML = `ROI calculater using labour cost of: <b>${labourCost*60} Euro per hour</b>`;
    document.getElementById("savedTimeEmployees").innerHTML = `The time saved per employee is: <b>${savedTimeEmployees.toFixed(2)} h</b>`;

    var roiElement = document.getElementById("result");
    roiElement.innerHTML = `The ROI is: ${roi.toFixed(2)}%`;
    roiElement.style.color = color; // Set the color here.
} 