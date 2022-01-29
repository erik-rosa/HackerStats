# HackerStats

initial setup using: https://www.youtube.com/watch?v=8OCEfOKzpAw 




For development: 
    `npm run dev` to run a continously refreshing webserver
For production: 
    `npm run build` to build the extension once
To test popup in a chrome tab:
    visit `chrome-extension://kkmnnnpehkplnobbjmcieibbcailopnn/popup.html`
Miscelaneous Notes:
    - Entry point for react code is popup.html 
    - All other files should be built using  the rules for js and jsx files 
    - popup.jsx is main react component (app level)
    - `run dev` and `run build` commands utilize webpack to convert react code into browser readable code (HTML,JS,CSS). code gets generated into the `dist` folder 
    - To open in chrome: 
        1. Load Unpacked
        2. Select dist folder


