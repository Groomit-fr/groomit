import React from "react";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartReducer";
import { useParams } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";


const CGV = () => {

    const dispach = useDispatch();

    dispach(resetCart())

    return (
        <div style={{margin:" 5rem 5rem"}}>

            <h1 style={{margin:"2rem 0rem"}}>CGV de Groomit</h1>
            <p>
                APERÇU
                <br />
                <br />

                Ce site web est exploité par Groomit. Partout sur le site, nous employons les termes « nous », « notre » et « nos » en référence à Groomit. Ce site web, y compris l'ensemble des informations, outils et services auxquels il donne accès, est offert par Groomit à l'utilisateur que vous êtes, à condition que vous acceptiez la totalité des modalités, conditions, politiques et avis stipulés ici.

                En visitant notre site et/ou en achetant quelque chose auprès de notre entreprise, vous prenez part à notre « Service » et acceptez d'être lié(e) par les modalités et conditions suivantes (« Conditions générales », « Conditions d'utilisation »), y compris par les modalités, conditions et politiques mentionnées aux présentes et/ou accessibles en hyperlien. Les présentes Conditions d'utilisation s'appliquent à tous les utilisateurs du Site, y compris, sans s'y limiter, aux individus qui sont des visiteurs, des fournisseurs, des clients, des marchands et/ou des fournisseurs de contenu.
                Veuillez lire attentivement les présentes Conditions d'utilisation avant d'accéder à notre site web et de l'utiliser. En accédant à une quelconque partie du Site ou en l'utilisant, vous acceptez d'être lié(e) par les présentes Conditions d'utilisation. Si vous n'acceptez pas la totalité des modalités et conditions du présent accord, vous ne pourrez peut-être pas accéder au site web ou utiliser ses services. Si les présentes Conditions d'utilisation sont considérées comme une offre, leur acceptation se limite expressément à elles.

                Chacun des nouveaux outils ou fonctionnalités qui sont ajoutés à la présente boutique est également assujetti aux Conditions d'utilisation. Vous pouvez consulter la version la plus récente des Conditions d'utilisation à tout moment sur cette page. Nous nous réservons le droit de mettre à jour, modifier ou remplacer n'importe quelle partie des présentes Conditions d'utilisation en publiant lesdites mises à jour et/ou modifications sur notre site web. Il vous incombe de vérifier cette page de temps à autre pour voir si des changements y ont été apportés. En continuant à accéder au site web ou à l'utiliser après la publication des modifications, vous acceptez celles-ci.
                Notre boutique est hébergée sur Vercel Inc.
                <br />
                <br />

                CONDITIONS D'UTILISATION DE LA BOUTIQUE EN LIGNE
                <br />
                <br />

                En acceptant les présentes Conditions d'utilisation, vous déclarez avoir atteint ou dépassé l'âge de la majorité dans votre région, province ou État et nous avoir donné l'autorisation de permettre à toute personne mineure à votre charge d'utiliser ce site.

                Vous ne devez en aucune façon utiliser nos produits à des fins illégales ou non autorisées, ni violer des lois de votre juridiction lorsque vous utilisez le Service (y compris, sans toutefois s'y limiter, les lois relatives aux droits d'auteur).

                Vous ne devez pas transmettre de vers informatique, de virus ou tout code de nature destructrice.

                Une infraction ou une violation de n'importe laquelle des Conditions entraînera la résiliation immédiate de vos Services.
                <br />
                <br />

                CONDITIONS GÉNÉRALES
                <br />
                <br />


                Nous nous réservons le droit de refuser de servir quelqu'un à tout moment et pour quelque raison que ce soit.

                Vous comprenez que votre contenu (à l'exception des informations relatives à votre carte de crédit) peut être transféré sans chiffrement et que cela comprend (a) des transmissions sur plusieurs réseaux ; et (b) des changements effectués dans le but de se conformer et de s'adapter aux exigences techniques de la connexion de réseaux ou d'appareils. Les informations de votre carte de crédit sont toujours chiffrées lors de leur transfert sur les réseaux.

                Vous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter toute partie du Service, toute utilisation du Service ou tout accès au Service, ou encore tout contact sur le site web à travers lequel le Service est fourni, sans notre autorisation écrite expresse.

                Les titres utilisés dans le présent accord sont inclus à titre indicatif uniquement et ne limiteront ni n'affecteront aucunement ces Conditions.
                <br />
                <br />

                PRODUITS
                <br />
                <br />

                Tous les produits en vente sur le site www.forever-vacation.com sont proposés dans la limite des stocks disponibles.

                Les Produits disponibles sur le site sont décrits et présentés avec la plus grande exactitude possible.

                Toutefois si des erreurs ou omissions ont pu se produire quant à cette présentation, la responsabilité de la société Toujours Vacances ne pourrait être engagée.

                Les photographies des produits proposés peuvent subir des variations minimes (couleurs, tailles, forme).

                MODIFICATIONS DU SERVICE ET DES PRIX

                Les prix de nos produits sont modifiables sans préavis.

                Nous nous réservons le droit de modifier ou de mettre fin au Service (ou à une quelconque partie de celui-ci) à tout moment et sans préavis.

                Nous ne pourrons être tenus responsables envers vous ou tout tiers de tout changement de prix, ou encore de toute modification, suspension ou interruption du Service.
                <br />
                <br />

                SECTION 5 – PRODUITS OU SERVICES (le cas échéant)
                <br />
                <br />

                Il est possible que certains produits ou services ne soient disponibles qu'en ligne à travers le site web. Il se peut que les quantités de ces produits ou services soient limitées et que leur retour ou leur échange soit strictement assujetti à notre Politique de retour.

                Nous nous sommes efforcés de présenter aussi précisément que possible les couleurs et images des produits figurant sur la boutique. Nous ne pouvons cependant pas garantir la précision d'affichage des couleurs sur l'écran de votre ordinateur.
                Nous nous réservons le droit, sans toutefois y être obligés, de limiter la vente de nos produits ou Services à n'importe quelle personne, région géographique ou juridiction donnée. Nous nous autorisons à exercer ce droit au cas par cas. Nous nous réservons le droit de limiter les quantités des produits ou services que nous offrons. Toutes les descriptions des produits et leur tarification sont modifiables à tout moment, sans préavis et à notre entière discrétion. Nous nous réservons le droit d'interrompre la vente d'un produit à tout moment. Toute offre de produit ou service sur ce site est nulle là où la loi l'interdit.

                Nous ne garantissons pas que la qualité des produits, services, informations ou autres matériels que vous achetez ou que vous vous procurez répondra à vos attentes ni que les erreurs que comporte éventuellement le Service seront corrigées.
                <br />
                <br />

                EXACTITUDE DE LA FACTURATION ET DES INFORMATIONS DE COMPTE
                <br />
                <br />

                Nous nous réservons le droit de refuser toute commande que vous passez auprès de nous. Nous pouvons, à notre seule discrétion, limiter ou annuler les quantités achetées par personne, par foyer ou par commande. Ces restrictions peuvent inclure les commandes passées par ou sur le même compte client, la même carte de crédit et/ou des commandes utilisant la même adresse de facturation et/ou d'expédition. Si nous modifions ou annulons une commande, il se peut que nous tentions de vous en aviser en vous contactant au moyen de l'adresse e-mail et/ou de l'adresse de facturation ou du numéro de téléphone fournis au moment de la commande. Nous nous réservons le droit de limiter ou d'interdire les commandes qui, selon nous, semblent avoir été passées par des négociants, des revendeurs ou des distributeurs.
                Vous acceptez de fournir des informations d'achat et de compte actuelles, complètes et exactes pour tous les achats effectués dans notre boutique. Vous acceptez de mettre rapidement à jour votre compte et toute autre information, y compris votre adresse e-mail et vos numéros de cartes de crédit et leurs dates d'expiration, afin que nous puissions finaliser vos transactions et vous contacter en cas de besoin.

                Pour plus d'informations, veuillez consulter notre Politique de retour.
                <br />
                <br />

                OUTILS FACULTATIFS
                <br />
                <br />

                Nous sommes susceptibles de vous fournir l'accès à des outils tiers que nous ne surveillons, ne contrôlons et ne gérons pas.

                Vous reconnaissez et acceptez que nous vous fournissons l'accès à ces outils « tels quels » et « sous réserve de disponibilité », sans garantie, représentation ou condition d'aucune sorte et sans la moindre approbation. Nous ne saurions être tenus responsables de quoi que ce soit à l'égard de ce qui pourrait résulter de ou être relié à votre utilisation des outils facultatifs tiers.

                Toute utilisation par vous des outils facultatifs proposés par le biais du site est entièrement à votre discrétion et à vos propres risques. En outre, il vous appartient de vous renseigner sur les conditions dans lesquelles ces outils sont fournis par le(s) fournisseur(s) tiers concerné(s) et accepter ces conditions.

                Il se peut également qu'à l'avenir, nous proposions de nouveaux services et/ou de nouvelles fonctionnalités à travers le site web (y compris le lancement de nouveaux outils et ressources). Ces nouveaux services et/ou fonctionnalités seront aussi assujettis aux présentes Conditions d'utilisation.
                <br />
                <br />

                LIENS DE TIERS
                <br />
                <br />

                Certains contenus, produits et services accessibles via notre Service peuvent inclure des éléments provenant de tiers.

                Les liens de tiers sur ce site peuvent vous rediriger vers des sites web de tiers qui ne sont pas affiliés à nous. Nous ne sommes pas tenus d’examiner ou d’évaluer leur contenu ou leur exactitude, de même que nous ne garantissons pas et n’assumons aucune responsabilité quant aux contenus ou sites web, ou aux autres contenus, produits ou services de sources tierces.

                Nous ne sommes pas responsables des préjudices ou dommages liés à l’achat ou à l’utilisation de biens, services, ressources, contenus ou de toute autre transaction reliée à ces sites web tiers. Veuillez lire attentivement les politiques et pratiques de ces tiers et assurez-vous de bien les comprendre avant de vous engager dans une transaction. Les plaintes, réclamations, préoccupations ou questions concernant les produits de tiers doivent être adressées à ces mêmes tiers.
                <br />
                <br />

                INFORMATIONS PERSONNELLES
                <br />
                <br />

                La transmission de vos informations personnelles sur notre boutique est régie par notre Politique de confidentialité.  Cliquez ici pour consulter notre Politique de Confidentialité.
                <br />
                <br />

                ERREURS, INEXACTITUDES ET OMISSIONS
                <br />
                <br />

                Il se peut qu'il y ait parfois, sur notre site ou dans le Service, des informations contenant des erreurs typographiques, des inexactitudes ou des omissions reliées aux descriptions, aux prix, aux promotions, aux offres, aux frais d’expédition, aux délais d'acheminement et à la disponibilité des produits. Nous nous réservons le droit de corriger toute erreur, inexactitude ou omission, et de changer ou d'actualiser des informations, voire d’annuler des commandes si une quelconque information dans le Service ou sur tout site web connexe est inexacte, et ce, à tout moment et sans préavis (y compris après que vous ayez passé votre commande).

                Nous ne sommes pas tenus d'actualiser, de modifier ou de clarifier les informations indiquées dans le Service ou sur tout site web connexe, y compris mais sans s'y limiter, les informations sur les prix, sauf si la loi l'exige. Aucune date précise de mise à jour ou d’actualisation appliquée au Service ou à tout site web connexe ne saurait être définie pour indiquer que l'ensemble des informations offertes dans le Service ou sur tout site web connexe ont été modifiées ou mises à jour.
                <br />
                <br />

                UTILISATIONS INTERDITES
                <br />
                <br />

                En plus des autres interdictions énoncées dans les Conditions d’utilisation, il vous est interdit d’utiliser le site ou son contenu :
                (a) à des fins illégales ; (b) pour inciter des tiers à réaliser des actes illégaux ou à y prendre part ; (c) pour enfreindre toute ordonnance locale ou toute réglementation, règle ou loi internationale, fédérale, provinciale ou étatique ; (d) pour transgresser ou violer nos droits de propriété intellectuelle ou ceux de tiers ; (e) pour harceler, maltraiter, insulter, blesser, diffamer, calomnier, dénigrer, intimider ou discriminer quiconque en fonction du sexe, de l’orientation sexuelle, de la religion, de l’origine ethnique, de la race, de l’âge, de l’origine nationale ou d’un handicap ; (f) pour soumettre des renseignements faux ou trompeurs ;
                (g) pour mettre en ligne ou transmettre des virus ou tout autre type de code malveillant qui sera ou pourrait être utilisé en vue de compromettre la fonctionnalité ou le fonctionnement du Service ou de tout site web connexe, ainsi que d'autres sites web ou d’Internet ; (h) pour recueillir ou suivre les renseignements personnels d’autrui ; (i) pour spammer, hameçonner, détourner un domaine, extorquer des informations, parcourir, explorer ou balayer le web ; (j) à des fins obscènes ou immorales ; ou (k) pour perturber ou contourner les mesures de sécurité du Service ou de tout site connexe, ainsi que d'autres sites web ou d’Internet. Nous nous réservons le droit de mettre fin à votre utilisation du Service ou de tout site web connexe pour avoir enfreint les interdits en matière d'utilisation.
                <br />
                <br />

                EXCLUSION DE GARANTIES ET LIMITATION DE RESPONSABILITÉ
                <br />
                <br />

                Nous ne garantissons, certifions ou déclarons en aucun cas que votre utilisation de notre Service sera ininterrompue, sécurisée, sans délai ou sans erreur.

                Nous ne garantissons pas que les résultats qui pourraient être obtenus en utilisant le Service seront exacts ou fiables.

                Vous acceptez que, de temps à autre, nous puissions retirer le Service pour des périodes indéterminées ou l'annuler à tout moment et sans préavis.
                Vous convenez expressément que votre utilisation du Service, ou votre incapacité à utiliser celui-ci, est à votre seul risque. Le Service ainsi que tous les produits et services qui vous sont fournis par le biais de celui-ci sont (sauf mention expresse de notre part) fournis « tels quels » et « sous réserve de disponibilité » pour votre utilisation, et ce, sans représentation, garanties ou conditions d'aucune sorte, soit expresses soit implicites, y compris toutes les garanties ou conditions implicites de commercialisation ou de qualité marchande, d’adaptation à un usage particulier, de durabilité, de titre et d’absence de contrefaçon.
                Groomit, nos directeurs, responsables, employés, sociétés affiliées, agents, contractants, stagiaires, fournisseurs, prestataires de services et concédants ne peuvent en aucun cas être tenus responsables de toute blessure, perte, réclamation, ou de quelconques dommages directs, indirects, accessoires, punitifs, spéciaux ou consécutifs, y compris mais sans s'y limiter, de la perte de profits, revenus, économies ou données, de coûts de remplacement ou autres dommages similaires, qu’ils soient contractuels, délictuels (même en cas de négligence), de responsabilité stricte ou autre, résultant de votre utilisation du Service ou de tout service ou produit recourant à celui-ci, ou de toute autre réclamation liée de quelque manière que ce soit à votre utilisation du Service ou de tout produit, y compris mais sans s'y limiter, à des erreurs ou omissions dans un contenu, ou à de quelconques pertes ou dommages découlant de l’utilisation du Service ou d'un contenu (ou produit) publié, transmis ou rendu accessible par le biais du Service, et ce, même si vous avez été averti(e) de la possibilité qu’ils surviennent.
                Du fait que certains États ou juridictions ne permettent pas d’exclure ou de limiter la responsabilité quant aux dommages consécutifs ou accessoires, notre responsabilité dans ces États ou juridictions sera limitée dans la mesure maximale permise par la loi.
                <br />
                <br />

                INDEMNISATION
                <br />
                <br />

                Vous acceptez d’indemniser, de défendre et de tenir Groomit et notre société mère, nos filiales, sociétés affiliées, partenaires, responsables, directeurs, agents, contractants, concédants, prestataires de services, sous-traitants, fournisseurs, stagiaires et employés, quittes de toute réclamation ou demande, y compris d'honoraires raisonnables d’avocat, émise par un quelconque tiers à cause de ou consécutivement à votre violation des présentes Conditions d’utilisation ou des documents auxquels elles font référence, ou à votre violation de quelconques lois ou droits d’un tiers.
                <br />
                <br />

                DISSOCIABILITÉ
                <br />
                <br />

                Dans le cas où une quelconque disposition des présentes Conditions d’utilisation est jugée illégale, nulle ou inapplicable, cette disposition sera néanmoins applicable dans la pleine mesure permise par la loi, et la partie non applicable sera considérée comme étant dissociée de ces Conditions d’utilisation, sans que ce jugement n'affecte la validité et l’applicabilité des autres dispositions.
                <br />
                <br />

                INTÉGRALITÉ DE L’ACCORD
                <br />
                <br />

                Tout manquement de notre part à l’exercice ou à l’application d'un droit ou d'une disposition des présentes Conditions d’utilisation ne constitue pas une renonciation à ce droit ou à cette disposition.

                Les présentes Conditions d’utilisation ou toute autre politique ou règle d’exploitation que nous publions sur ce site ou qui concernent le Service constituent l’intégralité de l’entente et de l’accord entre vous et nous, et régissent votre utilisation du Service. Elles remplacent l'ensemble des accords, communications et propositions antérieurs et actuels, oraux ou écrits, entre vous et nous (y compris, mais sans s'y limiter, toute version antérieure des Conditions d’utilisation).
                Toute ambiguïté quant à l’interprétation de ces Conditions d’utilisation ne doit pas être interprétée en défaveur de la partie rédactrice.
                <br />
                <br />

                MODIFICATIONS APPORTÉES AUX CONDITIONS D’UTILISATION
                <br />
                <br />

                Vous pouvez consulter la version la plus récente des Conditions d’utilisation à tout moment sur cette page.

                Nous nous réservons le droit, à notre seule discrétion, de mettre à jour, modifier ou remplacer toute partie des présentes Conditions d'utilisation en publiant lesdites mises à jour et/ou modifications sur notre site web. Il vous incombe de vérifier notre site web de temps à autre pour voir si des changements y ont été apportés. En continuant à accéder à notre site web et au Service ou à les utiliser après la publication de modifications apportées aux présentes Conditions d'utilisation, vous acceptez celles-ci.
                <br />
                <br />

                DROIT DE RETRACTATION
                <br />
                <br />

                D'après l'article L.l21•20 du Code de la consommation, tout consommateur bénéficie d’un délai de 14 jours pour exercer son droit de rétractation sans avoir à justifier de motifs, ni à payer de pénalités, à l'exception des frais de retour.

                Ce délai est prolongé jusqu'au 1er jour ouvrable suivant, s'il expire un samedi, un dimanche ou un jour férié.

                Les produits doivent être retournés dans leur emballage et dans leur état d'origine avec le numéro de commande.
                <br />


                Pour organiser un retour, contactez nous groomit.factory@gmail.com

                <br />
                <br />

                PRIX ET CONDITIONS DE PAIEMENT
                <br />
                <br />

                Le prix des produits est affiché en euros.

                Pour les commandes à destination de pays situés hors d'Union Européenne, la régularisation des frais de douanes sera demandée au Client à la livraison.

                <br />
                <br />

                PAIEMENT SECURISÉ
                <br />
                <br />


                Le paiement est exigible immédiatement à la commande, et se fait par carte bancaire via le système sécurisé réalisé par le prestataire de paiement Stripe Payments Europe, Limited.

                Les informations transmises sont chiffrées dans les règles de l’art et ne peuvent être lues au cours du transport sur le réseau.

                Une fois le paiement lancé par le Client, la transaction est immédiatement débitée après vérification des informations.

                Conformément à l’article L. 132-2 du Code monétaire et financier, l’engagement de payer donné par carte est irrévocable.

                En communiquant ses informations bancaires lors de la vente, le Client autorise le Vendeur à débiter sa carte du montant relatif au prix indiqué.

                Le Client confirme qu’il est bien le titulaire légal de la carte à débiter et qu’il est légalement en droit d’en faire usage.

                Nous n’avons aucun accès à vos identifiants et numéros de carte bancaire. Toutes les transactions sont sécurisées à l'aide d'un cryptage SSL, vous garantissant à la fois l'identité de l'organisme de paiement et la confidentialité des données.
                <br />
                <br />



                Le paiement en plusieurs fois n’est pas admis.

                <br />
                <br />

                GARANTIES ET SERVICES APRÈS VENTE
                <br />
                <br />

                Tous les Produits en vente sur le Site Internet bénéficient de la garantie légale de conformité (L211-4 du Code de la Consommation) permettant à l'Utilisateur de renvoyer les produits livrés défectueux ou non conformes.

                -Article L2ll-4 du Code• de la Consommation : Le vendeur est tenu de livrer un bien conforme existant lors de la délivrance.

                Pour tout produit non conforme, il est possible de nous contacter à travers le formulaire de contact afin de trouver une solution.
                <br />
                <br />

                PROPRIÉTÉ INTELLECTUELLE
                <br />
                <br />

                Tous les éléments du Site Internet y compris la technologie sous-jacente, sont protégés par le droit d'auteur, des marques ou des brevets.
                <br />

                De même, les marque, logos, dessins et modèles figurant sur le site web sont la propriété exclusive de la société Toujours Vacances.
                <br />

                Ils ne peuvent donc être utilisés sous peine de contrefaçon.
                <br />
                <br />

                COORDONNÉES
                <br />
                <br />


                Les questions relatives aux Conditions d’utilisation doivent nous être envoyées à groomit.factory@gmail.com.

            </p>

        </div>
    )
}

export default CGV;