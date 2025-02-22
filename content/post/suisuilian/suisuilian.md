+++
author = "wu138di"
title = '碎碎念'
date = 2025-01-21T00:54:54+08:00
description = ""
categories = [
    "日常blog"
]
tags = [
    "日常"
]

image = "/post/suisuilian/ssl.jpg"
+++

hu----- 终于有空了，祝大家新年快乐！写一个烟花送给大家！
```JavaScript
const canvas = document.getElementById('fireworksCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let particles = [];

function randomColor() {
  const colors = ['#ff5e57', '#ffbc42', '#4bd3a1', '#32a0f6', '#f542bc'];
  return colors[Math.floor(Math.random() * colors.length)];
}

class Particle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 5 + 1;  
    this.speedX = (Math.random() - 0.5) * 6; 
    this.speedY = (Math.random() - 0.5) * 6;
    this.color = color;
    this.life = 100;  
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.life -= 2;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  isAlive() {
    return this.life > 0;
  }
}

function createFirework(x, y) {
  const color = randomColor();
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(x, y, color));
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); 

  particles = particles.filter(p => p.isAlive());  
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });

  if (particles.length === 0) {
    createFirework(canvas.width / 2, canvas.height / 2); 
  }

  requestAnimationFrame(animateFireworks);
}

animateFireworks();

```
....完了，咋实现呢？？？源代码奉上？？？晕了

不管了，大概过几天我就更新了，给大家带来全新一期xxx教程，嘻嘻，暂且不告诉你们，期待吧！

大家，元宵节快乐！

2025.2.22

气死我了，被同学坑了钱，啊啊啊啊，王鑫，我恨你！

![](post/suisuilian/q.png)

![](post/suisuilian/s.png)