
const { St, Clutter } = imports.gi
const Main = imports.ui.main
const GLib = imports.gi.GLib

let panelButton

function init () {
  // Create a Button with "Hello World" text
  panelButton = new St.Bin({
    style_class: 'panel-button'
  })

  const panelButtonText = new St.Label({
    text: 'Hello World test',
    y_align: Clutter.ActorAlign.CENTER
  })

  panelButton.set_child(panelButtonText)

  GLib.timeout_add_seconds(GLib.PRIORITY_DEFAULT, 10, () => {
    panelButtonText.set_text('Jesus')
  })
}

function enable () {
  // Add the button to the panel
  Main.panel._rightBox.insert_child_at_index(panelButton, 0)
}

function disable () {
  // Remove the added button rrom panel
  Main.panel._rightBox.remove_child(panelButton)
}
