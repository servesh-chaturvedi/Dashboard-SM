const darkBtn = document.getElementById('dark')
const lightBtn = document.getElementById('light')

const colorModeFromLocalStorage = () => {
    return localStorage.getItem('colorMode')
}

const colorModeFromPreferences = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? 'dark' : 'light' //  default:light
};

const setDarkMode = () => {
    document.querySelector('body').classList = 'dark'
    localStorage.setItem('colorMode', 'dark')
}

const setLightMode = () => {
    document.querySelector('body').classList = 'light'
    localStorage.setItem('colorMode', 'light')
};

const radioButtons = document.querySelectorAll('.toggle__wrapper input')
radioButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        darkBtn.checked ? setDarkMode() : setLightMode()
    })
})

window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', (e) => {
        e.matches ? darkButton.click() : lightButton.click();
    })


const loadAndUpdateColor = () => {
    // local storage has precendence over the prefers-color-scheme
    const color = colorModeFromLocalStorage() || colorModeFromPreferences()
    color === 'dark' ? darkBtn.click() : lightBtn.click()
}

loadAndUpdateColor()
