# Setup environments

go to _client_ directory,
installs the dependencies using `npm install`
and run `npm start`

open another terminal session, go to the _server_ directory and run `go run server.go`

visit `http://localhost:8080`

### Tip for devs

- Use air cli to hot reload your go code.
  Use `go install github.com/air-verse/air@latest` to download cli

- i'hv used the `--watch` flag with `vite build` command in client to automatically trigger the build process. So that always latest code served from golang server.
