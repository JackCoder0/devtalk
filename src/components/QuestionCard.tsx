import { Question } from '@/_types/lesson'

interface Props {
  question: Question
  index: number
}

export function QuestionCard({ question, index }: Props) {
  return (
    <div className="my-4 rounded-lg border p-4 shadow-sm">
      <h3 className="mb-2 font-semibold">
        {index + 1}. {question.question_text}
      </h3>

      <ul className="grid gap-2">
        {question.options.map((option, idx) => (
          <li
            key={idx}
            className="cursor-pointer rounded-md bg-gray-100 px-3 py-2 hover:bg-gray-200"
          >
            {option}
          </li>
        ))}
      </ul>

      <p className="mt-2 text-sm text-gray-500">
        <strong>Tipo:</strong> {question.type}
      </p>
    </div>
  )
}
