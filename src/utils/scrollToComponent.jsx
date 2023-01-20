export const scrollToComponent = (id) => {
    const element = document.getElementById(id)
    if(element) {
        element.scrollIntoView({behavior: 'smooth'})
    }
}