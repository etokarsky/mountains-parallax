const fog = document.querySelector('.parallax__fog')
const mountain = document.querySelector('.parallax__mountain_1')
const rightMountain = document.querySelector('.parallax__mountain_2')
const leftMountain = document.querySelector('.parallax__mountain_3')

window.addEventListener('scroll', event => {
	let winScroll = window.pageYOffset
	let winWidth = document.documentElement.clientWidth
	let contentHeight = document.querySelector('.content').offsetHeight
	let parallaxHeight = document.querySelector('.parallax').offsetHeight
	let contentScrollPercent = winScroll / contentHeight * 100
	let parallaxScrollPercent = winScroll / parallaxHeight * 100

	let fogZoom = 1 + (winWidth / 10000 * parallaxScrollPercent)
	let fogOpacity = 1 - 1 / 100 * parallaxScrollPercent
	fog.style.transform = `scale(${fogZoom})`
	fog.style.opacity = `${fogOpacity}`

	let mountainZoom = 1 + (winWidth / 4000000 * contentScrollPercent)
	mountain.style.transform = `scale(${mountainZoom})`

	let rightMountainHorizontalShift = winWidth / 2000 * parallaxScrollPercent
	let rightMountainZoom = 1 + (winWidth * 0.000005 * parallaxScrollPercent)
	rightMountain.style.transform = `translate3d(${rightMountainHorizontalShift}px, 0, 0) scale(${rightMountainZoom})`

	let leftMountainHorizontalShift = winWidth / 1500 * parallaxScrollPercent
	let leftMountainZoom = 1 + (winWidth * 0.00001 * parallaxScrollPercent)
	leftMountain.style.transform = `translate3d(${leftMountainHorizontalShift}px, 0, 0) scale(${leftMountainZoom})`
})