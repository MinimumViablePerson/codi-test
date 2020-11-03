import Auth0Lock from 'auth0-lock'

export var Auth = (function () {
  var wm = new WeakMap()
  var privateStore = {}
  var lock

  function Auth() {
    lock = new Auth0Lock(
      process.env.REACT_AUTH0_DOMAIN,
      process.env.REACT_AUTH0_CLIENT_ID
    )
    wm.set(privateStore, {
      appName: 'example'
    })
  }

  Auth.prototype.getProfile = function () {
    return wm.get(privateStore).profile
  }

  Auth.prototype.authn = function () {
    // Listening for the authenticated event
    lock.on('authenticated', function (authResult) {
      // Use the token in authResult to getUserInfo() and save it if necessary
      lock.getUserInfo(authResult.accessToken, function (error, profile) {
        if (error) {
          // Handle error
          return
        }

        //we recommend not storing Access Tokens unless absolutely necessary
        wm.set(privateStore, {
          accessToken: authResult.accessToken
        })

        wm.set(privateStore, {
          profile: profile
        })
      })
    })
  }
  return Auth
})()
