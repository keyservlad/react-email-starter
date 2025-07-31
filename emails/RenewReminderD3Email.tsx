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
}

export const RenewReminderD3Email = ({ firstname, expirationDate }: Props) => (
  <Html>
    <Head />
    <Preview>EMOVIN – Dernier rappel avant expiration</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>EMOVIN // DERNIER RAPPEL // J-3</Heading>

        <Text>Cher {firstname || "client"},</Text>

        <Text>
          Sauf erreur de notre part, vous n’êtes pas revenu vers nous quant au
          renouvellement de votre abonnement.
          <br />
          Celui-ci arrive à échéance le {expirationDate || "xx/xx"}.
        </Text>

        <Text>
          Sans retour de votre part au plus tard à la date de l’échéance, votre
          compte sera clos et tous les avantages (Programme de fidélité) seront
          définitivement perdus.
        </Text>

        <Text>
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
          Le cas échéant, merci pour votre confiance et à bientôt, pour partager
          à nouveau notre passion du vin.
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

RenewReminderD3Email.PreviewProps = {
  firstname: "Jean",
  expirationDate: "3 octobre 2025",
} as Props;

export default RenewReminderD3Email;

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
