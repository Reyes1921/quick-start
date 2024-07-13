export const Remate = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Revision Final
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <ul className="decoration-slice">
          <li>
            <p>
              Analizar el <span className="text-txtColor">CSS</span> en esta
              pagina{" "}
              <a
                href="https://www.projectwallace.com/css-code-quality"
                className="text-txtColor underline"
                target="_blank"
              >
                projectwallace
              </a>
              .
            </p>
          </li>
          <li>
            <p>
              Analizar el <span className="text-txtColor">SEO</span> con la
              extension <span className="text-txtColor">Meta Explorer</span>.
            </p>
          </li>
          <li>
            <p>
              Analizar los archivos no usados inspeccionando la pagina y viendo
              la sección <span className="text-txtColor">Coverage</span>.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
