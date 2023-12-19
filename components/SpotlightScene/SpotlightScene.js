import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { FontLoader } from 'three/addons/loaders/FontLoader.js';


export default function SpotlightScene({image, dimensions, artist, colors, title}) {
  const containerRef = useRef(null);

  console.log(image)

  let sceneInitialzed;




  useEffect(() => {
    if (!containerRef.current || sceneInitialzed) return;

    const createTextTexture = (text, fontSize, textColor, backgroundColor) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = 512;
        canvas.height = 256;
        context.font = `${fontSize}px Arial`;
        context.fillStyle = backgroundColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.fillStyle = textColor;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, canvas.width / 2, canvas.height / 2);
        return new THREE.CanvasTexture(canvas);
      };

    if (typeof window !== "undefined") {
      // Initialize Three.js scene here
      // For example, you can use the following code to create a simple scene:
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );

      scene.add(camera);
      camera.position.z = 10;

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0xffffff, 1);
      containerRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);

      let ambientLightPosition = ambientLight.position;
      ambientLightPosition = new THREE.Vector3(30, 0, 0);
      console.log(ambientLightPosition);
      scene.add(ambientLight);

      let sunlight = new THREE.DirectionalLight(0xffffff, 1.0);
      sunlight.position.y = 25;
      scene.add(sunlight);

    //   const geometry = new THREE.BoxGeometry(1, 1, 1);
    //   const material = new THREE.MeshLambertMaterial({ color: 0x00ff00 });
    //   const cube = new THREE.Mesh(geometry, material);
    //   scene.add(cube);

      window.addEventListener("keydown", onKeydown);

      // Texture for floor
      const floorTexture = new THREE.TextureLoader().load(
        "1M6Iy.jpg"
      );

      floorTexture.wrapS = THREE.RepeatWrapping;
      floorTexture.wrapT = THREE.RepeatWrapping;
      floorTexture.repeat.set(20, 20);

      // Floor
      const planeGeometry = new THREE.PlaneGeometry(50, 50);
      const floorMaterial = new THREE.MeshLambertMaterial({
        map: floorTexture,
        side: THREE.DoubleSide,
      });
      const floorPlane = new THREE.Mesh(planeGeometry, floorMaterial);

      floorPlane.rotation.x = Math.PI / 2;
      floorPlane.position.y = -Math.PI;

      scene.add(floorPlane);

      // Walls
      const wallGroup = new THREE.Group();
      scene.add(wallGroup);

      //front wall
      const frontWall = new THREE.Mesh(
        new THREE.BoxGeometry(70, 23, 0.001),
        new THREE.MeshLambertMaterial({ color: colors[0] })
      );

      frontWall.position.z = -10;

      wallGroup.add(frontWall);

      // left wall
      const leftWall = new THREE.Mesh(
        new THREE.BoxGeometry(30, 23, 0.001),
        new THREE.MeshLambertMaterial({ color: colors[1] })
      );

      leftWall.rotation.y = Math.PI / 2;
      leftWall.position.x = -10

      wallGroup.add(leftWall)

      // right wall
      const rightWall = new THREE.Mesh(
        new THREE.BoxGeometry(30, 23, 0.001),
        new THREE.MeshLambertMaterial({ color: colors[2] })
      );

      rightWall.rotation.y = Math.PI / 2;
      rightWall.position.x = 10

      wallGroup.add(rightWall)

      // Ceiling
      const ceilingGeometry = new THREE.PlaneGeometry(50, 50);
      const ceilingMaterial = new THREE.MeshLambertMaterial({
        color: colors[3],
        side: THREE.DoubleSide,
      });
      const ceilingPlane = new THREE.Mesh(ceilingGeometry, ceilingMaterial);
      ceilingPlane.rotation.x = Math.PI / 2;
      ceilingPlane.position.y = 12;

      scene.add(ceilingPlane);

    //   let textGeometry;

    //   const loader = new FontLoader();
    //   loader.load( 'helvetiker_regular.typeface.json', function ( font ) {
    //     console.log("font loaded successsfllly");
    //     try {
    //         let textGeometry = new TextGeometry( "hello", {
    //           font: font,
    //           size: 100,
    //           height: 10,
    //           curveSegments: 12,
    //           bevelEnabled: true,
    //           bevelThickness: 10,
    //           bevelSize: 8,
    //           bevelOffset: 0,
    //           bevelSegments: 5
    //         } );
            
    //         const textMaterial = new THREE.MeshBasicMaterial({color: "black"})
    //         const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      
    //         textMesh.position.set(0, 0, 5)
    //         scene.add(textMesh)
    //     } catch (error) {
    //         console.log("error: ", error)
    //     }

  
    // } );
    const textureText = createTextTexture('Spotlight', 130, 'white', 'transparent');
    const materialText = new THREE.MeshBasicMaterial({ map: textureText, transparent: true });
    const meshText = new THREE.Mesh(new THREE.PlaneGeometry(10, 5), materialText);

    meshText.position.set(0,0,6)

    scene.add(meshText);


    const textureTextInfo = createTextTexture(`${artist}`, 45, 'black', 'white');
    const materialTextInfo = new THREE.MeshBasicMaterial({ map: textureTextInfo });
    const meshTextInfo = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), materialTextInfo);

    meshTextInfo.position.set(5,0,-9.99)

    scene.add(meshTextInfo);
    
    
      


      function createPainting(imageUrl, width, height, position) {
        const texture = new THREE.TextureLoader();
        const paintingTexture = texture.load(imageUrl);
        const paintingMaterial = new THREE.MeshBasicMaterial({
          map: paintingTexture,
        });
        const paintingGeometry = new THREE.PlaneGeometry(width, height);
        const painting = new THREE.Mesh(paintingGeometry, paintingMaterial);
        painting.position.set(position.x, position.y, position.z);
        return painting;
      }

      const painting1 = createPainting(
        image,
        dimensions.width/300,
        dimensions.height/300,
        new THREE.Vector3(0, 4.5, -9.99)
      );

      scene.add(painting1)
      
      //MOVEMENT

      function onKeydown(event) {
        let keycode = event.which;

        if (keycode === 39) {
          camera.translateX(-0.1);
        }
        if (keycode === 37) {
          camera.translateX(0.1);
        }
        if (keycode === 38) {
          camera.translateZ(-0.2);
        }
        if (keycode === 40) {
          camera.translateZ(0.2);
        }
      }

      function renderLoop() {
        // cube.rotation.x += 0.01;
        // cube.rotation.y += 0.01;

        renderer.render(scene, camera);
        
        requestAnimationFrame(() => renderLoop());
    }

      renderLoop();
      sceneInitialzed = true;

      return () => {
        sceneInitialzed = false
      }
      // Render the scene and camera
    }
  }, []);

  return (
  <>
    <h2>Spotlight</h2>
    <div ref={containerRef} />;
  </>
  )
};

