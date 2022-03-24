import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})

react ( { 
  // Excluir histórias do livro de histórias 
  exclude : / \. histórias \. ( t | j ) sx? $ / , 
  // Somente arquivos .tsx 
  incluem : '**/*.tsx' 
} ) 

