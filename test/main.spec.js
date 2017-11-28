/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../public')));
app.use(express.static(path.join(__dirname, '/../dist')));

app.listen(3000);

const url = 'http://localhost:3000';


describe('express', () => {
  beforeEach(() => {
    nightmare = new Nightmare();
  });

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
