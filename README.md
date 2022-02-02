# Reproduction for [issue 30947](https://github.com/electron/electron/issues/30947)

This fork of [electron-quick-start](https://github.com/electron/electron-quick-start) provides reproduction for [issue 30947](https://github.com/electron/electron/issues/30947).

## To Use

```bash
# In Windows 10
# Clone this repository
git clone https://github.com/ben-yocum/electron-28828-repro.git
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start

# When pdf print dialog opens, choose a printer and attempt to print.
# Job is sent to printer but never printed. My Canon printer stalls. Other printers may print a blank page or throw an error.

# Alternatively, choose to print to Microsoft Print to PDF.
# The resulting document has filesize 0 and cannot be successfully opened by any pdf viewer.
```
