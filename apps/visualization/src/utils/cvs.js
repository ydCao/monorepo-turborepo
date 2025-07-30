// 生成随机数
export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

// 点
export class Point {
  constructor(cvs, ctx) {
    this.ctx = ctx
    this.cvs = cvs
    this.r = 6
    this.x = random(0, cvs.width - this.r/2)
    this.y = random(0, cvs.height - this.r/2)
  }
  draw() {
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    this.ctx.fillStyle = 'black'
    this.ctx.fill()
  }
}
// 图
export class Graph {
  constructor(cvs, ctx, PointNum = 30, maxDis = 500) {
    this.cvs = cvs
    this.ctx = ctx
    this.maxDis = maxDis
    this.points = new Array(PointNum).fill(0).map(() => new Point(cvs, ctx))
  }
  draw() {
    for(let i = 0; i < this.points.length; i++){
      const p1 = this.points[i]
      p1.draw()
      for(let j = i + 1; j < this.points.length; j++){
        const p2 = this.points[j]
        p2.draw()
        this.ctx.beginPath()
        this.ctx.moveTo(p1.x, p1.y)
        this.ctx.lineTo(p2.x, p2.y)
        this.ctx.strokeStyle = 'black'
        this.ctx.stroke()
      }
    }
  }
}
