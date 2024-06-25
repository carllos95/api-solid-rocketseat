import 'dotenv/config'
import { z } from 'zod'

// Validação das variaveis de ambiente, setando como padrão 3 tipos especificos
const envSchema = z.object({
  NODE_ENV: z.enum(['dev', 'test', 'production']).default('dev'),
  PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

// Verificação se as variaveis estão completas, caso não estejam, dispara um erro e não executa os códigos posteriores
if (_env.success === false) {
  console.error('❌ Invalid environment variables', _env.error.format())

  throw new Error('Invalid environment variables.')
}

// Caso esteja tudo certo, a variavel "env" é exportada
export const env = _env.data
