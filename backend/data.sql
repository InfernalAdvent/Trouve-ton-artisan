-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 29 mai 2025 à 19:06
-- Version du serveur : 10.4.32-MariaDB
-- Version de PHP : 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `trouve_ton_artisan`
--

--
-- Déchargement des données de la table `artisans`
--

INSERT INTO `artisans` (`id`, `Nom`, `specialite_id`, `Note`, `Ville`, `A_propos`, `Email`, `Website`, `Image`) VALUES
(1, 'Boucherie Dumont', 1, 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boucherie.dumond@gmail.com', NULL, 'https://img.freepik.com/photos-gratuite/vue-cote-chef-fait-du-boeuf-marbre-cru-pour-steaks-stand_141793-12509.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(2, 'Au pain chaud', 2, 4.8, 'Montélimar', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'aupainchaud@hotmail.com', NULL, 'https://img.freepik.com/photos-gratuite/boulanger-prepare-miche-pain_188544-36682.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(3, 'Chocolaterie Labbé', 3, 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'chocolaterie-labbe@gmail.com', NULL, 'https://img.freepik.com/photos-gratuite/angle-eleve-du-chef-patissier-prepare-gateau-au-chocolat_23-2148696196.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(4, 'Traiteur Tuchon', 4, 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@tuchon-traiteur.fr', 'tuchon-traiteur.fr', 'https://img.freepik.com/photos-gratuite/chef-versant-sauce-speciale-cotes-porc-dans-cuisine_181624-61946.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(5, 'Orville Salmons', 5, 5.0, 'Evian', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'o-salmons@live.com', NULL, 'https://img.freepik.com/photos-gratuite/travailleur-reparant-chauffe-eau_23-2149334227.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(6, 'Mont Blanc Électricité', 6, 4.5, 'Chamonix', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@mont-blanc-electricite.com', 'mont-blanc-electricite.com', 'https://img.freepik.com/photos-premium/section-mediane-homme-travaillant-maison_1048944-3790471.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(7, 'Boutot & Fils', 7, 4.7, 'Bourg-en-bresse', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'boutot-menuiserie@gmail.com', NULL, 'https://img.freepik.com/photos-premium/raboteuse-electrique-biseaute-piece-bois-etabli_213441-1602.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(8, 'Vallis Bellemare', 8, 4.0, 'Vienne', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v.bellemare@gmail.com', NULL, 'https://img.freepik.com/photos-gratuite/service-reparation-plomberie_181624-27146.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(9, 'Claude Quinn', 9, 4.2, 'Aix-les-bains', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'claude.quinn@gmail.com', NULL, 'https://img.freepik.com/photos-gratuite/bijoutier-vue-face-fabriquant-bijoux_23-2150931464.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(10, 'Amitee Lécuyer', 10, 4.5, 'Annecy', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'a.amitee@hotmail.com', NULL, 'https://img.freepik.com/photos-gratuite/vue-avant-du-studio-couture-machine-coudre-vetements_23-2148834125.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(11, 'Ernest Carignan', 11, 5.0, 'Le Puy-en-Velay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'e-carignan@hotmail.com', NULL, 'https://img.freepik.com/photos-gratuite/homme-travaille-dans-usine-metallurgique-il-soude-morceau-rail-aide-outils-speciaux_613910-3861.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(12, 'Royden Charbonneau', 12, 3.8, 'Saint-Priest', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'r-charbonneau@gmail.com', NULL, 'https://img.freepik.com/photos-gratuite/jeune-homme-coupe-ciseaux-peigne_23-2148298357.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(13, 'Leala Dennis', 12, 3.8, 'Chambéry', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'l-dennis@hotmail.fr', NULL, 'https://img.freepik.com/photos-gratuite/beau-male-barbu-elegant-tatouage-bras-vetu-chemise-flanelle-tenant-du-jus-tandis-que-coiffeuse-utilise-seche-cheveux-dans-salon-coiffure_613910-5753.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&'),
(14, 'C\'est sup\'hair', 12, 4.1, 'Romans-sur-Isère', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'sup-hair@gmail.com', NULL, 'https://img.freepik.com/photos-gratuite/client-faisant-cheveux-coupes-dans-salon-coiffure_1303-20693.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(15, 'Le monde des fleurs', 13, 4.6, 'Annonay', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@le-monde-des-fleurs-annonay.fr', 'le-monde-des-fleurs-annonay.fr', 'https://img.freepik.com/photos-gratuite/main-femme-attacher-bouquet-fleurs-ficelle-dans-boutique_23-2147882098.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(16, 'Valérie Laderoute', 14, 4.5, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'v-laredoute@gmail.com', NULL, 'https://img.freepik.com/photos-gratuite/femme-tond-chien-chien-assis-canape-race-yorkshire-terrier_1157-46558.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740'),
(17, 'CM Graphiste', 15, 4.4, 'Valence', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eleifend ante sem, id volutpat massa fermentum nec. Praesent volutpat scelerisque mauris, quis sollicitudin tellus sollicitudin.', 'contact@cm-graphisme.com', 'cm-graphisme.com', 'https://img.freepik.com/photos-premium/graphiste-utilisant-tablette-graphique_107420-42445.jpg?uid=R188740680&ga=GA1.1.1231475228.1748289737&semt=ais_hybrid&w=740');

--
-- Déchargement des données de la table `catégories`
--

INSERT INTO `catégories` (`id`, `nom`) VALUES
(1, 'Bâtiment'),
(2, 'Services'),
(3, 'Fabrication'),
(4, 'Alimentation');

--
-- Déchargement des données de la table `spécialités`
--

INSERT INTO `spécialités` (`id`, `nom`, `categorie_id`) VALUES
(1, 'Boucher', 4),
(2, 'Boulanger', 4),
(3, 'Chocolatier', 4),
(4, 'Traiteur', 4),
(5, 'Chauffagiste', 1),
(6, 'Électricien', 1),
(7, 'Menuisier', 3),
(8, 'Plombier', 1),
(9, 'Bijoutier', 3),
(10, 'Couturier', 3),
(11, 'Ferronier', 1),
(12, 'Coiffeur', 2),
(13, 'Fleuriste', 2),
(14, 'Toiletteur', 2),
(15, 'Webdesign', 2);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
