import {TabPanel, TabView} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Css = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        <span className="text-txtColor">CSS</span> en general
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          <span className="text-txtColor">CSS</span> que aportan vistosidad a la
          web.
        </p>
      </div>
      <TabView className="font-sans">
        <TabPanel header="Scroll Bar">
          <div className=" text-center md:text-left  text-lg">
            <p>
              <span className="text-txtColor">CSS</span> para darle color al
              scroll bar.
            </p>
          </div>
          <Clipboard
            defaultValue={`/* ===== Scrollbar CSS ===== */
/* Firefox */
html {
  scrollbar-width: auto;
  scrollbar-color: #65a30d #111827;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
}

*::-webkit-scrollbar-track {
  background: #ffffff;
}

*::-webkit-scrollbar-thumb {
  background-color: #65a30d;
  border-radius: 10px;
  border: 3px solid #ffffff;
}
`}
            rows={15}
          />
          <div className=" text-center md:text-left  text-lg">
            <p>
              <span className="text-txtColor">CSS</span> para darle color al
              scroll bar y darle una forma ovalada.
            </p>
          </div>
          <Clipboard
            defaultValue={`/* ===== Scrollbar CSS ===== */
/* Firefox */
html {
  scrollbar-width: auto;
  /* scrollbar-color: #eeff37 #051623; */
}

* {
  font-family: "__Lexend_866216", sans-serif;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 16px;
  height: 12px;
}

*::-webkit-scrollbar-track {
  background: #051623;
  /* border-radius: 10px; */
}

*::-webkit-scrollbar-thumb {
  background: #eeff37;
  border-radius: 10px;
}`}
            rows={15}
          />
        </TabPanel>
        <TabPanel header="Header">
          <div className=" text-center md:text-left  text-lg">
            <p>
              <span className="text-txtColor">CSS</span> para que al hacer clic
              en algún elemento del menu y vaya a un{" "}
              <span className="text-txtColor">anchor</span> sea de forma suave y
              para que no tape al <span className="text-txtColor">anchor</span>{" "}
              donde va a ir se agrega el{" "}
              <span className="text-txtColor">CSS</span> del{" "}
              <span className="text-txtColor">.section</span> (obviamente se
              cambia el .section por el del anchor).
            </p>
          </div>
          <Clipboard
            defaultValue={`html {
  scroll-behavior: smooth;
}

.section {
  scroll-margin-top: 1em;
}`}
            rows={8}
          />
        </TabPanel>
      </TabView>
    </div>
  )
}
