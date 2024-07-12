import {TabPanel, TabView} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const DarkModeT = () => {
  return (
    <div className="p-2 py-0 md:p-5">
      <h2 className="md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Configuración del DarkMode
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <TabView className="font-sans">
          <TabPanel header="React">
            <div className="py-3 md:px-5 text-center md:text-left  text-lg">
              <p>
                Primero creamos el{" "}
                <span className="text-txtColor">componente</span> para luego
                agregarlo al <span className="text-txtColor">header</span>. En
                este caso se utilizan{" "}
                <span className="text-txtColor">localStorage</span> ya que la
                carga del mismo es lo suficientemente rápida para que no haya un
                retraso en la aplicación del tema. Aquí mismo se ánade el código
                necesario en la etiqueta{" "}
                <span className="text-txtColor">HTML</span>.
              </p>
              <Clipboard
                rows={25}
                defaultValue={`import {useEffect, useState} from "react"

export const DarkMode = () => {
  const [isDark, setIsDark] = useState(true)

  const handleClick = () => {
    setIsDark(!isDark)
    let darkModeValue = isDark ? "light" : "dark"
    localStorage.setItem("theme", darkModeValue)
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    if (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDark(false)
    }
  }, [])

  return (
    <button
      className="mr-2 md:mr-5 border-[#111827] dark:border-white rounded-lg p-0.5 hover:scale-110 hover:opacity-70"
      onClick={handleClick}
    >
      <img
        src="/sun.svg"
        alt="Sun Logo"
        width={22}
        height={22}
        className="hidden dark:flex invert"
      />
      <img
        src="/moon.svg"
        alt="Moon Logo"
        width={22}
        height={22}
        className="flex dark:hidden"
      />
    </button>
  )
}
`}
              />
              <p>
                Luego agregamos esta linea al{" "}
                <span className="text-txtColor">tailwind.config.ts</span>
              </p>
              <Clipboard defaultValue={`  darkMode: "selector",`} />
              <p>
                Por ultimo se agrega el{" "}
                <span className="text-txtColor">componente</span> al{" "}
                <span className="text-txtColor">header</span> o donde sea
                necesario y se añaden las imágenes también del sol y luna.
              </p>
            </div>
          </TabPanel>
          <TabPanel header="Next.Js">
            <div className="py-3 md:px-5 text-center md:text-left  text-lg">
              <p>
                Primero creamos el{" "}
                <span className="text-txtColor">componente</span> para luego
                agregarlo al <span className="text-txtColor">header</span>. En
                este caso se utilizan{" "}
                <span className="text-txtColor">cookies</span> para que se usen
                del lado del <span className="text-txtColor">cliente</span> y la
                carga se instantánea a diferencia del{" "}
                <span className="text-txtColor">localStorage</span>.
              </p>
              <Clipboard
                rows={25}
                defaultValue={`"use client"
import Image from "next/image"
import {useEffect, useState} from "react"
import {setCookie, getCookie, hasCookie} from "cookies-next"

export const DarkMode = () => {
  const [isDark, setIsDark] = useState(true)

  const handleClick = () => {
    setIsDark(!isDark)
    let darkModeValue = isDark ? "light" : "dark"
    setCookie("theme", darkModeValue, {maxAge: 2592000})
    document.documentElement.classList.toggle("dark")
  }

  useEffect(() => {
    if (
      getCookie("theme") === "dark" ||
      (!hasCookie("theme") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark")
      setCookie("theme", "dark", {maxAge: 2592000})
      setIsDark(true)
    } else {
      document.documentElement.classList.remove("dark")
      setCookie("theme", "light", {maxAge: 2592000})
      setIsDark(false)
    }
  }, [])

  return (
    <button
      className="mr-2 md:mr-5 border-[#111827] dark:border-white rounded-lg p-0.5 hover:scale-110 hover:opacity-70"
      onClick={handleClick}
    >
      <Image
        src="/sun.svg"
        alt="Sun Logo"
        width={22}
        height={22}
        className="hidden dark:flex invert"
      />
      <Image
        src="/moon.svg"
        alt="Moon Logo"
        width={22}
        height={22}
        className="flex dark:hidden"
      />
    </button>
  )
}
`}
              />
              <p>
                Ahora agregamos esta configuración al{" "}
                <span className="text-txtColor">layout</span> donde verificamos
                las <span className="text-txtColor">cookies</span> para luego
                agregar{" "}
                <span className="text-txtColor">{`className={theme}`}</span> al{" "}
                <span className="text-txtColor">HTML</span>.
              </p>
              <Clipboard
                rows={14}
                defaultValue={`export default async function RootLayout({
  children,
  params: {locale},
}: Readonly<RootLayoutProps>) {
  const dictionaries = await getMessages()
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")?.value === "dark" ? "dark" : ""

  return (
    <html lang={locale} className={theme}>
    </html>
  )
}
`}
              />
              <p>
                Luego agregamos esta linea al{" "}
                <span className="text-txtColor">tailwind.config.ts</span>
              </p>
              <Clipboard defaultValue={`  darkMode: "selector",`} />
              <p>
                Por ultimo se agrega el{" "}
                <span className="text-txtColor">componente</span> al{" "}
                <span className="text-txtColor">header</span> o donde sea
                necesario y se añaden las imágenes también del sol y luna.
              </p>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  )
}
