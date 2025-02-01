<script src="https://cdn.jsdelivr.net/npm/fireworks-js@2.0.0/dist/fireworks.min.js"></script>
<script>
  // 创建烟花效果对象
  const fireworks = new Fireworks({
    target: 'body', // 烟花显示的目标元素，可以是 body 或指定其他元素
    maxRockets: 5, // 每次最多放5个火箭
    rocketSpawnInterval: 100, // 火箭发射的间隔时间（毫秒）
    numParticles: 100, // 每个火箭爆炸后的粒子数量
    explosionMinHeight: 0.1, // 最小爆炸高度
    explosionMaxHeight: 0.5, // 最大爆炸高度
    particleOptions: {
      color: 'random', // 使用随机颜色
      type: 'star', // 粒子类型，选择圆形或星形
      speed: 3, // 粒子速度
    },
  });

  // 在页面加载完成后开始放烟花
  window.onload = function() {
    fireworks.start();
  };
</script>
