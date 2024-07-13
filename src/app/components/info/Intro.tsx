import {TabView, TabPanel} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Intro = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Comenzar el proyecto
      </h2>

      <TabView className="font-sans">
        <TabPanel header="React">
          <Clipboard defaultValue={"npm create vite@latest"} />
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              Quitar todo el contenido de los archivos{" "}
              <span className="text-txtColor">App.css</span> y{" "}
              <span className="text-txtColor">index.css</span> y remover los
              elementos del primer div en en{" "}
              <span className="text-txtColor">App.tsx</span>.
            </p>
          </div>
        </TabPanel>
        <TabPanel header="Next.Js">
          <Clipboard defaultValue={"npx create-next-app@latest"} />
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              Quitar todo el contenido de los archivos{" "}
              <span className="text-txtColor">globals.css</span> y remover el
              contenido del <span className="text-txtColor">main</span> en{" "}
              <span className="text-txtColor">page.tsx</span>.
            </p>
          </div>
        </TabPanel>
      </TabView>
    </div>
  )
}
