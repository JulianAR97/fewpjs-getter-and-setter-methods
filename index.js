// Add your Circle class here
class Circle {
  constructor(radius) {
    this.radius = radius
  }

  get diameter() {
    return this.radius * 2
  }

  get area() {
    return Math.PI * Math.pow(this.radius, 2)
  }
  
  get circumference() {
    return Math.PI * this.diameter
  }

  set diameter(diameter) {
    this.radius = diameter / 2
  }

  set area(area) {
    this.radius = Math.sqrt(area / Math.PI)
  }

  set circumference(circumference) {
    this.radius = circumference / (2 * Math.PI)
  }
}