const fs = require('fs');

function writeFile(fileName, content) {
    fs.writeFileSync(fileName, JSON.stringify(content), 'utf-8', (err)=> {
        if(err) {
            console.log(err);
        }
    })
}

function getPostData(req) {
    return new Promise((res, reject)=> {

        try {

            let body ='';

            req.on('data', (chunk)=> {
                body += chunk.toString();
            });

            req.on('end', () => {
                res(body);
            });

        } catch (error) {
            reject(error)
        }

    })
}


module.exports = {
    writeFile,
    getPostData
}