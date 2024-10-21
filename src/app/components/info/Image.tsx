import {Clipboard} from "../clipboard/Clipboard"

export const Image = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Medidas de Imágenes
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <p>
          En las imágenes poner el alto que deberia ser{" "}
          <span className="text-txtColor">height</span> y el ancho debería estar
          en auto <span className="text-txtColor">width</span>
        </p>{" "}
        <article className="mt-5">
          <div className=" text-center md:text-left  text-lg">
            <p>
              <span className="text-txtColor">Evita</span> brincos en tu página
              al cargar imágenes o vídeos.
            </p>
          </div>
          <Clipboard defaultValue={`aspect-ratio: 16/9`} rows={1} />
        </article>
      </div>
    </div>
  )
}
