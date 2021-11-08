const clutter = imports.gi.Clutter
const glib = imports.gi.GLib
const main = imports.ui.main
const st = imports.gi.St

let bin

function init () {
  bin = new st.Bin({
    style_class: 'panel-button'
  })

  const label = new st.Label({
    text: 'init',
    y_align: clutter.ActorAlign.CENTER
  })

  bin.set_child(label)

  /** update label every 10 seconds */
  glib.timeout_add_seconds(glib.PRIORITY_DEFAULT, 10, () => {
    label.set_text('10 seconds')
  })
}

function enable () {
  /** add bin to main panel */
  main.panel._rightBox.insert_child_at_index(bin, 0)
}

function disable () {
  /** remove bin from main panel */
  main.panel._rightBox.remove_child(bin)
}
