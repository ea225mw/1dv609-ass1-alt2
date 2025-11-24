export class Die {
  roll() {
    return Math.floor(Math.random() * (6 - 1 + 1) + 1)
  }
}
