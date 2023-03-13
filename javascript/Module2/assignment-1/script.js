function validation() {
    let id = document.getElementById('Id').value;
    console.log(id);
    if (id.length < 5) {
        document.getElementById('Id').innerHTML = "Id cannot be less than 5";
        document.getElementById('Id').style.color = red;
    }

    let cn = document.getElementById("no").value;

    if (cn < 1 && cn > 10) {
        document.getElementById('Id').innerHTML = "Contanct Number should be at least 10 numbers";
        document.getElementById('Id').style.color = red;
    }

}