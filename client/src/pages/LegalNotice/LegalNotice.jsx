import React from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useEffect } from "react";  


const LegalNotice = () => {

    const dispach = useDispatch();

    dispach(resetCart())

    useEffect(() => {
        document.title = "Mentions légales - Groomit";
    }, []);

    return (
        <div style={{ margin: " 5rem 20rem" }}>

            <h1 style={{ margin: "2rem 0rem" }}>Mentions Légales</h1>
            <p>
                Politique de confidentialité de Groomit
                <br />
                <br />

                La présente Politique de confidentialité décrit la façon dont vos informations personnelles sont recueillies, utilisées et partagées lorsque vous vous rendez sur groomit.fr ou que vous y effectuez un achat.
                <br />
                <br />

                INFORMATIONS PERSONNELLES RECUEILLIES
                <br />
                <br />

                Lorsque vous vous rendez sur le Site, nous recueillons automatiquement certaines informations concernant votre appareil, notamment des informations sur votre navigateur web, votre adresse IP, votre fuseau horaire et certains des cookies qui sont installés sur votre appareil. En outre, lorsque vous parcourez le Site, nous recueillons des informations sur les pages web ou produits individuels que vous consultez, les sites web ou les termes de recherche qui vous ont permis d'arriver sur le Site, ainsi que des informations sur la manière dont vous interagissez avec le Site. Nous désignons ces informations collectées automatiquement sous l'appellation « Informations sur l'appareil ».


                Par ailleurs, lorsque vous effectuez ou tentez d'effectuer un achat par le biais du Site, nous recueillons certaines informations vous concernant, notamment votre nom, votre adresse de facturation, votre adresse d'expédition, votre adresse e-mail et votre numéro de téléphone.  Ces informations collectées automatiquement sont désignées par l’appellation « Informations sur la commande ».

                Lorsque nous utilisons l'expression « Informations personnelles » dans la présente Politique de confidentialité, nous faisons allusion à la fois aux Informations sur l'appareil et aux Informations sur la commande.
                <br />
                <br />

                COMMENT UTILISONS-NOUS VOS INFORMATIONS PERSONNELLES ?
                <br />
                <br />

                En règle générale, nous utilisons les Informations sur la commande que nous recueillons pour traiter toute commande passée par le biais du Site (y compris pour traiter vos informations de paiement, organiser l'expédition de votre commande et vous fournir des factures et/ou des confirmations de commande).  En outre, nous utilisons ces Informations sur la commande pour :
                communiquer avec vous ;
                évaluer les fraudes ou risques potentiels ; et
                lorsque cela correspond aux préférences que vous nous avez communiquées, vous fournir des informations ou des publicités concernant nos produits ou services.

                Nous utilisons les Informations sur l'appareil (en particulier votre adresse IP) que nous recueillons pour évaluer les fraudes ou risques potentiels et, de manière plus générale, pour améliorer et optimiser notre Site (par exemple, en générant des analyses sur la façon dont nos clients parcourent et interagissent avec le Site, et pour évaluer la réussite de nos campagnes de publicité et de marketing).
                <br />
                <br />

                PARTAGE DE VOS INFORMATIONS PERSONNELLES
                <br />
                <br />

                Enfin, il se peut que nous partagions aussi vos Informations personnelles pour respecter les lois et règlementations applicables, répondre à une assignation, à un mandat de perquisition ou à toute autre demande légale de renseignements que nous recevons, ou pour protéger nos droits.
                <br />
                <br />

                NE PAS SUIVRE
                <br />
                <br />

                Veuillez noter que nous ne modifions pas la collecte de données de notre Site et nos pratiques d'utilisation lorsque nous détectons un signal « Ne pas suivre » sur votre navigateur.

                <br />
                <br />
                VOS DROITS
                <br />
                <br />

                Si vous êtes résident(e) européen(ne), vous disposez d'un droit d'accès aux informations personnelles que nous détenons à votre sujet et vous pouvez demander à ce qu'elles soient corrigées, mises à jour ou supprimées. Si vous souhaitez exercer ce droit, veuillez nous contacter au moyen des coordonnées précisées ci-dessous.
                Par ailleurs, si vous êtes résident(e) européen(ne), notez que nous traitons vos informations dans le but de remplir nos obligations contractuelles à votre égard (par exemple si vous passez une commande sur le Site) ou de poursuivre nos intérêts commerciaux légitimes, énumérés ci-dessus.  Veuillez également noter que vos informations seront transférées hors de l'Europe, y compris au Canada et aux États-Unis.
                <br />
                <br />

                RÉTENTION DES DONNÉES
                <br />
                <br />

                Lorsque vous passez une commande par l'intermédiaire du Site, nous conservons les Informations sur votre commande dans nos dossiers, sauf si et jusqu'à ce que vous nous demandiez de les supprimer.

                <br />
                <br />

                CHANGEMENTS
                <br />
                <br />

                Nous pouvons être amenés à modifier la présente politique de confidentialité de temps à autre afin d'y refléter, par exemple, les changements apportés à nos pratiques ou pour d'autres motifs opérationnels, juridiques ou réglementaires.
                <br />
                <br />

                NOUS CONTACTER
                <br />
                <br />

                Pour en savoir plus sur nos pratiques de confidentialité, si vous avez des questions ou si vous souhaitez déposer une réclamation, veuillez nous contacter par e-mail à groomit.factory@gmail.com.
            </p>

        </div>
    )
}

export default LegalNotice;