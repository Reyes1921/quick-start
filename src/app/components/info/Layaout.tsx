import {TabPanel, TabView} from "primereact/tabview"

export const Layaout = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className="md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Definir Layout
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          Ya sea <span className="text-txtColor">paddings</span>,{" "}
          <span className="text-txtColor">margins</span> y{" "}
          <span className="text-txtColor">colores de fondo</span>, contando la
          parte <span className="text-txtColor">responsive</span>.
        </p>
      </div>
      <TabView className="font-sans">
        <TabPanel header="React">
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              {" "}
              Tratar en lo posible de tener un{" "}
              <span className="text-txtColor">layout</span> como tema con esta
              estructura de modo el sitio comparta las mismas{" "}
              <span className="text-txtColor">medidas</span> y{" "}
              <span className="text-txtColor">colores de fondo</span>.{" "}
            </p>
            <textarea
              rows={19}
              readOnly
              defaultValue={`import {Header, Footer} from "../components/"

type Props = {
  children: React.ReactNode
}

const Layout = ({children}: Props) => {
  return (
    <div className="min-h-screen md:w-full bg-white dark:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
`}
              className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3"
            />

            <p>Y usarlo asi en donde se pueda</p>
            <textarea
              rows={4}
              readOnly
              defaultValue={`<Layout>
    <main className="p-2 min-h-[calc(100vh_-_15vh)] w-full md:max-w-[1000px] mx-auto px-10 md:p-x10 md:py-2 "></main>
</Layout>
`}
              className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3"
            />
          </div>
        </TabPanel>
        <TabPanel header="Next.Js">
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              {" "}
              Ajustar el <span className="text-txtColor">layout</span> por
              defecto para que tenga tanto al{" "}
              <span className="text-txtColor">header</span> como{" "}
              <span className="text-txtColor">footer</span>.{" "}
            </p>
            <textarea
              rows={18}
              readOnly
              defaultValue={`export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const theme = cookieStore.get("theme")?.value === "dark" ? "dark" : ""
  return (
    <html lang="en" className={theme}>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
`}
              className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3"
            />
            <p>Y usar medidas asi en donde se pueda</p>
            <textarea
              rows={3}
              readOnly
              defaultValue={` <main className="flex min-h-[calc(100vh_-_14vh)] md:min-h-[calc(100vh_-_18.4vh)] flex-col items-center justify-between px-12 md:px-20 py-10 bg-[white] dark:bg-bgColor"></main>`}
              className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3"
            />
          </div>
        </TabPanel>
      </TabView>
    </div>
  )
}
