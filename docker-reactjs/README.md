https://medium.com/how-to-react/how-to-set-up-react-js-project-in-docker-d9e4aea80c38

# setup
when writing this, nodejs23 is broken, unable to create react app, switch back to version
22
```
$ source init-env-nodejs23.sh
$ npx create-react-app docker-reactjs
$ cd docker-reactjs
```

# start
```
$ docker compose up 
```

# check
1.
```
$ docker ps
```
2. http://localhost:3000/

# stop
```
1. docker stop
```
