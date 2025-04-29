import { join } from "node:path"
import { spawn } from "node:child_process"
import { fileURLToPath } from "node:url"

const dirname = fileURLToPath(new URL(".", import.meta.url))

const spawnChildProcess = async (args) => {
  const child = spawn("node", [join(dirname, "files", "script.js"), ...args], {
    stdio: ["pipe", "pipe", "inherit"],
  })

  process.stdin.pipe(child.stdin)

  child.stdout.pipe(process.stdout)
}

spawnChildProcess([1, 2, 3, 4, 5])
