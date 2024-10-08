import {
  Intro,
  Color,
  Favicon,
  Letra,
  Layaout,
  Idioma,
  Css,
  Seo,
  HeaderT,
  DarkModeT,
  FooterT,
  Remate,
  Package,
  CustomJs,
  Serverless,
  Speed,
  Env,
  Next,
} from "./components"
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
import {MdOutlineQueryStats} from "react-icons/md"
import {FaHeading} from "react-icons/fa"
import {MdDarkMode} from "react-icons/md"
import {GiBarefoot} from "react-icons/gi"
import {GiFinishLine} from "react-icons/gi"
import {FaNpm} from "react-icons/fa"
import {IoLogoJavascript} from "react-icons/io"
import {FaServer} from "react-icons/fa"
import {IoIosSpeedometer} from "react-icons/io"
import {FaUserSecret} from "react-icons/fa"
import {RiNextjsFill} from "react-icons/ri"

const infoAccordion = [
  {
    name: "Intro",
    component: <Intro />,
    icon: <FaRocket className="text-txtColor text-2xl" />,
    number: 1,
  },
  {
    name: "Colors",
    component: <Color />,
    icon: <IoIosColorPalette className="text-txtColor text-2xl" />,
    number: 2,
  },
  {
    name: "Favicon",
    component: <Favicon />,
    icon: <TbFavicon className="text-txtColor text-2xl" />,
    number: 3,
  },
  {
    name: "Fonts",
    component: <Letra />,
    icon: <FaFont className="text-txtColor text-2xl" />,
    number: 4,
  },
  {
    name: "Layout",
    component: <Layaout />,
    icon: <TbRulerMeasure className="text-txtColor text-2xl" />,
    number: 5,
  },
  {
    name: "Language",
    component: <Idioma />,
    icon: <FaLanguage className="text-txtColor text-2xl" />,
    number: 6,
  },
  {
    name: "CSS",
    component: <Css />,
    icon: <FaCss3Alt className="text-txtColor text-2xl" />,
    number: 7,
  },
  {
    name: "Custom Js",
    component: <CustomJs />,
    icon: <IoLogoJavascript className="text-txtColor text-2xl" />,
    number: 8,
  },
  {
    name: "SEO",
    component: <Seo />,
    icon: <MdOutlineQueryStats className="text-txtColor text-2xl" />,
    number: 9,
  },
  {
    name: "Header",
    component: <HeaderT />,
    icon: <FaHeading className="text-txtColor text-2xl" />,
    number: 10,
  },
  {
    name: "DarkMode",
    component: <DarkModeT />,
    icon: <MdDarkMode className="text-txtColor text-2xl" />,
    number: 11,
  },
  {
    name: "Footer",
    component: <FooterT />,
    icon: <GiBarefoot className="text-txtColor text-2xl" />,
    number: 12,
  },
  {
    name: "Remate",
    component: <Remate />,
    icon: <GiFinishLine className="text-txtColor text-2xl" />,
    number: 13,
  },
  {
    name: "Speed",
    component: <Speed />,
    icon: <IoIosSpeedometer className="text-txtColor text-2xl" />,
    number: 14,
  },
  {
    name: "Serverless",
    component: <Serverless />,
    icon: <FaServer className="text-txtColor text-2xl" />,
    number: 15,
  },
  {
    name: "Package",
    component: <Package />,
    icon: <FaNpm className="text-txtColor text-2xl" />,
    number: 16,
  },
  {
    name: "Env",
    component: <Env />,
    icon: <FaUserSecret className="text-txtColor text-2xl" />,
    number: 17,
  },
  {
    name: "Next.Js",
    component: <Next />,
    icon: <RiNextjsFill className="text-txtColor text-2xl" />,
    number: 18,
  },
]

export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh_-_15vh)] md:min-h-[calc(100vh_-_20h)] flex-col items-center justify-between px-6 md:px-20 py-10 bg-[white] dark:bg-bgColor">
      <div className="w-full">
        {/* activeIndex={[0]} */}
        <Accordion multiple>
          {infoAccordion.map((accordion) => {
            return (
              <AccordionTab
                key={accordion.name}
                className="bg-[#1F2937]"
                header={
                  <span className="flex items-center gap-2 w-full">
                    {accordion.icon}
                    <span className="font-bold white-space-nowrap ml-2 text-txtColor font-sans">
                      {accordion.name}
                    </span>
                    <Badge
                      value={accordion.number}
                      className="ml-auto bg-txtColor text-lg"
                    />
                  </span>
                }
              >
                {accordion.component}
              </AccordionTab>
            )
          })}
        </Accordion>
      </div>
    </main>
  )
}
