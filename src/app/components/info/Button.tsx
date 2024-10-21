import {Clipboard} from "../clipboard/Clipboard"

export const Button = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Reglas ne los botones
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          En los <span className="text-txtColor">botones</span> el padding
          horizontal debe de ser el doble del padding vertical para que el{" "}
          <span className="text-txtColor">botón</span> no se vea como gordo.
        </p>
        <article className="mt-5">
          <div className=" text-center md:text-left  text-lg">
            <p>
              <span className="text-txtColor">Evita</span> usar{" "}
              <span className="text-txtColor">H1,h2,h3...</span> dentro de los
              botones.
            </p>
          </div>
          <Clipboard defaultValue={`aspect-ratio: 16/9`} rows={1} />
        </article>
      </div>
    </div>
  )
}
