
var fha_win = null;

// Subscribe to the window's message event
window.addEventListener("message", onMessageReceived);

async function onMessageReceived(msg) {
    if (msg.data && msg.data.fhaCaseNumber) {
        let loan = await elli.script.getObject("loan");
        loan.setFields({
            "1040": msg.data.fhaCaseNumber
        });
        fha_win.close();
    }
}

// Function to get FHA case number
function showFHACaseNumberDialog() {
    fha_win = window.open("https://localhost/dev/exp19-form-demo/fha_dialog.html", 
        "fha_dialog", "");
}