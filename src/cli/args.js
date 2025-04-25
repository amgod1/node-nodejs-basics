const parseArgs = (args) => {
  const parsedArgs = args
    .slice(2, args.length)
    .split(" --")
    .map((pair) => pair.replace(" ", " is "))
    .join(", ")
  console.log(parsedArgs)
}

const args = "--propName value --prop2Name value2"
parseArgs(args)
