const AuthKey = 'SOMEAUTHKEY'

export const Config = {
  port: 5555,
  key: AuthKey,
  saltRound: 10,
  dev: true,
  userImagePath: '/upload',
  mongo: {
    prod: {
      host: 'localhost',
      username: 'root',
      password: '',
      port: 27017,
      database: 'nestdatabase'
    },
    dev: {
      host: 'localhost',
      username: 'root',
      password: '',
      port: 27017,
      database: 'nestdatabase'
    }
  },
  database: {
    prod: {
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3306,
      database: 'nestdatabase'
    },
    dev: {
      host: 'localhost',
      username: 'root',
      password: '',
      port: 3306,
      database: 'nestdatabase'
    }
  }
}