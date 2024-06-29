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

// link camera with parallax component

class Player extends PositionComponent with HasGameRef {
  Vector2 lastCameraPosition = Vector2.zero();
  static final backgroundVelocity = Vector2(3.0, 0);
  static const framesPerSec = 60.0;
  static const threshold = 0.005;

  final character = Character();
  final boat = Boat();
  late ScrappingHook scrappingHook;

  double velocity = 0;

  bool sailing = false;
  bool backward = false;
  bool floating = false;

  bool zoomingIn = false;

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

    if (zoomingIn) {
      game.camera.viewfinder.zoom =
          min(1.5, game.camera.viewfinder.zoom + 0.5 * dt);
      if (game.camera.viewfinder.zoom == 1.5) {
        zoomingIn = false;
      }
    }

    _linkCameraMovementWithBackground(dt);
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
    final newScrappingHook = ScrappingHook();
    scrappingHook = newScrappingHook;

    scrappingHook.casting = true;
    scrappingHook.hookDescending = false;
    scrappingHook.reeling = false;

    zoomingIn = true;

    character.current = CharacterState.casting;
    Future.delayed(const Duration(milliseconds: castingTime), () {
      add(scrappingHook);
      game.overlays.remove("Casting Button");
      game.overlays.add("Reeling Button");
      // game.camera.follow(scrappingHook);
    });
  }

  void reel() {
    scrappingHook.casting = false;
    scrappingHook.hookDescending = false;
    scrappingHook.reeling = true;
  }

  void _linkCameraMovementWithBackground(double dt) {
    final cameraPosition = game.camera.viewfinder.position;
    final delta = dt > threshold ? 1.0 / (dt * framesPerSec) : 1.0;
    final baseVelocity = cameraPosition
      ..sub(lastCameraPosition)
      ..multiply(backgroundVelocity)
      ..multiply(Vector2(delta, delta));
    (game as AquarriorsGame)
        .parallaxBackground
        .parallax!
        .baseVelocity
        .setFrom(baseVelocity);

    lastCameraPosition.setFrom(game.camera.viewfinder.position);
  }
}
