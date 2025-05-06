import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

import USA from '@/assets/American-Flag.svg'
import DevTalkLogo from '@/assets/DevTalk-logo.svg'
import FR from '@/assets/French-Flag.svg'
import Mascote2D from '@/assets/Mascote 2D.svg'
import Mascote from '@/assets/Mascote.svg'
import MascoteV2 from '@/assets/MascoteV2.svg'
import SP from '@/assets/Spanish-Flag.svg'
import { Button } from '@/components/Button'
import { CardV2 } from '@/components/Card'
import { Cube } from '@/components/Cube'

export function Home() {
  const navigate = useNavigate()

  // const frontIcons: ReactNode[] = [
  //   <TailwindcssOriginal key="tailwind" size={70} />,
  //   <MaterialuiOriginal key="tailwind" size={70} />,
  //   <ReactOriginal key="react" size={70} />,
  //   <TypescriptOriginal key="tailwind" size={70} />,
  //   <VitejsOriginal key="tailwind" size={90} />,
  //   <AxiosPlain key="tailwind" size={90} />,
  // ]

  // const backIcons: ReactNode[] = [
  //   <FastapiOriginal key="tailwind" size={70} />,
  //   <PythonOriginal key="tailwind" size={70} />,
  //   <MysqlOriginal key="tailwind" size={70} />,
  // ]

  async function handleLogin() {
    navigate('/auth/signin')
  }

  async function handleRegister() {
    navigate('/auth/register')
  }

  const colors = [
    '#3C3C3C',
    '#697A98',
    '#19335A',
    '#1F1F1F',
    '#B8BFD6',
    '#8FC8EB',
  ]

  const CubeGrid = () => {
    const cubes = Array.from({ length: 9 })

    return (
      <div className="grid grid-cols-3 gap-4">
        {cubes.map((_, index) => {
          const randomColor = colors[Math.floor(Math.random() * colors.length)]
          return <Cube key={index} style={{ backgroundColor: randomColor }} />
        })}
      </div>
    )
  }

  return (
    <>
      <Helmet title="Home" />
      <div className="flex flex-col gap-10">
        <section className="flex h-[464px] items-center justify-center gap-5">
          <div className="relative">
            <img
              src={Mascote}
              alt="Mascote do DevTalk"
              className="absolute top-1/2 left-1/2 z-10 w-[29rem] -translate-x-1/2 -translate-y-1/2"
            />
            <CubeGrid />
          </div>
          <div className="flex h-full flex-col justify-between">
            <Cube variant="outline" image={DevTalkLogo} />
            <p className="font-inter text-text w-[29rem] text-[3rem] leading-[100%] font-semibold uppercase">
              Trying to learn a new language? We can help you!
            </p>
            <p className="font-inter text-text text-xl">Meet our platform!</p>
            <div className="flex gap-5">
              <Button
                variant="outline"
                text="Get Started"
                onClick={handleRegister}
              />
              <Button text="Login" onClick={handleLogin} />
            </div>
          </div>
        </section>

        <section className="relative flex items-center justify-center gap-5">
          <div className="drop-shadow-[0px_0px_100px_rgba(255,255,255,0.5)]">
            <h1 className="font-inter bg-gradient-to-r from-[#4675C0] to-[#19335A] bg-clip-text text-[25rem] font-semibold text-transparent">
              TALK
            </h1>
          </div>

          <div className="absolute top-[80%] left-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 gap-10">
            <div className="translate-y-[-10%]">
              <CardV2 title="SPANISH" text="Over 30M + students" src={SP} />
            </div>
            <div className="translate-y-[10%]">
              <CardV2 title="FRENCH" text="Over 20M + students" src={FR} />
            </div>
            <div className="translate-y-[-10%]">
              <CardV2 title="ENGLISH" text="Over 40M + students" src={USA} />
            </div>
          </div>
        </section>

        <section className="mt-30 flex flex-col">
          <span className="text-6xl font-bold text-transparent [-webkit-text-stroke:#4675C0_2px]">
            INTERACTIVITY
          </span>

          <span className="font-inter text-3xl font-semibold">COMES FIRST</span>
          <span className="font-inter text-text max-w-[600px] text-justify">
            We know that AI is currently the peak of technology, so why not use
            it to help with your studies? And mainly, in interactivity with the
            user.
          </span>
        </section>

        <section className="flex flex-col items-center justify-center">
          <p className="font-inter text-4xl font-semibold">Using AI to</p>
          <h1 className="font-inter inline-block bg-gradient-to-r from-[#4675C0] to-[#19335A] bg-clip-text text-[25rem] leading-none font-semibold text-transparent">
            LEARN
          </h1>
        </section>

        <section className="flex flex-col items-center justify-center">
          <div className="flex gap-8 rounded-3xl border border-[#3C3C3C] p-10">
            <div className="flex w-[630px] flex-col items-center justify-center gap-5">
              <h1 className="font-inter text-center text-4xl font-semibold text-[#8FC8EB]">
                More practicality
              </h1>
              <p className="font-inter text-justify text-[1.25rem]">
                AI can be a powerful ally in learning a new language. It offers
                personalized lessons tailored to your proficiency level and
                learning style. AI-powered tools can help with grammar,
                vocabulary, and pronunciation through real-time feedback.
                Language apps and chatbots provide opportunities to practice
                conversational skills, while AI translators and dictionaries
                assist with understanding and context. With its 24/7
                availability, AI makes language learning convenient and
                adaptable to your schedule, helping you progress efficiently.
              </p>
            </div>
            <div className="rounded-2xl bg-[linear-gradient(180deg,_#19335A_0%,_#356DC0_100%)]">
              <img src={MascoteV2} alt="" />
            </div>
          </div>
        </section>

        <section className="flex flex-col items-start justify-center">
          <div>
            <p className="font-inter text-center text-4xl font-semibold">
              Then you will
            </p>
            <h1 className="font-inter inline-block bg-gradient-to-r from-[#4675C0] to-[#19335A] bg-clip-text text-[25rem] leading-none font-semibold text-transparent">
              LEVEL
            </h1>
          </div>
          <div className="flex items-center gap-10">
            <h1 className="font-inter inline-block bg-gradient-to-r from-[#4675C0] to-[#19335A] bg-clip-text text-[25rem] leading-none font-semibold text-transparent">
              UP
            </h1>
            <div className="flex flex-col rounded-3xl border p-8">
              <p className="font-inter w-[500px] text-4xl font-medium">
                You can also test your knowledge by taking tests. Want to know
                how?
              </p>
              <div className="flex items-center justify-end">
                <Button text="Try it now!" onClick={handleRegister} />
                <img className="w-50" src={Mascote2D} alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
