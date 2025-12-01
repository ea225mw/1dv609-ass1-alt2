export class Die {
  #faceValue

  roll() {
    const value = Math.floor(Math.random() * (6 - 1 + 1) + 1)
    this.#faceValue = value
    return this.getFaceValue()
  }

  getFaceValue() {
    return this.#faceValue
  }
}
