import MainIntersectionObserver from "./MainIntersectionObserver"

export default () => document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header__nav-link')
    Array.prototype.forEach.call(links, link => {
        const a = link.querySelector('a')
        const target = document.querySelector(a.getAttribute('href'))
        if (!target) return

        const observer = new MainIntersectionObserver(target, (entry) => {
            if (entry.isIntersecting) {
                const prevLinks = document.querySelectorAll('.header__nav-link.active')
                Array.prototype.forEach.call(prevLinks, link => {
                    link.classList.remove('active')
                })
                link.classList.add('active')
            }
        }, .85)
        observer.observe()
    })
})