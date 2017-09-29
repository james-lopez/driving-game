/* eslint-disable no-unused-vars */

function renderPod(image) {
  const $pod = document.createElement('img')
  $pod.setAttribute('src', 'pod1.png')
  $pod.setAttribute('id', 'pod1')
  $pod.setAttribute('style', 'max-width: 100px; max-height: 100px;')
  return $pod
}

const $speedway = document.querySelector('#speedway')
$speedway.appendChild(renderPod('pod1.png'))

class PodRacer {
  constructor(location, speed, direction) {
    this.location = location
    this.speed = speed
    this.direction = direction
  }

  turn(direction) {
    this.direction = direction
  }
  accelerate(amount) {
    this.speed += amount
  }
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

  static start(car) {
    setInterval(function () {
      car.move()
    }, 16)
  }
}

let bulba = new PodRacer([0, 100], 50, 'east')
let anakin = new PodRacer([0, 0], 140, 'east')
