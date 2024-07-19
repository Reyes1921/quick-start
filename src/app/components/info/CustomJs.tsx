import {TabPanel, TabView} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const CustomJs = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        <span className="text-txtColor">Custom Js Codes!</span>
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left text-lg">
        <p>
          <span className="text-txtColor">JavaScript</span> que aporta a la web.
        </p>
      </div>
      <TabView className="font-sans">
        <TabPanel header="General">
          <div className=" text-center md:text-left  text-lg">
            <p>
              <span className="text-txtColor">Js</span> para convertir textos a
              textos amigables a las <span className="text-txtColor">URLS</span>
              .
            </p>
          </div>
          <Clipboard
            defaultValue={`'Text'.toLowerCase().split(" ").join("-")`}
          />
        </TabPanel>
        <TabPanel header="Soon"></TabPanel>
      </TabView>
    </div>
  )
}
