import {TabPanel, TabView} from "primereact/tabview"

export const Seo = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Configuración del SEO
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <TabView className="font-sans">
          <TabPanel header="React">
            <div className="py-3 md:px-5 text-center md:text-left  text-lg">
              <p>
                El <span className="text-txtColor">SEO</span> en{" "}
                <span className="text-txtColor">REACT</span> iría en el{" "}
                <span className="text-txtColor">index.html</span> como en este
                ejemplo:
              </p>
              <textarea
                rows={20}
                className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3"
                defaultValue={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Image Color Detector</title>
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <link rel="canonical" href="https://image-color-detector.vercel.app/" />
    <meta
      name="description"
      content="Image Color Detector extracts a variety of colors from any image that is less than 10mb"
    />
    <meta name="keywords" content="Color,Image,Format,Detector" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`}
              />
            </div>
          </TabPanel>
          <TabPanel header="Next.Js">
            <div className="py-3 md:px-5 text-center md:text-left  text-lg">
              <p>
                El <span className="text-txtColor">SEO</span> en{" "}
                <span className="text-txtColor">Next.Js</span> se coloca en el
                <span className="text-txtColor">layout</span> principal como el{" "}
                <span className="text-txtColor">SEO</span> general y también se
                puede personalizar mas en los distintos{" "}
                <span className="text-txtColor">layouts</span> que haya.
              </p>
              <textarea
                rows={15}
                className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3"
                defaultValue={`export async function generateMetadata({params}: RootMetadata) {
  const t = await getTranslations({params, namespace: "Metadata"})

  return {
    title: t("title"),
    description: t("description"),
    icons: {
      icon: "/favicon.ico",
    },
    alternates: {
      canonical: "http://reyesrondon.vercel.app/",
    },
  }
}`}
              />
              <p>
                En este caso en la función{" "}
                <span className="text-txtColor">generateMetadata</span> ya esta
                implementada también la parte de las traducciones para la
                internacionalización.
              </p>
            </div>
          </TabPanel>
        </TabView>
      </div>
    </div>
  )
}
