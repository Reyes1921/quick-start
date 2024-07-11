import {TabPanel, TabView} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Paddings = () => {
  return (
    <div className="p-2 py-0 md:p-5">
      <h2 className="md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Definir Paddings
      </h2>
      <TabView className="font-sans">
        <TabPanel header="React">
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p> </p>
            <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
              {`<span className="text-txtColor">dark</span>`}
            </div>
          </div>
        </TabPanel>
        <TabPanel header="Next.Js"></TabPanel>
      </TabView>
    </div>
  )
}
