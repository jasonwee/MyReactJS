import {
  calcStep,
  calcVertical
} from './RangeSliderFunctions'

describe("calcStep", () => {

  test("unit", () => {
    let actual = calcStep({offsetWidth:0, min:0, max:100})
    expect(actual).toEqual(-0.16)

    actual = calcStep({offsetWidth:10, min:0, max:100})
    expect(actual).toEqual(-0.06)

    actual = calcStep({offsetWidth:50, min:0, max:100})
    expect(actual).toEqual(0.34)

    actual = calcStep({offsetWidth:90, min:0, max:100})
    expect(actual).toEqual(0.74)

    actual = calcStep({offsetWidth:100, min:0, max:100})
    expect(actual).toEqual(0.84)
  })

  test("edge",() => {
    const actual = calcStep({offsetWidth:100, min:0, max:0})
    expect(actual).toEqual(0)
  })

})

describe("calcVertical", () => {

  test("unit", () => {
    let actual = calcVertical({rangeCurrent:0, step:1, min:0, max:100})
    expect(actual).toEqual(-110)

    actual = calcVertical({rangeCurrent:20, step:1, min:0, max:100})
    expect(actual).toEqual(-90)

    actual = calcVertical({rangeCurrent:50, step:1, min:0, max:100})
    expect(actual).toEqual(-60)

    actual = calcVertical({rangeCurrent:75, step:1, min:0, max:100})
    expect(actual).toEqual(-35)

    actual = calcVertical({rangeCurrent:100, step:1, min:0, max:100})
    expect(actual).toEqual(-10)
  })

  test("edge",() => {
    const actual = calcVertical({rangeCurrent:10, step:1, min:0, max:0})
    expect(actual).toEqual(0)
  })

})