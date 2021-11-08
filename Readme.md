Documentation

```bash
https://gjs-docs.gnome.org
```

Reload gnome shell without logging out

```bash
busctl --user call org.gnome.Shell /org/gnome/Shell org.gnome.Shell Eval s 'Meta.restart("Restarting…")'
```

Logs

```bash
journalctl -f -o cat /usr/bin/gnome-shell
```
