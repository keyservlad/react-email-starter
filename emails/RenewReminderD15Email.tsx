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
}

export const RenewReminderD15Email = ({
  firstname,
  expirationDate,
  carte,
}: Props) => (
  <Html>
    <Head />
    <Preview>EMOVIN – Votre carte expire dans 15 jours</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>
          RE: EMOVIN // RENOUVELLEMENT DE VOTRE CARTE MEMBRE // J-15
        </Heading>

        <Text>Cher {firstname || "client"},</Text>

        <Text>
          Votre abonnement EMOVIN « {carte || "votre carte"} » arrive à échéance
          dans 15 jours soit le {expirationDate || "xx/xx"} prochain.
        </Text>

        <Text>
          Il s’agit peut-être d’un simple oubli. Vous pouvez le faire en
          quelques clics via les liens ci-dessous :
        </Text>

        <Text>
          Avant l’échéance :{" "}
          <Link href="https://www.emovin.fr/mon-compte">
            https://www.emovin.fr/mon-compte
          </Link>{" "}
          (avantages fidélité conservés)
          <br />
          Après l’échéance :{" "}
          <Link href="https://www.emovin.fr/cartes">
            https://www.emovin.fr/cartes
          </Link>{" "}
          (avantages perdus)
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

RenewReminderD15Email.PreviewProps = {
  firstname: "Claire",
  expirationDate: "15 septembre 2025",
  carte: "Découverte",
} as Props;

export default RenewReminderD15Email;

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
