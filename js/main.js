const map = document.querySelector('.map')
const mapStates = map.querySelectorAll('.link[data-state]')
const mapStateNames = map.querySelectorAll('path[fill-opacity="0.8"]')
const linkCircles = document.querySelectorAll('.link--circle')
const boxName = document.querySelector('.box-name')
const boxNameText = document.querySelector('.box-name__text') 
const container = document.querySelector('.container')
let containerPosition = container.getBoundingClientRect()
let topContainer = Math.round(containerPosition.top)
let leftContainer = Math.round(containerPosition.left)
console.log('top container:', topContainer)
console.log('left container:', leftContainer)
mapStates.forEach(state => {
    state.addEventListener('mouseenter', (e) => {
        const statePath = state.querySelector('path[stroke-width]')
        const stateName = state.querySelector('path[fill-opacity]')
        boxNameText.innerHTML = state.getAttribute('data-state')
        const objStateName = stateName.getBoundingClientRect()
        let top = objStateName.top
        let left = objStateName.left
        const yFinish = String(Math.round(top - 45 - topContainer + window.scrollY ))
        const xFinish = String(Math.round(left - 10 - leftContainer))
        boxName.style.top = yFinish + 'px'
        boxName.style.left = xFinish + 'px'
        boxName.classList.add('active')
        if (statePath.getAttribute('fill')) {
            statePath.style.cssText = `fill: ${'#54C4EA'}`
        }
        if (stateName.getAttribute('fill')) {
            stateName.style.cssText = `fill: ${'white'}`
        }
    })
})
linkCircles.forEach(link => {
    link.addEventListener('mouseenter', (e) => {
        const circle = e.currentTarget.querySelector('circle')
        const name = e.currentTarget.querySelector('path')
        boxNameText.innerHTML = link.getAttribute('data-state')
        const objStateName = name.getBoundingClientRect()
        let top = objStateName.top
        let left = objStateName.left
        const yFinish = String(Math.round(top - 45 - topContainer + window.scrollY ))
        const xFinish = String(Math.round(left - 10 - leftContainer))
        boxName.style.top = yFinish + 'px'
        boxName.style.left = xFinish + 'px'
        boxName.classList.add('active')
        circle.style.cssText = `fill: ${'#54C4EA'}`
        name.style.cssText = `fill: ${'white'}`
    })
})

linkCircles.forEach(link => {
    link.addEventListener('mouseleave', (e) => {
        const circle = e.currentTarget.querySelector('circle')
        const name = e.currentTarget.querySelector('path')
        boxName.classList.remove('active')
        circle.style.cssText = `fill: ${'white'}`
        name.style.cssText = `fill: ${'#001064'}`
    })
})

mapStates.forEach(state => {
    state.addEventListener('mouseleave', (e) => {
        const statePath = state.querySelector('path[stroke-width]')
        const stateName = state.querySelector('path[fill-opacity]')
        boxName.classList.remove('active')
        if (statePath.getAttribute('fill')) {
            statePath.style.cssText = `fill: ${'white'}`
        }

        if (stateName.getAttribute('fill')) {
            stateName.style.cssText = `fill: ${'#001064'}`
        }
    })
})

