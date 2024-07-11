import {Intro, Color, Favicon, Footer, Header, Letra} from "./components"
import {Accordion, AccordionTab} from "primereact/accordion"
import {Badge} from "primereact/badge"
import "primereact/resources/themes/lara-dark-cyan/theme.css"
import {FaRocket} from "react-icons/fa"
import {MdDelete} from "react-icons/md"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between px-12 md:px-20 py-10 bg-[white] dark:bg-bgColor">
        <div className="w-full">
          <Accordion multiple activeIndex={[0]}>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <div className="border-2 border-[white] rounded-full p-3">
                    <FaRocket className="text-txtColor text-lg" />
                  </div>
                  <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                    Intro
                  </span>
                  <Badge value="1" className="ml-auto bg-txtColor" />
                </span>
              }
            >
              <Intro />
            </AccordionTab>
            <AccordionTab
              header={
                <span className="flex items-center gap-2 w-full">
                  <div className="border-2 border-[white] rounded-full p-3">
                    <MdDelete className="text-txtColor text-lg" />
                  </div>
                  <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                    Remove
                  </span>
                  <Badge value="2" className="ml-auto bg-txtColor" />
                </span>
              }
            ></AccordionTab>
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  )
}
