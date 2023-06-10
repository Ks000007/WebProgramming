function myFunction() {
    let input = document.querySelector("#nameinput");
    result = input.value;
    if (result == 'abc') {
        alert("sucess");
    } else {
        alert("failed");
    }
    console.log(result);
}