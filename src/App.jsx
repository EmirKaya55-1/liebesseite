import { useState } from "react";
import "./App.css";

export default function App() {
  const [letterOpen, setLetterOpen] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);

  // Diese drei Zeilen kannst du ändern
  const herName = "Meine Zahraa";
  const yourName = "Emir";
  const mainSentence = "Du bist mein schönster Zufall und meine erste richtige Liebe.";

  const reasons = [
    "weil du mich immer zum lächeln bringen willst",
    "weil dein Gesicht mich sofort alles vergessen lässt",
    "weil ich bei dir einfach ich selbst sein kann",
    "weil du mein Zuhause bist, egal wo wir sind",
    "weil du mein Herz ruhiger und gleichzeitig schneller machst",
    "weil ich mit dir mehr Zukunft sehe als irgendwo sonst",
  ];

  const memories = [
    {
      title: "Unser Anfang",
      text: "Der Moment, als ich in deine DM´s geplatzt bin weil du auf einem Server pervers geschrieben hast",
    },
    {
      title: "Unser erstes treffen",
      text: "Wir waren direkt im Kino, unüblich oder für ein erstes treffen? Aber trotzdem war das so besonders. Als du mir in die Augen sahst habe ich mich verliebt bis zum geht nicht mehr. Der beste Moment war aber wo ich meinen Kiefer gebrochen habe beim tacos essen :).",
    },
    {
      title: "Düsseldorf 1 und 2",
      text: "Wo du mir meine ganzen Sorgen weggenommen hast. Ich habe jede Sekunde mit dir genossen. Am liebsten hätte ich dich für immer umarmt und dich nicht aus Düsseldorf gelassen",
    },
    {
      title: "Berlin 4.0",
      text: "Mal sehen was wir später hir reinschreiben können oder? :) Die restlichen Berlin treffen sind noch in bearbeitung...",
    },
  ];

  return (
    <div className="page">
      <div className="backgroundGlow one"></div>
      <div className="backgroundGlow two"></div>

      <div className="heart h1">❤</div>
      <div className="heart h2">❤</div>
      <div className="heart h3">❤</div>
      <div className="heart h4">❤</div>
      <div className="heart h5">❤</div>
      <div className="heart h6">❤</div>

      <nav className="nav">
        <div className="logo">❤ Für dich</div>
        <div className="links">
          <a href="#gruende">Gründe</a>
          <a href="#momente">Momente</a>
          <a href="#finale">Überraschung</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroText">
          <p className="smallBadge">✨ Eine kleine Seite nur für dich</p>
          <h1>
            Hey,
            <span>{herName}.</span>
          </h1>
          <p className="mainText">
            {mainSentence} Diese Seite ist kein Zufall. Sie ist ein kleines Geschenk für dich. Ich hoffe das macht dich glücklich mein baby.
          </p>

          <div className="buttonRow">
            <button className="mainButton" onClick={() => setLetterOpen(true)}>
              Meinen Brief öffnen
            </button>
            <a className="secondButton" href="#gruende">
              Warum du?
            </a>
          </div>
        </div>

        <div className="loveCard">
          <div className="cardInside">
            <div className="cardTop">
              <div>
                <p>Heute verdient</p>
                <h2>1000 Herzen</h2>
              </div>
              <div className="bigHeart">❤</div>
            </div>

            <div className="musicBox">
              <p>🎵 Unser Vibe</p>
              <div className="bar">
                <div className="barFill"></div>
              </div>
              <span>Weil du Musik so sehr liebst du penner :D.</span>
            </div>

            <div className="stats">
              <div>
                <strong>∞</strong>
                <p>Liebe</p>
              </div>
              <div>
                <strong>1</strong>
                <p>Herz</p>
              </div>
              <div>
                <strong>Du</strong>
                <p>Immer</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gruende" className="section">
        <p className="sectionLabel">Nur ein paar Gründe</p>
        <h2>Warum du mein Lieblingsmensch bist</h2>

        <div className="reasonGrid">
          {reasons.map((reason, index) => (
            <div className="reasonCard" key={index}>
              <div className="star">★</div>
              <p>Ich liebe dich, {reason}.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="momente" className="section darker">
        <p className="sectionLabel">Unsere Geschichte</p>
        <h2>Ein paar Kapitel, die ich niemals überspringen würde</h2>

        <div className="memoryGrid">
          {memories.map((memory, index) => (
            <div className="memoryCard" key={memory.title}>
              <span>0{index + 1}</span>
              <h3>{memory.title}</h3>
              <p>{memory.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="finale" className="finalSection">
        <div className="finalBox">
          <div className="gift">🎁</div>
          <p className="sectionLabel">Kleine Überraschung</p>
          <h2>Ich wollte dir einfach zeigen, dass du besonders bist Gülüm.</h2>
          <p>
            Nicht nur mit Worten, sondern mit etwas das ich extra für dich gebaut habe.
            Weil du genau das am meisten schätzt.
          </p>
          <button className="mainButton" onClick={() => setSecretOpen(true)}>
            Geheimnachricht anzeigen
          </button>
        </div>
      </section>

      <footer>Gebaut mit Liebe von {yourName}. Für {herName}.</footer>

      {letterOpen && (
        <div className="modal" onClick={() => setLetterOpen(false)}>
          <div className="modalBox" onClick={(event) => event.stopPropagation()}>
            <h2>Ein Brief an dich 💌</h2>
            <p>
              {herName},
              <br /><br />
              ich weiß gar nicht wie ich es dir richtig zeigen soll, meine Liebe zu dir.
              Tag für Tag, treffen für treffen kriege ich mehr das verlangen
              dich zu überzeugen damit du für immer zu mir ziehst.
              Du sollst meine Frau auf lebenszeit sein du penner!
              "Eine Prinzessin die versucht hat in dieser Welt alleine zu überleben, bis das unsichtbare Gorilla Kind kam und ihr gezeigt hat wie sie eigentlich der Welt entkommt"
              Ich werde für immer dein  kaltes Wasser sein, der dich an harten tagen abkühlt,
              und dich die schweren zeiten vergessen lässt.
              <br /><br />
              Das alles habe ich selbstverständlich nicht alleine gemacht, aber ich habe
              mir viel mühe gegeben, also in die Seite. Ich hoffe du kannst lächeln während
              du dieses virtuelle brief ließt muhahahaha.
              <br /><br />
              "Eine Prinzessin die versucht hat in dieser Welt alleine zu überleben, bis das unsichtbare Gorilla Kind kam und ihr gezeigt hat wie sie eigentlich der Welt entkommt"
              <br></br>
              Danke, dass du da bist.
              <br />
              In Liebe,
              <br />
              {yourName}
            </p>
            <button className="mainButton" onClick={() => setLetterOpen(false)}>
              Schließen
            </button>
          </div>
        </div>
      )}

      {secretOpen && (
        <div className="modal" onClick={() => setSecretOpen(false)}>
          <div className="secretBox" onClick={(event) => event.stopPropagation()}>
            <div className="secretHeart">❤</div>
            <h2>Ich liebe dich.</h2>
            <p>
              Und falls du es irgendwann vergisst: Diese Seite bleibt der Beweis,
              dass du mein Herz hast.
            </p>
            <button onClick={() => setSecretOpen(false)}>Okay, ich schmelze gerade</button>
          </div>
        </div>
      )}
    </div>
  );
}
