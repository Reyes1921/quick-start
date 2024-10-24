import {Clipboard} from "../clipboard/Clipboard"

export const Favicon = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Agregar Favicon
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          Seleccionar un <span className="text-txtColor">favicon</span> con los
          colores previamente seleccionados, tratar en lo posible de
          optimizarlo, al momento de colocarlo solo se busca el{" "}
          <span className="text-txtColor">favicon</span> existente en su
          respectiva carpeta y se reemplaza por el nuevo. <br /> <br />
          Se recomienda buscar primero un{" "}
          <span className="text-txtColor">svg</span> en{" "}
          <a
            href="https://icons8.com/icons"
            className="text-txtColor underline"
            target="_blank"
          >
            icons8
          </a>{" "}
          luego optimizarlo en{" "}
          <a
            href="https://svgomg.net/"
            className="text-txtColor underline"
            target="_blank"
          >
            svgomg
          </a>{" "}
          y posteriormente buscar un convertidor de{" "}
          <span className="text-txtColor">svg</span> a{" "}
          <span className="text-txtColor">ico</span>.
        </p>
      </div>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          Cuando el logo sea <span className="text-txtColor">blanco</span> o{" "}
          <span className="text-txtColor">negro</span> se recomienda hacer lo
          siguiente:
        </p>
        <Clipboard
          defaultValue={`    <link
      rel="icon"
      href="/white-logo.svg"
      type="image/svg+xml"
      media="(prefers-color-scheme: dark)"
    />
    
    <link
      rel="icon"
      href="/black-logo.svg"
      type="image/svg+xml"
      media="(prefers-color-scheme: light)"
    />
    `}
          rows={14}
        />
        <p>
          De esta forma personalizamos el color del favicon en función de las
          preferencias de color que tenga el sistema de la pc no de las
          preferencia del navegador, algo es algo.{" "}
        </p>
        <p>
          En <span className="text-txtColor">NextJs</span> se coloca ese link en
          el layout entre la etiqueta{" "}
          <span className="text-txtColor">html</span> y{" "}
          <span className="text-txtColor">body</span>.
        </p>
      </div>
    </div>
  )
}
