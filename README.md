# Express-TS Boilerplate
## Get started
### Docker
* `docker-compose up` to start a development server that watches for file changes and rebuilds/restarts.
### Locally w/out docker
* `npm run build` - outputs the transpiled js to the `dist` directory.
* `npm run start` - starts the server.
* `npm run dev` - restarts on file changes.
* `npm run dev-inspect` - uses `--inspect-brk` flag to enable Chrome debugging.

## Features
* [Pino](https://github.com/pinojs/pino) for logging
* [Dotenv](https://github.com/motdotla/dotenv) for environment variable management
* Restart on file change
