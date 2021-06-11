const Shape = {
  createTriangle: function ({ s }) {
    var a = s / 2
    return [
      { x: 0, y: -a },
      { x: -a, y: a },
      { x: a, y: a },
    ]
  },

  createPacman: function ({ s, m }) {
    var a = s / 2
    var p1 = { x: -a, y: -a }
    var p2 = { x: a, y: -a }
    var p3 = { x: a, y: a }
    var p4 = { x: -a, y: a }

    var p5 = {
      x: -a,
      y: 0.3 * s,
    }
    var p6 = {
      x: s * 0.1,
      y: s * 0.3,
    }
    var p7 = {
      x: -s * 0.5,
      y: -s * 0.2 + s * 0.5 * (1 - m),
    }

    return [p1, p2, p3, p4, p5, p6, p7]
  },

  createEnemy: function ({ s, m }) {
    var a = s / 2
    var b = m / 2
    return [
      { x: -a * 0.3, y: a * 0.2 },
      { x: -a * b, y: a * 1 },
      { x: -a * 0.8, y: -a * 0.1 },

      { x: 0, y: -a },

      { x: a * 0.8, y: -a * 0.1 },
      { x: a * b, y: a * 1 },
      { x: a * 0.3, y: a * 0.2 },
    ]
  },

  createPlayer: function ({ s }) {
    var a = s / 2
    var p1 = { x: a, y: -a }
    var p1b = { x: 0, y: -1.5 * a }
    var p2 = { x: -a, y: -a }
    var p3 = { x: -a, y: a }
    var p4 = { x: 1.6 * a, y: a }
    var p5 = { x: 1.6 * a, y: -2 * a }
    var p6 = { x: a, y: -2 * a }
    var p7 = { x: a, y: a }

    return [p1, p1b, p2, p3, p4, p5, p6, p7]
  },

  createPlayer2: function ({ s }) {
    var a = s / 2
    var p1 = { x: a, y: -a }
    var p2 = { x: -a, y: -a }
    var p3 = { x: -a, y: a }
    var p4 = { x: 1.6 * a, y: a }
    var p5 = { x: 1.6 * a, y: -2 * a }
    var p6 = { x: a, y: -2 * a }
    var p7 = { x: a, y: a }

    return [p1, p2, p3, p4, p5, p6, p7]
  },

  createBullet: function ({ s }) {
    var a = s / 2
    var p1 = { x: -a / 2, y: -a }
    var p2 = { x: a / 2, y: -a }
    var p3 = { x: a / 2, y: a }
    var p4 = { x: -a / 2, y: a }

    return [p1, p2, p3, p4]
  },

  createBomb: function ({ s }) {
    var a = s / 2
    return [
      { x: 0, y: -a },
      { x: -a, y: a },
      { x: a, y: a },
    ]
  },
}
