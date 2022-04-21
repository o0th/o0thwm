const Lang = imports.lang;

function init () {

  global.display.connect('window-created', Lang.bind(this, this.update))
}

function update() {
  const workspace = global.workspace_manager.get_active_workspace()
  const windows = workspace.list_windows()

  log(windows)
}

function enable () {
  log('enable')
}

function disable () {
  log('disable')
}
