import React from "react";
import { render } from "@testing-library/react";

// component under test
import { RangeSlider } from "./RangeSlider";

describe("RangeSlider", () => {
  it("will render default RangeSlider", () => {
    const target = render(
      <RangeSlider
        min={0}
        max={100}
        rangeCurrent={50}
        setRangeCurrent={jest.fn()}
        step={1}
        setStep={jest.fn()}
      />
    ).asFragment().firstChild;

    expect(target).toMatchInlineSnapshot(`
      <div
        class="range-slider"
      >
        <div
          class="range-slider__track range-slider__track--row"
        >
          <label
            class="range-slider__label"
          >
            0
          </label>
          <input
            class="range-slider__input range-slider__input-writing-mode--horizontal"
            max="100"
            min="0"
            type="range"
            value="50"
          />
          <label
            class="range-slider__label"
          >
            100
          </label>
        </div>
      </div>
    `);
  });

  it("will render RangeSlider with value label", () => {
    const target = render(
      <RangeSlider
        min={0}
        max={100}
        rangeCurrent={50}
        setRangeCurrent={jest.fn()}
        step={1}
        setStep={jest.fn()}
        showSliderValueLabel
      />
    ).asFragment().firstChild;

    expect(target).toMatchInlineSnapshot(`
      <div
        class="range-slider"
      >
        <div
          class="range-slider__track range-slider__track--row"
        >
          <label
            class="range-slider__label"
          >
            0
          </label>
          <input
            class="range-slider__input range-slider__input-writing-mode--horizontal"
            max="100"
            min="0"
            type="range"
            value="50"
          />
          <label
            class="range-slider__label"
          >
            100
          </label>
        </div>
        <label
          class="range-slider__value-label"
          for="range"
          style="transform: translateX(50px) translateY(-3px);"
        >
          <span
            class="range-slider__value "
          >
            50
          </span>
          <svg
            class="range-slider__svg"
            viewBox="0 0 15 18"
          >
            <path
              d="M14,7a7,7,0,0,1-2,4.87L7.72,16.35a1,1,0,0,1-1.44,0L2,11.87A6.93,6.93,0,0,1,0,7,7,7,0,0,1,14,7Z"
            />
          </svg>
        </label>
      </div>
    `);
  });

  it("will render RangeSlider in vertical position", () => {
    const target = render(
      <RangeSlider
        min={0}
        max={100}
        rangeCurrent={50}
        setRangeCurrent={jest.fn()}
        step={1}
        setStep={jest.fn()}
        showSliderValueLabel
        isVertical
      />
    ).asFragment().firstChild;

    expect(target).toMatchInlineSnapshot(`
      <div
        class="range-slider"
      >
        <div
          class="range-slider__track range-slider__track--column"
        >
          <label
            class="range-slider__label"
          >
            0
          </label>
          <input
            class="range-slider__input range-slider__input--vertical range-slider__input-writing-mode--vertical"
            max="100"
            min="0"
            type="range"
            value="50"
          />
          <label
            class="range-slider__label"
          >
            100
          </label>
        </div>
        <label
          class="range-slider__value-label"
          for="range"
          style="transform: translateY(-60px) translateX(13px) rotate(90deg);"
        >
          <span
            class="range-slider__value range-slider__value--vertical range-slider__value--rotate-neg90deg"
          >
            50
          </span>
          <svg
            class="range-slider__svg"
            viewBox="0 0 15 18"
          >
            <path
              d="M14,7a7,7,0,0,1-2,4.87L7.72,16.35a1,1,0,0,1-1.44,0L2,11.87A6.93,6.93,0,0,1,0,7,7,7,0,0,1,14,7Z"
            />
          </svg>
        </label>
      </div>
    `);
  });
});
