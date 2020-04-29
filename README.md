# DBI-React-Projekt 4B

## Architektur
Unser Projekt ist in 3 Bereichen gegliedert:
1. UI
  * Die UI ist in verschieden Komponenten gegliedert, die in `src/Components` gespeichert sind
  * Die einzelnen Komponenten verwenden je nach Kategorie (Service/Employee) einen State um Daten zu      speichern und Daten zu manipulieren (Siehe 2. Logik)
2. Logik
  * Es gibt eine Trennung zwischen Services und Employees
  * Logik befindet sich in `src/State/EmployeeState` oder `src/State/ServiceState`
  * Hier werden die Daten für die UI aufbereitet
  * Wir verwenden den Statemanager von Risingstack: https://github.com/RisingStack/react-easy-state.      Dadurch speichern wir alle Daten zentral in dem Statemanger und wenn sich hier Daten ändern          werden die Komponenten neu gerendert.
  * Die Daten werden von der Datenbank über die Datenschicht geladen (Siehe 3. Datenzugriff)
3. Datenzugriff 
  * Man kann zwischen 2 Datenquellen wählen: Lokal und Datenbank, dazu gibt es 2 DataServices unter      `src/Manager`: `DataService` und `TestDataService`. Der DataService greift dabei auf die              Datenbank zu (IP-Adresse ist über eine Variable leicht veränderbar), wohingegen der                  TestDataService zum einfachen Testen ohne Datenbank gedacht ist (Siehe [Testing](https://github.com/MatthiasWetzlmayer/ServiceFrontEnd#Testing))
  * Zum Zugriff auf die Datenbank setzen wir Rest-Requests mittels Axios                                  (https://github.com/axios/axios) ab.
  
## Backend
Da dieses Repository nur das Frontend enthält:
* **EmployeeBackEnd**: https://github.com/MatthiasWetzlmayer/EmployeeBackEnd
* **ServiceBackEnd**: https://github.com/MatthiasWetzlmayer/ServiceBackEnd

Wir verwenden XAMPP für die Datenbanken. Beim 1. BackEnd Start muss man zuerst die Datenbanken anlegen. Die zu verwendenden Namen sind:
* servicedatabase
* employeedatabase

## Ausführung
Voraussetzung zum Ausführen ist, dass Node.js installiert ist.
Nach einem erfolgreichen Git-Clone bzw. dem [Download der Zip](https://github.com/MatthiasWetzlmayer/ServiceFrontEnd/releases/tag/v1.0.0) öffnet man ein Terminal und gibt `npm install` ein, sodass man die benötigten Packages und Librarys herunterlädt. Daraufhin kann man mit `npm start` das Projekt starten. Hier öffnet sich ein Browser-Fenster und man kann das Projekt ausführen. (Falls sich kein Fenster öffnet, kann man die Seite unter folgendem Link aufrufen: http://localhost:3000)

## Testing
Man kann unser Projekt auch ohne Datenbank ausführen. Dazu muss man den Import des DataService in `SerivceState` und `EmployeeState` von 
```javascript
import DataService from '../Manager/DataService';
``` 
zu 
```javascript 
import DataService from '../Manager/TestDataService';
``` 
ändern und eine Variable unter `privateVars` im `ServiceState` von `false` auf `true` setzen. 
```javascript
const privateVars = {
    debugMode: true
}
```

