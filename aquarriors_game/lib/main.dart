import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:aquarriors_game/entities/sea_animal.dart';
import 'package:aquarriors_game/ui/aquarium_actions_panel.dart';
import 'package:aquarriors_game/ui/aquarium_back_button.dart';
import 'package:aquarriors_game/ui/aquarium_button.dart';
import 'package:aquarriors_game/ui/casting_button.dart';
import 'package:aquarriors_game/ui/catalog_button.dart';
import 'package:aquarriors_game/ui/coin_counter.dart';
import 'package:aquarriors_game/ui/fish_tank_panel.dart';
import 'package:aquarriors_game/ui/reeling_button.dart';
import 'package:aquarriors_game/ui/rescue_dialog.dart';
import 'package:aquarriors_game/ui/upgrade_button.dart';
import 'package:flame/game.dart';
import 'package:flutter/material.dart';
import 'package:hive_flutter/hive_flutter.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();

  await Hive.initFlutter();
  Hive.registerAdapter(SeaAnimalAdapter());

  await Hive.openBox("gameData");
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
        "Catalog Button": (context, AquarriorsGame game) {
          return CatalogButton(game: game);
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
      },
    );
  }
}
