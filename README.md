# DBI-React-Projekt 4B

## Allgemeines
Unser Projekt ist in 3 Bereichen gegliedert:
1. UI
  * Die UI ist in verschieden Komponenten gegliedert, die in `src/Components` gespeichert sind.
  * Die einzelnen Komponenten verwenden je nach Kategorie (Service/Employee) einen State um Daten zu      speichern und Daten zu manipulieren (Siehe 2. Logik)
2. Logik
  * Es gibt eine Trennung zwischen Services und Employees
  * Logik befindet sich in `src/State/EmployeeState` oder `src/State/ServiceState`
  * Hier werden die Daten für die UI aufbereitet
  * Wir verwenden den Statemanager von Risingstack: https://github.com/RisingStack/react-easy-state.      Dadurch speichern wir alle Daten zentral in dem Statemanger und wenn sich hier Daten ändern          werden die Komponenten neu gerendert.
  * Die Daten werden von der Datenbank über die Datenschicht geladen (Siehe 3. Datenzugriff)
3. Datenzugriff 
  * Man kann zwischen 2 Datenquellen wählen: Lokal und Datenbank, dazu gibt es 2 DataServices unter      `src/Manager`: `DataService` und `TestDataService`. Der DataService greift dabei auf die              Datenbank zu (IP-Adresse ist über eine Variable leicht veränderbar), wohingegen der                  TestDataService zum einfachen Testen ohne Datenbank gedacht ist (Siehe [## Testing])
  * Zum Zugriff auf die Datenbank setzen wir Rest-Requests mittels Axios                                  (https://github.com/axios/axios) ab.

## Ausführung
Voraussetzung zum ausführen ist, dass Node.js installiert ist.
Nach einem erfolgreichen Git-Clone öffnet man ein Terminal und gibt `npm start` ein. Daraufhin öffnet sich der Browser (falls nicht kann man die Seite unter folgendem Link aufrufen: http://localhost:3000) und man kann das Projekt ausführen.

## Testing
Man kann unser Projekt auch ohne Datenbank ausführen. Dazu muss man den Import des DataService in SerivceState und EmployeeState von 
```javascript
import DataService from '../Manager/DataService';
``` 
zu 
```javascript 
import DataService from '../Manager/TestDataService';
``` 
ändern und eine Variable unter privateVars im ServiceState von `false` auf `true` setzen. 
```javascript
const privateVars = {
    debugMode: true
}
```

