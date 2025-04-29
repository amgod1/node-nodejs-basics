import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { createHash } from "node:crypto"
import { createReadStream } from "node:fs"

const calculateHash = async (filePath) => {
  const hash = createHash("sha256")
  const input = createReadStream(filePath)

  await new Promise((resolve, reject) => {
    input.on("data", (chunk) => {
      hash.update(chunk)
    })

    input.on("end", () => {
      const finalHash = hash.digest("hex")
      console.log("SHA-256 Hash:", finalHash)
      resolve()
    })

    input.on("error", (error) => {
      console.log(error)
      reject()
    })
  })
}

const dirname = fileURLToPath(new URL(".", import.meta.url))
const filePath = join(dirname, "files", "fileToCalculateHashFor.txt")
await calculateHash(filePath)
