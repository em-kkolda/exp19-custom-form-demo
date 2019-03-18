function btnCopy_click(ctrl) {
  // Retrieve references to all of the control elements
  elli.script.getObject("txtBorrEmail").then(borEmail => {
      elli.script.getObject("txtCobEmail").then(cobEmail => {
          borEmail.value().then(val => {
              cobEmail.value(val);
          })
      });
  });

  elli.script.getObject("txtBorrPhone").then(borPhone => {
      elli.script.getObject("txtCobPhone").then(cobPhone => {
          borPhone.value().then(val => {
              cobPhone.value(val);
          })
      });
  });   
}

async function btnCopy_click_async(ctrl) {
  // Copy values from the borrower to co-borrower controls
  let borEmail = await elli.script.getObject("txtBorrEmail");
  let cobEmail = await elli.script.getObject("txtCobEmail");
  cobEmail.value(borEmail.value());

  let borPhone = await elli.script.getObject("txtBorrPhone");
  let cobPhone = await elli.script.getObject("txtCobPhone");
  cobPhone.value(borPhone.value());
}

async function copyBorrToCob(ctrl) {
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

async function onLoanTypeChange(ctrl) {
  // Get the value of the control
  let val = await ctrl.value();

  let vaBox = await elli.script.getObject("groupVA");
  vaBox.visible(val == "VA");

  let fhaBox = await elli.script.getObject("groupFHA");
  fhaBox.visible(val == "FHA");
}

async function onFormLoad() {
  let ctrl = await elli.script.getObject("drpLoanType")
  onLoanTypeChange(ctrl);
}

