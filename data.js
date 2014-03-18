var cars = [
    { year: 2012, make: "Ferrari", model: "California" },
    { year: 2011, make: "BMW", model: "325is" },
    { year: 2010, make: "Mini", model: "Cooper S" },
    { year: 2012, make: "Chevy", model: "Cavalier" },
    { year: 2011, make: "BMW", model: "R100RS" },
    { year: 2010, make: "Ford", model: "Bronco" },
    { year: 2012, make: "Dodge", model: "Dart" },
    { year: 2010, make: "Volkswagen", model: "Thing" },
    { year: 2012, make: "Volkswagen", model: "Super Beetle" },
    { year: 2011, make: "Mini", model: "Clubman" },
    { year: 2010, make: "Mini", model: "Countryman" },
    { year: 2009, make: "Porsche", model: "Boxster" },
    { year: 2013, make: "Porsche", model: "911" }
];

var emptyList = [];

var makedata = [
    { text: "BMW"        , value:"1"},
    { text: "Chevy"      , value:"2"},
    { text: "Dodge"      , value:"3"},
    { text: "Ferrari"    , value:"4"},
    { text: "Ford"       , value:"5"},
    { text: "Mini"       , value:"6"},
    { text: "Porsche"    , value:"7"},
    { text: "Volkswagen" , value:"8"}
];

var BMWModels = [
    { model: "325is" , value: "1" },
    { model: "R100RS", value: "2" }
];

var ChevyModels = [
    { model: "Cavalier", value: "1" },
    { model: "Camaro"  , value: "2" }
];

var DodgeModels = [
    { model: "Dart"    , value: "1"},
    { model: "Charger" , value: "2" }
];

var FerrariModels = [
    { model: "F12berlinetta", value: "1" },
    { model: "California"   , value: "2" }
];

var FordModels = [
    { model: "Mustang", value: "1" },
    { model: "Fiesta" , value: "2" }
];

var MiniModels = [
    { model: "Cooper"    , value: "1" },
    { model: "Cooper S"  , value: "2" },
    { model: "Clubman"   , value: "3" },
    { model: "Countryman", value: "4" }
];

var PorscheModels = [
    { model: "Boxster", value: "1" },
    { model: "911"    , value: "2" }
];

var VolkswagenModels = [
    { model: "Beetle", value: "1" },
    { model: "Thing" , value: "2" }
];

var Colors = [
    { color: "Red"  , value: "1" },
    { color: "White", value: "2" },
    { color: "Blue" , value: "3" },
    { color: "Black", value: "4" }
];

var Ships = [
     { name: "USS Akira", registry: "NX-62497" },
     { name: "USS Gryphon", registry: "NCC-65550" },
     { name: "USS Rabin", registry: "NCC-63574" },
     { name: "USS Thunderchild", registry: "NCC-63549" },
     { name: "USS Geronimo", registry: "NCC-69302" },
     { name: "USS Leyte Gulf", registry: "NCC-71427" },
     { name: "USS Dakota", registry: "NCC-63892" },
     { name: "USS Devore", registry: "NCC-64088" },
     { name: "USS Adelphi", registry: "NCC-26849" },
     { name: "USS Ambassador", registry: "NCC-10521" },
     { name: "USS Enterprise", registry: "NCC-1701-C" },
     { name: "USS Excalibur", registry: "NCC-26517" },
     { name: "USS Exeter", registry: "NCC-26531" },
     { name: "USS Gandhi", registry: "NCC-26632" },
     { name: "USS Horatio", registry: "NCC-10532" },
     { name: "USS Yamaguchi", registry: "NCC-26510" },
     { name: "USS Valdemar", registry: "NCC-26198" },
     { name: "USS Zhukov", registry: "NCC-62136" },
     { name: "USS Drake", registry: "NCC-70956" },
     { name: "USS Prokofiev", registry: "NCC-68814" },
     { name: "USS Bradbury", registry: "NX-72307" },
     { name: "USS Armstrong", registry: "NCC-57537" },
     { name: "USS Buran", registry: "NCC-57580" },
     { name: "USS Kearsarge", registry: "NCC-57566" },
     { name: "USS Constellation", registry: "NCC-1974" },
     { name: "USS Gettysburg", registry: "NCC-3890" },
     { name: "USS Hathaway", registry: "NCC-2593" },
     { name: "USS Magellan", registry: "NCC-3069" },
     { name: "USS Stargazer", registry: "NCC-2893" },
     { name: "USS Victory", registry: "NCC-9754" },
     { name: "USS Constellation", registry: "NCC-1017" },
     { name: "USS Constitution", registry: "NCC-1700" },
     { name: "USS Defiant", registry: "NCC-1764" },
     { name: "USS Excalibur", registry: "NCC-1664 " },
     { name: "USS Exeter", registry: "NCC-1672 " },
     { name: "USS Farragut", registry: "NCC-1647 " },
     { name: "USS Hood", registry: "NCC-1703 " },
     { name: "USS Intrepid", registry: "NCC-1631 " },
     { name: "USS Lexington", registry: "NCC-1709 " },
     { name: "USS Potemkin", registry: "NCC-1657 " },
     { name: "USS Yorktown", registry: "NCC-1717" },
     { name: "USS Pegasus", registry: "NCC-1702" },
     { name: "USS Archon", registry: "NCC-189 " },
     { name: "USS Carolina", registry: "NCC-160 " },
     { name: "USS Essex", registry: "NCC-173" },
     { name: "USS Horizon", registry: "NCC-176 " },
     { name: "USS Defiant", registry: "NX-74205" },
     { name: "USS Defiant", registry: "NCC-75633" },
     { name: "USS Valiant", registry: "NCC-74210" },
     { name: "USS Rotherham", registry: "NCC-75322" },
     { name: "USS Maltby", registry: "NCC-74211" },
     { name: "USS Spitfire", registry: "NCC-1940-G" },
     { name: "USS Sheffield", registry: "NCC-1982-F" },
     { name: "USS Yorkshire", registry: "NCC-77777" },
     { name: "USS Arcos", registry: "NCC-6237" },
     { name: "USS LaSalle", registry: "NCC-6203" },
     { name: "USS Al-Batani", registry: "NCC-42995" },
     { name: "USS Berlin", registry: "NCC-14232" },
     { name: "USS Cairo", registry: "NCC-42136" },
     { name: "USS Charleston", registry: "NCC-42285" },
     { name: "USS Crazy Horse", registry: "NCC-50446" },
     { name: "USS Crockett", registry: "NCC-38955" },
     { name: "USS Enterprise", registry: "NCC-1701-B" },
     { name: "USS Excelsior", registry: "NCC-2000" },
     { name: "USS Fearless", registry: "NCC-14598" },
     { name: "USS Fredrickson", registry: "NCC-42111" },
     { name: "USS Gorkon", registry: "NCC-40512" },
     { name: "USS Grissom", registry: "NCC-42857" },
     { name: "USS Potemkin", registry: "NCC-18253" },
     { name: "USS Intrepid", registry: "NCC-38907" },
     { name: "USS Lakota", registry: "NCC-42768" },
     { name: "USS Malinche", registry: "NCC-38997" },
     { name: "USS Melbourne", registry: "NCC-62043" },
     { name: "USS Repulse", registry: "NCC-2544" },
     { name: "USS Roosevelt", registry: "NCC-2573" },
     { name: "USS Challenger", registry: "NCC-71099" },
     { name: "USS Dauntless", registry: "NCC-71879" },
     { name: "USS Enterprise", registry: "NCC-1701-D" },
     { name: "USS Excalibur", registry: "NCC-26517-A" },
     { name: "USS Galaxy", registry: "NCC-70637" },
     { name: "USS London", registry: "NCC-2012-C" },
     { name: "USS Odyssey", registry: "NCC-71832" },
     { name: "USS San Francisco", registry: "NCC-69480" },
     { name: "USS Trident", registry: "NCC-31347" },
     { name: "USS Venture", registry: "NCC-71854" },
     { name: "USS Yamato", registry: "NCC-71807" },
     { name: "USS Zeus", registry: "NCC-800542" },
     { name: "USS Bellerophon", registry: "NCC-74705" },
     { name: "USS Intrepid", registry: "NX-74600" },
     { name: "USS Voyager", registry: "NCC-74656" },
     { name: "USS Brittain", registry: "NCC-21166" },
     { name: "USS Helin", registry: "NCC-1692" },
     { name: "USS Lantree", registry: "NCC-1837" },
     { name: "USS Majestic", registry: "NCC-31060" },
     { name: "USS Miranda", registry: "NX-1800" },
     { name: "USS Nautilus", registry: "NCC-1833" },
     { name: "USS Reliant", registry: "NCC-1864" },
     { name: "USS Saratoga", registry: "NCC-1867" },
     { name: "USS Saratoga", registry: "NCC-31911" },
     { name: "USS Saratoga", registry: "NCC-31911-A" },
     { name: "USS ShirKahr", registry: "NCC-31905" },
     { name: "USS Sitak", registry: "NCC-1924" },
     { name: "USS Tian An Men", registry: "NCC-21832" },
     { name: "USS Trial", registry: "NCC-1948" },
     { name: "USS Samuel B. Roberts", registry: "NCC-2020" },
     { name: "USS Bellerephon", registry: "NCC-62048" },
     { name: "USS Bonchune", registry: "NCC-70915" },
     { name: "USS Endeavour", registry: "NCC-71805" },
     { name: "USS Farragut", registry: "NCC-60597" },
     { name: "USS Hera", registry: "NCC-62006" },
     { name: "USS Honsh", registry: "NCC-60205" },
     { name: "USS Leeds", registry: "NCC-70252" },
     { name: "USS Lexington", registry: "NCC-61832" },
     { name: "USS Merrimack", registry: "NCC-61827" },
     { name: "USS Monitor", registry: "NCC-61826" },
     { name: "USS Nebula", registry: "NX-60147" },
     { name: "USS Phoenix", registry: "NCC-65420" },
     { name: "USS Prometheus", registry: "NCC-71201" },
     { name: "USS Proxima", registry: "NCC-61952" },
     { name: "USS Sutherland", registry: "NCC-72015" },
     { name: "USS Ulysses", registry: "NCC-66808" },
     { name: "USS Kyushu", registry: "NCC-65491" },
     { name: "USS Renegade ", registry: "NCC-63102" },
     { name: "USS Rutledge ", registry: "NCC-57295" },
     { name: "USS Thomas Paine ", registry: "NCC-65530" },
     { name: "USS New Orleans", registry: "NCC-61008" },
     { name: "Enterprise", registry: "NX-01" },
     { name: "Columbia", registry: "NX-02" },
     { name: "Challenger", registry: "NX-03" },
     { name: "Discovery", registry: "NX-04" },
     { name: "Atlantis", registry: "NX-05" },
     { name: "Endeavor", registry: "NX-06" },
     { name: "Intrepid", registry: "NX-07" },
     { name: "ISS Avenger", registry: "NX-09" }
 ];