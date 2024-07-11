import {TabView, TabPanel} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Letra = () => {
  return (
    <div className="p-2 py-0 md:p-5">
      <h2 className="md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Definir fuente
      </h2>
      <div className="card">
        <div className="py-3 md:p-4 text-lg">
          Seleccionar una fuente preferiblemente de{" "}
          <a
            href="</a>https://fonts.google.com/"
            className="text-txtColor underline"
            target="_blank"
          >
            fonts.google
          </a>
          .
          <TabView className="font-sans">
            <TabPanel header="React">
              <div className="py-3 md:p-4 text-lg">
                Aquí se tiene que descargar la fuente preferiblemente para no
                usar <span className="text-txtColor">cdn</span> que ralentice la
                carga, la fuente se ubica en la carpeta{" "}
                <span className="text-txtColor">fonts</span> en la carpeta{" "}
                <span className="text-txtColor">public</span>.
                <br />
                <br />
                Luego se agrega al archivo{" "}
                <span className="text-txtColor">index.css</span> de esta forma
                <Clipboard
                  defaultValue={`/*Font*/
@font-face {
  font-family: "Krona One";
  src: url("/fonts/KronaOne-Regular.ttf");
  font-weight: 400;
  font-style: normal;
}

* {
  font-family: "Krona One", sans-serif;
},`}
                  rows={12}
                />
                Por ultimo se agrega al{" "}
                <span className="text-txtColor">tailwind config</span>
                <Clipboard
                  defaultValue={`    fontFamily: {
      krona_One: ["Krona One", "sans-serif"],
    },`}
                  rows={3}
                />
                Para usarlo asi en caso de que no se quiera usar globalmente
                como se coloco en el{" "}
                <span className="text-txtColor">index.css</span>
                <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none m-4">
                  <code>
                    {`      <h2 className="font-krona_One">
        Definir fuente
      </h2>`}
                  </code>
                </div>
              </div>
            </TabPanel>
            <TabPanel header="Next.Js">
              <div className="py-3 md:p-4 text-lg">
                Aquí se tiene que definir la fuente en el{" "}
                <span className="text-txtColor">layout</span> principal por
                defecto, aquí en NextJs las fuentes de{" "}
                <span className="text-txtColor">Google</span> están por defecto
                <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none m-4">
                  <code>{`import {Lexend} from "next/font/google"`}</code>
                  <br />
                  <code>{`const inter = Lexend({subsets: ["latin"]})`}</code>
                </div>
                Y se agrega también al{" "}
                <span className="text-txtColor">body</span> en la misma pagina
                de <span className="text-txtColor">layout</span>{" "}
                <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none m-4">
                  <code>
                    {`<body className={inter.className}>{children}</body>`}
                  </code>
                </div>
                Y por ultimo al{" "}
                <span className="text-txtColor">tailwind config</span>
                <Clipboard
                  defaultValue={`    fontFamily: {
      sans: ["__Lexend_866216", "sans-serif"],
    },`}
                  rows={3}
                />
                Para usarlo asi
                <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none m-4">
                  <code>
                    {`      <h2 className="font-sans">
        Definir fuente
      </h2>`}
                  </code>
                </div>
              </div>
            </TabPanel>
          </TabView>
        </div>
      </div>
    </div>
  )
}
