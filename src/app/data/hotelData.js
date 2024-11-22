const hotelData = {
    allgemein: {
      name: "ALLGEMEIN",
      gäste: {
        gästeImHaus: 200,
        erwachsene: 150,
        kinder: 50,
        anreisenHeute: 40,
        abreisenHeute: -10,
      },
      zimmer: {
        totalZimmer: 120,
        belegteZimmer: 100,
        freieZimmer: 20,
        belegungProzent: 83.3,
      },
      umsatz: {
        brutto: 50000,
        netto: 45000,
        proZimmer: 500,
        proGast: 250,
      },
      effizienz: {
        personalkostenLogis: -20,
        personalkostenFNB: -15,
        personalkostenWellness: 10,
        personalkostenSeminar: 5,
      },
      forecast: {
        anreisenGästeMorgen: 50,
        abreisenZimmerMorgen: 20,
        zimmerBelegungMorgenProzent: 85,
        pickupZimmernächte: 10,
      },
    },
    stoosLodge: {
      name: "STOOS LODGE",
      gäste: {
        gästeImHaus: 80,
        erwachsene: 60,
        kinder: 20,
        anreisenHeute: 15,
        abreisenHeute: -5,
      },
      zimmer: {
        totalZimmer: 40,
        belegteZimmer: 30,
        freieZimmer: 10,
        belegungProzent: 75,
      },
      umsatz: {
        brutto: 15000,
        netto: 14000,
        proZimmer: 350,
        proGast: 200,
      },
    },
    wellnessHotel: {
      name: "WELLNESS HOTEL",
      gäste: {
        gästeImHaus: 60,
        erwachsene: 50,
        kinder: 10,
        anreisenHeute: 10,
        abreisenHeute: -3,
      },
      zimmer: {
        totalZimmer: 30,
        belegteZimmer: 20,
        freieZimmer: 10,
        belegungProzent: 66.7,
      },
      umsatz: {
        brutto: 20000,
        netto: 18000,
        proZimmer: 600,
        proGast: 300,
      },
    },
    fronalpstock: {
      name: "FRONALPSTOCK",
      gäste: {
        gästeImHaus: 60,
        erwachsene: 40,
        kinder: 20,
        anreisenHeute: 15,
        abreisenHeute: -2,
      },
      zimmer: {
        totalZimmer: 30,
        belegteZimmer: 25,
        freieZimmer: 5,
        belegungProzent: 83.3,
      },
      umsatz: {
        brutto: 10000,
        netto: 9500,
        proZimmer: 380,
        proGast: 158,
      },
    },
  };
  
  export default hotelData;
  
  /* 
    API-Aufruf (auskommentiert)
  
    Später kann diese Funktion genutzt werden, um die Daten aus einer API zu laden 
    und das `hotelData`-Objekt dynamisch zu ersetzen.
  
    Beispiel:
    
    export async function fetchHotelData() {
      try {
        const response = await fetch('https://api.example.com/hotel-data');
        if (!response.ok) {
          throw new Error('Fehler beim Abrufen der Hotel-Daten');
        }
        const data = await response.json();
  
        // Das zurückgegebene Datenformat sollte mit der Struktur von `hotelData` kompatibel sein
        return data;
      } catch (error) {
        console.error("API Fehler:", error);
        return null; // Fallback auf statische Daten
      }
    }
  
    Verwendung in einer Komponente:
    
    import { fetchHotelData } from '../data/hotelData';
  
    useEffect(() => {
      async function loadData() {
        const data = await fetchHotelData();
        if (data) {
          setHotelData(data); // Lokaler Zustand oder Context aktualisieren
        }
      }
      loadData();
    }, []);
  */