// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

body {
    background: #ffffff;
    color: rgb(0, 0, 0);
}
button {
    width: 100px;
    height: 30px;
    border: 3px soldi rgb(0, 0, 0);
    border-radius: 50px;
    background: #ffffff;
    color: rgb(0, 0, 0);
    cursor: pointer;
    outline: none;
}

#stopwatch {
    font-size: 125px;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -55%);
}
#buttons {
    position: absolute;
    top: 55%;
    left: 48.4%;
    transform: translate(-51.6%, -45%);
}
#buttons li {
    display: inline;
    padding-left: 10px;
}
// Alternatively you can use CommonJS syntax:
// require('./commands')
