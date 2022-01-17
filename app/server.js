"use strict";
const { exec } = require("child_process");

const express = require("express");
const app = express();

// Constants
const PORT = process.env.PORT || 9991;
const HOST = process.env.HOST || "0.0.0.0";

const infos = {
  host: HOST,
  port: PORT,
  uris: {
    root: "/",
    poweroff: "/poweroff",
  },
};

// App
app.get("/", (req, res) => {
  return res.send(`Server command API - running on http://${HOST}:${PORT}`);
});

app.get("/poweroff", (req, res) => {
  exec("poweroff", (error, stdout, stderr) => {
    if (error) {
      return res.status(500).send(error.message);
    }
    if (stderr) {
      return res.status(500).send(stderr);
    }
    console.log(`stdout: ${stdout}`);
  });
});

// Start server
app.listen(PORT, HOST);
console.log(`Server command API - running on http://${HOST}:${PORT}`);
