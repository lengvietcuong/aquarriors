import 'dart:async';
import 'dart:math';

import 'package:aquarriors_game/player/boat.dart';
import 'package:aquarriors_game/player/character.dart';
import 'package:flame/components.dart';

const double playerOffsetY = 130;
const double playerOffsetX = 100;

const double waterAcceleration = -200;
const double boatAcceleration = 100;
const double boatMaxSpeed = 200;

class Player extends PositionComponent with HasGameRef {
  final character = Character();
  final boat = Boat();

  double velocity = 0;
  bool sailing = false;
  bool backward = false;
  bool floating = false;

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();

    size = Vector2(220, 80);
    position = Vector2(playerOffsetX, game.size.y - playerOffsetY);

    add(character);
    add(boat);
  }

  @override
  void update(double dt) {
    super.update(dt);

    if (sailing) {
      _onSailing(dt);
    }
    if (floating) {
      _onFloating(dt);
    }
  }

  void _onSailing(double dt) {
    if (!backward) {
      velocity = min(boatMaxSpeed, velocity + boatAcceleration * dt);
    } else {
      velocity = max(-boatMaxSpeed, velocity - boatAcceleration * dt);
    }
    position.translate(velocity * dt, 0);
  }

  void _onFloating(double dt) {
    if (!backward) {
      velocity = max(0, velocity + waterAcceleration * dt);
    } else {
      velocity = min(0, velocity - waterAcceleration * dt);
    }
    if (velocity == 0) {
      floating = false;
      backward = false;
    }

    position.translate(velocity * dt, 0);
  }
}
