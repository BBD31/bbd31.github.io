function copyScript() {
    let scriptInput = document.getElementById("script");
    scriptInput.select();
    document.execCommand("copy");
    alert("Copied");
}