import {Clipboard} from "../clipboard/Clipboard"

export const Package = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Comandos Básicos
      </h2>
      <div className="py-3 md:px-5 text-center md:text-left  text-lg">
        <article>
          <h3 className=" font-bold text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
            Identifying and Removing Unnecessary Dependencies
          </h3>
          <div className="mt-2">
            <Clipboard defaultValue={"npx depcheck"} />
          </div>
        </article>
        <article>
          <h3 className=" font-bold text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
            Installing Packages
          </h3>
          <div className="mt-2">
            <p>Local:</p>
            <Clipboard defaultValue={"npm install <package_name>"} />
            <p>Global:</p>
            <Clipboard defaultValue={"npm install -g <package_name>"} />
          </div>
        </article>
        <article>
          <h3 className=" font-bold text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
            Updating Packages
          </h3>
          <div className="mt-2">
            <p>Local:</p>
            <Clipboard defaultValue={"npm update <package_name>"} />
            <p>Global:</p>
            <Clipboard defaultValue={"npm update -g <package_name>"} />
            <p>Check Outdated Packages:</p>
            <Clipboard defaultValue={"npm outdated"} />
          </div>
        </article>
        <article className="mt-10">
          <h3 className=" font-bold text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
            How to list npm user-installed packages?
          </h3>
          <div className="mt-2">
            <p>List User-Installed Packages Locally:</p>
            <Clipboard defaultValue={"npm list"} />
            <p>List User-Installed Packages Globally:</p>
            <Clipboard defaultValue={"npm list -g --depth=0"} />
          </div>
          <a
            href="https://betterstack.com/community/questions/how-to-list-user-installed-npm-packages/"
            className="text-txtColor underline"
            target="_blank"
          >
            Mas Información
          </a>
        </article>
        <article className="mt-10">
          <h3 className=" font-bold text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
            Uninstalling packages and dependencies
          </h3>
          <Clipboard defaultValue={"npm uninstall lodash"} />
          <a
            href="https://docs.npmjs.com/uninstalling-packages-and-dependencies"
            className="text-txtColor underline"
            target="_blank"
          >
            Mas Información
          </a>
        </article>
      </div>
    </div>
  )
}
