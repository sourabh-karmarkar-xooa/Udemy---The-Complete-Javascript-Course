const fs = require("fs");
const http = require("http");
const url = require("url");

const json = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
const laptopData = JSON.parse(json);

const server = http.createServer((req, res) => {
    const pathName = url.parse(req.url, true).pathname;
    const id = url.parse(req.url, true).query.id;

    // PRODUCTS OVERVIEW
    if (pathName === "/products" || pathName === "/") {
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        fs.readFile(
            `${__dirname}/templates/template-overview.html`,
            "utf-8",
            (err, data) => {
                let overviewOutput = data;

                fs.readFile(
                    `${__dirname}/templates/template-card.html`,
                    "utf-8",
                    (err, data) => {
                        const cardsOutput = laptopData
                            .map(el => replaceTemplate(data, el))
                            .join("");
                        console.log(cardsOutput);
                        overviewOutput = overviewOutput.replace(
                            "{%CARDS%}",
                            cardsOutput
                        );
                        res.end(overviewOutput);
                    }
                );
            }
        );
    }

    // LAPTOP DETAIL
    else if (pathName === "/laptop" && id < laptopData.length) {
        res.writeHead(200, {
            "Content-type": "text/html"
        });
        fs.readFile(
            `${__dirname}/templates/template-laptop.html`,
            "utf-8",
            (err, data) => {
                const laptopObj = laptopData[id];
                const output = replaceTemplate(data, laptopObj);
                res.end(output);
            }
        );
    }

    // IMAGES
    else if ((/\.(jpg|jpeg|png|gif)$/i).test(pathName)) {
        fs.readFile(`${__dirname}/data/img${pathName}`, (err, data) => {
            res.writeHead(200, {
                "Content-type": "image/jpg"
            });
            res.end(data);
        });
    }

    // URL NOT FOUND
    else {
        res.writeHead(404, {
            "Content-type": "text/html"
        });
        res.end("URL was not found on the server");
    }
});

const PORT = 1337;
server.listen(PORT, "localhost", () => {
    console.log(`Listening for requests now on PORT : ${PORT}`);
});

function replaceTemplate(originalHtml, laptop) {
    let output = originalHtml.replace(/{%PRODUCTNAME%}/gm, laptop.productName);
    output = output.replace(/{%IMAGE%}/gm, laptop.image);
    output = output.replace(/{%PRICE%}/gm, laptop.price);
    output = output.replace(/{%SCREEN%}/gm, laptop.screen);
    output = output.replace(/{%CPU%}/gm, laptop.cpu);
    output = output.replace(/{%STORAGE%}/gm, laptop.storage);
    output = output.replace(/{%RAM%}/gm, laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/gm, laptop.description);
    output = output.replace(/{%ID%}/gm, laptop.id);
    return output;
}