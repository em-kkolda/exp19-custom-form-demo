
async function onFormLoad() {
    let ctrl = await elli.script.getObject("drpLoanType")
    onLoanTypeChange(ctrl);
}