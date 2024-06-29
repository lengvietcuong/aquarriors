import 'dart:async';
import 'dart:math';
import 'dart:ui';

import 'package:aquarriors_game/player/character.dart';
import 'package:aquarriors_game/player/hook.dart';
import 'package:aquarriors_game/player/player.dart';
import 'package:flame/components.dart';

const double scrappingHookOffsetX = 220;
const double scrappingHookOffsetY = -12;

// projectile motion
const double gravity = 981;
const double launchAngle = pi / 6;
final targetDestination = Vector2(200, 0);
final baseVelocity = sqrt((pow(targetDestination.x, 2) * gravity) /
    (targetDestination.x * sin(2 * launchAngle) -
        2 * targetDestination.y * pow(cos(launchAngle), 2)));
final timeOnAir = 2 * baseVelocity * sin(launchAngle) / gravity;

// circular motion
final double linelength =
    baseVelocity * baseVelocity * sin(2 * launchAngle) / gravity;
const double angularVelocity = pi / 6;
const double circularMotionPeriod = 2 * pi / angularVelocity;

// constant acceleration motion
const double reelingAcceleration = -300;

class ScrappingHook extends PositionComponent with HasGameRef {
  final List<Offset> points = [];
  final hook = Hook();

  bool casting = false;
  bool hookDescending = false;
  bool reeling = false;

  double vx = 0;
  double vy = 0;
  double hookDescendingTime = 0;

  @override
  Future<void> onLoad() async {
    super.onLoad();

    add(hook);
    position = Vector2(219, -4);

    vx = baseVelocity * cos(launchAngle);
    vy = -baseVelocity * sin(launchAngle);

    Future.delayed(Duration(milliseconds: (timeOnAir * 1000).round()), () {
      casting = false;
      hookDescending = true;
      reeling = false;
    });

    points.add(Offset.zero);
    points.add(Offset.zero);
  }

  @override
  void render(Canvas canvas) {
    super.render(canvas);

    canvas.drawPoints(
      PointMode.polygon,
      points,
      Paint()
        ..color = const Color(0xFF55433C)
        ..strokeWidth = 2,
    );
  }

  @override
  void update(double dt) {
    super.update(dt);
    if (casting) {
      _handleCasting(dt);
    }
    if (hookDescending && !reeling) {
      _handleHookDescending(dt);
    }
    if (reeling) {
      _handleReeling(dt);
    }

    hook.position = Vector2(points[1].dx - 5, points[1].dy - 2);
  }

  void _handleCasting(double dt) {
    vy += gravity * dt;

    points[1] = points[1].translate(vx * dt, vy * dt);
  }

  void _handleHookDescending(double dt) {
    if (hookDescendingTime <= circularMotionPeriod / 4) {
      hookDescendingTime += dt;
      vx =
          -linelength * angularVelocity * sin(launchAngle * hookDescendingTime);
      vy = linelength * angularVelocity * cos(launchAngle * hookDescendingTime);

      points[1] = points[1].translate(vx * dt, vy * dt);
    } else {
      hookDescending = false;
    }
  }

  void _handleReeling(double dt) {
    vx += reelingAcceleration * dt;
    vy += reelingAcceleration * dt;

    points[1] = Offset(
      max(0, points[1].dx + vx * dt),
      max(0, points[1].dy + vy * dt),
    );

    game.camera.viewfinder.zoom =
        max(1.0, game.camera.viewfinder.zoom - 0.5 * dt);

    if (points[1] == Offset.zero) {
      reeling = false;
      game.overlays.remove("Reeling Button");
      game.overlays.add("Casting Button");
      (parent as Player).character.current = CharacterState.idle;
      removeFromParent();
    }
  }
}
