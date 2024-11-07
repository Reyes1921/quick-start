import {TabView, TabPanel} from "primereact/tabview"
import {Clipboard} from "../clipboard/Clipboard"

export const Serverless = () => {
  return (
    <div className="p-0 md:p-5">
      <h2 className=" font-bold md:px-5 text-center md:text-left text-lg md:text-2xl font-sans text-txtColor">
        Códigos necesarios para los serverless
      </h2>

      <TabView className="font-sans">
        <TabPanel header="Netlify">
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              <span className="text-txtColor">Redirects</span>
            </p>
            <Clipboard defaultValue={"/*    /index.html   200"} />
            <p>
              Save a plain text file called{" "}
              <span className="text-txtColor">_redirects</span> without a file
              extension to the publish directory of your site.
            </p>
          </div>
        </TabPanel>
        <TabPanel header="Vercel">
          <div className="py-3 md:px-5 text-center md:text-left  text-lg">
            <p>
              <span className="text-txtColor">vercel.json</span>
            </p>
            <p>
              When the site is an express project you need to add a file called{" "}
              <span className="text-txtColor">vercel.json</span> with this.
            </p>
            <Clipboard
              rows={17}
              defaultValue={`{
  "version": 2,
  "builds": [
    {
      "src": "*.html",
      "use": "@vercel/static"
    },
    {
      "src": "*.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/"
    }
  ]
}`}
            />
          </div>
        </TabPanel>
      </TabView>
    </div>
  )
}
