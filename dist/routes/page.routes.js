"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const players = {
    vinicius: {
        name: "Vinícius Júnior",
        image: "/images/vini.jpg",
        stats: {
            matches: 40,
            goals: 20,
            assists: 10
        },
        titles: [
            "Champions League",
            "La Liga",
            "Copa del Rey"
        ]
    },
    bellingham: {
        name: "Jude Bellingham",
        image: "/images/bellingham.jpg",
        stats: {
            matches: 35,
            goals: 15,
            assists: 8
        },
        titles: [
            "Champions League",
            "Supercopa de España",
            "La Liga"
        ]
    },
    rodri: {
        name: "Rodri",
        image: "/images/rodri.jpg",
        stats: {
            matches: 40,
            goals: 5,
            assists: 10
        },
        titles: [
            "Champions League",
            "Premier League",
            "FA Cup"
        ]
    }
};
router.get('/', (req, res) => {
    res.render('index');
});
router.get('/vini', (req, res) => {
    res.render('vini', { player: players.vinicius });
});
router.get('/rodri', (req, res) => {
    res.render('rodri', { player: players.rodri });
});
router.get('/bellingham', (req, res) => {
    res.render('bellingham', { player: players.bellingham });
});
exports.default = router;
