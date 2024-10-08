import {TabPanel, TabView} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Next = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor mb-5">
        Next.Js Basic topics
      </h2>

      <h3 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        LocalStorage
      </h3>

      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          Si el proyecto va a necesitar{" "}
          <span className="text-txtColor">LocalStorage</span> o algo asi que sea
          del lado del cliente, seria mejor pensar si es mas adecuado usar React
          solo en vez de Next.Js.
        </p>
      </div>

      <h3 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        next/dynamic
      </h3>

      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          By using <span className="text-txtColor">next/dynamic</span>, the
          header component will not be included in the page's initial JavaScript
          bundle. The page will render the Suspense fallback first, followed by
          the Header component when the Suspense boundary is resolved.
        </p>
        <p>
          En este ejemplo agregamos{" "}
          <span className="text-txtColor">ssr: false,</span> para evitar que se
          carga el componente en el lado del servidor
        </p>
        <Clipboard
          rows={10}
          defaultValue={`import dynamic from "next/dynamic"

const DynamicComponent = dynamic(
  () =>
    import("../components/ShowCurrencies").then((mod) => mod.ShowCurrencies),
  {
    loading: () => <div className="loader"></div>,
    ssr: false,
  }
)`}
        />
        <p>
          Y lo usamos asi
          <Clipboard
            rows={3}
            defaultValue={`<div className="flex flex-col justify-center items-center m-10 min-h-[300px]">
        <DynamicComponent value={value} currencyProp={currency} />
      </div>`}
          />
        </p>
      </div>

      <h3 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Archivo para los types
      </h3>

      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          {" "}
          Procurar siempre crear un archivo para los{" "}
          <span className="text-txtColor">types</span> como{" "}
          <span className="text-txtColor">types/index.ts</span>
        </p>
        <Clipboard
          rows={10}
          defaultValue={`export interface currencyTypes {
  code: string
  name: string
  country: string
}

export interface initialDataCached {
  result: string
  documentation: string
  terms_of_use: string
  time_last_update_unix: number
  time_last_update_utc: string
  time_next_update_unix: number
  time_next_update_utc: string
  base_code: string
  conversion_rates: {[key: string]: number}
}

export interface ShowCurrenciesProps {
  value: number
  currencyProp: string
}
`}
        />
      </div>

      <h3 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Configuración de imágenes
      </h3>

      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          Procurar que cuando se usen imagenes externas agregar esa url en{" "}
          <span className="text-txtColor">next.config.mjs</span>
        </p>
        <Clipboard
          rows={9}
          defaultValue={`const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["flagsapi.com"],
  },
}
`}
        />
      </div>
    </div>
  )
}
