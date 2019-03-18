
async function onLoanTypeChange(ctrl) {
    // Get the value of the control
    let val = await ctrl.value();

    let vaBox = await elli.script.getObject("groupVA");
    vaBox.visible(val == "VA");

    let fhaBox = await elli.script.getObject("groupFHA");
    fhaBox.visible(val == "FHA");
}
