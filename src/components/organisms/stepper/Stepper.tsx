import { Stepper as MyUIStepper, StepperProps, StepType } from '@my-ui/core';

export { StepperProps, StepType } from '@my-ui/core';

export function Stepper<T extends StepType[]>(props: StepperProps<T>) {
  return <MyUIStepper {...props} className='test' />;
}
