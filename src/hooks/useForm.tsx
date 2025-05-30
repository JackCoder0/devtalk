import { FormEvent, ReactElement, useState } from 'react'

export function useForm(steps: ReactElement[]) {
  const [currentStep, setCurrentStep] = useState(0)

  function changeStep(i: number, e?: FormEvent) {
    if (e) e.preventDefault()

    if (i < 0 || i >= steps.length) return

    setCurrentStep(i)
    console.log(i)
    console.log(steps)
  }

  return {
    currentStep,
    isLastStep: currentStep + 1 === steps.length,
    currentComponent: steps[currentStep],
    changeStep,
  }
}
