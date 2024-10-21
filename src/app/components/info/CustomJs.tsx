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
            <article className="mt-5">
              <p>
                The <span className="text-txtColor">encodeURIComponent()</span>{" "}
                function encodes a URI by replacing each instance of certain
                characters by one, two, three, or four escape sequences
                representing the UTF-8 encoding of the character (will only be
                four escape sequences for characters composed of two surrogate
                characters). Compared to encodeURI(), this function encodes more
                characters, including those that are part of the URI syntax.
              </p>
              <Clipboard defaultValue={`encodeURIComponent('шеллы')`} />
            </article>
            <article className="mt-5">
              <p>
                The <span className="text-txtColor">.Intl.NumberFormat</span>{" "}
                {""}
                object enables language-sensitive number formatting.
              </p>
              <Clipboard
                rows={4}
                defaultValue={`new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(number,), 

new Intl.NumberFormat("de-De").format(number),`}
              />
            </article>
            <article className="mt-5">
              <p>
                Emojis que se mueven en la{" "}
                <span className="text-txtColor">URL</span>.
              </p>
              <Clipboard
                rows={10}
                defaultValue={`//EMOJIS QUE SE MUEVEN EN LA URL

let emojis = ['😀','😀','😅','🤣','😒','🥵','😘','😞','🥴'];

let urlAnimate = () =>{
    window.location.hash = emojis[Math.floor((Date.now() / 100 ) % emojis.length)];
    setTimeout(urlAnimate, 1000);
}

urlAnimate()`}
              />
            </article>
            <article className="mt-5">
              <p>
                Cuando se este utilizando un{" "}
                <span className="text-txtColor">objeto custom</span> es decir un
                objeto que uno mismo creo para luego hacer{" "}
                <span className="text-txtColor">map</span> e imprimir eso es
                bueno usar una propiedad de clase para cada elemento del objeto
                en caso de querer algún css único para cada elemento entoces en
                el <span className="text-txtColor">CSS</span> se pone es la
                propiedad css y no se usan condicionales para los{" "}
                <span className="text-txtColor">CSS</span> únicos.
              </p>
            </article>
          </div>
        </TabPanel>
        <TabPanel header="TypeScript">
          <article className="mt-5">
            <p>
              Preview Image before <span className="text-txtColor">Upload</span>
              .
            </p>
            <Clipboard
              rows={15}
              defaultValue={`export const useFileToData = (): {
  fileToDataUri: (file: File) => Promise<string>
} => {
  const fileToDataUri = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = (event) => {
        resolve(event.target?.result as string)
      }
      reader.onerror = (error) => {
        reject(error)
      }
      reader.readAsDataURL(file)
    })

  return {fileToDataUri}
}`}
            />
          </article>
        </TabPanel>
      </TabView>
    </div>
  )
}
