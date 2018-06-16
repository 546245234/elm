const fs = require('fs');
const cp = require('child_process');

function createVerfiCode(w, h, str) {
    return new Promise((resolve, reject) => {
        cp.exec(`python 1.py ${w} ${h} ${str}`, function (err) {
            if (err) {
                reject(err);
            } else {
                fs.readFile('a.png', (err, buffer) => {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(buffer);
                    }
                });
            }
        });
    });
}

module.exports = createVerfiCode;
