import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { createReadStream, createWriteStream } from "node:fs"
import { createGzip } from "node:zlib"

const compress = async () => {
  const dirname = fileURLToPath(new URL(".", import.meta.url))

  const sourcePath = join(dirname, "files", "fileToCompress.txt")
  const destPath = join(dirname, "files", "archive.gz")

  const readStream = createReadStream(sourcePath)
  const writeStream = createWriteStream(destPath)
  const gzip = createGzip()

  return new Promise((resolve, reject) => {
    readStream.pipe(gzip).pipe(writeStream).on("finish", resolve).on("error", reject)
  })
}

await compress()
