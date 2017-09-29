/* eslint-disable no-unused-vars */

function renderPod(image) {
  const $pod = document.createElement('img')
  $pod.setAttribute('src', 'pod1.png')
  $pod.setAttribute('id', 'pod1')
  $pod.setAttribute('style', 'max-width: 80px; max-height: 80px;')
  return $pod
}

const $speedway = document.querySelector('#speedway')

class PodRacer {
  constructor($pod, direction, speed, location) {
    this.location = location
    this.speed = speed
    this.direction = direction
    $pod.classList.add(direction)
    const [ x, y ] = location
    $pod.style.left = x
    $pod.style.right = y
  }
  // turn(direction) {
  //   this.direction = direction
  // }
  // accelerate(amount) {
  //   this.speed += amount
  // }
  move() {
    switch (this.direction) {
      case 'north':
        this.location[1] -= this.speed
        break
      case 'south':
        this.location[1] += this.speed
        break
      case 'east':
        this.location[0] += this.speed
        break
      case 'west':
        this.location[0] -= this.speed
    }
  }

  start() {
    this.interval = setInterval(() => {
      this.move()
    }, 16)
  }
}

const anakin = new PodRacer(renderPod('pod1.png'), [0, 0], 5, 'north')

$speedway.appendChild(renderPod('pod1.png'))
document.addEventListener('keydown', ({ key }) => {
  if (key === ' ') {
    anakin.start()
  }
})
