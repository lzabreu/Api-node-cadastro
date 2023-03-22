import { Request, Response } from 'express'

interface ICidade {
  nome: string
}

export const Create = (req: Request<{}, {}, ICidade>, res: Response) => {
  const data = req.body
  console.log(data.nome)
  return (
    res.send('Create')
  )
}
