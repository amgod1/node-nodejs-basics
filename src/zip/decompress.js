import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { createReadStream, createWriteStream } from "node:fs"
import { createGunzip } from "node:zlib"

const decompress = async () => {
  const dirname = fileURLToPath(new URL(".", import.meta.url))

  const archivePath = join(dirname, "files", "archive.gz")
  const outputPath = join(dirname, "files", "fileToCompress.txt")

  const readStream = createReadStream(archivePath)
  const writeStream = createWriteStream(outputPath)
  const gunzip = createGunzip()

  return new Promise((resolve, reject) => {
    readStream.pipe(gunzip).pipe(writeStream).on("finish", resolve).on("error", reject)
  })
}

await decompress()
