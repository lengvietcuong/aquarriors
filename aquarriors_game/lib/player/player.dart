import 'dart:async';

import 'package:aquarriors_game/constants.dart';
import 'package:aquarriors_game/player/boat.dart';
import 'package:aquarriors_game/player/character.dart';
import 'package:flame/components.dart';

const double playerOffsetY = 130;

class Player extends PositionComponent with HasGameRef {
  final character = Character();
  final boat = Boat();

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();

    size = Vector2(220, 80);
    position = Vector2(100, game.size.y - playerOffsetY);

    add(character);
    add(boat);
  }
}
