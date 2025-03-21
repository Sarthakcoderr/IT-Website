import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import '../styles/ThreeScene.css';

const ThreeScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const canvas = mountRef.current;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.setSize(width, height);
    renderer.setClearColor(0x191919);
    canvas.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0, 280);
    scene.add(camera);

    const sphere = new THREE.Group();
    scene.add(sphere);

    const mat1 = new THREE.LineBasicMaterial({ color: 0x4a4a4a });
    const mat2 = new THREE.LineBasicMaterial({ color: 0x3F51B5 });

    const radius = 100;
    const lines = 50;
    const dots = 50;

    const lineObjects = [];

    for (let i = 0; i < lines; i++) {
      const positions = [];
      const geometry = new THREE.BufferGeometry();
      const material = Math.random() > 0.2 ? mat1 : mat2;

      const line = new THREE.Line(geometry, material);
      line.speed = Math.random() * 300 + 250;
      line.wave = Math.random();
      line.radius = Math.floor(radius + (Math.random() - 0.5) * (radius * 0.2));

      for (let j = 0; j < dots; j++) {
        const x = ((j / dots) * line.radius * 2) - line.radius;
        positions.push(x, 0, 0);
      }

      geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

      line.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      sphere.add(line);
      lineObjects.push(line);
    }

    const updateDots = (a) => {
      lineObjects.forEach((line) => {
        const positions = line.geometry.attributes.position.array;
        for (let j = 0; j < dots; j++) {
          const x = positions[j * 3];
          const ratio = 1 - ((line.radius - Math.abs(x)) / line.radius);
          positions[j * 3 + 1] = Math.sin(a / line.speed + j * 0.15) * 12 * ratio;
        }
        line.geometry.attributes.position.needsUpdate = true;
      });
    };

    const animate = (a) => {
      updateDots(a);
      sphere.rotation.y = (a * 0.0001);
      sphere.rotation.x = (-a * 0.0001);
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);

    const onResize = () => {
      const newWidth = canvas.clientWidth;
      const newHeight = canvas.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", onResize);
    
    return () => {
      window.removeEventListener("resize", onResize);
      canvas.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} id="scene" style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeScene;
