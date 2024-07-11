import {Clipboard} from "../clipboard/Clipboard"

export const Color = () => {
  return (
    <div className="p-2 py-0 md:p-5">
      <h2 className="md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Definir COLORES
      </h2>
      <div className="card">
        <div className="py-3 md:p-4 text-lg">
          Definir colores para el fondo y textos, siempre teniendo en cuenta que
          sean compatibles para la version{" "}
          <span className="text-txtColor">dark</span> y{" "}
          <span className="text-txtColor">light</span> en caso de
          implementarlos. Verificar principalmente el color de los textos que
          sea legible y agregar dichos colores al{" "}
          <span className="text-txtColor">tailwind config</span> para tenerlos
          por defecto. <br /> <br />
          <Clipboard
            defaultValue={`    colors: {
        bgColor: "#051623",
        txtColor: "#eeff37",
    },`}
            rows={4}
          />
          Para usarlo asi
          <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none m-4">
            <code>{`<span className="text-txtColor">dark</span>`}</code>
          </div>
          Usar esta pagina{" "}
          <a
            href="https://coolcontrast.vercel.app/"
            className="text-txtColor underline"
            target="_blank"
          >
            coolcontrast
          </a>{" "}
          parar verificar el contraste de los colores.
        </div>
      </div>
    </div>
  )
}
