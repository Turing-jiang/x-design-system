import { useState, useEffect } from 'react'
import Button from '@components/Button'
import { isDarkMode, toggleDarkMode, setLightMode, setDarkMode } from '@/lib/utils'
import { Button as MyButton } from '@components/button/Button'
import GeneralButton from '@components/button/GeneralButton'
import FilterButton from '@components/button/FilterButton'
import TabButton from '@components/button/TabButton'

function App() {
  const [theme, setTheme] = useState<string>(isDarkMode().toString())

  useEffect(() => {
    handleSetDarkMode()
  }, [])

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
      <div className="flex gap-x-[15px] text-black dark:text-white">
        <p>{theme}</p>
        <button onClick={handleToggleDarkMode}>toggle</button>
        <button onClick={handleSetDarkMode}>setDark</button>
        <button onClick={handleSetLightMode}>setLight</button>
      </div>
      <Button></Button>
      <MyButton className="px-[15px] py-[3px]">닫기</MyButton>
      <GeneralButton>닫기</GeneralButton>
      <FilterButton></FilterButton>
      <TabButton shape="hug">Text</TabButton>
      <TabButton shape="fixed">Text</TabButton>
    </>
  )
}

export default App
