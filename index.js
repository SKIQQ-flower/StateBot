const path = require('node:path')
const { createServer } = require('vite')
const chalk = require('chalk')
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));


console.log(chalk.bgBlue.bold("== Starting project =="))
setup()

async function setup() {
    require('./Bot/index.js')
    await sleep()
    websiteSetup()
}

async function websiteSetup() {
    const dir = path.relative('./Website/', __dirname)

    const server = await createServer({
        // any valid user config options, plus `mode` and `configFile`
        configFile: false,
        root: dir,
        server: {
          port: 1337,
        },
    })

    await server.listen()
    server.printUrls()
}