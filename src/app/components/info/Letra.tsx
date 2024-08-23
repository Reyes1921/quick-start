import {TabView, TabPanel} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Letra = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Definir fuente
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          {" "}
          Seleccionar una fuente preferiblemente de{" "}
          <a
            href="https://fonts.google.com/"
            className="text-txtColor underline"
            target="_blank"
          >
            fonts.google
          </a>
          .
        </p>
        <TabView className="font-sans">
          <TabPanel header="React">
            <div className="py-3 md:px-5 text-center md:text-left  text-lg">
              <p>
                {" "}
                Aquí se tiene que descargar la fuente preferiblemente para no
                usar <span className="text-txtColor">cdn</span> que ralentice la
                carga, la fuente se ubica en la carpeta{" "}
                <span className="text-txtColor">fonts</span> en la carpeta{" "}
                <span className="text-txtColor">public</span>.
                <br />
                <br />
                Luego se agrega al archivo{" "}
                <span className="text-txtColor">index.css</span> de esta forma
              </p>
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
              <p>
                {" "}
                Por ultimo se agrega al{" "}
                <span className="text-txtColor">tailwind config</span>
              </p>
              <Clipboard
                defaultValue={`    fontFamily: {
      krona_One: ["Krona One", "sans-serif"],
    },`}
                rows={3}
              />
              <p>
                {" "}
                Para usarlo asi en caso de que no se quiera usar globalmente
                como se coloco en el{" "}
                <span className="text-txtColor">index.css</span>
              </p>
              <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
                {`      <h2 className=" font-boldfont-krona_One">
        Definir fuente
      </h2>`}
              </div>
              <p> Cómo evitar mostrar texto invisible</p>{" "}
              <span className="text-txtColor">swap, optional o fallback</span>
              <Clipboard
                defaultValue={`@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  src: local('Pacifico Regular'), local('Pacifico-Regular'),
    url(https://fonts.gstatic.com/s/pacifico/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2)
      format('woff2');
  font-display: swap;
}`}
                rows={8}
              />
            </div>
          </TabPanel>
          <TabPanel header="Next.Js">
            <div className="py-3 md:px-5 text-center md:text-left  text-lg">
              <p>
                {" "}
                Aquí se tiene que definir la fuente en el{" "}
                <span className="text-txtColor">layout</span> principal por
                defecto, aquí en NextJs las fuentes de{" "}
                <span className="text-txtColor">Google</span> están por defecto
              </p>
              <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
                {`import {Lexend} from "next/font/google"`}
                <br />
                {`const inter = Lexend({subsets: ["latin"]})`}
              </div>
              <p>
                {" "}
                Y se agrega también al{" "}
                <span className="text-txtColor">body</span> en la misma pagina
                de <span className="text-txtColor">layout</span>{" "}
              </p>
              <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
                {`<body className={inter.className}>{children}</body>`}
              </div>
              <p>
                {" "}
                Y por ultimo al{" "}
                <span className="text-txtColor">tailwind config</span>
              </p>
              <Clipboard
                defaultValue={`    fontFamily: {
      sans: ["__Lexend_866216", "sans-serif"],
    },`}
                rows={3}
              />
              <p>Para usarlo asi</p>
              <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
                {`      <h2 className=" font-boldfont-sans">
        Definir fuente
      </h2>`}
              </div>
              <p> Cómo evitar mostrar texto invisible</p>{" "}
              <span className="text-txtColor">swap, optional o fallback</span>
              <Clipboard
                defaultValue={`@font-face {
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  src: local('Pacifico Regular'), local('Pacifico-Regular'),
    url(https://fonts.gstatic.com/s/pacifico/v12/FwZY7-Qmy14u9lezJ-6H6MmBp0u-.woff2)
      format('woff2');
  font-display: swap;
}`}
                rows={8}
              />
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  )
}
