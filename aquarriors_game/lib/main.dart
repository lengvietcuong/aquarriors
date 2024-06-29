import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:aquarriors_game/entities/sea_animal.dart';
import 'package:aquarriors_game/ui/aquarium_actions_panel.dart';
import 'package:aquarriors_game/ui/aquarium_back_button.dart';
import 'package:aquarriors_game/ui/aquarium_button.dart';
import 'package:aquarriors_game/ui/casting_button.dart';
import 'package:aquarriors_game/ui/daily_ads_button.dart';
import 'package:aquarriors_game/ui/name_fish_dialog.dart';
import 'package:aquarriors_game/ui/new_slot_dialog.dart';
import 'package:aquarriors_game/ui/trash_collection.dart';
import 'package:aquarriors_game/ui/trash_collection_button.dart';
import 'package:aquarriors_game/ui/coin_counter.dart';
import 'package:aquarriors_game/ui/fish_tank_panel.dart';
import 'package:aquarriors_game/ui/reeling_button.dart';
import 'package:aquarriors_game/ui/rescue_dialog.dart';
import 'package:aquarriors_game/ui/trash_info_dialpg.dart';
import 'package:aquarriors_game/ui/upgrade_button.dart';
import 'package:aquarriors_game/ui/upgrade_dialog.dart';
import 'package:flame/game.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Hive.initFlutter();
  Hive.registerAdapter(SeaAnimalAdapter());

  await Hive.openBox("gameData");
  await Hive.openBox("trashCollection");
  await Hive.openBox<List>("aquarium");
  // await Hive.deleteFromDisk();

  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return GameWidget(
      game: AquarriorsGame(),
      overlayBuilderMap: {
        "Casting Button": (context, AquarriorsGame game) {
          return CastingButton(game: game);
        },
        "Reeling Button": (context, AquarriorsGame game) {
          return ReelingButton(game: game);
        },
        "Upgrade Button": (context, AquarriorsGame game) {
          return UpgradeButton(game: game);
        },
        "Trash Collection Button": (context, AquarriorsGame game) {
          return TrashCollectionButton(game: game);
        },
        "Aquarium Button": (context, AquarriorsGame game) {
          return AquariumButton(game: game);
        },
        "Coin Counter": (context, AquarriorsGame game) {
          return CoinCounter(game: game);
        },
        "Rescue Turtle Dialog": (context, AquarriorsGame game) {
          return RescueDialog(fishType: "Turtle", game: game);
        },
        "Rescue Clown Fish Dialog": (context, AquarriorsGame game) {
          return RescueDialog(fishType: "Clown Fish", game: game);
        },
        "Rescue Blue Tang Dialog": (context, AquarriorsGame game) {
          return RescueDialog(fishType: "Blue Tang", game: game);
        },
        "Rescue Angel Fish Dialog": (context, AquarriorsGame game) {
          return RescueDialog(fishType: "Angel Fish", game: game);
        },
        "Fish Tank Panel": (context, AquarriorsGame game) {
          return FishTankPanel(game: game);
        },
        "Aquarium Actions Panel": (context, AquarriorsGame game) {
          return AquariumActionsPanel(game: game);
        },
        "Aquarium Back Button": (context, AquarriorsGame game) {
          return AquariumBackButton(game: game);
        },
        "Upgrade Dialog": (context, AquarriorsGame game) {
          return UpgradeDialog(game: game);
        },
        "Aluminum Can Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Aluminum Can",
          );
        },
        "Broken Glass Bottle Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Broken Glass Bottle",
          );
        },
        "Broken Phone Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Broken Phone",
          );
        },
        "Broken Vase Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Broken Vase",
          );
        },
        "Carton Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Carton",
          );
        },
        "Food Waste Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Food Waste",
          );
        },
        "Light Bulb Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Light Bulb",
          );
        },
        "Plastic Bag Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Plastic Bag",
          );
        },
        "Plastic Bottle Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Plastic Bottle",
          );
        },
        "Styrofoam Dialog": (context, AquarriorsGame game) {
          return TrashInfoDialog(
            game: game,
            trashName: "Styrofoam",
          );
        },
        "Trash Collection": (context, AquarriorsGame game) {
          return TrashCollection(game: game);
        },
        "Daily Ads Button": (context, AquarriorsGame game) {
          return DailyAdsButton(game: game);
        },
        "New Slot Dialog": (context, AquarriorsGame game) {
          return NewSlotDialog(game: game);
        },
        "Name Turtle Dialog": (context, AquarriorsGame game) {
          return NameFishDialog(
            game: game,
            fishType: "Turtle",
          );
        },
        "Name Clown Fish Dialog": (context, AquarriorsGame game) {
          return NameFishDialog(
            game: game,
            fishType: "Clown Fish",
          );
        },
        "Name Blue Tang Dialog": (context, AquarriorsGame game) {
          return NameFishDialog(
            game: game,
            fishType: "Blue Tang",
          );
        },
        "Name Angel Fish Dialog": (context, AquarriorsGame game) {
          return NameFishDialog(
            game: game,
            fishType: "Angel Fish",
          );
        },
      },
    );
  }
}
