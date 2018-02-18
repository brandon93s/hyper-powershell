exports.decorateConfig = config => {
  // Set shell to PowerShell
  config.shell = 'C:\\WINDOWS\\System32\\WindowsPowerShell\\v1.0\\powershell.exe'

  // Hide the copyright banner at startup
  config.shellArgs = ['-NoLogo']

  return config
}