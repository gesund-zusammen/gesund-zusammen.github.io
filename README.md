# gesundZusammen website

## Prerequisites

- yarn

## Local usage

- `yarn install` to install all necessary modules
- `yarn start` to run the app, it's accessible via http://localhost:4040 in the browser

### Optimized build

An optimized (minimized) build can be created locally with the following command:

```
yarn build:local
```

This creates the optimized app, using the `config/.env.local` configuration file. To serve the optimized app, run

```
yarn server:build
```

To build the app with production configuration (`config/.env.production`) run

```
yarn build
```

## Docker Image

Creating a docker image to serve this app is also possible:

```
docker build --no-cache --build-arg NODE_ENV=[local|production] --build-arg OPTIMIZED_BUILD=[true|false] -t helios-admin:latest .
docker run -p 80:4000 -d helios-admin:latest
```

## Releasing healthy-together.euc


```
first time
git clone git@github.com:gesund-zusammen/healthy-together.git
git remote add release git@github.com:gesund-zusammen/gesund-zusammen.github.io.git
git pull release
git merge release/master --allow-unrelated-histories
git push

futher on
git pull release master
... merge ...
git push
```
