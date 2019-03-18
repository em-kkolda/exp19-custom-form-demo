async function btnCopy_click(ctrl) {
    // Get the Loan object
    let loan = await elli.script.getObject("loan");

    // Copy the borrower loan fields to the
    // co-borrower fields
    loan.setFields({
        "1268": await loan.getField("1240"),   // Email
        "98": await loan.getField("66")        // Phone #
    });

    console.log("Data copied successfully");
}

