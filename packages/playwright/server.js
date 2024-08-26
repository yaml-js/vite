const express = require('express');
const path = require('path');
const glob = require('glob');
const process = require('process');

// Get command-line arguments (node, script, port, ...folders)
const [,, port, ...folderPatterns] = process.argv;

if (!port || folderPatterns.length === 0) {
  console.error('Usage: node server.js <port> <folder_glob1> <folder_glob2> ...');
  process.exit(1);
}

const app = express();
const options = {
  index: "index.html"
};

// Serve static files for each folder matching the glob patterns
folderPatterns.forEach(pattern => {
  const folders = glob.sync(pattern);

  folders.forEach(folder => {
    const folderName = path.basename(folder);
    const parentFolderName = path.basename(path.dirname(folder));

    let servePath;

    if (folderName === 'dist' || folderName === 'build') {
      servePath = `/${parentFolderName}`;
    } else {
      servePath = `/${folderName}`;
    }

    console.log(`Serving ${folder} at http://localhost:${port}${servePath}`);
    app.use(servePath, express.static(path.resolve(folder), options));
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
