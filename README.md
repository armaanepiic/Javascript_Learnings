# Javascript_Learnings
From today I started learning JS again in a motivated way. I hope i will finish it with success.
# Tailwind setup
1. npm init -y : package.json
2. npm install -D tailwindcss : node modules, package-lock.json
3. npx tailwindcss init : tailwind.config.js
4. tailwind.config.js -> content: ["./*.html"]
5. package.json -> scripts": {
    "build": "tailwindcss -i ./input.css -o ./css/style.css",
    "watch": "tailwindcss -i ./input.css -o ./css/style.css --watch"
  }
6. npm run build : css folder
7. create index.html -> <link rel="stylesheet" href="css/style.css">
8. npm run watch
 