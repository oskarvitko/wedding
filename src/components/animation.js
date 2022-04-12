import MainIntersectionObserver from "./MainIntersectionObserver"

const applyAnimation = (node, animations) => {
    node.classList.add('animate__animated')
    animations.forEach(animation => {
        node.classList.add(animation)
    })
}

const useObserver = (node, callback) => {
    const observer = new MainIntersectionObserver(node, (entry) => {
        if (entry.isIntersecting) {
            callback()
            observer.disconnect()
        }
    }, .3)
    observer.observe()
}

export default () => document.addEventListener('DOMContentLoaded', () => {
    const animatedNodes = {
        mainTitle: document.querySelector('h1'),
        mainSubTitle: document.querySelector('h2'),
        header: document.getElementById('header'),
        time: document.getElementById('time-count'),
        timeTitle: document.getElementById('time-title'),
    }

    const blocks = {
        main: document.getElementById('section-main'),
        time: document.getElementById('section-time')
    }

    Object.keys(animatedNodes).forEach(key => animatedNodes[key].classList.add('hide'))

    applyAnimation(animatedNodes.header, ['animate__fadeInDown'])

    useObserver(blocks.main, () => {
        applyAnimation(animatedNodes.mainTitle, ['animate__fadeInDown'])
        applyAnimation(animatedNodes.mainSubTitle, ['animate__fadeInUp'])
    })
    useObserver(animatedNodes.timeTitle, () => {
        applyAnimation(animatedNodes.timeTitle, ['animate__fadeInUp'])
    })
    useObserver(animatedNodes.time, () => {
        applyAnimation(animatedNodes.time, ['animate__fadeInUp'])
    })
})