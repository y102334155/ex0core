// const distance = 500;
  // const GROUPS = 12;
const checkLineBreak = (text, words, symbol) => {
  let resultText = text.split(" ");
  if (!words) {
    words = 3;
  }
  if (!symbol) {
    symbol = "\n";
  }

  if (resultText.length > words) {
    for (let i = 1; i < resultText.length; i++) {
      if (i % words == 0) {
        resultText.splice(i, 0, symbol);
      } else {
        continue;
      }
    }
  }
  resultText = resultText.join(" ");
  return resultText;
};
  const Graph = ForceGraph3D()
    (document.getElementById('3d-graph'))
      // .onBackgroundClick(() => Graph.cameraPosition({ x: 10, y: 10, z: 10 }, { x: 1, y: 1, z: 1 }, 3000  ))
      .jsonUrl('/assets/graph-net-web.json')
      .height(850)
      .width(1700)
      .onNodeClick(node => {
        // Aim at node from outside it
        const distance = 100;
        const distRatio = 1 + distance/Math.hypot(node.x, node.y, node.z);
    
        const newPos = node.x || node.y || node.z
          ? { x: node.x * distRatio, y: node.y * distRatio, z: node.z * distRatio }
          : { x: 0, y: 0, z: distance }; // special case if node is in (0,0,0)
    
        Graph.cameraPosition(
          newPos, // new position
          node, // lookAt ({ x, y, z })
          2000  // ms transition duration
        );
      })
      .enableNodeDrag(true)
      .linkWidth(0.1)
      .backgroundColor('black')	
      .linkCurvature(0)
      .linkOpacity(1)
      .nodeOpacity(0.75)
      // .linkDirectionalParticles(2)
      // .linkDirectionalParticleSpeed(0.005)
      // .nodeLabel('label')
      .enableNavigationControls(true)
      .showNavInfo(false)
      .nodeVal(0.01)
      // .nodeColor('red')
      .nodeAutoColorBy('label')
      // .nodeVisibility('neighbours')
      // .nodeVisibility((node) => node.neighbours > Number("0") ? false : true)
      // .cameraPosition({ z: distance })
      // .linkHoverPrecision(10)
      // .enablePointerInteraction(true)
      // .nodeLabel('label')
      
      .nodeThreeObjectExtend(true)
      .nodeThreeObject(node => {
        const sprite = new SpriteText(checkLineBreak(node.label), 5);
        sprite.material.depthWrite = false; // make sprite background transparent
        sprite.color = 'white';
        sprite.textHeight = 2;
        // sprite.borderWidth = 0.5;
        // sprite.backgroundColor = 'black';
        // sprite.padding = 2;
        // sprite.borderRadius = 10;
        return sprite;
      });

// Spread nodes a little wider
      // Graph.d3Force('charge').strength(-60);
  
  // let angle = 0;
  //   setInterval(() => {
  //     Graph.cameraPosition({
  //       x: distance * Math.sin(angle),
  //       z: distance * Math.cos(angle)
  //     });
  //     angle += Math.PI / 1000;
  //   }, 10);
