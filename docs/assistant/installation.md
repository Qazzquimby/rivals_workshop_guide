# Installation

## Plugin Installation

### VSCode

1. Download and install [VSCode](https://code.visualstudio.com/).
2. Open the extension manager (Ctrl+Shift+X), search for and install Rivals Workshop Assistant.

That's it. For a better experience, also install `rivals of aether gml support` the same way, for highlighting and
completion.

### GMEdit

The GMEdit plugin is a bit more difficult to install, and currently doesn't automatically update.

1. Go to
   the [plugin's release page](https://github.com/Rivals-Workshop-Community-Projects/rivals-workshop-assistant-gmedit/releases)
   .
2. Download the 'rivals-workshop-assistant-gmedit.zip' from the most recent release.
3. In GMEdit preferences, near the bottom, click 'Plugins directory' to open the plugins directory.
4. Extract the zip file into the plugins directory.
5. Close and reopen GMEdit to load the plugin.

## Configuration

The next time you save a file in the editor with the plugin, it will create an `assistant` directory.

Inside is `assistant_config.yaml`.

Set the path to your `aseprite.exe` to enable automatic animation exporting.

## Usage

The editor must open the root folder for the project, containing the `config.ini` file. If an individual file or
subfolder is opened, the Assistant won't run. Let me know if this is annoying for you and I can look at changing it.

## Troubleshooting

### Nothing happening

If the Assistant is installed and is loaded, there should be an error message in the developer tools console.

The developer tools console can be opened with **Ctrl+Shift+I** or

- **GMEdit**: Top left dropdown -> Dev Tools
- **Vscode**: Help -> Toggle Developer Tools

If that error message doesn't point to a clear solution, contact me.

If there is nothing related to the assistant in there, it's not installed yet. If you just installed it, try restarting
the editor.

### Something unwanted happened to my files

If it's a minor inconvenience in a gml file, consider writing `// NO-INJECT` somewhere in the file, to disable
processing. Please let me know if something's misbehaving.

If it's serious, like data loss, please tell me **immediately.**

Every day, the Assistant will make a backup to `/assistant/backup`. You can fetch the backup and disable the plugin.

### Antivirus detection

Antivirus tools tend to distrust unknown exes that read and modify files, and even download another exe when updating.

There's not a lot I can do about that, I think. Try marking the file as an exception in the antivirus.

If you're cautious, you can compile the exe yourself with the build
script [here](https://github.com/Rivals-Workshop-Community-Projects).

If enough people have trouble with it, I can look for an alternative method of building the exe, which might help.

