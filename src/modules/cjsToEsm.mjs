import { sep } from "path"
import { release, version } from "os"
import { createServer as createServerHttp } from "http"
import { fileURLToPath } from "url"
import { dirname } from "path"
import "./files/c.cjs"

const random = Math.random()

let unknownObject

if (random > 0.5) {
  const { default: data } = await import("./files/a.json", {
    with: {
      type: "json",
    },
  })

  unknownObject = data
} else {
  const { default: data } = await import("./files/b.json", {
    with: {
      type: "json",
    },
  })

  unknownObject = data
}

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${sep}"`)

const fileName = fileURLToPath(import.meta.url)
const dirName = dirname(fileName)

console.log(`Path to current file is ${fileName}`)
console.log(`Path to current directory is ${dirName}`)

const myServer = createServerHttp((_, res) => {
  res.end("Request accepted")
})

const PORT = 3000

console.log(unknownObject)

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  console.log("To terminate it, use Ctrl+C combination")
})

export { unknownObject, myServer }
