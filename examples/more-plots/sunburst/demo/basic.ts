import { Sunburst } from '@antv/g2plot';

fetch('https://gw.alipayobjects.com/os/antfincdn/kdE4M3gm1D/coffee.json')
  .then((data) => data.json())
  .then((data) => {
    const plot = new Sunburst('container', {
      data,
      innerRadius: 0.3,
      interactions: [{ type: 'element-active' }],
    });
    plot.render();
  });
