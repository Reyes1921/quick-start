import {DarkMode} from "../darkMode/DarkMode"

export const Header = () => {
  return (
    <header className="px-12 md:px-20 py-5 bg-[white] dark:bg-bgColor">
      <div className="flex justify-between">
        <h1 className="text-bgColor dark:text-txtColor font-bold text-3xl md:text-5xl">
          Quick Start
        </h1>
        <DarkMode />
      </div>
    </header>
  )
}
