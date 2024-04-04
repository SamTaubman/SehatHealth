import React, { useEffect, useRef } from 'react';
import './Welcome.css'; // Import CSS file for styling

function Welcome() {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // constants
      const COLOR_BG = "white";
      const COLOR_CUBE = "purple";
      const SPEED_X = 0.05; // rps
      const SPEED_Y = 0.15; // rps
      const SPEED_Z = 0.10; // rps
      const POINT3D = function(x, y, z) { this.x = x; this.y = y; this.z = z; };

      // dimensions
      var canvasWidth = canvas.width;
      var canvasHeight = canvas.height;

      // colours and lines
      ctx.fillStyle = COLOR_BG;
      ctx.strokeStyle = COLOR_CUBE;
      ctx.lineWidth = canvasWidth / 100;
      ctx.lineCap = "round";

      // cube parameters
      var cx = canvasWidth / 2;
      var cy = canvasHeight / 2;
      var cz = 0;
      var size = canvasHeight / 4; // Adjust cube size as needed
      var vertices = [
          new POINT3D(cx - size, cy - size, cz - size),
          new POINT3D(cx + size, cy - size, cz - size),
          new POINT3D(cx + size, cy + size, cz - size),
          new POINT3D(cx - size, cy + size, cz - size),
          new POINT3D(cx - size, cy - size, cz + size),
          new POINT3D(cx + size, cy - size, cz + size),
          new POINT3D(cx + size, cy + size, cz + size),
          new POINT3D(cx - size, cy + size, cz + size)
      ];
      var edges = [
          [0, 1], [1, 2], [2, 3], [3, 0], // back face
          [4, 5], [5, 6], [6, 7], [7, 4], // front face
          [0, 4], [1, 5], [2, 6], [3, 7] // connecting sides
      ];

      // set up the animation loop
      var timeDelta, timeLast = 0;

      // declare loop function outside useEffect
      function loop(timeNow) {
          // calculate the time difference
          timeDelta = timeNow - timeLast;
          timeLast = timeNow;

          // background
          ctx.fillRect(0, 0, canvasWidth, canvasHeight);

          // rotate the cube along the z axis
          let angle = timeDelta * 0.001 * SPEED_Z * Math.PI * 2;
          for (let v of vertices) {
              let dx = v.x - cx;
              let dy = v.y - cy;
              let x = dx * Math.cos(angle) - dy * Math.sin(angle);
              let y = dx * Math.sin(angle) + dy * Math.cos(angle);
              v.x = x + cx;
              v.y = y + cy;
          }

          // rotate the cube along the x axis
          angle = timeDelta * 0.001 * SPEED_X * Math.PI * 2;
          for (let v of vertices) {
              let dy = v.y - cy;
              let dz = v.z - cz;
              let y = dy * Math.cos(angle) - dz * Math.sin(angle);
              let z = dy * Math.sin(angle) + dz * Math.cos(angle);
              v.y = y + cy;
              v.z = z + cz;
          }

          // rotate the cube along the y axis
          angle = timeDelta * 0.001 * SPEED_Y * Math.PI * 2;
          for (let v of vertices) {
              let dx = v.x - cx;
              let dz = v.z - cz;
              let x = dz * Math.sin(angle) + dx * Math.cos(angle);
              let z = dz * Math.cos(angle) - dx * Math.sin(angle);
              v.x = x + cx;
              v.z = z + cz;
          }

          // draw each edge
          for (let edge of edges) {
              ctx.beginPath();
              ctx.moveTo(vertices[edge[0]].x, vertices[edge[0]].y);
              ctx.lineTo(vertices[edge[1]].x, vertices[edge[1]].y);
              ctx.stroke();
          }

          // call the next frame
          requestAnimationFrame(loop);
      }

      requestAnimationFrame(loop); // initiate the animation loop
    }
  }, []);

  return (
    <header className="welcome-header">
      <canvas ref={canvasRef}></canvas>
      <h1>Welcome to Sehat Health Solutions ChattyChatBot!</h1>
    </header>
  );
}

export default Welcome;

