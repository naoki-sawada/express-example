# express example

## Table of Contents

- [About](#about)
- [Requirements](#requirements)
- [Install](#install)
- [Usage](#usage)
- [Contribute](#contribute)
- [License](#license)

## About

Example code for express.

## Requirements

* Node.js v8.9.1 or heiher

## Install

```
$ npm install
```

## Usage

```
$ npm start
```

### cURL Example

```
$ curl -d '{"text":"This is the test!"}' -H "Content-Type: application/json" -X POST http://localhost:3000/message
```

### For Docker

```
$ docker image build -t express-example:latest -f Dockerfile .
```

## Contribute

Open an [issue](https://github.com/naoki-sawada/express-example/issues/new) or submit [PRs](https://github.com/naoki-sawada/express-example/pulls).

## License

[MIT](LICENSE).