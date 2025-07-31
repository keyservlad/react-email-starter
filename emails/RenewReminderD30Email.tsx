import {
  Html,
  Head,
  Body,
  Container,
  Heading,
  Text,
  Link,
  Img,
  Preview,
} from "@react-email/components";
import * as React from "react";

interface Props {
  firstname?: string;
  expirationDate?: string;
  carte?: string;
  points?: string;
}

export const RenewReminderD30Email = ({
  firstname,
  expirationDate,
  carte,
  points,
}: Props) => (
  <Html>
    <Head />
    <Preview>EMOVIN – Renouvellement de votre carte J-30</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          EMOVIN // RENOUVELLEMENT DE VOTRE CARTE MEMBRE // J-30
        </Heading>

        <Text>Cher {firstname || "client"},</Text>

        <Text>
          Votre abonnement « {carte || "votre carte"} » arrive à échéance dans
          un mois, et pour être précis le {expirationDate || "xx/xx"} prochain !
        </Text>

        <Text>
          Avec toute l’équipe EMOVIN, nous espérons avoir répondu à vos attentes
          et nous serions ravis de vous compter encore parmi nous l’année
          prochaine.
        </Text>

        <Text>
          Pour conserver les avantages acquis du programme de fidélité (
          {points || "x"} points à date, soit une valeur de {points / 4} €), il
          convient de renouveler avant l’échéance.
        </Text>

        <Text>
          Pour renouveler en quelques clics, c’est très simple :
          <br />
          Avant l’échéance :{" "}
          <Link href="https://www.emovin.fr/mon-compte">
            https://www.emovin.fr/mon-compte
          </Link>
          <br />
          Après l’échéance :{" "}
          <Link href="https://www.emovin.fr/cartes">
            https://www.emovin.fr/cartes
          </Link>
        </Text>

        {/* <Text>Une question : 07.72.25.06.21 (Jean-Louis Guilhamat)</Text> */}

        <Text>
          Dans l’espoir de vous voir nous renouveler votre confiance, nous vous
          souhaitons une très belle journée.
        </Text>

        <Text>
          Emovinicalement,
          <br />
          L’équipe EMOVIN
        </Text>

        <Link href="https://www.emovin.fr" target="_blank" style={link}>
          <Img
            src="https://www.emovin.fr/images/logo_emovin-05.svg"
            width="100"
            height="35"
            alt="Logo Emovin"
          />
        </Link>

        <Text style={footer}>
          <Link href="https://www.emovin.fr" target="_blank" style={link}>
            Emovin.fr
          </Link>
          , le plaisir de partager
        </Text>
      </Container>
    </Body>
  </Html>
);

RenewReminderD30Email.PreviewProps = {
  firstname: "Arnaud",
  expirationDate: "30 août 2025",
  carte: "Prestige",
  points: "215",
} as Props;

export default RenewReminderD30Email;

// === Styles ===

const main = { backgroundColor: "#ffffff", padding: "20px" };
const container = {
  paddingLeft: "12px",
  paddingRight: "12px",
  margin: "0 auto",
};
const h1 = { fontSize: "20px", color: "#333", marginBottom: "24px" };
const link = {
  color: "#898989",
  textDecoration: "underline",
  fontSize: "14px",
};
const footer = {
  color: "#898989",
  fontSize: "12px",
  lineHeight: "22px",
  marginTop: "12px",
  marginBottom: "24px",
};
