#! /usr/bin/env node

// const fs = require('fs');
// const request = require('request');
// const parser = require('xml2json');

// // Make network request
// request('http://www.google.com', function (error, response, body) {
//   console.log('statusCode:', response && response.statusCode);
// });

// // Read and parse json from file system
// let json = JSON.parse(fs.readFileSync('./data.json'));
// console.log(json.author);
// console.log(json.journal.name);

// // Write data to a file
// fs.writeFile("hello.txt", "hello\n", (err) => {
//   if (err) throw new Error('File error: ' + err);
// });



// Convert XML to JSON
// var json = parser.toJson(fs.readFileSync('./data.json'));
// console.log(json);

// var parseString = require('xml2js').parseString;
// var xml = "<root>Hello xml2js!</root>"
// parseString(xml, function (err, result) {
//   console.dir(result);
// });

// Convert XML to JSON


// const fpath = process.argv[2];
// var json = parser.toJson(fs.readFileSync(fpath));
// console.log(json);


const fs = require('fs'),
      x2j = require('xml2js');

      // Small
const sInputFile = "./xml4json-sample-small-chinese.xml"

// BIG
// const sInputFile = "./xml4json-sample.xml";

const p = new x2j.Parser();
const sXMLData = fs.readFileSync(sInputFile, 'utf8');

p.parseString(sXMLData, function (err, result) {


  const keywords = result.xml.records[0].record[0].keywords[0].keyword.map(k => k.style[0]._);
  console.log(keywords);
  
  const title = result.xml.records[0].record[0].titles[0].title[0].style[0]._;
  const author = result.xml.records[0].record[0].contributors[0].authors[0].author[0].style[0]._;
  console.log(JSON.stringify(title, undefined, 3));


  // fs.writeFile(sInputFile + '.json', JSON.stringify(result, undefined, 3), (err) => {
  //   if (err) throw new Error('File error: ' + err);
  // });

  // const s = JSON.stringify(result, undefined, 3);
  // console.log("Result" + "\n", s, "\n");
});