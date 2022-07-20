import { child, get, ref } from 'firebase/database'
import { database } from 'services/firebase'
import dataJSON from './data.json'
// types
import { ICarreira, IEducacao, IHabilidades, IPerfil, IProjetos } from './types'
type TPage = 'perfil' | 'carreira' | 'educacao' | 'habilidades' | 'projetos'
interface IData {
    perfil: IPerfil
    carreira: ICarreira
    educacao: IEducacao
    habilidades: IHabilidades
    projetos: IProjetos
}

const data: IData = dataJSON

export async function getData(page: TPage, useLocalData: 'true' | 'false') {
  if (useLocalData === 'true') {
    return data[page]
  }

  const res = await get(child(ref(database), `${page}/`))
  return res.val()
}