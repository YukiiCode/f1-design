const calendarData = [
    {
        "ronda": 1,
        "gran_premio": "Australia",
        "fechas": "14 - 16 Marzo",
        "circuito": "Albert Park"
    },
    {
        "ronda": 2,
        "gran_premio": "China",
        "fechas": "21 - 23 Marzo",
        "circuito": "Shanghai International Circuit"
    },
    {
        "ronda": 3,
        "gran_premio": "Japón",
        "fechas": "04 - 06 Abril",
        "circuito": "Suzuka International Racing Course"
    },
    {
        "ronda": 4,
        "gran_premio": "Baréin",
        "fechas": "11 - 13 Abril",
        "circuito": "Bahrain International Circuit"
    },
    {
        "ronda": 5,
        "gran_premio": "Arabia Saudí",
        "fechas": "18 - 20 Abril",
        "circuito": "Jeddah Street Circuit"
    },
    {
        "ronda": 6,
        "gran_premio": "Miami",
        "fechas": "02 - 04 Mayo",
        "circuito": "Miami International Autodrome"
    },
    {
        "ronda": 7,
        "gran_premio": "Emilia Romaña",
        "fechas": "16 - 18 Mayo",
        "circuito": "Autodromo Enzo e Dino Ferrari"
    },
    {
        "ronda": 8,
        "gran_premio": "Mónaco",
        "fechas": "23 - 25 Mayo",
        "circuito": "Circuit de Monaco"
    },
    {
        "ronda": 9,
        "gran_premio": "España",
        "fechas": "30 Mayo - 01 Junio",
        "circuito": "Circuit de Barcelona-Catalunya"
    },
    {
        "ronda": 10,
        "gran_premio": "Canadá",
        "fechas": "13 - 15 Junio",
        "circuito": "Circuit Gilles Villeneuve"
    },
    {
        "ronda": 11,
        "gran_premio": "Austria",
        "fechas": "27 - 29 Junio",
        "circuito": "Red Bull Ring"
    },
    {
        "ronda": 12,
        "gran_premio": "Gran Bretaña",
        "fechas": "04 - 06 Julio",
        "circuito": "Silverstone Circuit"
    },
    {
        "ronda": 13,
        "gran_premio": "Bélgica",
        "fechas": "25 - 27 Julio",
        "circuito": "Circuit de Spa-Francorchamps"
    },
    {
        "ronda": 14,
        "gran_premio": "Hungría",
        "fechas": "01 - 03 Agosto",
        "circuito": "Hungaroring"
    },
    {
        "ronda": 15,
        "gran_premio": "Países Bajos",
        "fechas": "29 - 31 Agosto",
        "circuito": "Circuit Zandvoort"
    },
    {
        "ronda": 16,
        "gran_premio": "Italia",
        "fechas": "05 - 07 Septiembre",
        "circuito": "Autodromo Nazionale Monza"
    },
    {
        "ronda": 17,
        "gran_premio": "Azerbaiyán",
        "fechas": "19 - 21 Septiembre",
        "circuito": "Baku City Circuit"
    },
    {
        "ronda": 18,
        "gran_premio": "Singapur",
        "fechas": "03 - 05 Octubre",
        "circuito": "Marina Bay Street Circuit"
    },
    {
        "ronda": 19,
        "gran_premio": "Estados Unidos",
        "fechas": "17 - 19 Octubre",
        "circuito": "Circuit of the Americas"
    },
    {
        "ronda": 20,
        "gran_premio": "México",
        "fechas": "24 - 26 Octubre",
        "circuito": "Autódromo Hermanos Rodríguez"
    },
    {
        "ronda": 21,
        "gran_premio": "Brasil",
        "fechas": "07 - 09 Noviembre",
        "circuito": "Autódromo José Carlos Pace"
    },
    {
        "ronda": 22,
        "gran_premio": "Las Vegas",
        "fechas": "20 - 22 Noviembre",
        "circuito": "Las Vegas Strip Circuit"
    },
    {
        "ronda": 23,
        "gran_premio": "Catar",
        "fechas": "28 - 30 Noviembre",
        "circuito": "Lusail International Circuit"
    },
    {
        "ronda": 24,
        "gran_premio": "Abu Dabi",
        "fechas": "05 - 07 Diciembre",
        "circuito": "Yas Marina Circuit"
    }
]

document.addEventListener("DOMContentLoaded", function () {
    const row = document.getElementById("calendarRow");

    calendarData.forEach(event => {
        const card = `
            <div class="col-md-6 col-lg-4">
                <div class="race-card">
                    <div class="race-card-header">
                        <span>Ronda ${event.ronda}</span>
                    </div>
                    <div class="race-details">
                        <p><strong>Fechas:</strong> ${event.fechas}</p>
                        <p><strong>Circuito:</strong> ${event.circuito}</p>
                    </div>
                </div>
            </div>
        `;
        row.innerHTML += card;
    });
});