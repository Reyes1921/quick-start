export const Speed = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Para tener un buen score del sitio es necesario tener en cuenta lo
        siguiente:
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <ul className="decoration-slice list-disc">
          <li className="pb-4">
            <p>
              Tener en cuenta el uso <span className="text-txtColor">Aria</span>{" "}
              en los distintos elementos{" "}
              <span className="text-txtColor">HTML</span> como el{" "}
              <span className="text-txtColor">Aria Role</span>,{" "}
              <span className="text-txtColor">aria-label</span> y asegurarse de
              que cuando se usen también se use el posible padre que puedan
              tener.
            </p>
          </li>
          <li className="pb-4">
            <p>
              El <span className="text-txtColor">alt</span> de las imágenes no
              solo debe de ser el titulo y ya por que si no sale la imagen se
              vera el <span className="text-txtColor">alt</span> al lado de
              posiblemente el mismo titulo del{" "}
              <span className="text-txtColor">alt</span> por ende al{" "}
              <span className="text-txtColor">alt</span> es recomendable
              colocarle algo antes del titulo por ejemplo{" "}
              <span className="text-txtColor">
                "Imagen o logo de ${"titulo"}"
              </span>
              .
            </p>
          </li>
          <li className="pb-4">
            <p>
              Los{" "}
              <span className="text-txtColor">
                Links must have discernible text
              </span>{" "}
              son necesarios. Es decir un descripción de que hace el link osea a
              donde lleva o asi.
            </p>
            <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
              {` <a href="taxhike.html" aria-label="Read more about Seminole tax hike">[Read more...]</a>`}
            </div>
          </li>
          <li className="pb-4">
            <p>
              {" "}
              <span className="text-txtColor">
                Buttons must have discernible text
              </span>
            </p>
            <div className="h-auto min-h-10 w-full rounded-lg bg-bgColor py-1 pl-5 pr-5 text-base outline-none my-3">
              {`<button id="al" aria-label="Name"></button>`}
            </div>
            <p>
              Image formats like <span className="text-txtColor">WebP</span> and{" "}
              <span className="text-txtColor">AVIF</span> often provide better
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
