import {TabView, TabPanel} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Intro = () => {
  return (
    <div className="p-2 py-0 md:p-5">
      <h2 className="p-2 md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Comenzar el proyecto
      </h2>
      <div className="card">
        <TabView className="font-sans">
          <TabPanel header="React">
            <Clipboard defaultValue={"npm create vite@latest"} />
            <div className="py-3 md:p-4">
              {" "}
              Quitar todo el contenido de los archivos{" "}
              <span className="text-txtColor">App.css</span> y{" "}
              <span className="text-txtColor">index.css</span> y remover los
              elementos del primer div en en{" "}
              <span className="text-txtColor">App.tsx</span>.
            </div>
          </TabPanel>
          <TabPanel header="Next">
            <Clipboard defaultValue={"npx create-next-app@latest"} />
            <div className="py-3 md:p-4">
              Quitar todo el contenido de los archivos{" "}
              <span className="text-txtColor">globals.css</span> y remover el
              contenido del main en{" "}
              <span className="text-txtColor">page.tsx</span>.
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  )
}
