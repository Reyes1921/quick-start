import {Intro, Color, Favicon, Letra, Layaout, Idioma, Css} from "./components"
import {Accordion, AccordionTab} from "primereact/accordion"
import {Badge} from "primereact/badge"
import "primereact/resources/themes/lara-dark-cyan/theme.css"
import {FaRocket} from "react-icons/fa"
import {IoIosColorPalette} from "react-icons/io"
import {TbFavicon} from "react-icons/tb"
import {FaFont} from "react-icons/fa"
import {TbRulerMeasure} from "react-icons/tb"
import {FaLanguage} from "react-icons/fa"
import {FaCss3Alt} from "react-icons/fa"

export default function Home() {
  return (
    <>
      <main className="flex min-h-[calc(100vh_-_15vh)] md:min-h-[calc(100vh_-_20h)] flex-col items-center justify-between px-12 md:px-20 py-10 bg-[white] dark:bg-bgColor">
        <div className="w-full">
          {/* activeIndex={[0]} */}
          <Accordion multiple>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <FaRocket className="text-txtColor text-2xl" />
                  <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                    Intro
                  </span>
                  <Badge value="1" className="ml-auto bg-txtColor text-lg" />
                </span>
              }
            >
              <Intro />
            </AccordionTab>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <IoIosColorPalette className="text-txtColor text-3xl" />

                  <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                    Colors
                  </span>
                  <Badge value="2" className="ml-auto bg-txtColor text-lg" />
                </span>
              }
            >
              <Color />
            </AccordionTab>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <TbFavicon className="text-txtColor text-3xl" />

                  <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                    Favicon
                  </span>
                  <Badge value="3" className="ml-auto bg-txtColor text-lg" />
                </span>
              }
            >
              <Favicon />
            </AccordionTab>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <FaFont className="text-txtColor text-2xl" />

                  <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                    Fonts
                  </span>
                  <Badge value="4" className="ml-auto bg-txtColor text-lg" />
                </span>
              }
            >
              <Letra />
            </AccordionTab>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <TbRulerMeasure className="text-txtColor text-xl" />
                  <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                    Layout
                  </span>
                  <Badge value="5" className="ml-auto bg-txtColor text-lg" />
                </span>
              }
            >
              <Layaout />
            </AccordionTab>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <FaLanguage className="text-txtColor text-3xl" />
                  <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                    Language
                  </span>
                  <Badge value="6" className="ml-auto bg-txtColor text-lg" />
                </span>
              }
            >
              <Idioma />
            </AccordionTab>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <div className="">
                    <FaCss3Alt className="text-txtColor text-3xl" />
                  </div>
                  <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                    CSS
                  </span>
                  <Badge value="7" className="ml-auto bg-txtColor text-lg" />
                </span>
              }
            >
              <Css />
            </AccordionTab>
          </Accordion>
        </div>
      </main>
    </>
  )
}
