function resize() {
    const width = window.innerWidth;
    const project = document.getElementById('project');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');
    if (width <= 400) {
        project.style.fontSize = "10px";
        contact.style.fontSize = "10px";
        about.style.fontSize = "10px";
    } 
    else if (width > 400) {
        project.style.fontSize = "22px";
        contact.style.fontSize = "22px";
        about.style.fontSize = "22px";
        
    }
}
window.onresize = resize();