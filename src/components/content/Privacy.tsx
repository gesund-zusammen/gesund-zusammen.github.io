import React from "react";
import { Box, Typography, Link } from "@material-ui/core";
import styled, { AnyStyledComponent } from "styled-components";
import { withTranslation, WithTranslation } from "react-i18next";

import CTABox from "../common/CTABox";

class PrivacyPolicy extends React.PureComponent<WithTranslation, {}> {
  render = () => {
    return (
      <>
        <PrivacyWrapper paddingBottom={4}>
          <Typography variant="h2" id="section1">
            Einleitung und allgemeine Angaben
          </Typography>
          <Typography variant="body1">
            Vielen Dank für Ihr Interesse an unserer Website. Der Schutz Ihrer
            personenbezogenen Daten ist uns ein sehr wichtiges Anliegen. Im
            Folgenden finden Sie Informationen zum Umgang mit Ihren Daten, die
            durch Ihre Nutzung unserer Website erfasst werden. Die Verarbeitung
            Ihrer Daten erfolgt entsprechend den gesetzlichen Regelungen zum
            Datenschutz.
          </Typography>
          <Typography variant="h2" id="section1">
            Verantwortlicher im Sinne der DSGVO
          </Typography>
          <Typography variant="body1">
            Gesund Zusammen gGmbH i.G.
            <br />
            Urbanstr. 71
            <br />
            10967 Berlin, Germany
            <br />
            media@gesund-zusammen.de
            <br />
            +49 (0) 30 609865290
          </Typography>
          <Typography variant="h2" id="section1">
            Kontaktdaten des Datenschutzbeauftragten
          </Typography>
          <Typography variant="body1">
            PROLIANCE GmbH / www.datenschutzexperte.de
            <br />
            Datenschutzbeauftragter
            <br />
            Leopoldstr. 21, 80802 München
            <br />
            <Link href="mailto:datenschutzbeauftragter@datenschutzexperte.de">
              datenschutzbeauftragter@datenschutzexperte.de
            </Link>
            <br />
          </Typography>
          <Typography variant="h2" id="section1">
            Begriffsbestimmungen
          </Typography>
          <Typography variant="body1">
            Unsere Datenschutzerklärung soll für jedermann einfach und
            verständlich sein. In dieser Datenschutzerklärung werden in der
            Regel die offiziellen Begriffe der Datenschutzgrundverordnung
            (DSGVO) verwendet. Die offiziellen Begriffsbestimmungen werden in
            Art. 4 DSGVO erläutert.
          </Typography>
          <Typography variant="h2" id="section1">
            Server-Logfiles
          </Typography>
          <Typography variant="body1">
            Wenn Sie unsere Website aufrufen, ist es technisch notwendig, dass
            über Ihren Internetbrowser Daten an unseren Webserver übermittelt
            werden. Folgende Daten werden während einer laufenden Verbindung zur
            Kommunikation zwischen Ihrem Internetbrowser und unserem Webserver
            aufgezeichnet:
            <br />
            <br />
            • Datum und Uhrzeit der Anforderung
            <br />
            • Name der angeforderten Datei
            <br />
            • Seite, von der aus die Datei angefordert wurde
            <br />
            • Zugriffsstatus
            <br />
            • Verwendeter Webbrowser und verwendetes Betriebssystem
            <br />
            • (Vollständige) IP-Adresse des anfordernden Rechners
            <br />
            • Übertragene Datenmenge
            <br />
            <br />
            Die aufgelisteten Daten erheben wir, um einen reibungslosen
            Verbindungsaufbau der Website zu gewährleisten und eine komfortable
            Nutzung unserer Website durch die Nutzer zu ermöglichen. Zudem dient
            die Logdatei der Auswertung der Systemsicherheit und -stabilität
            sowie administrativen Zwecken. Rechtsgrundlage für die
            vorübergehende Speicherung der Daten bzw. der Logfiles ist Art. 6
            Abs. 1 lit. f DSGVO.
          </Typography>
          <Typography variant="h2" id="section1">
            Cookies
          </Typography>
          <Typography variant="body1">
            Unsere Internetseite verwendet sogenannte „Cookies“. Cookies sind
            kleine Textdateien, die entweder vorübergehend für die Dauer einer
            Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf
            Ihrem Endgerät gespeichert werden. Session-Cookies werden nach Ende
            Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf
            Ihrem Endgerät gespeichert bis Sie diese selbst löschen oder eine
            automatische Lösung durch Ihren Webbrowser erfolgt.
            <br />
            Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
            technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
            nicht funktionieren würden (z.B. die Warenkorbfunktion oder
            Spracheinstellungen). Andere Cookies dienen dazu, das
            Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
            <br />
            Technisch notwendige Cookies werden auf Grundlage von Art. 6 Abs. 1
            lit. f DSGVO gespeichert. Wir haben ein berechtigtes Interesse an
            der Speicherung von Cookies zur technisch fehlerfreien und
            optimierten Bereitstellung unserer Dienste. Andere Cookies werden
            nur mit Ihrer Einwilligung auf Grundlage von Art. 6 Abs. 1 lit. a
            DSGVO gespeichert. Die Einwilligung ist jederzeit für die Zukunft
            widerrufbar. Die Rechtsgrundlage kann sich auch aus Art. 6 Abs. 1
            lit. b DSGVO ergeben, falls die Verarbeitung für die Erfüllung eines
            Vertrags, dessen Vertragspartei die betroffene Person ist, oder zur
            Durchführung vorvertraglicher Maßnahmen erforderlich ist, die auf
            Anfrage der betroffenen Person erfolgen.
            <br />
            <br />
            Soweit Cookies zu Analysezwecken eingesetzt werden, werden wir Sie
            hierüber im Rahmen dieser Datenschutzerklärung gesondert informieren
            und eine Einwilligung einholen.
            <br />
            <br />
            Sie können es direkt über unsere{" "}
            <Link href="#uc-central-modal-show">Cookie Settings</Link> oder
            Ihren Browser so einstellen, dass Sie
            <br />
            • über das Setzen von Cookies informiert werden,
            <br />
            • Cookies nur im Einzelfall erlauben,
            <br />
            • die Annahme von Cookies für bestimmte Fälle oder generell
            ausschließen,
            <br />
            • das automatische Löschen der Cookies beim Schließen des Browsers
            aktivieren.
            <br />
            <br />
            Die Cookie-Einstellungen können unter den folgenden Links für die
            jeweiligen Browser verwaltet werden:
            <br />
            <br />•{" "}
            <Link href="http://support.google.com/chrome/bin/answer.py?hl=de&hlrm=en&answer=95647">
              Google Chrome
            </Link>
            <br />•{" "}
            <Link href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen">
              Mozilla Firefox
            </Link>
            <br />•{" "}
            <Link href="http://windows.microsoft.com/de-DE/windows-vista/Block-or-allow-cookies">
              Edge (Microsoft)
            </Link>
            <br />•{" "}
            <Link href="https://support.apple.com/de-de/guide/safari/sfri11471/mac">
              Safari
            </Link>
            <br />•{" "}
            <Link href="https://help.opera.com/en/latest/web-preferences/#cookies">
              Opera
            </Link>
            <br />
            <br />
            Sie können Cookies vieler Unternehmen und Funktionen, die für
            Werbung eingesetzt werden, auch einzeln verwalten. Verwenden Sie
            dazu die entsprechenden Nutzer-Tools, abrufbar unter{" "}
            <Link href="https://www.aboutads.info/choices/">
              https://www.aboutads.info/choices/
            </Link>{" "}
            oder{" "}
            <Link href="http://www.youronlinechoices.com/uk/your-ad-choices">
              http://www.youronlinechoices.com/uk/your-ad-choices
            </Link>
            .<br />
            Die meisten Browser bieten zudem eine sog. „Do-Not-Track-Funktion“
            an. Wenn diese Funktion aktiviert ist, teilt der jeweilige Browser
            Werbenetzwerken, Websites und Anwendungen mit, dass Sie nicht zwecks
            verhaltensbasierter Werbung und Ähnlichem „verfolgt“ werden möchten.
            <br />
            <br />
            Informationen und Anleitungen, wie Sie diese Funktion bearbeiten
            können, erhalten Sie je nach Anbieter Ihres Browsers, unter den
            nachfolgenden Links:
            <br />
            <br />•{" "}
            <Link href="https://support.google.com/chrome/answer/2790761?co=GENIE.Platform%3DDesktop&hl=de">
              Google Chrome
            </Link>
            <br />•{" "}
            <Link href="https://www.mozilla.org/de/firefox/dnt/">
              Mozilla Firefox
            </Link>
            <br />•{" "}
            <Link href="https://support.microsoft.com/de-de/help/17288/windows-internet-explorer-11-use-do-not-track">
              Edge (Microsoft)
            </Link>
            <br />•{" "}
            <Link href="https://support.apple.com/de-de/guide/safari/sfri40732/13.0/mac/10.15">
              Safari
            </Link>
            <br />•{" "}
            <Link href="http://help.opera.com/Windows/12.10/de/notrack.html">
              Opera
            </Link>
            <br />
            <br />
            Zusätzlich können Sie standardmäßig das Laden sog. Scripts
            verhindern. „NoScript“ erlaubt das Ausführen von JavaScripts, Java
            und anderen Plug-ins nur bei vertrauenswürdigen Domains Ihrer Wahl.
            Informationen und Anleitungen, wie Sie diese Funktion bearbeiten
            können, erhalten Sie über den Anbieter Ihres Browsers (z. B. für
            Mozilla Firefox unter:{" "}
            <Link href="https://addons.mozilla.org/de/firefox/addon/noscript/">
              https://addons.mozilla.org/de/firefox/addon/noscript/
            </Link>
            ).
            <br />
            <br />
            Bitte beachten Sie, dass bei der Deaktivierung von Cookies die
            Funktionalität unserer Website eingeschränkt sein kann.
          </Typography>
          <Typography variant="h2" id="section1">
            Kontaktformular und Kontaktaufnahme per E-Mail
          </Typography>
          <Typography variant="body1">
            Wenn Sie uns per Kontaktformular oder E-Mail-Anfragen zukommen
            lassen, werden Ihre Angaben aus dem Anfrageformular bzw. Ihrer
            E-Mail inklusive der von Ihnen dort angegebenen Vor- und Nachname,
            Anrede, Postanschrift zwecks Bearbeitung der Anfrage und für den
            Fall von Anschlussfragen bei uns gespeichert. Die Angabe einer
            E-Mail-Adresse ist zur Kontaktangabe erforderlich, die Angabe Ihres
            Namens sowie Ihrer Telefonnummer ist freiwillig. Diese Daten geben
            wir in keinem Fall ohne Ihre Einwilligung weiter. Rechtsgrundlage
            für die Verarbeitung der Daten ist unser berechtigtes Interesse an
            der Beantwortung Ihres Anliegens gemäß Art. 6 Abs. 1 lit. f DSGVO
            sowie ggf. Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage auf den
            Abschluss eines Vertrages abzielt. Ihre Daten werden nach
            abschließender Bearbeitung Ihrer Anfrage gelöscht, sofern keine
            gesetzlichen Aufbewahrungspflichten entgegenstehen. Sie können im
            Falle von Art. 6 Abs. 1 lit. f DSGVO gegen die Verarbeitung Ihrer
            personenbezogenen Daten jederzeit Widerspruch einlegen.
          </Typography>
          <Typography variant="h2" id="section1">
            Google Analytics
          </Typography>
          <Typography variant="body1">
            Unsere Website benutzt Google Analytics, einen Webanalysedienst der
            Google Ireland Limited, Gordon House, Barrow Street, Dublin 4,
            Ireland. („Google“). Google Analytics verwendet sogenannte Cookies.
            Das sind Textdateien, die auf Ihrem Computer gespeichert werden und
            die eine Analyse der Benutzung der Website durch Sie ermöglichen.
            Die durch das Cookie erzeugten Informationen über Ihre Benutzung
            dieser Website werden in der Regel an einen Server von Google in den
            USA übertragen und dort gespeichert. Wir setzen Google Analytics nur
            mit aktivierter IP-Anonymisierung ein. Das bedeutet, die IP-Adresse
            der Nutzer wird von Google innerhalb von Mitgliedstaaten der
            Europäischen Union oder in anderen Vertragsstaaten des Abkommens
            über den Europäischen Wirtschaftsraum gekürzt, wodurch eine
            Personenbeziehbarkeit ausgeschlossen werden kann. Google ist für das
            US-europäische Datenschutzübereinkommen „Privacy Shield“
            zertifiziert, welches die Einhaltung des in der EU geltenden
            Datenschutzniveaus gewährleistet. Soweit Sie hierzu Ihre
            Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a DSGVO erteilt haben,
            erfolgt die Verarbeitung auf dieser Website zum Zweck der
            Websiteanalyse. Im Auftrag des Betreibers dieser Website wird Google
            diese Informationen benutzen, um Ihre Nutzung der Website
            auszuwerten, um Reports über die Websiteaktivitäten
            zusammenzustellen und um weitere mit der Websitenutzung und der
            Internetnutzung verbundene Dienstleistungen gegenüber dem
            Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics
            von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen
            Daten von Google zusammengeführt. Die Nutzungsbedingungen von Google
            Analytics und Informationen zum Datenschutz können über die
            folgenden Links abgerufen werden:
            http://www.google.com/analytics/terms/de.html sowie unter
            https://www.google.de/intl/de/policies/.
            <br />
            Sie können die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
            darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
            Funktionen dieser Website vollumfänglich nutzen können. Sie können
            darüber hinaus die Erfassung der durch das Cookie erzeugten und auf
            Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer IP-Adresse) an
            Google sowie die Verarbeitung dieser Daten durch Google verhindern,
            indem Sie das unter der URL{" "}
            <Link href="https://tools.google.com/dlpage/gaoptout?hl=de">
              https://tools.google.com/dlpage/gaoptout?hl=de
            </Link>
            <br /> verfügbare Browser-Plug-in herunterladen und installieren.
            <br />
            Ein Klick auf folgenden Link verhindert die Erfassung durch Google
            Analytics, indem ein sogenanntes Opt-out-Cookie gesetzt wird:
            Deaktivierung von Google Analytics
            <br />
            Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden
            Sie in der Datenschutzerklärung von Google:
            <br />
            <Link href="https://support.google.com/analytics/answer/6004245?hl=de">
              https://support.google.com/analytics/answer/6004245?hl=de
            </Link>
            <br />
          </Typography>
          <Typography variant="h2" id="section1">
            Goolge Web Fonts
          </Typography>
          <Typography variant="body1">
            (1) Wir verwenden auf unserem Internetauftritt &quot;Google Web
            Fonts&quot;, einen Dienst der Google Ireland Limited, Gordon House,
            Barrow Street, Dublin 4, Ireland (nachfolgend bezeichnet als:
            &quot;Google&quot;). Google Web Fonts ermöglicht uns die Verwendung
            externer Schriftarten, sog. Google Fonts. Dazu wird beim Abrufen
            unseres Internetauftritts die benötigten Google Fonts von Ihrem
            Webbrowser in ihren Browsercache geladen. Dies ist notwendig damit
            auch ihr Browser eine optisch verbesserte Darstellung unserer Texte
            anzeigen kann. Wenn ihr Browser diese Funktion nicht unterstützt,
            wird eine Standardschrift von ihrem Computer zur Anzeige genutzt.
            Die Einbindung dieser Web Fonts erfolgt durch einen Serveraufruf, in
            der Regel ein Server von Google in den USA. Hierdurch wird an den
            Server übermittelt, welche Seite unseres Internetauftritts Sie
            besucht haben. Auch wird die IP-Adresse des Browsers des Endgerätes
            des Besuchers von Google gespeichert.
            <br />
            (2) Wir verwenden Google Web Fonts zu Optimierungszwecken,
            insbesondere um die Nutzung unseres Internetauftritts für Sie zu
            verbessern und um dessen Ausgestaltung nutzerfreundlicher zu machen.
            <br />
            (3) Hierin liegt auch unser berechtigtes Interesse nach Art. 6 Abs.
            1 lit. f DSGVO.
            <br />
            (4) Google hat sich dem zwischen der Europäischen Union und den USA
            geschlossenen Privacy-Shield-Abkommen unterworfen und sich
            zertifiziert. Dadurch verpflichtet sich Google, die Standards und
            Vorschriften des europäischen Datenschutzrechts einzuhalten. Nähere
            Informationen können Sie dem nachfolgend verlinkten Eintrag
            entnehmen:
            https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI&status=Active
            <br />
            (5) Informationen des Drittanbieters: Google Dublin, Google Ireland
            Ltd., Gordon House, Barrow Street, Dublin 4, Ireland, Fax: +353 (1)
            436 1001.
            <br />
            Weitere Informationen zum Datenschutz können Sie der
            Datenschutzerklärung von Google entnehmen:
            <br />
            <Link href="http://www.google.de/intl/de/policies/privacy">
              http://www.google.de/intl/de/policies/privacy
            </Link>
            <br />
            Weitergehende Informationen zu Google Web Fonts finden Sie unter
            <br />
            <Link href="http://www.google.com/webfonts/">
              http://www.google.com/webfonts/
            </Link>
            ,
            <Link href="https://developers.google.com/fonts/faq?hl=de-DE&csw=1">
              https://developers.google.com/fonts/faq?hl=de-DE&csw=1
            </Link>
            <br /> und{" "}
            <Link href="https://www.google.com/fonts#AboutPlace:about">
              https://www.google.com/fonts#AboutPlace:about
            </Link>
            .
          </Typography>
          <Typography variant="h2" id="section1">
            Datenweitergabe und Empfänger
          </Typography>
          <Typography variant="body1">
            Eine Übermittlung Ihrer personenbezogenen Daten an Dritte findet
            nicht statt, außer
            <br />
            - wenn wir in der Beschreibung der jeweiligen Datenverarbeitung
            explizit darauf hingewiesen haben.
            <br />
            - wenn Sie ausdrückliche Einwilligung nach Art. 6 Abs. 1 S. 1 lit. a
            DSGVO dazu erteilt haben,
            <br />
            - die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            erforderlich ist und kein Grund zur Annahme besteht, dass Sie ein
            überwiegendes schutzwürdiges Interesse an der Nichtweitergabe Ihrer
            Daten haben,
            <br />
            - im Falle, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c
            DSGVO eine gesetzliche Verpflichtung besteht und
            <br />
            - soweit dies nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die
            Abwicklung von Vertragsverhältnissen mit Ihnen erforderlich ist.
            <br />
            Wir nutzen darüber hinaus für die Abwicklung unserer Services
            externe Dienstleister, die wir sorgfältig ausgewählt und schriftlich
            beauftragt haben. Sie sind an unsere Weisungen gebunden und werden
            von uns regelmäßig kontrolliert. Mit welchen wir erforderlichenfalls
            Auftragsverarbeitungsverträge gem. Art. 28 DSGVO geschlossen haben.
            Diese sind Dienstleister für das Webhosting, den Versand von E-Mails
            sowie Wartung und Pflege unserer IT-Systemen usw. Die Dienstleister
            werden diese Daten nicht an Dritte weitergeben.
          </Typography>
          <Typography variant="h2" id="section1">
            Datensicherheit
          </Typography>
          <Typography variant="body1">
            Wir treffen nach Maßgabe des Art. 32 DSGVO unter Berücksichtigung
            des Stands der Technik, der Implementierungskosten und der Art, des
            Umfangs, der Umstände und der Zwecke der Verarbeitung sowie der
            unterschiedlichen Eintrittswahrscheinlichkeit und Schwere des
            Risikos für die Rechte und Freiheiten natürlicher Personen,
            geeignete technische und organisatorische Maßnahmen, um ein dem
            Risiko angemessenes Schutzniveau zu gewährleisten. Diese Website
            nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung
            vertraulicher Inhalte eine SSL-Verschlüsselung.
          </Typography>
          <Typography variant="h2" id="section1">
            Dauer der Speicherung personenbezogener Daten
          </Typography>
          <Typography variant="body1">
            Die Dauer der Speicherung von personenbezogenen Daten bemisst sich
            an den einschlägigen gesetzlichen Aufbewahrungsfristen (z. B. aus
            dem Handelsrecht und dem Steuerrecht). Nach Ablauf der jeweiligen
            Frist werden die entsprechenden Daten routinemäßig gelöscht. Sofern
            Daten zur Vertragserfüllung oder Vertragsanbahnung erforderlich sind
            oder unsererseits ein berechtigtes Interesse an der
            Weiterspeicherung besteht, werden die Daten gelöscht, wenn Sie zu
            diesen Zwecken nicht mehr erforderlich sind oder Sie von Ihrem
            Widerrufs- oder Widerspruchsrecht Gebrauch gemacht machen.
          </Typography>
          <Typography variant="h2" id="section1">
            Ihre Rechte
          </Typography>
          <Typography variant="body1">
            Im Folgenden finden Sie Informationen dazu, welche Betroffenenrechte
            das geltende Datenschutzrecht Ihnen gegenüber dem Verantwortlichen
            hinsichtlich der Verarbeitung Ihrer personenbezogenen Daten gewährt:
            <br />
            Das Recht, gemäß Art. 15 DSGVO Auskunft über Ihre von uns
            verarbeiteten personenbezogenen Daten zu verlangen. Insbesondere
            können Sie Auskunft über die Verarbeitungszwecke, die Kategorie der
            personenbezogenen Daten, die Kategorien von Empfängern, gegenüber
            denen Ihre Daten offengelegt wurden oder werden, die geplante
            Speicherdauer, das Bestehen eines Rechts auf Berichtigung, Löschung,
            Einschränkung der Verarbeitung oder Widerspruch, das Bestehen eines
            Beschwerderechts, die Herkunft ihrer Daten, sofern diese nicht bei
            uns erhoben wurden, sowie über das Bestehen einer automatisierten
            Entscheidungsfindung einschließlich Profiling und ggf.
            aussagekräftigen Informationen zu deren Einzelheiten verlangen.
            <br />
            Das Recht, gemäß Art. 16 DSGVO unverzüglich die Berichtigung
            unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten
            personenbezogenen Daten zu verlangen.
            <br />
            Das Recht, gemäß Art. 17 DSGVO die Löschung Ihrer bei uns
            gespeicherten personenbezogenen Daten zu verlangen, soweit nicht die
            Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung und
            Information, zur Erfüllung einer rechtlichen Verpflichtung, aus
            Gründen des öffentlichen Interesses oder zur Geltendmachung,
            Ausübung oder Verteidigung von Rechtsansprüchen erforderlich ist.
            <br />
            Das Recht, gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen, soweit die Richtigkeit
            der Daten von Ihnen bestritten wird, die Verarbeitung unrechtmäßig
            ist, Sie aber deren Löschung ablehnen und wir die Daten nicht mehr
            benötigen, Sie jedoch diese zur Geltendmachung, Ausübung oder
            Verteidigung von Rechtsansprüchen benötigen oder Sie gemäß Art. 21
            DSGVO Widerspruch gegen die Verarbeitung eingelegt haben.
            <br />
            Das Recht, gemäß Art. 20 DSGVO Ihre personenbezogenen Daten, die Sie
            uns bereitgestellt haben, in einem strukturierten, gängigen und
            maschinenlesebaren Format zu erhalten oder die Übermittlung an einen
            anderen Verantwortlichen zu verlangen.
            <br />
            Das Recht, sich gemäß Art. 77 DSGVO bei einer Aufsichtsbehörde zu
            beschweren. In der Regel können Sie sich hierfür an die
            Aufsichtsbehörde des Bundeslandes unseres oben angegebenen Sitzes
            oder ggf. die Ihres üblichen Aufenthaltsortes oder Arbeitsplatzes
            wenden.
            <br />
            Das Recht auf Widerruf erteilter Einwilligungen gemäß Art. 7 Abs. 3
            DSGVO: Sie haben das Recht, eine einmal erteilte Einwilligung in die
            Verarbeitung von Daten jederzeit mit Wirkung für die Zukunft zu
            widerrufen. Im Falle des Widerrufs werden wir die betroffenen Daten
            unverzüglich löschen, sofern eine weitere Verarbeitung nicht auf
            eine Rechtsgrundlage zur einwilligungslosen Verarbeitung gestützt
            werden kann. Durch den Widerruf der Einwilligung wird die
            Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
            erfolgten Verarbeitung nicht berührt;
            <br />
          </Typography>
          <Typography variant="h2" id="section1">
            Widerspruchsrecht
          </Typography>
          <Typography variant="body1">
            <b>
              Sofern Ihre personenbezogenen Daten von uns auf Grundlage von
              berechtigten Interessen gemäß Art. 6 Abs. 1 S. 1 lit. f DSGVO
              verarbeitet werden, haben Sie gemäß Art. 21 DSGVO das Recht,
              Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten
              einzulegen, soweit dies aus Gründen erfolgt, die sich aus Ihrer
              besonderen Situation ergeben. Soweit sich der Widerspruch gegen
              die Verarbeitung personenbezogener Daten zum Zwecke von
              Direktwerbung richtet, haben Sie ein generelles Widerspruchsrecht
              ohne das Erfordernis der Angabe einer besonderen Situation.
            </b>
            <br />
            Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch
            machen, genügt eine E-Mail an media@gesund-zussammen.de.
          </Typography>
          <Typography variant="h2" id="section1">
            Externe Verlinkungen
          </Typography>
          <Typography variant="body1">
            Soziale Netzwerke (Facebook, Twitter, YouTube und Invision) sind auf
            unserer Website lediglich als Link zu den entsprechenden Diensten
            eingebunden. Nach dem Anklicken des eingebundenen Text-/Bild-Links
            werden Sie auf die Seite des jeweiligen Anbieters weitergeleitet.
            Erst nach der Weiterleitung werden Nutzerinformationen an den
            jeweiligen Anbieter übertragen. Informationen zum Umgang mit Ihren
            personenbezogenen Daten bei Nutzung dieser Websites entnehmen Sie
            bitte den jeweiligen Datenschutzbestimmungen der von Ihnen genutzten
            Anbieter.
          </Typography>
          <Typography variant="h2" id="section1">
            Änderungsvorbehalt
          </Typography>
          <Typography variant="body1">
            Wir behalten uns vor, diese Datenschutzerklärung erforderlichenfalls
            unter Beachtung der geltenden Datenschutzvorschriften anzupassen
            bzw. zu aktualisieren. Auf diese Weise können wir sie den aktuellen
            rechtlichen Anforderungen anpassen und Änderungen unserer Leistungen
            berücksichtigen, z. B. bei der Einführung neuer Services. Für Ihren
            Besuch gilt die jeweils aktuellste Fassung.
          </Typography>
          <Typography variant="body1">
            Stand dieser Datenschutzerklärung: 01.04.2020
          </Typography>
        </PrivacyWrapper>
        <Box paddingBottom={4} marginTop={4}>
          <CTABox
            claim={this.props.t("privacy.claim")}
            cta={this.props.t("privacy.cta")}
            href={this.props.t("privacy.link")}
          />
        </Box>
      </>
    );
  };
}

const PrivacyWrapper: AnyStyledComponent = styled(Box)`
  && {
    @media (min-width: 600px) {
      padding-right: 16rem;
    }
  }
`;

export default withTranslation()(PrivacyPolicy);
