import PasswordField from './components/PasswordField'
import Button from './components/Button'
import Title from './components/Title'
import styles from './styles/global.module.css'
import { useState } from 'react'

export default function App() {

  const [password, setPassword] = useState('')
  const [nameCopyBtn, setNameCopyBtn] = useState('Copiar')

  const copyPassword = async () => {
    try {
      await navigator.clipboard.writeText(password)
      setNameCopyBtn('Copiado!')
    }catch(err) {
      alert('Falha ao tentar copiar o texto:', err)
    }
  }

  const getPassword = () => {
    setNameCopyBtn('Copiar')
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-_'
    const charsetSize = charset.length
    let newPassword = ''

    for(let i=0; i < 12; i++) {
      const indexSorted = Math.floor(Math.random() * charsetSize)
      const newLetter = charset[indexSorted]
      newPassword = newPassword + newLetter
    }

    setPassword(newPassword)
  }

  return (
    <>
      <Title />

      <div className={styles.container_button}>
        <Button 
        name='Gerar'
        event={getPassword} />

        <Button
        name={nameCopyBtn}
        event={copyPassword} />
      </div>

      <PasswordField password={password} />
    </>
  )
}