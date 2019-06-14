
const Capabilities = {
  CONNECTOR_AS_FILE_RESPONSE: 'CONNECTOR_AS_FILE_RESPONSE'
}


class ConnectorAsFile {
  constructor ({ queueBotSays, caps }) {
    this.queueBotSays = queueBotSays
    this.caps = caps
  }

  Validate () {
    if (!this.caps[Capabilities.CONNECTOR_AS_FILE_RESPONSE]) throw new Error('CONNECTOR_AS_FILE_RESPONSE capability required')
    return Promise.resolve()
  }

  UserSays (msg) {
    const botMsg = { messageText: this.caps[Capabilities.CONNECTOR_AS_FILE_RESPONSE] }
    this.queueBotSays(botMsg)
  }
}

module.exports = {
  PluginVersion: 1,
  PluginClass: ConnectorAsFile
}
