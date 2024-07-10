import {Color, Favicon, Footer, Header, Intro, Letra} from "./components"
import {Accordion, AccordionTab} from "primereact/accordion"
import {Avatar} from "primereact/avatar"
import {Badge} from "primereact/badge"
import "primereact/resources/themes/lara-dark-cyan/theme.css"

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
                  <Avatar
                    image="https://primefaces.org/cdn/primereact/images/avatar/amyelsner.png"
                    shape="circle"
                  />
                  <span className="font-bold white-space-nowrap">Intro</span>
                  <Badge value="1" className="ml-auto bg-txtColor" />
                </span>
              }
            >
              <Intro />
            </AccordionTab>
          </Accordion>
        </div>
      </main>
      <Footer />
    </>
  )
}
