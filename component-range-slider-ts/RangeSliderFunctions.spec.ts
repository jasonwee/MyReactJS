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
    let actual = calcVertical({rangeCurrent:0, sliderHeight:100, min:0, max:100})
    expect(actual).toEqual(-100)

    actual = calcVertical({rangeCurrent:20, sliderHeight:100, min:0, max:100})
    expect(actual).toEqual(-80)

    actual = calcVertical({rangeCurrent:50, sliderHeight:100, min:0, max:100})
    expect(actual).toEqual(-50)

    actual = calcVertical({rangeCurrent:75, sliderHeight:100, min:0, max:100})
    expect(actual).toEqual(-25)

    actual = calcVertical({rangeCurrent:100, sliderHeight:100, min:0, max:100})
    expect(actual).toEqual(0)
  })

  test("edge",() => {
    const actual = calcVertical({rangeCurrent:10, sliderHeight:100, min:0, max:0})
    expect(actual).toEqual(0)
  })

})