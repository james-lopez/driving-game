/* eslint-disable no-unused-vars */

const $pod = document.createElement('img')
$pod.setAttribute('src', 'pod1.png')
$pod.setAttribute('id', 'pod1')
$pod.setAttribute('style', 'max-width: 80px; max-height: 80px;')

const $speedway = document.querySelector('#speedway')

class PodRacer {
  constructor($pod, direction, speed, location) {
    this.$pod = $pod
    this.location = location
    this.speed = speed
    this.direction = direction
    $pod.classList.add(direction)
    const [ x, y ] = location
    $pod.style.left = x
    $pod.style.top = y
  }
  // turn(direction) {
  //   this.direction = direction
  // }
  // accelerate(amount) {
  //   this.speed += amount
  // }
  move() {
    const {$pod, direction, speed, location} = this
    switch (direction) {
      case 'up':
        location[1] -= this.speed
        break
      case 'down':
        location[1] += this.speed
        break
      case 'right':
        location[0] += this.speed
        break
      case 'left':
        location[0] -= this.speed
    }
    const [ x, y ] = location
    $pod.style.left = x
    $pod.style.top = y
  }

  start() {
    this.interval = setInterval(() => {
      this.move()
    }, 16)
  }
}

const anakin = new PodRacer($pod, 'up', 5, [0, 0])

$speedway.appendChild($pod)
document.addEventListener('keydown', ({ key }) => {
  if (key === ' ') {
    anakin.start()
  }
})
