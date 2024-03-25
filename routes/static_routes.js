const express = require("express");
const path = require('path')

module.exports = function(app) {
    // routing for main website
    app.use(express.static(path.join(__dirname + '/../public/')))

    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/index.html"));
    });

    app.get("/search/*", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/search.html"));
    });

    app.get("/search", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/search.html"));
    });

    app.get("/convert", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/convert.html"));
    });

    app.get("/leaderboard", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/leaderboard.html"));
    });

    app.get("/statistics", (req, res) => {
        res.sendFile(path.join(__dirname + "/../public/statistics.html"));
    });
};