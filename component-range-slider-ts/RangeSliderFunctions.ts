import { rangeLinePadding } from "./RangeSliderStatics"

/**
 * Calculate the position of the range value label from offsetWidth.
 *
 * @param offsetWidth offset width
 * @param min minimum of the range value
 * @param max maximum of the range value
 * @returns step in number
 */
export const calcStep = ({ offsetWidth, min, max }: {
  offsetWidth: number
  min: number
  max: number
}): number => {
  if (max-min === 0) return 0
  return (offsetWidth - rangeLinePadding) / (max - min);
}


/**
 * Calculate the vertical position of the range value label.
 *
 * @param rangeCurrent current range value.
 * @param max maximum of the slider range
 * @param min minimum of the slider range
 * @returns the percentage of the slider height
 */
export const calcVertical = ({
  rangeCurrent,
  step,
  min,
  max,
  thumbHeight=10
}: {
  rangeCurrent: number
  step: number
  min: number
  max: number
  thumbHeight?: number,
}): number => {
  if (max-min === 0) return 0

  const percentage = (rangeCurrent * step) - (step * max);
  return percentage - thumbHeight;
};
