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
                <span className="text-txtColor">Js</span> para convertir textos
                a textos amigables a las{" "}
                <span className="text-txtColor">URLS</span>.
              </p>
              <Clipboard
                defaultValue={`'Text'.toLowerCase().split(" ").join("-")`}
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
