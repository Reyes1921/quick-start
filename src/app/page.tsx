import {Intro, Color, Favicon, Footer, Header, Letra} from "./components"
import {Accordion, AccordionTab} from "primereact/accordion"
import {Badge} from "primereact/badge"
import "primereact/resources/themes/lara-dark-cyan/theme.css"
import {FaRocket} from "react-icons/fa"
import {IoIosColorPalette} from "react-icons/io"
import {TbFavicon} from "react-icons/tb"
import {FaFont} from "react-icons/fa"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-12 md:px-20 py-10 bg-[white] dark:bg-bgColor">
        <div className="w-full">
          {/* activeIndex={[0]} */}
          <Accordion multiple>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <div className="border-2 border-[white] rounded-full p-3">
                    <FaRocket className="text-txtColor text-lg" />
                  </div>
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
                  <div className="border-2 border-[white] rounded-full p-3">
                    <IoIosColorPalette className="text-txtColor text-xl" />
                  </div>
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
                  <div className="border-2 border-[white] rounded-full p-3">
                    <TbFavicon className="text-txtColor text-xl" />
                  </div>
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
                  <div className="border-2 border-[white] rounded-full p-3">
                    <FaFont className="text-txtColor text-lg" />
                  </div>
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
      <Footer />
    </>
  )
}
