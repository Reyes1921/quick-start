export const FooterT = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Configuración del Footer
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          Ya sea en <span className="text-txtColor">REACT</span> o{" "}
          <span className="text-txtColor">Next.Js</span> el{" "}
          <span className="text-txtColor">footer</span> debe de tener un{" "}
          <span className="text-txtColor">max-width</span> para evitar que en
          pantallas muy grandes el contenido se vaya a los lados entonces hay
          que colocar una medida maxima que pueda tener par evitar eso se trata
          de que el tenga buenas medidas y sea responsive y contenga bien los
          colores de darkMode, preferiblemente debe de ir en algún{" "}
          <span className="text-txtColor">layout</span> o{" "}
          <span className="text-txtColor">tema</span> bien estructurado y
          también debe ser un <span className="text-txtColor">componente</span>,
          este es un ejemplo:
        </p>
        <textarea
          rows={22}
          className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3"
          defaultValue={`    <footer className="w-full md:max-w-[850px] mx-auto">
      <div className="container flex justify-between items-center p-8 pt-0">
        <div className="flex">
          {icons.map((icon) => (
            <Link
              href={icon.path}
              key={icon.alt}
              target="_blank"
              className="p-2 hover:scale-110 hover:opacity-70 inline-block"
            >
              <Image
                src={icon.src}
                height="12"
                width="20"
                className="filter dark:invert"
                alt={icon.alt}
              />
            </Link>
          ))}
        </div>
        <p className="p-2 text-black dark:text-white"> Reyes Rondón</p>
      </div>
    </footer>`}
        />
        <p>
          En un <span className="text-txtColor">layout</span> como este debería
          de ir:
        </p>
        <textarea
          rows={10}
          className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3"
          defaultValue={`const Layout = ({children}: Props) => {
  return (
    <div className="min-h-screen md:w-full bg-white dark:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] dark:from-gray-700 dark:via-gray-900 dark:to-black">
      <Header />
      {children}
      <Footer />
    </div>
  )
}`}
        />
      </div>
    </div>
  )
}
