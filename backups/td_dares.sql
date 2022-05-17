-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: May 18, 2022 at 03:04 AM
-- Server version: 8.0.29-0ubuntu0.20.04.3
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `truthordare`
--

-- --------------------------------------------------------

--
-- Table structure for table `td_dares`
--

CREATE TABLE `td_dares` (
  `ID` int NOT NULL,
  `dare` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` int NOT NULL DEFAULT '5',
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `td_dares`
--

INSERT INTO `td_dares` (`ID`, `dare`, `status`, `updated`) VALUES
(2, 'Act like a chicken until your next turn.', 5, '2022-05-17 06:37:07'),
(3, 'Take a selfie on the toilet and post it.', 5, '2022-05-17 06:37:07'),
(4, 'Name a famous person that looks like each player.', 5, '2022-05-17 06:37:07'),
(5, 'Dance like your life depends on it.', 5, '2022-05-17 06:37:07'),
(6, 'Spin around 12 times and try to walk straight.', 5, '2022-05-17 06:37:07'),
(7, 'Put on a blindfold and touch the other players’ faces until you can figure out who it is.', 5, '2022-05-17 06:37:07'),
(8, 'Pretend to be a squirrel until your next turn.', 5, '2022-05-17 06:37:07'),
(9, 'Lick a bar of soap.', 5, '2022-05-17 06:37:07'),
(10, 'Talk without closing your mouth for three rounds.', 5, '2022-05-17 06:37:08'),
(11, 'Quack like a duck until your next turn.', 5, '2022-05-17 06:37:08'),
(12, 'Go on Facebook Live and read the back of a shampoo bottle.', 5, '2022-05-17 06:37:08'),
(13, 'Take a selfie with the toilet and post it online.', 5, '2022-05-17 06:37:08'),
(14, 'Sniff everyone’s feet and rank them in order of freshest to stinkiest.', 5, '2022-05-17 06:37:08'),
(15, 'Call a Dominos pizza place and ask them what the difference is between Dominos pizza and “real” pizza.', 5, '2022-05-17 06:37:08'),
(16, 'Open your front door and loudly sing your National Anthem', 5, '2022-05-17 06:37:08'),
(17, 'Go outside and pretend you\'re cutting the grass with an invisible mower.', 5, '2022-05-17 06:37:08'),
(18, 'Call your mom and tell her you can\'t find a girlfriend/boyfriend in a very panicked voice.', 5, '2022-05-17 06:37:08'),
(19, 'Go on Facebook Live and pretend to cry because you just found out you were adopted.', 5, '2022-05-17 06:37:08'),
(20, 'Go on Facebook and write I\'m pregnent as your status.', 5, '2022-05-17 06:37:09'),
(21, 'Sniff the armpit of the person next to you — and describe what it smells like to the entire group.', 5, '2022-05-17 06:37:09'),
(22, 'Go outside and try to summon the rain.', 5, '2022-05-17 06:37:09'),
(23, 'Take a picture of a tampon and post it on Instagram.', 5, '2022-05-17 06:37:09'),
(24, 'Call a random number — and when someone picks up — immediately start singing the national anthem.', 5, '2022-05-17 06:37:09'),
(25, 'Call the nearest super market and ask them if they deliver popcorn.', 5, '2022-05-17 06:37:09'),
(26, 'Call Pizza Hut and ask if they sell Pringles.', 5, '2022-05-17 06:37:09'),
(27, 'Call a pizza shop and ask if you can return a pizza.', 5, '2022-05-17 06:37:09'),
(28, 'Call a car dealership and ask if they have any horse buggies in stock.', 5, '2022-05-17 06:37:09'),
(29, 'Change your relationship status on Facebook to it\'s complicated.', 5, '2022-05-17 06:37:09'),
(30, 'Call Toyota and tell them you\'re interested in buying them.', 5, '2022-05-17 06:37:09'),
(31, 'Call a random number and sing Happy Birthday.', 5, '2022-05-17 06:37:09'),
(32, 'Call a Chinese restaurant and ask if they have sushi.', 5, '2022-05-17 06:37:10'),
(33, 'Eat a whole piece of paper.', 5, '2022-05-17 06:37:10'),
(34, 'Tie your hands to your ankles for the rest of the game.', 5, '2022-05-17 06:37:10'),
(35, 'Eat a mouthful of raw food ingredient.', 5, '2022-05-17 06:37:10'),
(36, 'Write a letter to your doctor describing an embarrassing rash you have — and post it on Facebook.', 5, '2022-05-17 06:37:10'),
(37, 'Go outside and hug a mailbox until at least three passersby have seen you.', 5, '2022-05-17 06:37:10'),
(38, 'Only speak in rhymes for the rest of the game.', 5, '2022-05-17 06:37:10'),
(39, 'Kneel for 15 minutes', 5, '2022-05-17 06:37:10'),
(40, 'Drink water straight from a running tap for a whole minute', 5, '2022-05-17 06:37:10'),
(41, 'Call a stranger and tell them a secret.', 5, '2022-05-17 06:37:10'),
(42, 'Allow someone to pour ice down your shirt and pants.', 5, '2022-05-17 06:37:10'),
(43, 'Let each person in the group slap you as hard as they can on your butt.', 5, '2022-05-17 06:37:11'),
(44, 'Make your ear touch your shoulder for the rest of the game.', 5, '2022-05-17 06:37:11'),
(45, 'Stop a car that is going down the street and tell them that their wheels are turning.', 5, '2022-05-17 06:37:11'),
(46, 'Open Facebook — go to the account of the first person you see — and Like every post on their wall going back a full year.', 5, '2022-05-17 06:37:11'),
(47, 'Lick a car tire.', 5, '2022-05-17 06:37:11'),
(48, 'Lick the bottom of your shoe.', 5, '2022-05-17 06:37:11'),
(49, 'Text someone “hey.” Every time they respond — say “hey.” Do this 10 times. For the 11th time — reply with “hi.”', 5, '2022-05-17 06:37:11'),
(50, 'Dip your finger in the toilet — and then kiss that finger.', 5, '2022-05-17 06:37:11'),
(51, 'Let everyone look through your search history for five minutes.', 5, '2022-05-17 06:37:11'),
(52, 'Video call someone and pick your nose during the conversation.', 5, '2022-05-17 06:37:11'),
(53, 'Cry like a baby for one full minute.', 5, '2022-05-17 06:37:12'),
(54, 'Text your crush and tell them you love them.', 5, '2022-05-17 06:37:12'),
(55, 'Call a random number and flirt with the person who picks up.', 5, '2022-05-17 06:37:12'),
(56, 'Let everyone rummage through your purse/wallet.', 5, '2022-05-17 06:37:12'),
(57, 'Post a really long and serious Facebook status confessing your love for wifi.', 5, '2022-05-17 06:37:12'),
(58, 'Call a random person from your contacts and tell them they\'re the ugliest person you\'ve ever met.', 5, '2022-05-17 06:37:12'),
(59, 'Get on your knees and walk a full round around the group.', 5, '2022-05-17 06:37:12'),
(60, 'Hold your nose while talking for the rest of the game.', 5, '2022-05-17 06:37:12'),
(61, 'Give everyone in the room a hug.', 5, '2022-05-17 06:37:12'),
(62, 'Have a full conversation with yourself in a mirror.', 5, '2022-05-17 06:37:12'),
(63, 'Sing like an opera singer.', 5, '2022-05-17 06:37:12'),
(64, 'Let someone in the group cut a piece of your hair.', 5, '2022-05-17 06:37:13'),
(65, 'Film a makeup/cookery tutorial and post it to Facebook.', 5, '2022-05-17 06:37:13'),
(66, 'Tweet or update your Facebook status to I think eggplants are sexy.', 5, '2022-05-17 06:37:13'),
(67, 'Draw a tattoo with a permanent marker on your forearms.', 5, '2022-05-17 06:37:13'),
(68, 'Send a romantic text message to a girl/boy of the group\'s choosing.', 5, '2022-05-17 06:37:13'),
(69, 'Kiss the person to your right on the back of their neck.', 5, '2022-05-17 06:37:13'),
(70, 'Tie your shirt up to expose your midriff and twerk.', 5, '2022-05-17 06:37:13'),
(71, 'Knock on your neighbor\'s door and ask if they have a spare condom.', 5, '2022-05-17 06:37:13'),
(72, 'Post something embarrassing on Facebook.', 5, '2022-05-17 06:37:13'),
(73, 'Talk like a robot for next two rounds.', 5, '2022-05-17 06:37:13'),
(74, 'Give your phone to another player to send a text message to their contact of choice.', 5, '2022-05-17 06:37:13'),
(75, 'Let the other players go through your phone for a minute.', 5, '2022-05-17 06:37:14'),
(76, 'One by one — make up a title for each player\'s movie about their life.', 5, '2022-05-17 06:37:14'),
(77, 'Let your friends pose you and stay like that until the next round.', 5, '2022-05-17 06:37:14'),
(78, 'Let each player choose one word — then attempt to form a sentence with them and post it to Facebook.', 5, '2022-05-17 06:37:14'),
(79, 'Empty your purse — backpack — or wallet — and let everyone see what you have.', 5, '2022-05-17 06:37:14'),
(80, 'Allow the person to your right to tickle you.', 5, '2022-05-17 06:37:14'),
(81, 'Be blindfolded and let someone feed you something.', 5, '2022-05-17 06:37:14'),
(82, 'Do your best impression of someone in the room and keep going until someone correctly guesses who it is.', 5, '2022-05-17 06:37:14'),
(83, 'Hand your phone to the person across from you and let them post whatever they want to your social media accounts.', 5, '2022-05-17 06:37:14'),
(84, 'Take a selfie with the person next to you — and post it on social media along with a deep and emotional paragraph about what they mean to you.', 5, '2022-05-17 06:37:14'),
(85, 'Pick up a random book and read it in the most seductive voice you can manage.', 5, '2022-05-17 06:37:15');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `td_dares`
--
ALTER TABLE `td_dares`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `td_dares`
--
ALTER TABLE `td_dares`
  MODIFY `ID` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=86;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
