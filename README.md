# KB-Primo-VE-Hide-New-User-If-Loggedin

**HideNewUserIfLoggedin service**: Hides the new user button from the top menu of Primo VE if the user is logged in.

# Create the package
* npm install
* npm run prepare

# Install in Primo VE
```bash
cd MYVIEW
npm install kb-primo-ve-hide-new-user-if-loggedin --save-dev
```

Add to bottom of `js/main.js`
```javascript
require('kb-primo-ve-hide-new-user-if-loggedin/dist/index.js');
```