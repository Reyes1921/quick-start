import {TabPanel, TabView} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Env = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Variables de Entorno
      </h2>

      <TabView className="font-sans">
        <TabPanel header="React">
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              Creamos la variable que necesitamos en el archivo{" "}
              <span className="text-txtColor">.env</span>
            </p>
            <Clipboard defaultValue={"API_KEY = 0c9e06ca3br3d34d3334"} />
            <p>
              Luego agregamos ese archivo al{" "}
              <span className="text-txtColor">.gitignore</span> y para llamar a
              esa variable usamos{" "}
              <Clipboard
                rows={1}
                defaultValue={`const API_KEY = import.meta.env.API_KEY`}
              />
            </p>
          </div>
        </TabPanel>
        <TabPanel header="Next.Js">
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              Creamos la variable que necesitamos en el archivo{" "}
              <span className="text-txtColor">.env</span>
            </p>
            <Clipboard defaultValue={"API_KEY = 0c9e06ca3br3d34d3334"} />
            <p>
              Luego agregamos ese archivo al{" "}
              <span className="text-txtColor">.gitignore</span> y para llamar a
              esa variable la colocamos en{" "}
              <span className="text-txtColor">next.config.mjs</span> asi{" "}
              <Clipboard
                rows={9}
                defaultValue={`const nextConfig = {
  env: {
    API_KEY: process.env.API_KEY,
  },
  images: {
    domains: ["flagsapi.com"],
  },
}`}
              />
            </p>
            <p>
              Y ahora si lo llamamos de esta manera en el archivo donde lo
              necesitamos
              <Clipboard
                rows={1}
                defaultValue={`  const api = process.env.API_KEY`}
              />
            </p>
          </div>
        </TabPanel>
      </TabView>
    </div>
  )
}
