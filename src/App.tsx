import { useState } from 'react'
import Button from '@components/Button'
import { isDarkMode, toggleDarkMode, setLightMode, setDarkMode } from '@/lib/utils'

function App() {
  const [theme, setTheme] = useState<string>(isDarkMode().toString())

  function handleToggleDarkMode() {
    toggleDarkMode()
    setTheme(isDarkMode().toString())
  }

  function handleSetDarkMode() {
    setDarkMode()
    setTheme(isDarkMode().toString())
  }

  function handleSetLightMode() {
    setLightMode()
    setTheme(isDarkMode().toString())
  }

  return (
    <>
      <p>{theme}</p>
      <div className="flex gap-x-[15px]">
        <button onClick={handleToggleDarkMode}>toggle</button>
        <button onClick={handleSetDarkMode}>setDark</button>
        <button onClick={handleSetLightMode}>setLight</button>
      </div>
      <Button></Button>
    </>
  )
}

export default App
