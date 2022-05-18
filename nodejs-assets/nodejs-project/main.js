// Rename this sample file to main.js to use on your project.
// The main.js file will be overwritten in updates/reinstalls.

const rn_bridge = require('rn-bridge');
const level = require('level');
const path = require('path');

// Echo every message received from react-native.
rn_bridge.channel.on('message', msg => {
  rn_bridge.channel.send(msg);
});

// Create a database
const db = level(path.join(rn_bridge.app.datadir(), 'example'));

(async () => {
  await db.put('a', 'hello world');

  // Get value of key 'a': 'hello world'
  const value = await db.get('a');

  rn_bridge.channel.send(`Value of key 'a': ${value}`);
})();
