const links = document.querySelectorAll('.button-more')
links.forEach((link) => {
    link.addEventListener('click', (event) => {
        event.preventDefault()
        const section = document.querySelector(link.getAttribute('href'))
        if (section) {
            seamless.scrollIntoView(section, {
                behavior: "smooth",
                block: "start",
                inline: "center",
            });
        }
    })
})
