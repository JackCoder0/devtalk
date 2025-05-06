import { ChevronRight } from 'lucide-react'
import { FormEvent } from 'react'
import { FiSend } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/Button'
import { Finish } from '@/components/Steps/Finish'
import { Start } from '@/components/Steps/Start'
import { StepFive } from '@/components/Steps/StepFive'
import { StepFour } from '@/components/Steps/StepFour'
import { StepOne } from '@/components/Steps/StepOne'
import { StepThree } from '@/components/Steps/StepThree'
import { StepTwo } from '@/components/Steps/StepTwo'
import { useForm } from '@/hooks/useForm'

// type FormFields = {
//   name: string
//   email: string
//   review: string
//   comment: string
// }

// const formTemplate: FormFields = {
//   name: '',
//   email: '',
//   review: '',
//   comment: '',
// }

export function Welcome() {
  // const [data, setData] = useState(formTemplate)

  // const updateFieldHandler = (key: string, value: string) => {
  //   setData((prev) => {
  //     return { ...prev, [key]: value }
  //   })
  // }

  const formComponents = [
    <Start key="start" />,
    <StepOne key="step-one" />,
    <StepTwo key="step-two" />,
    <StepThree key="step-three" />,
    <StepFour key="step-four" />,
    <StepFive key="step-five" />,
    <Finish key="start" />,
  ]

  const navigate = useNavigate()

  async function handleFinish() {
    navigate('/dashboard')
  }

  const { currentStep, currentComponent, changeStep, isLastStep } =
    useForm(formComponents)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    changeStep(currentStep + 1)
  }

  return (
    <>
      {/* <Steps currentStep={currentStep} /> */}
      <form
        className="flex h-screen w-screen flex-col items-center justify-between"
        onSubmit={handleSubmit}
      >
        <div className="flex w-full flex-grow items-center justify-center">
          {currentComponent}
        </div>
        <div className="flex w-full items-center justify-center gap-5 p-4">
          {/* <Button
            icon={<ChevronLeft />}
            iconSide="left"
            text="Voltar"
            onClick={(e) => {
              e.preventDefault()
              changeStep(currentStep - 1)
            }}
          /> */}

          {!isLastStep ? (
            <Button
              type="submit"
              text="Avançar"
              iconSide="right"
              icon={<ChevronRight />}
            />
          ) : (
            <Button
              type="submit"
              text="Finalizar"
              iconSide="right"
              icon={<FiSend />}
              onClick={handleFinish}
            />
          )}
        </div>
      </form>
    </>
  )
}
