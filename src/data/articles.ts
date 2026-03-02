import synagogue1 from "@/assets/synagogue-1.jpeg";
import synagogue2 from "@/assets/synagogue-2.jpeg";
import synagogue3 from "@/assets/synagogue-3.jpeg";
import synagogue4 from "@/assets/synagogue-4.jpeg";

export interface Article {
  id: number;
  slug: string;
  image: string;
  title: string;
  subtitle: string;
  date: string;
  content: string[];
}

export const articles: Article[] = [
  {
    id: 1,
    slug: "vorgeschichte",
    image: synagogue1,
    title: "Der Weg in den Terror",
    subtitle: "Wie die Nazi-Eliten die Juden Schritt fuer Schritt enteigneten",
    date: "1933-1938",
    content: [
      "HANNOVER — Was in der Nacht vom 9. November 1938 ueber Deutschland hereinbrach, war kein Volkszorn. Es war Programm. Jahrelang hatte das Nazi-Regime die juedische Bevoelkerung mit Gesetzen, Verboten und wirtschaftlichen Zwangsmasnahmen in die Enge getrieben. Dann kam der Befehl zur organisierten Vernichtung.",
      "Bereits im Oktober 1938 hatte eine Aktion das Schicksal von Zehntausenden besiegelt: die sogenannte Polenaktion. SA und Gestapo trieben bis zu 18.000 polnische Juden zusammen und liesen sie in schwer bewachten Zuegen und Lastwagen zur deutsch-polnischen Grenze bei Zbaszyn karren und hinausjagen. Tagelang standen sie ohne Nahrung in den ueberfuellten Grenzbahnhoefen oder im Niemandsland, bis die polnischen Behoerden sie passieren liesen. Etwa 7.000 Personen mussten schliesslich ins Fluechtlingslager Zbaszyn marschieren, wo sie monatelang interniert wurden.",
      "Unter den Vertriebenen war die Familie Grynszpan. Ihr 17-jaehriger Sohn Herschel befand sich in Paris. Am 3. November erreichte ihn die Nachricht vom Schicksal seiner Familie. Was dann folgte, gab dem Regime den Vorwand, das vorzubereiten, was laengst geplant war.",
    ],
  },
  {
    id: 2,
    slug: "verlauf",
    image: synagogue2,
    title: "Ein Schuss und der Terror bricht los",
    subtitle: "Das Attentat von Paris wird zum Katalysator fuer Gewalt",
    date: "7.-9. November 1938",
    content: [
      "PARIS — Am 7. November betritt ein verzweifelter junger Mann die Deutsche Botschaft im Pariser Palais Beauharnais. Herschel Grynszpan will Protest erheben. Er schiesst auf den Legationssekretaer Ernst vom Rath. Der Schuss wird zum Signal.",
      "Zwei Tage spaeter ist vom Rath tot. Die NS-Propaganda schlaegt sofort zu. Goebbels sieht seine Chance. Am 9. November sitzt die gesamte Nazi-Fuehrung im Muenchener Alten Rathaus zusammen, um des Hitler-Putsches von 1923 zu gedenken. Hitler erfaehrt vom Tod des Diplomaten — und gibt das Signal. Noch waehrend des Abendessens bespricht er sich mit Goebbels und entscheidet: Die Demonstrationen sollen weiterlaufen, die Polizei soll sich zurueckziehen. Goebbels kuendigt gegen 22 Uhr vor versammelten Gauleitern und SA-Fuehrern Verguetungsmasnahmen an. Aber: Die Partei werde nicht offiziell dahinterstehen. Der Volkszorn soll es machen.",
      "In Wahrheit ist alles organisiert. Telegramme ergehen von Goebbels' Ministerium an untergeordnete Behoerden, Gauleiter und Gestapostellen im ganzen Reich. Die anwesenden SA-Fuehrer telefonieren sofort mit ihren Dienststellen. Befehle fliessen in die Provinz: Synagogen anzuenden, Geschaefte zerstoeren, Juden verhaften. Punkt drei des Fernschreibens, das Gestapo-Chef Heinrich Mueller um kurz vor Mitternacht an alle Leitstellen schickt, lautet unmissverstaendlich: Es sei die Festnahme von 20.000 bis 30.000 Juden vorzubereiten. Es soll ueberall gleichzeitig ausbrechen — wie Spontaneitaet.",
    ],
  },
  {
    id: 3,
    slug: "ereignisse",
    image: synagogue3,
    title: "Die lange Nacht der Zerstoerung",
    subtitle: "1.400 Synagogen brennen, 30.000 verhaftet, hunderte ermordet",
    date: "9.-10. November 1938",
    content: [
      "HANNOVER — In der Bergstrasse steht das Wahrzeichen der juedischen Gemeinde. In der Nacht zum 10. November brennt sie. SA-Maenner, offiziell in Zivil, aber mit Aexten und Brechstangen bewaffnet, stecken ueberall Feuer an. Die Polizei bleibt weg — Befehl von oben. Die Feuerwehr schuetzt nur Nachbargebaeude.",
      "Ein Augenzeugebericht aus Nuernberg zeigt, wie koordiniert der Wahnsinn ablaeuft: Erst die Ladengeschaefte. Schaufenster werden eingeschlagen, Poebel pluendert unter Fuehrung der SA die Laeden aus. Dann die Wohnungen. Tueren werden eingetreten, Maenner und Frauen misshandelt, Wertgegenstaende, Geld und Schmuck konfisziert. Ein Kaufmann wird vom Geschaeft zum Gefaengnis getrieben. Gegen 4 Uhr morgens werden alle Verhafteten unter 60 Jahren nach Dachau abtransportiert.",
      "Die Bilanz der Brutalitaet: mehr als 1.400 Synagogen, Betstuben und Versammlungsraeume geplundert und in Brand gesetzt, etwa 7.500 juedische Geschaefte, Wohnungen und Gemeindehauser zerstoert, rund 30.000 Maenner verhaftet und in die Konzentrationslager Dachau, Buchenwald und Sachsenhausen verschleppt. Das Oberste Parteigericht der NSDAP bezifferte die Zahl der Ermordeten auf 91. Historiker schaetzen — unter Einschluss der mindestens 300 Suizide und der Todesfoelle in den Lagern — zwischen 1.000 und 2.000 Opfer.",
    ],
  },
  {
    id: 4,
    slug: "weitere-schritte",
    image: synagogue4,
    title: "Das Geschaeft mit dem Raub",
    subtitle: "Vom Pogrom zur systematischen Vernichtung",
    date: "Nach November 1938",
    content: [
      "BERLIN — Drei Tage nach den Pogromen, am 12. November, treffen sich rund 100 hochrangige NS-Funktionaere im Reichsluftfahrtministerium. Goering sitzt an der Spitze. Das Thema: Wie werden die Juden schneller und vollstaendiger enteignet? Das Ergebnis ist ein zynisches Geschaeft: eine Milliarde Reichsmark Suhneleistung — die Opfer zahlen fuer ihr eigenes Leid. Die Versicherungsentschaedigungen fuer zerstoertes juedisches Eigentuem werden direkt an den Staat umgeleitet, betroffene Juden gehen leer aus. Am Ende werden mehr als 1,1 Milliarden Reichsmark eingezogen — die Staatseinnahmen des Reiches steigen schlagartig um sechs Prozent.",
      "Was folgt, ist die stufenweise Vernichtung jeder Existenzgrundlage. Juden duerfen keinen Handel mehr treiben, kein Handwerk ausueeben, keine Maerkte besuchen. Schulen sind ihnen verschlossen, oeffentliche Raeume verboten, Waffenbesitz untersagt. Im Dezember 1938 werden sie gezwungen, alle Gewerbebetriebe zu verkaufen und Wertpapiere zu hinterlegen. Die Folge ist Massenflucht: 1939 verlassen 80.000 Juden das Reich — mehr als in den fuenf Jahren zuvor zusammen.",
      "Grossbritannien nimmt 10.000 juedische Kinder in Kindertransporten auf, die von Dezember 1938 bis zum 1. September 1939 ueber die Niederlande nach England gebracht werden. In 90 Prozent der Faelle ist es das letzte Wiedersehen mit den Eltern. Herschel Grynszpan sitzt derweil in franzoesischer Haft. Nach der deutschen Besetzung Frankreichs wird er am 14. Juli 1940 nach Deutschland ueberstellt. Ein geplanter Schauprozess vor dem Volksgerichtshof — mit von vornherein feststehender Todesstrafe — wird von Hitler schliesslich abgesagt. Grynszpan wurde vermutlich zwischen 1942 und Kriegsende im KZ Sachsenhausen ermordet. Die Pogrome von 1938 sind nicht der Hoeheunkt des Horrors — sie sind erst der Anfang.",
    ],
  },
];