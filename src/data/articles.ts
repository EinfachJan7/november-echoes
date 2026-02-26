import synagogue1 from “@/assets/synagogue-1.jpeg”;
import synagogue2 from “@/assets/synagogue-2.jpeg”;
import synagogue3 from “@/assets/synagogue-3.jpeg”;
import synagogue4 from “@/assets/synagogue-4.jpeg”;

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
slug: “die-nacht”,
image: synagogue1,
title: “Die Nacht bricht herein”,
subtitle: “Hannover, 9. November 1938”,
date: “9. November 1938”,
content: [
“Die Ausschreitungen ereigneten sich in der Nacht vom 9. auf den 10. November 1938 sowie in den darauffolgenden Tagen. Sie fanden zeitgleich im gesamten Deutschen Reich statt – einschließlich Österreichs und des Sudetenlandes.”,
“Die Reichspogromnacht (oft auch als „Novemberpogrome” bezeichnet) war ein vom nationalsozialistischen Regime organisiertes und gelenktes Gewaltverbrechen gegen die jüdische Bevölkerung im Deutschen Reich. Sie markiert den Übergang von der Diskriminierung zur systematischen Verfolgung und Vernichtung.”,
“In Hannover spielte sich in jener Nacht ein besonders erschütterndes Kapitel ab: Die Neue Synagoge in der Bergstraße, seit ihrer feierlichen Einweihung am 15. September 1870 fast 70 Jahre lang das religiöse Zentrum der jüdischen Gemeinschaft der Stadt, wurde von SS-Männern in Brand gesetzt. Am nächsten Tag wurde ihre Kuppel gesprengt und das Gebäude dem Erdboden gleichgemacht. Schaulustige verfolgten das Geschehen von der Straße aus dichtgedrängt.”,
“Auch jüdische Geschäfte und Privatwohnungen wurden in Hannover demoliert und geplündert. Die SS übernahm die Koordination der Gewalt; jüdische Bürger wurden verhaftet und verschleppt. Während SS-Anwärter im Konzerthaus am Hohen Ufer noch feierlich vereidigt wurden, brannte nur wenige Straßen weiter die Synagoge.”,
“Dem Pogrom unmittelbar vorausgegangen war die sogenannte „Polenaktion”: Ende Oktober 1938 wurden allein aus Hannover 484 jüdische Menschen in den Versammlungssaal des ehemaligen Arbeiterbildungsvereins am Hohen Ufer 3 getrieben und anschließend mit der Bahn über die polnische Grenze abgeschoben – unter ihnen die Familie Grynszpan aus der Burgstraße 36, deren Sohn Herschel wenige Tage später in Paris den Auslöser für den reichsweiten Pogrom liefern sollte.”,
“Heutzutage verwenden Historiker bevorzugt Begriffe wie Novemberpogrome oder Reichspogromnacht. Der Begriff „Reichskristallnacht” wurde damals von den Tätern oder im Berliner Volksmund geprägt. Er gilt als beschönigend, da er das Bild von „glitzerndem Glas” nutzt, um die Brutalität und das vergossene Blut zu überdecken. Zudem ist der Begriff „Nacht” irreführend: Die Gewalt dauerte tagelang an und fand auch am hellen Tag statt.”,
],
},
{
id: 2,
slug: “der-vorwand”,
image: synagogue2,
title: “Der Vorwand”,
subtitle: “Das Attentat von Paris”,
date: “7. November 1938”,
content: [
“Als offizieller Anlass diente ein Attentat in Paris: Der 17-jährige Herschel Grynszpan hatte am 7. November auf den deutschen Diplomaten Ernst vom Rath geschossen. Als dieser am 9. November starb, nutzte die NS-Führung – insbesondere Propagandaminister Joseph Goebbels – dies als Vorwand, um eine „spontane Entladung des Volkszorns” zu inszenieren.”,
“Grynszpan war kein Attentäter aus politischem Kalkül, sondern ein verzweifelter junger Mann. Seine Eltern, Sendel und Ryfka Grynszpan, sowie seine Geschwister Berta und Markus gehörten zu den rund 17.000 polnischen Juden, die Ende Oktober 1938 im Rahmen der „Polenaktion” auf Anweisung Himmlers gewaltsam an die deutsch-polnische Grenze verschleppt worden waren. Die Familie hatte seit 1915 in der Burgstraße 36 in Hannover gelebt. Am 3. November 1938 erfuhr Herschel durch eine Postkarte seiner Schwester vom Schicksal der Familie. Wenige Tage später kaufte er sich eine Pistole und betrat die deutsche Botschaft.”,
“Sein erklärtes Motiv war Protest und Rache für das Leid seiner Familie und der gesamten jüdischen Bevölkerung. Ernst vom Rath, der getroffene Diplomat, war selbst kein überzeugter Nationalsozialist – er stand sogar unter Beobachtung der Gestapo wegen angeblicher Regimekritik. Die Ironie der Geschichte: Goebbels stilisierte ihn posthum zum Märtyrer.”,
“Ob Hitler tatsächlich erst während der Feierlichkeiten zum Gedenken des Hitler-Putsches von 1923 vom Tod des Diplomaten erfuhr, bleibt historisch umstritten. Fest steht jedoch, dass die Nachricht als Katalysator für die bereits vorbereitete Gewalt diente. Bevor die Pogrome im ganzen Reich begannen, hatte es bereits am 7. und 8. November vereinzelt antijüdische Ausschreitungen in Fulda, Kassel, Bebra und weiteren Städten gegeben – ein Zeichen, dass die Gewalt in der Luft lag.”,
“Die NS-Propaganda hatte das Attentat sofort ausgeschlachtet: Zeitungen sprachen von einem „jüdischen Mordanschlag” und riefen zur Vergeltung auf. Ob Grynszpan wusste, welche verheerenden Folgen sein Schuss haben würde, ist nicht bekannt. Nach seiner Verhaftung blieb er zunächst in französischem Gewahrsam, wurde nach der deutschen Besetzung Frankreichs ausgeliefert und verlor sich schließlich in der NS-Justiz. Sein genaues Schicksal nach 1942 ist ungeklärt.”,
],
},
{
id: 3,
slug: “zerstoerung”,
image: synagogue3,
title: “Zerstörung und Terror”,
subtitle: “Die Bilanz des Grauens”,
date: “9.–10. November 1938”,
content: [
“Die Gewalt war keineswegs spontan, sondern wurde von der SA und SS in Zivilkleidung durchgeführt oder angeleitet. Polizei und SD wurden angewiesen, nicht einzugreifen – lediglich „lebensbedrohliche” Situationen für Nicht-Juden sollten verhindert werden. Die Feuerwehren erhielten Befehl, angrenzende Gebäude zu schützen, nicht aber die brennenden Synagogen zu löschen.”,
“Über 1.400 Synagogen und Gebetsräume wurden geplündert und in Brand gesetzt. Rund 7.500 jüdische Geschäfte wurden zertrümmert – daher der Name „Kristallnacht”, wegen der vielen Scherben auf den Straßen. Jüdische Friedhöfe, Gemeindehäuser und Schulen wurden ebenfalls verwüstet.”,
“Hunderte Menschen wurden ermordet oder in den Selbstmord getrieben. Der britische Historiker Richard J. Evans schätzt die Gesamtzahl der Todesopfer – einschließlich der mindestens 300 Suizide aus Verzweiflung – auf wahrscheinlich zwischen 1.000 und 2.000. Das Oberste Parteigericht der NSDAP nannte offiziell nur 91 Tote, um das Ausmaß der Gewalt zu verschleiern.”,
“Etwa 30.000 jüdische Männer wurden verhaftet und in die Konzentrationslager Dachau, Buchenwald und Sachsenhausen verschleppt. Ihr Ziel war nicht primär Vernichtung, sondern Einschüchterung: Die Verhafteten sollten zur Auswanderung gezwungen und ihr Vermögen geraubt werden. Viele wurden nach Wochen oder Monaten wieder freigelassen – sofern sie nachweisen konnten, Deutschland verlassen zu wollen.”,
“Die Willkür der Gewalt zeigt sich in einzelnen dokumentierten Fällen besonders deutlich: In Lesum bei Bremen glaubte ein SA-Führer aufgrund eines Übermittlungsfehlers, es sollten alle Juden getötet werden – was zur Ermordung eines Arztes und seiner Frau führte. In Österreich ließ man ein junges Paar nicht, ihr wenige Monate altes Baby bei der Verhaftung mitnehmen; das Kind starb unversorgt in der Wohnung.”,
“Am 12. November 1938 versammelten sich hohe NS-Funktionäre unter Leitung von Hermann Göring zur sogenannten „Besprechung über die Judenfrage”. Nicht die Gewalt gegen Menschen stand im Mittelpunkt der Kritik – sondern der wirtschaftliche Schaden durch die zerstörten Sachwerte. In dieser Konferenz wurde beschlossen, die jüdische Gemeinschaft zur Zahlung einer „Sühneleistung” von einer Milliarde Reichsmark zu zwingen und Versicherungsleistungen vom Staat zu beschlagnahmen.”,
],
},
{
id: 4,
slug: “muenchen”,
image: synagogue4,
title: “Der Beginn in München”,
subtitle: “Die Rede, die den Terror entfesselte”,
date: “9. November 1938, 21:00 Uhr”,
content: [
“Gegen 21:00 Uhr versammelte sich die NS-Führung im Münchener Rathauskeller, um des Hitler-Putsches vom 8./9. November 1923 zu gedenken – eines der wichtigsten Daten im nationalsozialistischen Kalender. Noch während der Feierlichkeiten erreichte Hitler die Nachricht vom Tod des Diplomaten Ernst vom Rath. Statt wie üblich selbst zur Versammlung zu sprechen, beriet er sich kurz mit Goebbels und verließ dann den Saal.”,
“Um 22:30 Uhr hielt Goebbels eine hasserfüllte antisemitische Rede, die als codiertes Signal für den Terror diente. Er deutete an, dass „Vergeltungsaktionen” nicht von der Partei organisiert, aber auch nicht verhindert werden sollten – eine unmissverständliche Aufforderung. Die anwesenden SA- und Parteiführer verstanden die Botschaft sofort.”,
“Unmittelbar danach ergingen telefonische Befehle durch die gesamten Parteistrukturen im Reich. Reinhard Heydrich, Chef der Sicherheitspolizei, konkretisierte die Anweisungen in einem Telex an alle Gestapo-Dienststellen: Synagogen durften in Brand gesetzt werden, solange keine angrenzenden deutschen Gebäude gefährdet wurden. Jüdische Männer in einer nicht näher definierten Zahl sollten verhaftet, bevorzugt „wohlhabende” Juden.”,
“Die Bilanz dieser Nacht und der folgenden Tage war verheerend: Mehr als 1.000 Menschen wurden ermordet oder in den Tod getrieben, über 30.000 jüdische Männer verhaftet und tausende Gebäude sowie Geschäfte zerstört. Die Neue Synagoge in Hannover, das Konfektionsgeschäft Hirschfeld in der Karmarschstraße, Synagogen in Leipzig, München, Frankfurt – überall dasselbe Bild.”,
“Nach der Nacht verschärfte sich die Lage dramatisch. Auf der Konferenz vom 12. November wurde die jüdische Gemeinschaft gezwungen, eine „Sühneleistung” von einer Milliarde Reichsmark zu zahlen. Versicherungsleistungen für die Schäden wurden vom Staat beschlagnahmt. Es folgte der fast vollständige Ausschluss der Juden aus dem deutschen Wirtschaftsleben: Handel, Handwerk und Gewerbe wurden verboten, jüdische Kinder vom Unterricht an nichtjüdischen Schulen ausgeschlossen, Führerscheine entzogen.”,
“Die Novemberpogrome zerstörten endgültig die Hoffnungen der deutschen Juden, in ihrer Heimat überleben zu können. Das Jahr 1939 markiert mit rund 80.000 Ausgewanderten den Höhepunkt des jüdischen Exodus aus dem NS-Staat. Großbritannien gestattete immerhin die Aufnahme von 10.000 jüdischen Kindern und Jugendlichen in sogenannten Kindertransporten. Die meisten dieser Kinder sollten ihre Eltern nie wiedersehen. Die Reichspogromnacht war nicht der Höhepunkt des Schreckens – sie war erst der Anfang.”,
],
},
];