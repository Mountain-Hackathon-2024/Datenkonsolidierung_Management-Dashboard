const hotelData = {
    gesamt: {
      name: "Gesamt",
      gäste: {
        2024: {
          gesamt: 1200,
          erwachsene: 900,
          kinder: 300,
          anreisenHeute: 60,
          abreisenHeute: 50,
        },
        2023: {
          gesamt: 1000,
          erwachsene: 800,
          kinder: 200,
          anreisenHeute: 50,
          abreisenHeute: 40,
        },
      },
      zimmer: {
        2024: {
          totalZimmer: 500,
          belegteZimmer: 350,
          freieZimmer: 150,
        },
        2023: {
          totalZimmer: 500,
          belegteZimmer: 300,
          freieZimmer: 200,
        },
      },
      umsatz: {
        2024: {
          bruttoumsatzTotal: 180000,
          nettoumsatzTotal: 150000,
          umsatzProZimmer: 600,
          umsatzProGast: 180,
        },
        2023: {
          bruttoumsatzTotal: 150000,
          nettoumsatzTotal: 120000,
          umsatzProZimmer: 500,
          umsatzProGast: 150,
        },
      },
      forecast: {
        anreisenMorgen: { 2024: 70, 2023: 50 },
        abreisenMorgen: { 2024: 60, 2023: 40 },
      },
    },
    stoosLodge: {
      name: "Stoos Lodge",
      gäste: {
        2024: {
          gesamt: 350,
          erwachsene: 280,
          kinder: 70,
        },
        2023: {
          gesamt: 300,
          erwachsene: 250,
          kinder: 50,
        },
      },
      zimmer: {
        2024: {
          totalZimmer: 150,
          belegteZimmer: 110,
          freieZimmer: 40,
        },
        2023: {
          totalZimmer: 150,
          belegteZimmer: 100,
          freieZimmer: 50,
        },
      },
      umsatz: {
        2024: {
          bruttoumsatzTotal: 60000,
          nettoumsatzTotal: 50000,
        },
        2023: {
          bruttoumsatzTotal: 50000,
          nettoumsatzTotal: 40000,
        },
      },
      forecast: {
        anreisenMorgen: { 2024: 30, 2023: 20 },
        abreisenMorgen: { 2024: 25, 2023: 15 },
      },
    },
    wellnessHotel: {
      name: "Wellness Hotel",
      gäste: {
        2024: {
          gesamt: 450,
          erwachsene: 350,
          kinder: 100,
        },
        2023: {
          gesamt: 400,
          erwachsene: 300,
          kinder: 100,
        },
      },
      zimmer: {
        2024: {
          totalZimmer: 200,
          belegteZimmer: 160,
          freieZimmer: 40,
        },
        2023: {
          totalZimmer: 200,
          belegteZimmer: 150,
          freieZimmer: 50,
        },
      },
      umsatz: {
        2024: {
          bruttoumsatzTotal: 80000,
          nettoumsatzTotal: 65000,
        },
        2023: {
          bruttoumsatzTotal: 70000,
          nettoumsatzTotal: 55000,
        },
      },
      forecast: {
        anreisenMorgen: { 2024: 35, 2023: 25 },
        abreisenMorgen: { 2024: 30, 2023: 20 },
      },
    },
    fronalpstock: {
      name: "Fronalpstock",
      gäste: {
        2024: {
          gesamt: 400,
          erwachsene: 320,
          kinder: 80,
        },
        2023: {
          gesamt: 300,
          erwachsene: 250,
          kinder: 50,
        },
      },
      zimmer: {
        2024: {
          totalZimmer: 150,
          belegteZimmer: 130,
          freieZimmer: 20,
        },
        2023: {
          totalZimmer: 150,
          belegteZimmer: 100,
          freieZimmer: 50,
        },
      },
      umsatz: {
        2024: {
          bruttoumsatzTotal: 70000,
          nettoumsatzTotal: 60000,
        },
        2023: {
          bruttoumsatzTotal: 50000,
          nettoumsatzTotal: 45000,
        },
      },
      forecast: {
        anreisenMorgen: { 2024: 20, 2023: 15 },
        abreisenMorgen: { 2024: 15, 2023: 10 },
      },
    },
  };
  
  export default hotelData;