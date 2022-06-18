export class Color {
  public readonly brand
  public readonly background
  public readonly element
  public readonly feedback

  constructor() {
    this.brand = {
      primary: '#3065B6',
      secondary: '#B0C8EB',
      hover: '#24539b'
    }
    this.background = {
      default: '#121D2E',
      glassy: 'rgba(18, 29, 46, 0.3)',
      inverse: '#E8EDF6',
      inverseHover: '#fff',
      input: '#333333'
    }
    this.element = {
      strong: '#FFFFFF',
      regular: '#E8EDF6',
      disable: '#475569',
      inverse: '#333333'
    }
    this.feedback = {
      success: '#00AC81',
      warning: '#D7D37F',
      error: '#EAAA87'
    }
  }
}
