# Requirements
## must
- margin von nav li anpassen, so dass sie nicht hard-codierten abstand haben sondern sich dynamisch über den header verteilen. aktuell wird der header falsch angezeigt
- search component implementieren und in object.js aufrufen
- search um filter funktionalität erweitern
- move "charts" to PW-secured space (dummy)
- bilder auflösung reduzueren
- getData() um API zu simulieren
- placeOrder() um API zu simulieren


## should
- order page implementieren
- error handling implementieren
object tile optimieren, sodass spacing gleichmässiger ist und bilder überall gleich gross

## want
- deploy to github pages 
    - dafür müssen alle Links gecheckt werden
    - index.html in root folder verschoben
    - zusätzliche devl branch eingerichtet werden
- oder direkt auf loics strato webspace deployen



## Projekt-Anforderungen
### MUST-HAVE-Anforderungen

• Die Web-Anwendung verfügt über eine Homepage und einer weiteren Seite (freie Wahl)

• In einem Textfeld können Suchbegriffe eingegeben und z.B. durch einen Button kann die
Suche gestartet werden.

• Die Suchergebnisse erscheinen unterhalb der Suche als Tabelle, Bild-Kacheln oder was
eben am besten zu den Daten passt.

• Zu jedem Suchergebnis können durch Anklicken zusätzliche Details angezeigt und wieder
ausgeblendet werden (z.B. unterhalb des Sucheintrags).

### NICE-TO-HAVEs

• Es gibt die Möglichkeit Artist zu favorisieren / auf eine Merkliste zu setzten

• Die Merkliste wird lokal im Browser mit localStorage gespeichert.

• Die Merkliste wird wahrscheinlich unter dem Menüpunkt „Favoriten“ angezeigt

• Es ist möglich, Einträge aus der Merkliste zu entfernen.

• Es gibt eine Möglichkeit, die Suche zu filtern (mit Auswahlliste/Dropdown, Checkbox oder
Radiobutton).

• weitere Funktionalitäten in der Webanwendung (z.B. weitere Filter in der Suche oder
Sortierung der Ergebnisse)

• Es gibt ein vorgefertigtes Error Screen bei Connection-Problemen o.ä.