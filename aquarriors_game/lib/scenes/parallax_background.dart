import 'dart:async';

import 'package:aquarriors_game/constants.dart';
import 'package:flame/components.dart';
import 'package:flame/parallax.dart';

class ParallaxBackground extends ParallaxComponent {
  Vector2 lastCameraPosition = Vector2.zero();

  @override
  FutureOr<void> onLoad() async {
    super.onLoad();
    parallax = await game.loadParallax(
      [
        ParallaxImageData("Scenes/Ocean Background.png"),
        ParallaxImageData("Scenes/Land 1.png"),
        ParallaxImageData("Scenes/Land 2.png"),
        ParallaxImageData("Scenes/Land 3.png"),
      ],
      fill: LayerFill.none,
      velocityMultiplierDelta: Vector2(2, 1),
    );

    size = Vector2(5000, size.y);

    position = Vector2(0, size.y - waterLevel);
    anchor = Anchor.bottomLeft;
  }

  @override
  void update(double dt) {
    super.update(dt);
    final cameraPosition = game.camera.viewfinder.position;
    final delta = dt > threshold ? 1.0 / (dt * framesPerSec) : 1.0;
    final baseVelocity = cameraPosition
      ..sub(lastCameraPosition)
      ..multiply(backgroundVelocity)
      ..multiply(Vector2(delta, delta));
    parallax!.baseVelocity.setFrom(baseVelocity);

    lastCameraPosition.setFrom(game.camera.viewfinder.position);
  }

  static final backgroundVelocity = Vector2(3.0, 0);
  static const framesPerSec = 60.0;
  static const threshold = 0.005;
}
