// component properties

export type IRangeSliderProps = {
    min: number;
    max: number;
    rangeCurrent: number;
    setRangeCurrent: (n: number) => void;
    step: number;
    setStep: (n: number) => void;
    showSliderValueLabel?: boolean;
    isVertical?: boolean;
    upSideDown?: boolean;
}
