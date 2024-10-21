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
        <TabPanel header="Layout"></TabPanel>
        <TabPanel header="General">
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                Centers an element horizontally within its parent container.
                Ensures that the element is positioned equidistant from both the
                left and right sides of the container.
              </p>
              <Clipboard
                defaultValue={`margin-left: auto; 
margin-right: auto;`}
                rows={2}
              />
              En <span className="text-txtColor">tailwind</span> seria asi
              <Clipboard defaultValue={`mx-auto`} rows={1} />
            </div>
          </article>
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                Aveces esta bien usar contrast como hover en{" "}
                <span className="text-txtColor">tailwind</span>
              </p>
            </div>
          </article>
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                <span className="text-txtColor">Tracking</span> en{" "}
                <span className="text-txtColor">tailwind</span> es el{" "}
                <span className="text-txtColor">line height</span>
              </p>
            </div>
          </article>
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                <span className="text-txtColor">Se que no es de aquí</span> este
                es un espacio en blanco de HTML.
              </p>
            </div>
            <Clipboard defaultValue={`&nbsp;`} rows={1} />
            O
            <Clipboard defaultValue={`&#160;`} rows={1} />
          </article>
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                <span className="text-txtColor">Hover</span> effect on sibling
                elements.
              </p>
            </div>
            <Clipboard
              defaultValue={`.box{
    trasnsition: opacity 0.6s ease;
}

.container:hover > :not(:hover){
    opacity: 0.4;
}`}
              rows={7}
            />
          </article>
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                You can change the color of the text cursor of input or textarea
                elements, to match your web page color scheme, using the
                caret-color property.
              </p>
            </div>
            <Clipboard defaultValue={`  caret-color: red;`} rows={1} />
          </article>
        </TabPanel>
        <TabPanel header="Images">
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                <span className="text-txtColor">
                  Gradiente de fondo y cambio de posición
                </span>{" "}
                en las imágenes.
              </p>
            </div>
            <Clipboard
              defaultValue={`.position {
  background-position: left calc((50vw - 170px) - 340px) top;
}

.gradiente {
  background-image: linear-gradient(
    to right,
    rgba(17, 11, 32, 0.829) calc((50vw - 170px) - 340px),
    rgba(17, 11, 32, 0.829) 50%,
    rgba(17, 11, 32, 0.829) 100%
  );
}`}
              rows={11}
            />
          </article>
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                <span className="text-txtColor">Sombras</span> en imagen con
                fondo transparente.
              </p>
            </div>
            <Clipboard
              defaultValue={`img {
  filter: drop-shadow(0 0 10px rgb(0, 0, 0, 0.8));
}`}
              rows={4}
            />
          </article>
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                Color detrás de <span className="text-txtColor">imagen</span>,
                es como un gradiente que sale detrás de la imagen pero con
                colores de la imagen misma.
              </p>
            </div>
            <Clipboard
              defaultValue={`.overlayImg::after {
  content: "";
  width: 100%;
  height: 100%;
  inset: 0;
  position: absolute;
  background: inherit;
  filter: blur(40px) saturate(400%);
  z-index: -1;
}`}
              rows={10}
            />
          </article>
        </TabPanel>
        <TabPanel header="Text">
          <article className="mt-5">
            <div className=" text-center md:text-left  text-lg">
              <p>
                <span className="text-txtColor">Cambiar</span> color de las
                letras dependiendo del fondo.
              </p>
            </div>
            <Clipboard
              defaultValue={`:root {
  --light: 80;
  --threshold: 50;
  --base-color: #e5e7eb;
}

.clipboard {
  --switch: calc((var(--light) - var(--threshold)) * -100%);
  color: hsl(0, 0%, var(--switch));
  border-color: hsl(0, 0%, var(--switch));
}`}
              rows={11}
            />
            <a
              href="https://css-tricks.com/switch-font-color-for-different-backgrounds-with-css/"
              className="text-txtColor underline"
              target="_blank"
            >
              Mas Información:
            </a>
          </article>
        </TabPanel>
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
