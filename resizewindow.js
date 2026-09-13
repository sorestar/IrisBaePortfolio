function resize() {
    const width = window.innerWidth;
    const project = document.getElementById('project');
    const about = document.getElementById('about');
    const contact = document.getElementById('contact');
    if (width <= 400) {
        project.style.fontSize = "15px";
        contact.style.fontSize = "15px";
        about.style.fontSize = "15px";
    } 
    else if (width > 400) {
        project.style.fontSize = "22px";
        contact.style.fontSize = "22px";
        about.style.fontSize = "22px";
        
    }
}
window.onresize = resize();