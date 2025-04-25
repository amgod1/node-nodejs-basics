import { rename as rename_fs } from "node:fs/promises"

import { isExist } from "../utils/isExist.js"

const rename = async (fromFileName, toFileName) => {
  try {
    const isFromExist = await isExist(fromFileName)
    const isToExist = await isExist(toFileName)

    if (!isFromExist || isToExist) throw new Error("FS operation failed")

    await rename_fs(fromFileName, toFileName)
  } catch (error) {
    console.error(error)
  }
}

const fromFileName = "./files/wrongFilename.txt"
const toFileName = "./files/properFilename.md"
await rename(fromFileName, toFileName)
