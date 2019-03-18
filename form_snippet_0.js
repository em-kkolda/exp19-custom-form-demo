
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

