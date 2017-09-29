/* eslint-disable no-unused-vars */

class PodRacer {
  constructor($speeder, direction, speed, location) {
    this.$speeder = $speeder
    this.location = location
    this.speed = speed
    this.direction = direction
    this.interval = null
    // $speeder.classList.add(direction)
    const [ x, y ] = location
    $speeder.style.left = x + 'px'
    $speeder.style.top = y + 'px'
    $speeder.style.transform = 'rotate(' + degrees[direction] + 'deg)'
  }

  move() {
    const {$speeder, direction, speed, location} = this
    switch (direction) {
      case 'up':
        location[1] -= speed
        break
      case 'down':
        location[1] += speed
        break
      case 'right':
        location[0] += speed
        break
      case 'left':
        location[0] -= speed
    }
    const [ x, y ] = location
    $speeder.style.left = x + 'px'
    $speeder.style.top = y + 'px'
  }

  start() {
    this.interval = setInterval(() => {
      this.move()
    }, 16)
  }

  get speedingOrNah() {
    return !!this.interval
  }

  no() {
    clearInterval(this.interval)
    this.interval = null
  }

  skrt(direction) {
    this.direction = direction
    this.$speeder.style.transform = 'rotate(' + degrees[direction] + 'deg)'
  }
}

const degrees = {
  up: 0,
  down: 270,
  left: 180,
  right: 90
}

const $pod = document.createElement('img')
$pod.setAttribute('src', 'pod1.png')
$pod.setAttribute('class', 'pod')

const anakin = new PodRacer($pod, 'right', 5, [0, 0])

const $speedway = document.querySelector('#speedway')
$speedway.appendChild($pod)
document.addEventListener('keydown', ({ key }) => {
  // if (key === ' ') {
  //   anakin.start()
  // }
  if (key !== ' ') return
  if (anakin.speedingOrNah) return anakin.no()
  anakin.start()
})
