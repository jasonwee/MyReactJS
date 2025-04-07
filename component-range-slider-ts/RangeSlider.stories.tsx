import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

// component under storybook
import { RangeSlider } from "./"


const Template = (args: any) => {
  const initialRangeValue = args.rangeCurrent || 50;

  const [rangeCurrent, setRangeCurrent] = React.useState(initialRangeValue);
  const [step, setStep] = React.useState(0);

	return (
		<RangeSlider
      {...args}
      min={args.min || 0}
      max={args.max || 100}
      rangeCurrent={rangeCurrent}
      setRangeCurrent={setRangeCurrent}
      step={step}
      setStep={setStep}
    />
	)
}

const meta = {
  title: 'components/RangeSlider',
  component: RangeSlider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // 👇 All stories expect a label arg
  }
} satisfies Meta<typeof RangeSlider>

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = Template.bind(0)
Default.parameters = {
  docs: {
    description: {
      story: 'RangeSlider in horizontal position'
    }
  }
}

export const ValueLabel: Story = Template.bind(0)
ValueLabel.parameters = {
  docs: {
    description: {
      story: 'RangeSlider in horizontal position and with value label'
    }
  }
}
ValueLabel.args = {
  min: 0,
  max: 100,
  step: 1,
  setStep: () => {},
  rangeCurrent: 50,
  setRangeCurrent: () => {},
  showSliderValueLabel: true,
}

export const Vertical: Story = Template.bind(0)
Vertical.parameters = {
  docs: {
    description: {
      story: 'RangeSlider in vertical position and with value label'
    }
  }
}
Vertical.args = {
  min: 3,
  max: 12,
  step: 1,
  setStep: () => {},
  rangeCurrent: 5,
  setRangeCurrent: () => {},
  showSliderValueLabel: true,
  isVertical: true,
}

export const UpsideDown: Story = Template.bind(0)
UpsideDown.parameters = {
  docs: {
    description: {
      story: 'RangeSlider in upside down such that the label position changed'
    }
  }
}
UpsideDown.args = {
  min: 0,
  max: 100,
  step: 1,
  setStep: () => {},
  rangeCurrent: 50,
  setRangeCurrent: () => {},
  showSliderValueLabel: true,
  isVertical: true,
  upSideDown: true,
}
