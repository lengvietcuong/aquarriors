import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:aquarriors_game/ui/aquarium_button.dart';
import 'package:aquarriors_game/ui/casting_button.dart';
import 'package:aquarriors_game/ui/catalog_button.dart';
import 'package:aquarriors_game/ui/reeling_button.dart';
import 'package:aquarriors_game/ui/upgrade_button.dart';
import 'package:flame/game.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      home: GameWidget(
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
        },
      ),
    );
  }
}
