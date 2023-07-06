function count(object) {
    length = object.value.length;
    max = object.maxLength; 
    document.getElementById("counter").innerHTML = max - length + " / 500";
}