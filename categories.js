const categories = [
    {
        "code": "A",
        "subCategories": [{
            "code": "A1",
            "subCategories": [{
                "code": "A101",
                "title": "Nahrung KH"
            }, {
                "code": "A102",
                "title": "Bekleidung KH"
            }, {
                "code": "A103",
                "title": "Medizinische Behandlung KH"
            }, {
                "code": "A104",
                "title": "Bildung KH"
            }, {
                "code": "A105",
                "title": "Haushaltbedarf KH"
            }, {
                "code": "A106",
                "title": "Fahrten KH"
            }, {
                "code": "A107",
                "title": "Taschengeld KH"
            }, {
                "code": "A108",
                "title": "Sonstige Ausgaben KH"
            }, {
                "code": "A110",
                "title": "Ausbau der Alage"
            }
            ],
            "title": "Versorgung der Weisenkinder"
        }, {
            "code": "A2",
            "subCategories": [{
                "code": "A201",
                "title": "Nahrung Frw"
            }, {
                "code": "A202",
                "title": "Haushaltbedarf Frw"
            }, {
                "code": "A203",
                "title": "Medizinische Behandlung der deutsche Mitarbeiter"
            }, {
                "code": "A204",
                "title": "Aufenthaltsgenehmigung/Visa Frw"
            }, {
                "code": "A205",
                "title": "Fahrten Frw/Miss"
            }, {
                "code": "A206",
                "title": "Taschengeld Frw"
            }, {
                "code": "A207",
                "title": "Verpflegungskosten Frw/Miss"
            }, {
                "code": "A208",
                "title": "Sonstige Ausgaben Frw"
            }
            ],
            "title": "Verorgung der Freiwiligen/Missionaren"
        }, {
            "code": "A3",
            "subCategories": [{
                "code": "A301",
                "title": "Nahrung Gruppe"
            }, {
                "code": "A302",
                "title": "Medizinische Behandlung Gruppe"
            }, {
                "code": "A303",
                "title": "Fahrten Gruppe"
            }, {
                "code": "A304",
                "title": "Einladungen Gruppe"
            }, {
                "code": "A305",
                "title": "Sonstige Ausgaben Gruppe"
            }
            ],
            "title": "Versorgung der Gruppen "
        }, {
            "code": "A4",
            "subCategories": [{
                "code": "A401",
                "title": "Timothée MBONAMIRI DJOUKOU DALI"
            }, {
                "code": "A402",
                "title": "Laurence GNECHEJI"
            }, {
                "code": "A403",
                "title": "Zéphyrin NDONGO NDOUMO"
            }, {
                "code": "A404",
                "title": "David LEKAMA"
            }, {
                "code": "A405",
                "title": "Célestin ENDONG ABANDA"
            }, {
                "code": "A406",
                "title": "Roland BENGONDO BIWOLE"
            }, {
                "code": "A407",
                "title": "Marie Madeleine ENDONG"
            }, {
                "code": "A408",
                "title": "Pélagie Gypsi MOLOULA"
            }, {
                "code": "A409",
                "title": "Jakob BAIMA NEBEU"
            }, {
                "code": "A410",
                "title": "Yves BILINGA BOUKA "
            }, {
                "code": "A411",
                "title": "Hausman YANGDA"
            }, {
                "code": "A412",
                "title": "Roméo MBIANKOANS TSALE"
            }, {
                "code": "A413",
                "title": "Joseph BEN"
            }, {
                "code": "A414",
                "title": "Hmadou Henry "
            }, {
                "code": "A417",
                "title": "Arbeitsversicherung "
            }, {
                "code": "A418",
                "title": "Steuer"
            }, {
                "code": "A419",
                "title": "Steuerberatung"
            }, {
                "code": "A420",
                "title": "Sonstige Löhne"
            }
            ],
            "title": "Löhne Mitarbeiter "
        }, {
            "code": "A5",
            "subCategories": [{
                "code": "A501",
                "title": "Löhne Tagelöhner"
            }, {
                "code": "A502",
                "title": "Mitarbeiter mit Freiwilligen Verträgen "
            }
            ],
            "title": "Löhne Tagelöhner/ Freiwillige "
        }, {
            "code": "A6",
            "subCategories": [{
                "code": "A601",
                "title": "Nahrung der Mitarbeiter"
            }, {
                "code": "A602",
                "title": "Bekleidung der Mitarbeiter "
            }, {
                "code": "A603",
                "title": "Medizienische Behandlung der Mitarbeiter"
            }, {
                "code": "A604",
                "title": "Fahrten der Mitarbeiter"
            }, {
                "code": "A605",
                "title": "Übernachtung der Mitarbeiter"
            }, {
                "code": "A606",
                "title": "Telefonkosten der Mitarbeiter"
            }
            ],
            "title": "Verpflegung der Einheimischen Mitarbeiter "
        }, {
            "code": "A7",
            "subCategories": [{
                "code": "A701",
                "title": "Bürozubehör"
            }, {
                "code": "A702",
                "title": "Telefonkosten "
            }, {
                "code": "A703",
                "title": "CNPS"
            }, {
                "code": "A704",
                "title": "Impôt"
            }, {
                "code": "A705",
                "title": "Sonstiges Verwaltung "
            }
            ],
            "title": "Verwaltung"
        }, {
            "code": "A8",
            "subCategories": [{
                "code": "A801",
                "title": "Anschaffung Kraftfahrzeuge"
            }, {
                "code": "A802",
                "title": "Reparatur und pflege Fuhrpark"
            }, {
                "code": "A803",
                "title": "TÜV, Versicherung, Steuer Furpark"
            }, {
                "code": "A804",
                "title": "Treibstoff Fuhrpark"
            }, {
                "code": "A805",
                "title": "Maut und Parkgebühren"
            }, {
                "code": "A806",
                "title": "Sonstiges Fuhrpark"
            }
            ],
            "title": "Fuhrpark"
        }, {
            "code": "A9",
            "subCategories": [{
                "code": "A901",
                "title": "Srtomkosten"
            }, {
                "code": "A902",
                "title": "Kraftstoff Generator"
            }, {
                "code": "A903",
                "title": "Reparatur und Pflege Generator"
            }, {
                "code": "A904",
                "title": "Reparatur und Pflege PV"
            }, {
                "code": "A905",
                "title": "Elektroinstalation und Wartung"
            }, {
                "code": "A906",
                "title": "Gasflaschen "
            }, {
                "code": "A907",
                "title": "Sonstiges Strom und Wasserversorgung"
            }, {
                "code": "A908",
                "title": "Wasserkosten"
            }
            ],
            "title": "Strom Gas und Wasserversorgung "
        }
        ],
        "title": "Haus der Hoffnung "
    },
    {
        "code": "B",
        "subCategories": [{
            "code": "B1",
            "subCategories": [{
                "code": "B101",
                "title": "Haus Dimako"
            }, {
                "code": "B102",
                "title": "Haus Longtimbi"
            }
            ],
            "title": "Gebäudebau/Kauf"
        }, {
            "code": "B2",
            "subCategories": [{
                "code": "B201",
                "title": "Gebäud und Grünstückspflege"
            }, {
                "code": "B202",
                "title": "Sonstiges Gemeinde"
            }, {
                "code": "B203",
                "title": "Strom Gas und Wasserversorgung "
            }
            ],
            "title": "Gebäude und Grünstückpflege"
        }, {
            "code": "B3",
            "subCategories": [{
                "code": "B301",
                "title": "Essen Gem."
            }, {
                "code": "B302",
                "title": "Transport Gem."
            }, {
                "code": "B303",
                "title": "Sonstiges Gem."
            }, {
                "code": "B304",
                "title": "Sonstiges Gemeinde Gem"
            }
            ],
            "title": "Gemeindeveranstaltungen"
        }, {
            "code": "B4",
            "subCategories": [{
                "code": "B401",
                "title": "Essen Sem."
            }, {
                "code": "B402",
                "title": "Transport Sem."
            }, {
                "code": "B403",
                "title": "Sonstiges Sem."
            }, {
                "code": "B406",
                "title": "Sonstiges Gemeinde"
            }
            ],
            "title": "Seminare"
        }
        ],
        "title": "Gemeinde und Kinderarbeit "
    },
    {
        "code": "D",
        "subCategories": [{
            "code": "D1",
            "subCategories": [{
                "code": "D101",
                "title": "Nahrung SK"
            }, {
                "code": "D102",
                "title": "Bekleidung SK"
            }, {
                "code": "D103",
                "title": "Medizinische Behandlung SK"
            }, {
                "code": "D104",
                "title": "Bildung SK"
            }, {
                "code": "D105",
                "title": "Haushaltbedarf SK"
            }, {
                "code": "D106",
                "title": "Fahrten SK"
            }, {
                "code": "D107",
                "title": "Taschengeld SK"
            }, {
                "code": "D108",
                "title": "Sonstige Ausgaben SK"
            }
            ],
            "title": "Versorgung der Straßenkinder"
        }, {
            "code": "D2",
            "subCategories": [{
                "code": "D201",
                "title": "Nahrung der Mitarbeiter SK"
            }, {
                "code": "D202",
                "title": "Bekleidung der Mitarbeiter SK"
            }, {
                "code": "D203",
                "title": "Medizienische Behandlung der Mitarbeiter SK"
            }, {
                "code": "D204",
                "title": "Fahrten der Mitarbeiter SK"
            }, {
                "code": "D205",
                "title": "Übernachtung der Mitarbeiter SK"
            }, {
                "code": "D206",
                "title": "Telefonkosten SK"
            }, {
                "code": "D207",
                "title": "Sonstiges SK"
            }
            ],
            "title": "Verpflegung der Mitarbeiter "
        }, {
            "code": "D3",
            "subCategories": [{
                "code": "D301",
                "title": "Verwaltungskosten SK"
            }, {
                "code": "D302",
                "title": "Gebäudemietkosten SK"
            }, {
                "code": "D303",
                "title": "Gebäudepflege SK"
            }, {
                "code": "D304",
                "title": "Gebäudeausstatung SK"
            }, {
                "code": "D305",
                "title": "Landschafsanbau und pflege SK"
            }, {
                "code": "D306",
                "title": "Gebäude Nr.1 SK"
            }
            ],
            "title": "Bau/Verwaltung der Gebäuden"
        }
        ],
        "title": "Straßenkinder"
    },
    {
        "code": "E",
        "subCategories": [{
            "code": "E1",
            "subCategories": [{
                "code": "E101",
                "title": "Gebäudemietkosten GFP"
            }, {
                "code": "E102",
                "title": "Gebäudekauf GFP"
            }, {
                "code": "E103",
                "title": "Gebäudepflege  GFP"
            }, {
                "code": "E104",
                "title": "Bürozubehör GFP"
            }, {
                "code": "E105",
                "title": "Fahrten GFP"
            }, {
                "code": "E106",
                "title": "Verpflegung und Übernachtung GFP"
            }, {
                "code": "E107",
                "title": "Sonstiges GFP"
            }, {
                "code": "E108",
                "title": "Bau   GFP"
            }
            ],
            "title": "Verwaltung der Gebäuden"
        }, {
            "code": "E2",
            "subCategories": [{
                "code": "E201",
                "title": "Medikamente GFP"
            }, {
                "code": "E202",
                "title": "Untersuchungen GFP"
            }, {
                "code": "E203",
                "title": "Behandlungen GFP"
            }, {
                "code": "E204",
                "title": "OP's GFP"
            }, {
                "code": "E205",
                "title": "Lebensmittel für Bedürftige GFP"
            }, {
                "code": "E206",
                "title": "Behandlungen Physotherapie GFP"
            }, {
                "code": "E207",
                "title": "Chirurgischer Projekt GFP"
            }, {
                "code": "E208",
                "title": "Patenschaften"
            }, {
                "code": "E211",
                "title": "Sonstiges GFP"
            }
            ],
            "title": "Hilfen und Behandlungen "
        }
        ],
        "title": "GFP"
    },
    {
        "code": "F",
        "subCategories": [{
            "code": "F1",
            "subCategories": [{
                "code": "F101",
                "title": "Verwaltung"
            }, {
                "code": "F102",
                "title": "Arbeitsmaterial"
            }, {
                "code": "F103",
                "title": "Sonstiges"
            }
            ],
            "title": "Feld Toungrelo"
        }
        ],
        "title": "Projekte"
    },
    {
        "code": "G",
        "subCategories": [{
            "code": "G1",
            "subCategories": [{
                "code": "G101",
                "title": "Spenden an Hilfsbedürftigen"
            }, {
                "code": "G102",
                "title": "Wasserversorgung "
            }
            ],
            "title": "Spenden an Hilfsbedürftigen"
        }
        ],
        "title": "Spenden an Hilfsbedürftigen"
    }
];