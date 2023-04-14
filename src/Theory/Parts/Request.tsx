import {render} from "react-dom";
import React from "react";
import { Http2ServerRequest } from "http2";

export const Request = ({}) => {
    /*const http = require('http');
    const postData = '{ "msg": 2, "task": "test"}';
        
      const options = {
        hostname: 'http://195.2.79.224:8080/v1/exchange',
        path: '/upload',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(postData)
        }
      };
      const req = http.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
      });
      req.write(postData);
      req.end();*/

    /*fetch(requestURL, {
        mode: 'no-cors',
        //credentials: 'include',
        method: 'POST',
        //headers: headers
      }).then(response => console.log(response))*/

    var requestURL = 'http://195.2.79.224:8080/v1/exchange';

    const xhr = new XMLHttpRequest();
    
    xhr.open('POST', requestURL);
    //xhr.setRequestHeader('Access-Control-Allow-Origin', '*');
    xhr.getAllResponseHeaders()
    //xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send('{score:2, task:"test"}');

    xhr.onload = function() {
        var superHeroes = xhr.response;
        console.log(superHeroes);
    }

    /*let headers = new Headers();

    headers.append('Content-Type', 'application/json');
    //headers.append('Accept', 'application/json');
  
   // headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    //headers.append('Access-Control-Allow-Credentials', 'true');
  
    //headers.append('Data', '{score:2, task:"test"}');
  
    fetch(requestURL, {
        mode: 'no-cors',
        //credentials: 'include',
        method: 'POST',
        headers: headers
      })
      .then(response => response.json())
      .then(json => console.log(json))*/
    return (
        <></>
   );
  };