const parseArgs = (args) => {
  const parsedArgs = args
    .slice(2, args.length)
    .map((arg, index, array) => {
      if (arg.startsWith("--")) {
        const value = array[index + 1]
        if (value && !value.startsWith("--")) {
          return `${arg.replace("--", "")} is ${value}`
        }
        return `${arg.replace("--", "")} is undefined`
      }
      return null
    })
    .filter(Boolean)
    .join(", ")

  console.log(parsedArgs)
}

parseArgs(process.argv)
