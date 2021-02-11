/**
 * Action types
 */
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCCES = '@repositories/LOAD_SUCCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE'
}

/**
 * Data types
 */
export interface Repository {
  id: number
  name: string
  description: string
  duration: string
  imageUrl: string
  price: number
}

/**
 * State type
 */
export interface RepositoriesState {
  //colocando o readonly, ele nunca podera ser alterado. Apenas criado um novo
  readonly data: Repository[]
  readonly loading: boolean
  readonly error: boolean
}