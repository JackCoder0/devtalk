import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import USA from '@/assets/USA.svg'
import { Card } from '@/components/Card'

export function Register() {
  return (
    <>
      <Helmet title="Cadastro" />
      <div className="">
        <h1 className="font-inter text-center text-2xl font-semibold">
          Eu quero aprender...
        </h1>
        <div className="mt-8 flex justify-center gap-20">
          <Link to="/welcome">
            <Card title="INGLÊS" text="43.1M alunos" src={USA} />
          </Link>
        </div>
      </div>
    </>
  )
}
