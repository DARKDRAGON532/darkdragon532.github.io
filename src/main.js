const winbox = require('winbox')

const about = document.querySelector("#about")
const projects = document.querySelector("#projects")
const about_content = document.querySelector("#about-content")
const projects_content = document.querySelector("#projects-content")

about.addEventListener('click', () => {
    const about_box = new WinBox({
        title: "About Me UwU",
        width: "400px",
        height: "400px",
        top: 50,
        right: 50,
        left: 50,
        bottom: 50,
        mount: about_content,
        onfocus: function() {
            this.setBackground("#00aa00")
        },
        onblur: function() {
            this.setBackground("#777")
        }
    })
})

projects.addEventListener('click', () => {
    const contact_box = new WinBox({
        title: "My Projects OwO",
        width: "400px",
        height: "400px",
        top: 150,
        right: 50,
        left: 250,
        bottom: 50,
        mount: projects_content,
        onfocus: function() {
            this.setBackground("#00aa00")
        },
        onblur: function() {
            this.setBackground("#777")
        }
    })
})