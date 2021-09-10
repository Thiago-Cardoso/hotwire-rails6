# Tweets hotwire

Development of project using Hotwire with Rails 6 and docker together Redis, base Onebitcode and Go Rails.


## Screen

<img src="https://github.com/Thiago-Cardoso/hotwire-rails6/blob/main/app/assets/images/screen.png" width="663" height="566">

## Log Turbo Stream

<img src="https://github.com/Thiago-Cardoso/hotwire-rails6/blob/main/app/assets/images/log.png" width="1352" height="209">


## Stack the Project

- **Ruby on Rails 6**
- **Docker**
- **HotWire**
- **Postgresql**
- **Redis**


## Index

- [Requirements](#requirements)
- [First steps](#first-steps)

### Requirements

You must have installed on your machine:

- Docker
- Docker Compose

## First steps


Follow the instructions to have a project present and able to run it locally.

After copying the repository to your machine, go to the project's root site and:


1.  Construct the container

```
docker-compose build
```

2.  Create of Database

```
docker-compose run --rm website bundle exec rails db:create db:migrate
```

3.  up the project

```
docker-compose up
```


## Licença

This project is licensed under a MIT - see file [LICENSE](LICENSE) for more details
