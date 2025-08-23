// 11. arquivo de tipagem global que pode ser usado em todo o projeto

// 12. evitando conflito de nomes
declare namespace Express {
  export interface Request {
    user_id: string
  }
}