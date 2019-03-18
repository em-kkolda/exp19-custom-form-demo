
async function btnCopy_click(ctrl) {
    // Copy values from the borrower to co-borrower controls
    let borEmail = await elli.script.getObject("txtBorrEmail");
    let cobEmail = await elli.script.getObject("txtCobEmail");
    cobEmail.value(borEmail.value());

    let borPhone = await elli.script.getObject("txtBorrPhone");
    let cobPhone = await elli.script.getObject("txtCobPhone");
    cobPhone.value(borPhone.value());
}

