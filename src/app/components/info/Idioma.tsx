import {TabPanel, TabView} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Idioma = () => {
  return (
    <div className="p-2 py-0 md:p-5">
      <h2 className="md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Configurar idiomas
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          Configurar todo lo necesario para{" "}
          <span className="text-txtColor">internacionalizar</span> la pagina.
        </p>
      </div>
      <TabView className="font-sans">
        <TabPanel header="React">
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              Instalamos <span className="text-txtColor">react-i18next</span> el
              cual es un potente framework de{" "}
              <span className="text-txtColor">internacionalizar</span> para
              React / React Native basado en{" "}
              <span className="text-txtColor">i18next</span>.
            </p>
            <p className="pt-5">
              Instala los paquetes{" "}
              <span className="text-txtColor">react-i18next</span> e{" "}
              <span className="text-txtColor">i18next</span>:
            </p>
            <Clipboard
              defaultValue={"npm install react-i18next i18next --save"}
            />
            <p>
              Cree un nuevo archivo{" "}
              <span className="text-txtColor">i18n.ts</span> al lado de su{" "}
              <span className="text-txtColor">App.tsx</span> con el siguiente
              contenido:
            </p>
            <Clipboard
              defaultValue={`import i18n from "i18next"
import {initReactI18next} from "react-i18next"

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        types: "PNG, JPG, JPEG, SVG, WEBP, and GIF are Allowed.",
        linkedin: "https://www.linkedin.com/in/reyes-rondon/?locale=en_US",
        git: "https://github.com/Reyes1921/image-color-detector/blob/main/README.md",
        error: "Error on Upload, check type and size of the image",
      },
    },
    es: {
      translation: {
        types: "Se permiten PNG, JPG, JPEG, SVG, WEBP y GIF.",
        linkedin: "https://www.linkedin.com/in/reyes-rondon/",
        git: "https://github.com/Reyes1921/image-color-detector/blob/main/README.es.md",
        error: "Error al cargar, compruebe el tipo y tamaño de la imagen",
    },
  },
})
export default i18n
`}
              rows={25}
            />
            <p>
              En la parte de <span className="text-txtColor">translation</span>{" "}
              están todos los textos que se quieren traducir.
            </p>
            <p className="pt-5">
              En el archivo <span className="text-txtColor">App.tsx</span>{" "}
              agregamos la siguiente linea.
            </p>
            <Clipboard defaultValue={`import "./i18n`} />
            <p>
              Ahora para traducir el contenido se usa{" "}
              <span className="text-txtColor">useTranslation</span> de esta
              forma.
            </p>
            <Clipboard
              defaultValue={`import {useTranslation} from "react-i18next"

export const Info = () => {
  const {t} = useTranslation()
  return (
    <p className="text-sm text-sky-500 dark:text-sky-400 text-center p-5 font-light">
      {t("info")}
    </p>
  )
}
`}
              rows={11}
            />
            <p>En la parte de:</p>
            <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
              {`{t("info")}`}
            </div>
            <p>
              Se coloca el item de{" "}
              <span className="text-txtColor">translation</span> que se
              necesita.
            </p>
            <p className="pt-5">
              Mas Información:{" "}
              <span className="text-txtColor underline">
                <a
                  href="https://react.i18next.com/guides/quick-start"
                  target="_blank"
                >
                  react-i18next documentation
                </a>
              </span>
            </p>
          </div>
        </TabPanel>
        <TabPanel header="Next.Js">
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              Instalamos <span className="text-txtColor">next-intl</span> con{" "}
              <span className="text-txtColor">i18n routing</span>, ya que hay
              dos versiones una con y otra sin{" "}
              <span className="text-txtColor">routing</span> pero esta version
              con <span className="text-txtColor">routing</span> nos sirve.
            </p>
            <p className="pt-5">
              Nos aseguramos de tener una estructura con{" "}
              <span className="text-txtColor">App Router</span> e instalamos.
            </p>
            <Clipboard defaultValue={"npm install next-intl"} />
            <p>
              Luego creamos los archivos{" "}
              <span className="text-txtColor">JSON</span> que llevaran las
              traducciones, se crearan en una carpeta que puede llevar cualquier
              nombre en este caso{" "}
              <span className="text-txtColor">directories</span> y debe estar al
              mismo nivel que la carpeta{" "}
              <span className="text-txtColor">src</span> y tener un archivo por
              cada idioma. Ejemplo:{" "}
              <span className="text-txtColor">en.json</span> y{" "}
              <span className="text-txtColor">es.json</span> con un contenido
              parecido a este.
            </p>
            <Clipboard
              defaultValue={`{ 
    "About": {
    "title": "About me",
    "text_1": "Computer engineer with more than 4 years of experience in the development and maintenance of web applications with",
    "text_2": "and",
    "text_3": "from personal brands to online stores. I have deep knowledge in",
    "text_4": "most recently, I worked at Wordpress Hilfe & Support Berlin, where I created more than 30 websites."},
  }`}
              rows={8}
            />
            <p>
              Luego creamos el archivo{" "}
              <span className="text-txtColor">next.config.mjs</span> también
              afuera del todo, con este contenido.
            </p>
            <Clipboard
              defaultValue={`import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default withNextIntl(nextConfig)
`}
              rows={9}
            />
            <p>
              Ahora dentro de la carpeta{" "}
              <span className="text-txtColor">src</span> creamos este archivo{" "}
              <span className="text-txtColor">i18n.ts</span>.
            </p>
            <Clipboard
              defaultValue={`import {notFound} from "next/navigation"
import {getRequestConfig} from "next-intl/server"

// Can be imported from a shared config
const locales = ["es", "en"]

export default getRequestConfig(async ({locale}) => {
  // Validate that the incoming 'locale' parameter is valid
  if (!locales.includes(locale as any)) notFound()

  return {
    messages: (await import('../dictionaries/${"locale"}.json')).default,
  }
})`}
              rows={15}
            />
            <p>
              Agregamos otro archivo llamado{" "}
              <span className="text-txtColor">middleware.ts</span> en el mismo
              nivel que el anterior
            </p>
            <Clipboard
              defaultValue={`import createMiddleware from "next-intl/middleware"

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["es", "en"],

  // Used when no locale matches
  defaultLocale: "es",
})

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(en|es)/:path*"],
}
`}
              rows={15}
            />
            <p>
              Ahora cambiamos la estructura y colocamos un archivo llamado{" "}
              <span className="text-txtColor">[locale]</span> antes de cada{" "}
              <span className="text-txtColor">page.tsx</span> y{" "}
              <span className="text-txtColor">layout.tsx</span>. Algo asi:
            </p>
            <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
              {`app/[locale]/layout.tsx`}
            </div>
            <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
              {`app/[locale]/page.tsx`}
            </div>
            <p>
              Y dentro de <span className="text-txtColor">layout.tsx</span> va
              esto.
            </p>
            <Clipboard
              defaultValue={`import {NextIntlClientProvider} from "next-intl"
                
interface RootMetadata {
  params: {locale: string}
}
  
export async function generateMetadata({params}: RootMetadata) {
interface RootLayoutProps {
  children: React.ReactNode
  params: {locale: string}
}

export default async function RootLayout({
  children,
  params: {locale},
}: Readonly<RootLayoutProps>) {
  const dictionaries = await getMessages()

  return (
    <html lang={locale} className={theme}>
      <body
        className={inter.className}>
        <NextIntlClientProvider messages={dictionaries}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
}

`}
              rows={25}
            />
            <p>
              Ahora para traducir el contenido se usa{" "}
              <span className="text-txtColor">useTranslations</span> de esta
              forma.
            </p>
            <Clipboard
              defaultValue={`import {useTranslations} from "next-intl"
                
export const About = () => {
  const dict = useTranslations("About")
  return (
    <article className="flex flex-col items-center justify-center mb-10">
        <h2
          id="about"
          className="text-3xl md:text-5xl text-center pb-2 font-bold mb-5 mt-4 scroll-mt-20 text-black dark:text-white"
        >
          {dict("title")}
        </h2>
        <p className="text-base md:text-xl text-center md:text-left tracking-tight text-black dark:text-[#ffffffb5] ">
          {dict("text_1")}
          <span className=" text-lime-600"> React</span>,
          <span className=" text-lime-600"> PHP</span>,
          <span className=" text-lime-600"> MySQL</span> {dict("text_2")}
        </p>
    </article>
  )
}
`}
              rows={22}
            />
            <p>
              Para traducir la metadata es decir el CEO se hace asi obviamente
              en el archivo <span className="text-txtColor">layout.tsx</span>:
            </p>
            <Clipboard
              defaultValue={`import {getTranslations} from "next-intl/server"

  export async function generateMetadata({params}: RootMetadata) {
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
              rows={15}
            />
            <p>
              Todo debe de quedar con una estructura parecida a esto cambiando
              el nombre de <span className="text-txtColor">messages</span> a{" "}
              <span className="text-txtColor">directories</span> solo por
              preferencia propia:
            </p>
            <textarea
              rows={12}
              readOnly
              className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3"
            >
              {`├── messages (1)
│   ├── en.json
│   └── ...
├── next.config.mjs (2)
└── src
    ├── i18n.ts (3)
    ├── middleware.ts (4)
    └── app
        └── [locale]
            ├── layout.tsx (5)
            └── page.tsx (6)`}
            </textarea>
            <p className="pt-5">
              Mas Información:{" "}
              <span className="text-txtColor underline">
                <a href="https://next-intl-docs.vercel.app/" target="_blank">
                  next-intl
                </a>
              </span>
            </p>
          </div>
        </TabPanel>
      </TabView>
    </div>
  )
}
