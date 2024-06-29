import 'dart:async';
import 'dart:math';

import 'package:aquarriors_game/aquarriors_game.dart';
import 'package:aquarriors_game/player/boat.dart';
import 'package:aquarriors_game/player/character.dart';
import 'package:aquarriors_game/player/scrapping_hook.dart';
import 'package:flame/components.dart';

const double playerOffsetY = 130;
const double playerOffsetX = 100;

const double waterAcceleration = -200;
const double boatAcceleration = 100;
const double boatMaxSpeed = 200;

const int castingTime = 800;
const double extraZoom = 0.5;

class Player extends PositionComponent with HasGameRef {
  final character = Character();
  final boat = Boat();
  final scrappingHook = ScrappingHook();

  double velocity = 0;

  bool sailing = false;
  bool backward = false;
  bool floating = false;

  bool zooming = false;

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

    if (zooming) {
      game.camera.viewfinder.zoom =
          min(1.5, game.camera.viewfinder.zoom + 0.5 * dt);
      (game as AquarriorsGame).parallaxBackground.scale =
          Vector2.all(game.camera.viewfinder.zoom);
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

  void cast() {
    scrappingHook.casting = true;
    scrappingHook.hookDescending = false;
    scrappingHook.reeling = false;

    zooming = true;

    character.current = CharacterState.casting;
    Future.delayed(const Duration(milliseconds: castingTime), () {
      add(scrappingHook);
      // game.camera.follow(scrappingHook);
    });
  }

  void reel() {
    scrappingHook.casting = false;
    scrappingHook.hookDescending = false;
    scrappingHook.reeling = true;
  }
}
