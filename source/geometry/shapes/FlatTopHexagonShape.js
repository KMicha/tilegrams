/**
 * Primary geometry reference:
 * http://www.redblobgames.com/grids/hexagons/#coordinates
 */

export default class FlatTopHexagonShape {
  /** Return tile maximum dimensions, point-to-point, given edge */
  getTileSize(tileEdge) {
    return {
      width: 2.0 * tileEdge,
      height: Math.sqrt(3.0) * tileEdge,
    }
  }

  /** Determine edge length given unit */
  getTileEdgeFromGridUnit({width, height}) {
    return Math.min(
      (width / 3.0) * 2.0,
      height / Math.sqrt(3.0)
    )
  }

  getTileEdgeFromArea(area) {
    return Math.sqrt(
      (area * 2) / (Math.sqrt(3) * 3)
    )
  }

  getGridUnit() {
    return {
      width: 0.75,
      height: 1.0,
    }
  }

  getUnitOffsetX() {
    return 0.0
  }

  getUnitOffsetY(x) {
    return (x % 2 === 0) ? 0 : 1
  }

  getDrawOffsetX() {
    return 0.0
  }

  getDrawOffsetY(x) {
    return x % 2 === 0 ? 0.5 : 0
  }

  getPointsAround(center, tileSize) {
    return [
      // upper left
      [
        center.x - (tileSize.width * 0.25),
        center.y - (tileSize.height * 0.5),
      ],
      // upper right
      [
        center.x + (tileSize.width * 0.25),
        center.y - (tileSize.height * 0.5),
      ],
      // right
      [
        center.x + (tileSize.width * 0.5),
        center.y,
      ],
      // lower right
      [
        center.x + (tileSize.width * 0.25),
        center.y + (tileSize.height * 0.5),
      ],
      // lower left
      [
        center.x - (tileSize.width * 0.25),
        center.y + (tileSize.height * 0.5),
      ],
      // left
      [
        center.x - (tileSize.width * 0.5),
        center.y,
      ],
    ]
  }
}
