import lessonImg from '@/assets/sprint_img.jpeg'

export const mockLesson = {
  lesson_id: 1,
  title: 'Sprint 1: Introdução ao Inglês para Devs',
  description: 'Aprenda palavras básicas do mundo da programação em inglês.',
  level: 'A1',
  xp_reward: 500,
  xp_unlock: 0,
  imageUrl: lessonImg,
  questions: [
    {
      question_id: 2,
      lesson_id: 1,
      question_text: "O que 'print' faz em Python?",
      type: 'multiple_choice',
      correct_answer: 'Mostra uma mensagem na tela',
      options: [
        'Salva um arquivo',
        'Mostra uma mensagem na tela',
        'Cria um loop',
        'Adiciona dois números',
      ],
      explanation: 'A função print() exibe mensagens ou valores na tela.',
    },
    {
      question_id: 3,
      lesson_id: 1,
      question_text: "Escolha a tradução correta para: 'variable'",
      type: 'multiple_choice',
      correct_answer: 'variável',
      options: ['função', 'variável', 'constante', 'classe'],
      explanation: "'Variable' em inglês significa 'variável' em português.",
    },
    {
      question_id: 4,
      lesson_id: 1,
      question_text: 'Uma função é usada para organizar o código.',
      type: 'true_false',
      correct_answer: 'Verdadeiro',
      options: ['Verdadeiro', 'Falso'],
      explanation:
        'Funções ajudam a reutilizar e organizar o código em blocos.',
    },
    {
      question_id: 5,
      lesson_id: 1,
      question_text:
        'Fill in the blank: A _____ stores a value that can change.',
      type: 'fill_in_the_blank',
      correct_answer: 'variable',
      options: ['variable', 'loop', 'function', 'class'],
      explanation: 'A variable stores a value that can be updated.',
    },
    {
      question_id: 6,
      lesson_id: 1,
      question_text: 'Which one is a programming language?',
      type: 'multiple_choice',
      correct_answer: 'Python',
      options: ['Photoshop', 'Excel', 'Python', 'Windows'],
      explanation: 'Python is a widely used programming language.',
    },
    {
      question_id: 7,
      lesson_id: 1,
      question_text: "Choose the correct translation for: 'loop'",
      type: 'multiple_choice',
      correct_answer: 'laço',
      options: ['função', 'laço', 'linha', 'parâmetro'],
      explanation: "'Loop' significa 'laço' em programação.",
    },
    {
      question_id: 8,
      lesson_id: 1,
      question_text: "True or False: The '=' symbol assigns a value.",
      type: 'true_false',
      correct_answer: 'True',
      options: ['True', 'False'],
      explanation: "In Python, '=' assigns a value to a variable.",
    },
    {
      question_id: 9,
      lesson_id: 1,
      question_text: 'Fill in the blank: A _____ repeats a block of code.',
      type: 'fill_in_the_blank',
      correct_answer: 'loop',
      options: ['loop', 'class', 'variable', 'function'],
      explanation: 'A loop is used for repetition in code.',
    },
    {
      question_id: 10,
      lesson_id: 1,
      question_text: "What is 'input' used for?",
      type: 'multiple_choice',
      correct_answer: 'To get information from the user',
      options: [
        'To show output',
        'To repeat code',
        'To define a function',
        'To get information from the user',
      ],
      explanation: 'The input() function allows user interaction.',
    },
    {
      question_id: 11,
      lesson_id: 1,
      question_text: "Choose the correct translation for: 'function'",
      type: 'multiple_choice',
      correct_answer: 'função',
      options: ['variável', 'função', 'objeto', 'condição'],
      explanation: "'Function' significa 'função' em português.",
    },
    {
      question_id: 12,
      lesson_id: 1,
      question_text: 'True or False: Python is hard to read.',
      type: 'true_false',
      correct_answer: 'False',
      options: ['True', 'False'],
      explanation: 'Python is known for its readability and simplicity.',
    },
    {
      question_id: 13,
      lesson_id: 1,
      question_text:
        'Fill in the blank: Use the _____ function to display text.',
      type: 'fill_in_the_blank',
      correct_answer: 'print',
      options: ['print', 'return', 'input', 'if'],
      explanation: 'The print() function displays messages.',
    },
    {
      question_id: 14,
      lesson_id: 1,
      question_text: 'Which one is used to make decisions in code?',
      type: 'multiple_choice',
      correct_answer: 'if',
      options: ['print', 'loop', 'if', 'function'],
      explanation: "The 'if' statement checks conditions.",
    },
    {
      question_id: 15,
      lesson_id: 1,
      question_text: "Choose the correct translation for: 'debug'",
      type: 'multiple_choice',
      correct_answer: 'depurar',
      options: ['executar', 'codificar', 'depurar', 'compilar'],
      explanation: "'Debug' means 'depurar' – to find and fix errors.",
    },
    {
      question_id: 16,
      lesson_id: 1,
      question_text: "True or False: 'int' is used for text.",
      type: 'true_false',
      correct_answer: 'False',
      options: ['True', 'False'],
      explanation: "'int' is a data type for numbers, not text.",
    },
  ],
}

export const mockLessons = [
  mockLesson,
  ...Array.from({ length: 14 }).map((_, i) => {
    const id = i + 2
    return {
      lesson_id: id,
      title: `Sprint ${id}: Conceitos de Programação Básicos`,
      description: `Aprenda mais vocabulário de programação em inglês. Parte ${id}`,
      level: 'A1',
      xp_reward: 500 + 100 * i,
      xp_unlock: 300 + 100 * i,
      questions: mockLesson.questions.map((q, index) => ({
        ...q,
        question_id: id * 100 + index + 1,
        lesson_id: id,
      })),
    }
  }),
]
