//DISPLAY TEXT BOX AFTER OTHER IS SELECTED IN DROPDOWN
function checkvalue(val) {
    if (val === "other")
        document.getElementById('addressType').style.display = 'block';
    else
        document.getElementById('addressType').style.display = 'none';
}

