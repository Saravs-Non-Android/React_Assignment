const Guid = require("guid");
let listeners = {};

function dispatch(payload) {
    for (let id in listeners) {
        listeners[id](payload);
    }
}

function register(cb) {
    let id = Guid.create();
    listeners[id] = cb;
}

module.exports = {
    register: register,
    dispatch: dispatch
}