import {Intro, Color, Favicon, Letra} from "./components"
import {Accordion, AccordionTab} from "primereact/accordion"
import {Badge} from "primereact/badge"
import "primereact/resources/themes/lara-dark-cyan/theme.css"
import {FaRocket} from "react-icons/fa"
import {IoIosColorPalette} from "react-icons/io"
import {TbFavicon} from "react-icons/tb"
import {FaFont} from "react-icons/fa"

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh_-_15vh)] md:min-h-[calc(100vh_-_20h)] flex-col items-center justify-between px-6 md:px-20 py-10 bg-[white] dark:bg-bgColor">
      <div className="w-full">
        <Accordion multiple>
          <AccordionTab
            className="bg-[#1F2937]"
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
            className="bg-[#1F2937]"
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
            className="bg-[#1F2937]"
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
            className="bg-[#1F2937]"
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
        </Accordion>
      </div>
    </main>
  )
}
