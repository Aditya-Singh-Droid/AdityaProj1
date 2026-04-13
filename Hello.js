function clickme() {
    var heading = document.getElementById('mainHeading');
    if (heading.style.display === 'none') {
        heading.style.display = 'block';
    } else {
        heading.style.display = 'none';
    }
}