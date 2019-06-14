
class ConnectorAsFile {
  constructor ({ queueBotSays }) {
    this.queueBotSays = queueBotSays
  }

  UserSays (msg) {
    const botMsg = { messageText: msg.messageText }
    this.queueBotSays(botMsg)
  }
}

module.exports = {
  PluginVersion: 1,
  PluginClass: ConnectorAsFile
}
