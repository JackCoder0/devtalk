import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'sonner'

import HealthIcon from '@/assets/AiFillHeart.svg'
import { Button } from '@/components/Button'
import { CircularValueLabel } from '@/components/CirularProgress'
import {
  completeLesson,
  getLesson,
  type Lesson,
} from '@/services/firebaseLessons'
import { useAuthStore } from '@/stores/useAuthStore'

// TODO: Adicionar sistema de vida
// TODO: Adicionar dialog quando fehcar a lição

export function Lesson() {
  const { lessonId } = useParams()
  const navigate = useNavigate()
  const { user } = useAuthStore()

  const [lesson, setLesson] = useState<Lesson | null>()
  const [current, setCurrent] = useState(0)
  const [selected, setSelected] = useState<string | string[]>('')

  const [lives, setLives] = useState(5)
  const [showAlert, setShowAlert] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)

  useEffect(() => {
    if (lessonId) {
      getLesson(lessonId)
        .then((data) => setLesson(data))
        .catch(() => {
          alert('❌ Erro ao carregar a lição.')
          navigate('/dashboard')
        })
    }
  }, [lessonId, navigate])

  useEffect(() => {
    if (lives <= 0) {
      toast.warning('💀 Você ficou sem vidas! Tente novamente mais tarde.')
      navigate('/dashboard')
    }
  }, [lives, navigate])

  if (!lesson) return <p>Carregando lição...</p>

  const questions = lesson.questions
  const question = questions[current]

  const handleNext = async () => {
    setShowAlert(false)
    setIsCorrect(null)

    const isLastQuestion = current === questions.length - 1

    if (!isLastQuestion) {
      setCurrent((prev) => prev + 1)
      setSelected('')
    } else {
      try {
        await completeLesson(user?.user?.id, lesson)
        toast.success('Parabéns! Você finalizou a lição.', {
          action: {
            label: 'Ir para o Dashboard',
            onClick: () => {
              navigate('/dashboard')
            },
          },
        })
      } catch (error) {
        console.error(error)
        toast.error('Erro ao registrar conclusão da lição.')
        navigate('/dashboard')
      }
    }
  }

  const handleSelect = (value: string) => {
    if (question.type === 'multiple_select') {
      const array = Array.isArray(selected) ? [...selected] : []

      if (array.includes(value)) {
        setSelected(array.filter((v) => v !== value))
      } else {
        array.push(value)
        setSelected(array)
      }
    } else {
      setSelected(value)
    }
  }

  const handleVerify = () => {
    const correct = question.correct_answer

    let isAnswerCorrect = false

    if (question.type === 'multiple_select') {
      const answer = Array.isArray(selected) ? selected.sort() : []
      const correctArray = Array.isArray(correct) ? correct.sort() : []
      isAnswerCorrect = JSON.stringify(answer) === JSON.stringify(correctArray)
    } else {
      isAnswerCorrect = selected === correct
    }

    setIsCorrect(isAnswerCorrect)
    setShowAlert(true)

    if (!isAnswerCorrect) {
      setLives((prev) => prev - 1)
      toast.error('Resposta errada!')
    } else {
      toast.success('Resposta correta!')
    }

    setTimeout(() => {
      handleNext()
    }, 1000)
  }

  return (
    <>
      <Helmet title={`Lesson - ${lesson.title}`} />

      <div className="flex h-full w-full flex-col items-center justify-between gap-5">
        {/* Header com progresso, vidas e botão de fechar */}
        <div className="flex w-full items-center justify-between p-6">
          <button
            className="cursor-pointer"
            onClick={() => navigate('/dashboard')}
          >
            <X />
          </button>

          <CircularValueLabel
            value={Math.round(((current + 1) / questions.length) * 100)}
          />

          <div className="flex items-center gap-2">
            <img className="w-[35px]" src={HealthIcon} alt="Health" />
            <p className="font-jura font-bold">{lives}</p>
          </div>
        </div>

        {/* Pergunta atual */}
        <div className="w-full max-w-xl p-6">
          {question.type !== 'fill_in_the_blank' && (
            <h2 className="mb-6 text-center text-lg font-bold">
              {question.question_text}
            </h2>
          )}

          {question.type === 'multiple_choice' && (
            <div className="flex flex-col gap-4">
              {question.options.map((option) => (
                <Button
                  key={option}
                  text={option}
                  variant={selected === option ? 'filled' : 'outline'}
                  onClick={() => handleSelect(option)}
                />
              ))}
            </div>
          )}

          {question.type === 'true_false' && (
            <div className="flex justify-center gap-4">
              {question.options.map((option) => (
                <Button
                  key={option}
                  text={option}
                  variant={selected === option ? 'filled' : 'outline'}
                  onClick={() => handleSelect(option)}
                />
              ))}
            </div>
          )}

          {question.type === 'fill_in_the_blank' && (
            <div className="flex flex-col gap-4">
              <h2 className="mb-6 text-center text-lg font-bold">
                <span
                  dangerouslySetInnerHTML={{
                    __html: question.question_text.replace(
                      '_____',
                      selected
                        ? `<span class="font-bold border-2 p-1 rounded-[8px] border-primary">${selected}</span>`
                        : '_____',
                    ),
                  }}
                />
              </h2>

              {question.options.map((option) => (
                <Button
                  key={option}
                  text={option}
                  variant={selected === option ? 'filled' : 'outline'}
                  onClick={() => handleSelect(option)}
                />
              ))}
            </div>
          )}

          {question.type === 'multiple_select' && (
            <div className="flex flex-col items-start gap-2">
              {question.options.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={
                      Array.isArray(selected) && selected.includes(option)
                    }
                    onChange={() => handleSelect(option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          )}
        </div>

        {/* Botões */}
        <div className="flex w-full items-center justify-evenly border-t p-6">
          <Button text="Pular" variant="outline" onClick={handleNext} />
          {/* <Button text="Verificar" onClick={handleVerify} /> */}
          <Button
            text="Verificar"
            onClick={handleVerify}
            disabled={
              (question.type === 'fill_in_the_blank' && !selected) ||
              (question.type === 'multiple_select' &&
                (!Array.isArray(selected) || selected.length === 0)) ||
              (question.type !== 'fill_in_the_blank' &&
                question.type !== 'multiple_select' &&
                selected === '')
            }
          />
        </div>
      </div>
    </>
  )
}
