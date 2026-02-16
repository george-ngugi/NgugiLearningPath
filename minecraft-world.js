// Minecraft World with Three.js
let minecraftScene, minecraftCamera, minecraftRenderer;
let minecraftBlocks = [];
let selectedBlockType = 'grass';
let raycaster, mouse;
let controls;
let isMinecraftInitialized = false;
let minecraftEntities = []; // Creepers, villagers, TNT
let explosionParticles = []; // Active explosion particles

// Game state
let gameState = {
    health: 100,
    hunger: 100,
    timeOfDay: 0, // 0-1 (0 = midnight, 0.5 = noon)
    dayNightSpeed: 0.0001,
    isNight: false,
    score: 0,
    difficultySetting: 'normal' // easy, normal, hard
};

let sunLight; // For day/night cycle

// Block colors and textures
const blockMaterials = {
    grass: null,
    dirt: null,
    wood: null,
    stone: null,
    iron: null,
    gold: null,
    diamond: null
};

// Initialize Minecraft World
function initMinecraftWorld() {
    console.log('initMinecraftWorld called');
    if (isMinecraftInitialized) {
        console.log('Already initialized');
        return;
    }
    
    const container = document.getElementById('minecraft-world');
    if (!container) {
        console.error('minecraft-world container not found!');
        return;
    }
    
    console.log('Container dimensions:', container.clientWidth, container.clientHeight);
    
    // Ensure container has dimensions
    if (container.clientWidth === 0 || container.clientHeight === 0) {
        console.error('Container has zero dimensions!');
        return;
    }
    
    // Check if THREE is available
    if (typeof THREE === 'undefined') {
        console.error('THREE.js not loaded!');
        return;
    }
    
    console.log('Creating Three.js scene...');
    
    // Scene setup
    minecraftScene = new THREE.Scene();
    minecraftScene.background = new THREE.Color(0x87CEEB); // Sky blue
    
    // Camera setup
    minecraftCamera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    minecraftCamera.position.set(10, 10, 10);
    minecraftCamera.lookAt(0, 0, 0);
    
    // Renderer setup
    minecraftRenderer = new THREE.WebGLRenderer({ antialias: true });
    minecraftRenderer.setSize(container.clientWidth, container.clientHeight);
    minecraftRenderer.shadowMap.enabled = true;
    container.appendChild(minecraftRenderer.domElement);
    
    console.log('Renderer created and added to container');
    console.log('Canvas size:', minecraftRenderer.domElement.width, minecraftRenderer.domElement.height);
    
    // Lighting with day/night cycle
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    minecraftScene.add(ambientLight);
    console.log('Added ambient light');
    
    // Sun/Moon directional light
    sunLight = new THREE.DirectionalLight(0xffffff, 1.0);
    sunLight.position.set(10, 20, 10);
    sunLight.castShadow = true;
    sunLight.shadow.camera.left = -25;
    sunLight.shadow.camera.right = 25;
    sunLight.shadow.camera.top = 25;
    sunLight.shadow.camera.bottom = -25;
    minecraftScene.add(sunLight);
    console.log('Added sun light');
    
    // Create block materials
    createBlockMaterials();
    console.log('Created block materials');
    
    // Create ground plane
    createGroundPlane();
    console.log('Created ground plane');
    
    // Raycaster for block placement
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();
    
    // Mouse controls
    setupMinecraftControls();
    console.log('Setup controls');
    
    // Keyboard controls for movement
    setupKeyboardControls();
    console.log('Setup keyboard controls');
    
    // Handle window resize
    window.addEventListener('resize', onMinecraftResize);
    
    // Set initialized flag BEFORE starting animation
    isMinecraftInitialized = true;
    console.log('Minecraft world fully initialized!');
    
    // Spawn Minecraft entities
    spawnEntities();
    
    // Initialize game systems
    initGameUI();
    startGameLoop();
    
    // Animation loop - must start AFTER isMinecraftInitialized is true
    animateMinecraft();
    console.log('Started animation loop');
    
    // Load saved world
    loadMinecraftWorld();
    console.log('Loaded saved world');
    
    // Final check - is container still visible?
    const buildingContainer = document.getElementById('building-mode-container');
    console.log('Init complete - Container has hidden class:', buildingContainer.classList.contains('hidden'));
    console.log('Init complete - Container computed display:', window.getComputedStyle(buildingContainer).display);
}

// Create block materials with colors
function createBlockMaterials() {
    blockMaterials.grass = new THREE.MeshLambertMaterial({ color: 0x7CFC00 }); // Lawn green
    blockMaterials.dirt = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // Saddle brown
    blockMaterials.wood = new THREE.MeshLambertMaterial({ color: 0xA0522D }); // Sienna
    blockMaterials.stone = new THREE.MeshLambertMaterial({ color: 0x808080 }); // Gray
    blockMaterials.iron = new THREE.MeshLambertMaterial({ color: 0x696969 }); // Dim gray
    blockMaterials.gold = new THREE.MeshLambertMaterial({ color: 0xFFD700 }); // Gold
    blockMaterials.diamond = new THREE.MeshLambertMaterial({ color: 0x00BFFF }); // Deep sky blue
}

// Create ground plane as reference
function createGroundPlane() {
    const groundGeometry = new THREE.PlaneGeometry(50, 50);
    const groundMaterial = new THREE.MeshLambertMaterial({ 
        color: 0x90EE90,
        side: THREE.DoubleSide 
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.5;
    ground.receiveShadow = true;
    minecraftScene.add(ground);
    
    // Add grid helper
    const gridHelper = new THREE.GridHelper(50, 50, 0x000000, 0x000000);
    gridHelper.position.y = -0.49;
    minecraftScene.add(gridHelper);
}

// Create a Creeper model
function createCreeper(x, z) {
    const creeper = new THREE.Group();
    
    // Body (main green rectangle)
    const bodyGeometry = new THREE.BoxGeometry(0.8, 1.2, 0.8);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x0A8F08 }); // Dark green
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.6;
    creeper.add(body);
    
    // Head
    const headGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const headMaterial = new THREE.MeshLambertMaterial({ color: 0x0A8F08 });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.6;
    creeper.add(head);
    
    // Eyes (black squares)
    const eyeGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.05);
    const eyeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 1.7, 0.42);
    creeper.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 1.7, 0.42);
    creeper.add(rightEye);
    
    // Mouth
    const mouthGeometry = new THREE.BoxGeometry(0.15, 0.3, 0.05);
    const mouth = new THREE.Mesh(mouthGeometry, eyeMaterial);
    mouth.position.set(0, 1.45, 0.42);
    creeper.add(mouth);
    
    // Legs
    const legGeometry = new THREE.BoxGeometry(0.3, 0.6, 0.3);
    const legMaterial = new THREE.MeshLambertMaterial({ color: 0x0A8F08 });
    
    const leg1 = new THREE.Mesh(legGeometry, legMaterial);
    leg1.position.set(-0.25, 0, 0.25);
    creeper.add(leg1);
    
    const leg2 = new THREE.Mesh(legGeometry, legMaterial);
    leg2.position.set(0.25, 0, 0.25);
    creeper.add(leg2);
    
    const leg3 = new THREE.Mesh(legGeometry, legMaterial);
    leg3.position.set(-0.25, 0, -0.25);
    creeper.add(leg3);
    
    const leg4 = new THREE.Mesh(legGeometry, legMaterial);
    leg4.position.set(0.25, 0, -0.25);
    creeper.add(leg4);
    
    creeper.position.set(x, 0.3, z);
    creeper.userData.type = 'creeper';
    creeper.userData.bobOffset = Math.random() * Math.PI * 2;
    creeper.userData.health = 20;
    creeper.userData.chaseRadius = 15; // Start chasing if player within 15 blocks
    creeper.userData.explodeRadius = 3; // Explode if within 3 blocks
    creeper.userData.speed = 0.05;
    creeper.userData.targetPosition = null;
    
    return creeper;
}

// Create a Villager model
function createVillager(x, z) {
    const villager = new THREE.Group();
    
    // Body (brown robe)
    const bodyGeometry = new THREE.BoxGeometry(0.8, 1.0, 0.5);
    const bodyMaterial = new THREE.MeshLambertMaterial({ color: 0x8B4513 }); // Brown
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 0.8;
    villager.add(body);
    
    // Head (large blocky head)
    const headGeometry = new THREE.BoxGeometry(0.9, 0.9, 0.9);
    const headMaterial = new THREE.MeshLambertMaterial({ color: 0xCD853F }); // Tan
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.y = 1.75;
    villager.add(head);
    
    // Nose (big nose!)
    const noseGeometry = new THREE.BoxGeometry(0.2, 0.25, 0.3);
    const noseMaterial = new THREE.MeshLambertMaterial({ color: 0xB8956A });
    const nose = new THREE.Mesh(noseGeometry, noseMaterial);
    nose.position.set(0, 1.7, 0.5);
    villager.add(nose);
    
    // Eyes
    const eyeGeometry = new THREE.BoxGeometry(0.1, 0.1, 0.05);
    const eyeMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 1.8, 0.47);
    villager.add(leftEye);
    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 1.8, 0.47);
    villager.add(rightEye);
    
    // Arms
    const armGeometry = new THREE.BoxGeometry(0.3, 0.8, 0.3);
    const armMaterial = new THREE.MeshLambertMaterial({ color: 0xCD853F });
    const leftArm = new THREE.Mesh(armGeometry, armMaterial);
    leftArm.position.set(-0.6, 0.9, 0);
    villager.add(leftArm);
    const rightArm = new THREE.Mesh(armGeometry, armMaterial);
    rightArm.position.set(0.6, 0.9, 0);
    villager.add(rightArm);
    
    // Legs
    const legGeometry = new THREE.BoxGeometry(0.3, 0.6, 0.3);
    const legMaterial = new THREE.MeshLambertMaterial({ color: 0x654321 });
    const leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    leftLeg.position.set(-0.2, 0, 0);
    villager.add(leftLeg);
    const rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    rightLeg.position.set(0.2, 0, 0);
    villager.add(rightLeg);
    
    villager.position.set(x, 0.3, z);
    villager.userData.type = 'villager';
    villager.userData.bobOffset = Math.random() * Math.PI * 2;
    villager.userData.rotationSpeed = (Math.random() - 0.5) * 0.02;
    villager.userData.health = 20;
    villager.userData.canTrade = true;
    villager.userData.tradeOffer = {
        gives: ['iron', 'gold', 'diamond'][Math.floor(Math.random() * 3)],
        wants: 'wood',
        amount: 3
    };
    
    return villager;
}

// Create TNT block
function createTNT(x, z) {
    const tnt = new THREE.Group();
    
    // Main TNT cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshLambertMaterial({ color: 0xFF0000 }); // Red
    const cube = new THREE.Mesh(geometry, material);
    tnt.add(cube);
    
    // White stripes
    const stripeGeometry = new THREE.BoxGeometry(1.01, 0.15, 1.01);
    const stripeMaterial = new THREE.MeshLambertMaterial({ color: 0xFFFFFF });
    const stripe1 = new THREE.Mesh(stripeGeometry, stripeMaterial);
    stripe1.position.y = 0.3;
    tnt.add(stripe1);
    const stripe2 = new THREE.Mesh(stripeGeometry, stripeMaterial);
    stripe2.position.y = -0.3;
    tnt.add(stripe2);
    
    // TNT text (black box on top)
    const textGeometry = new THREE.BoxGeometry(0.5, 0.2, 0.5);
    const textMaterial = new THREE.MeshLambertMaterial({ color: 0x000000 });
    const text = new THREE.Mesh(textGeometry, textMaterial);
    text.position.set(0, 0.51, 0);
    tnt.add(text);
    
    tnt.position.set(x, 0.5, z);
    tnt.userData.type = 'tnt';
    tnt.userData.rotationSpeed = 0.01;
    
    return tnt;
}

// Spawn entities in the world
function spawnEntities() {
    // Spawn 3 creepers
    for (let i = 0; i < 3; i++) {
        const x = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        const creeper = createCreeper(x, z);
        minecraftScene.add(creeper);
        minecraftEntities.push(creeper);
    }
    
    // Spawn 2 villagers
    for (let i = 0; i < 2; i++) {
        const x = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        const villager = createVillager(x, z);
        minecraftScene.add(villager);
        minecraftEntities.push(villager);
    }
    
    // Spawn 2 TNT blocks
    for (let i = 0; i < 2; i++) {
        const x = (Math.random() - 0.5) * 20;
        const z = (Math.random() - 0.5) * 20;
        const tnt = createTNT(x, z);
        minecraftScene.add(tnt);
        minecraftEntities.push(tnt);
    }
    
    console.log('Spawned entities:', minecraftEntities.length);
}

// Animate entities
function animateEntities() {
    const time = Date.now() * 0.001;
    const cameraPos = minecraftCamera.position;
    
    minecraftEntities.forEach(entity => {
        if (entity.userData.type === 'creeper') {
            // Creeper AI - chase player
            const distance = entity.position.distanceTo(cameraPos);
            
            if (distance < entity.userData.chaseRadius) {
                // Move towards player
                const direction = new THREE.Vector3().subVectors(cameraPos, entity.position).normalize();
                entity.position.x += direction.x * entity.userData.speed;
                entity.position.z += direction.z * entity.userData.speed;
                
                // Look at player
                entity.lookAt(cameraPos.x, entity.position.y, cameraPos.z);
                
                // Explode if close enough
                if (distance < entity.userData.explodeRadius && !entity.userData.exploding) {
                    igniteTNTOrCreeper(entity);
                }
            } else {
                // Wander randomly
                if (!entity.userData.wanderTarget || Math.random() < 0.01) {
                    entity.userData.wanderTarget = new THREE.Vector3(
                        entity.position.x + (Math.random() - 0.5) * 10,
                        entity.position.y,
                        entity.position.z + (Math.random() - 0.5) * 10
                    );
                }
                
                const wanderDir = new THREE.Vector3().subVectors(entity.userData.wanderTarget, entity.position).normalize();
                entity.position.x += wanderDir.x * entity.userData.speed * 0.3;
                entity.position.z += wanderDir.z * entity.userData.speed * 0.3;
            }
            
            // Bob up and down
            const bobAmount = Math.sin(time * 2 + entity.userData.bobOffset) * 0.1;
            entity.position.y = 0.3 + bobAmount;
            
            // Flash if about to explode
            if (entity.userData.exploding) {
                const flashSpeed = 10;
                const flash = Math.sin(time * flashSpeed) > 0;
                entity.children[0].material.color.setHex(flash ? 0xFFFFFF : 0x0A8F08);
            }
            
        } else if (entity.userData.type === 'villager') {
            // Bob up and down
            const bobAmount = Math.sin(time * 2 + entity.userData.bobOffset) * 0.1;
            entity.position.y = 0.3 + bobAmount;
            
            // Rotate villagers slowly
            entity.rotation.y += entity.userData.rotationSpeed;
            
        } else if (entity.userData.type === 'tnt') {
            // Rotate TNT
            entity.rotation.y += entity.userData.rotationSpeed;
            
            // Flash red if about to explode
            if (entity.userData.exploding) {
                const flashSpeed = 10;
                const flash = Math.sin(time * flashSpeed) > 0;
                entity.children[0].material.color.setHex(flash ? 0xFFFFFF : 0xFF0000);
            }
        }
    });
    
    // Animate explosion particles
    for (let i = explosionParticles.length - 1; i >= 0; i--) {
        const particle = explosionParticles[i];
        particle.life -= 0.016; // Decrease life
        
        if (particle.life <= 0) {
            minecraftScene.remove(particle.mesh);
            explosionParticles.splice(i, 1);
        } else {
            // Move particle
            particle.mesh.position.add(particle.velocity);
            particle.velocity.y -= 0.02; // Gravity
            
            // Fade out
            const alpha = particle.life / particle.initialLife;
            particle.mesh.material.opacity = alpha;
            
            // Shrink
            const scale = 0.3 + (alpha * 0.7);
            particle.mesh.scale.set(scale, scale, scale);
        }
    }
}

// Create explosion effect
function createExplosion(position) {
    console.log('💥 BOOM! Explosion at', position);
    
    // Create particle burst
    const particleCount = 30;
    const colors = [0xFF6600, 0xFF9900, 0xFFCC00, 0xFF0000, 0x999999];
    
    for (let i = 0; i < particleCount; i++) {
        const geometry = new THREE.BoxGeometry(0.3, 0.3, 0.3);
        const color = colors[Math.floor(Math.random() * colors.length)];
        const material = new THREE.MeshLambertMaterial({ 
            color: color,
            transparent: true,
            opacity: 1
        });
        const particle = new THREE.Mesh(geometry, material);
        
        particle.position.copy(position);
        
        // Random velocity
        const velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 0.5,
            Math.random() * 0.5,
            (Math.random() - 0.5) * 0.5
        );
        
        const life = 1 + Math.random();
        
        explosionParticles.push({
            mesh: particle,
            velocity: velocity,
            life: life,
            initialLife: life
        });
        
        minecraftScene.add(particle);
    }
    
    // Destroy nearby entities and blocks
    const explosionRadius = 4;
    
    // Damage player if nearby
    const playerDistance = minecraftCamera.position.distanceTo(position);
    if (playerDistance < explosionRadius) {
        const damage = Math.floor(30 * (1 - playerDistance / explosionRadius));
        takeDamage(damage);
    }
    
    // Remove nearby blocks
    for (let i = minecraftBlocks.length - 1; i >= 0; i--) {
        const block = minecraftBlocks[i];
        const distance = block.position.distanceTo(position);
        
        if (distance < explosionRadius) {
            minecraftScene.remove(block);
            const blockType = block.userData.blockType;
            buildingResources[blockType]++;
            minecraftBlocks.splice(i, 1);
        }
    }
    
    // Remove nearby entities
    for (let i = minecraftEntities.length - 1; i >= 0; i--) {
        const entity = minecraftEntities[i];
        const distance = entity.position.distanceTo(position);
        
        if (distance < explosionRadius) {
            minecraftScene.remove(entity);
            minecraftEntities.splice(i, 1);
            console.log('💀 Destroyed', entity.userData.type);
        }
    }
    
    updateResourceDisplay();
    saveBuildingData();
    
    // Show notification
    showReward('💥 BOOM!', 'TNT Exploded! Nearby blocks returned to inventory.', '💣');
}

// Trigger TNT/Creeper explosion with countdown
function igniteTNTOrCreeper(entity) {
    if (entity.userData.exploding) return; // Already ignited
    
    const entityType = entity.userData.type === 'tnt' ? 'TNT' : 'Creeper';
    console.log('🔥', entityType, 'Ignited!');
    entity.userData.exploding = true;
    
    // Countdown before explosion (creepers explode faster)
    const fuseTime = entity.userData.type === 'tnt' ? 2000 : 1500;
    setTimeout(() => {
        const position = entity.position.clone();
        createExplosion(position);
    }, fuseTime);
}

// Setup mouse controls for camera and block placement
function setupMinecraftControls() {
    const canvas = minecraftRenderer.domElement;
    let isDragging = false;
    let previousMouseX = 0;
    let previousMouseY = 0;
    
    // Camera rotation with drag
    canvas.addEventListener('mousedown', (event) => {
        if (event.button === 0) { // Left click
            isDragging = true;
            previousMouseX = event.clientX;
            previousMouseY = event.clientY;
        }
    });
    
    canvas.addEventListener('mousemove', (event) => {
        if (isDragging) {
            const deltaX = event.clientX - previousMouseX;
            const deltaY = event.clientY - previousMouseY;
            
            // Rotate camera around center
            const rotationSpeed = 0.005;
            const cameraDistance = minecraftCamera.position.length();
            
            const theta = Math.atan2(minecraftCamera.position.x, minecraftCamera.position.z);
            const phi = Math.acos(minecraftCamera.position.y / cameraDistance);
            
            const newTheta = theta - deltaX * rotationSpeed;
            const newPhi = Math.max(0.1, Math.min(Math.PI - 0.1, phi + deltaY * rotationSpeed));
            
            minecraftCamera.position.x = cameraDistance * Math.sin(newPhi) * Math.sin(newTheta);
            minecraftCamera.position.y = cameraDistance * Math.cos(newPhi);
            minecraftCamera.position.z = cameraDistance * Math.sin(newPhi) * Math.cos(newTheta);
            
            minecraftCamera.lookAt(0, 0, 0);
            
            previousMouseX = event.clientX;
            previousMouseY = event.clientY;
        }
    });
    
    canvas.addEventListener('mouseup', () => {
        isDragging = false;
    });
    
    // Zoom with mouse wheel
    canvas.addEventListener('wheel', (event) => {
        event.preventDefault();
        const zoomSpeed = 0.1;
        const direction = event.deltaY > 0 ? 1 : -1;
        const distance = minecraftCamera.position.length();
        const newDistance = Math.max(5, Math.min(30, distance + direction * zoomSpeed * distance));
        minecraftCamera.position.multiplyScalar(newDistance / distance);
    });
    
    // Block placement on click
    canvas.addEventListener('click', (event) => {
        if (!isDragging) {
            // Check if clicking on entities
            const rect = minecraftRenderer.domElement.getBoundingClientRect();
            mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            
            raycaster.setFromCamera(mouse, minecraftCamera);
            const intersects = raycaster.intersectObjects(minecraftEntities, true);
            
            if (intersects.length > 0) {
                // Find the parent entity
                let clickedEntity = intersects[0].object;
                while (clickedEntity.parent && !clickedEntity.userData.type) {
                    clickedEntity = clickedEntity.parent;
                }
                
                if (clickedEntity.userData.type === 'tnt') {
                    igniteTNTOrCreeper(clickedEntity);
                    return;
                } else if (clickedEntity.userData.type === 'villager' && clickedEntity.userData.canTrade) {
                    tradeWithVillager(clickedEntity);
                    return;
                }
            }
            
            // Otherwise place block
            placeBlock(event);
        }
    });
    
    // Block removal on right click
    canvas.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        removeBlock(event);
    });
}

// Setup keyboard controls for camera movement
function setupKeyboardControls() {
    const keys = {
        w: false, s: false, a: false, d: false,
        space: false, shift: false
    };
    
    const moveSpeed = 0.3;
    
    document.addEventListener('keydown', (e) => {
        const key = e.key.toLowerCase();
        if (key === 'w') keys.w = true;
        if (key === 's') keys.s = true;
        if (key === 'a') keys.a = true;
        if (key === 'd') keys.d = true;
        if (key === ' ') keys.space = true;
        if (e.key === 'Shift') keys.shift = true;
        
        // Eat food
        if (key === 'e' && buildingResources.wood > 0) {
            // Use wood as "food" for now
            buildingResources.wood--;
            gameState.hunger = Math.min(100, gameState.hunger + 20);
            updateResourceDisplay();
            saveBuildingData();
            updateGameUI();
            showReward('🍗 Ate Food!', 'Hunger restored +20', '✨');
        }
    });
    
    document.addEventListener('keyup', (e) => {
        const key = e.key.toLowerCase();
        if (key === 'w') keys.w = false;
        if (key === 's') keys.s = false;
        if (key === 'a') keys.a = false;
        if (key === 'd') keys.d = false;
        if (key === ' ') keys.space = false;
        if (e.key === 'Shift') keys.shift = false;
    });
    
    // Apply movement every frame
    function updateMovement() {
        if (!isMinecraftInitialized) return;
        
        const forward = new THREE.Vector3();
        const right = new THREE.Vector3();
        
        minecraftCamera.getWorldDirection(forward);
        forward.y = 0; // Keep movement horizontal
        forward.normalize();
        
        right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();
        
        if (keys.w) minecraftCamera.position.addScaledVector(forward, moveSpeed);
        if (keys.s) minecraftCamera.position.addScaledVector(forward, -moveSpeed);
        if (keys.a) minecraftCamera.position.addScaledVector(right, -moveSpeed);
        if (keys.d) minecraftCamera.position.addScaledVector(right, moveSpeed);
        if (keys.space) minecraftCamera.position.y += moveSpeed * 0.5;
        if (keys.shift) minecraftCamera.position.y -= moveSpeed * 0.5;
        
        // Keep camera above ground
        if (minecraftCamera.position.y < 2) minecraftCamera.position.y = 2;
        
        requestAnimationFrame(updateMovement);
    }
    
    updateMovement();
}

// Place a block
function placeBlock(event) {
    const rect = minecraftRenderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, minecraftCamera);
    
    // Check if we have blocks to place
    if (!buildingResources[selectedBlockType] || buildingResources[selectedBlockType] <= 0) {
        showReward('No Blocks!', `You need ${selectedBlockType} blocks. Answer questions to earn them!`, '😢');
        return;
    }
    
    // Find intersection with existing blocks or ground
    const intersects = raycaster.intersectObjects([...minecraftBlocks, minecraftScene.children.find(obj => obj.geometry instanceof THREE.PlaneGeometry)]);
    
    if (intersects.length > 0) {
        const intersect = intersects[0];
        const blockSize = 1;
        
        // Calculate position for new block
        const normal = intersect.face.normal.clone();
        const newPosition = intersect.point.clone().add(normal.multiplyScalar(blockSize / 2));
        
        // Snap to grid
        newPosition.x = Math.round(newPosition.x);
        newPosition.y = Math.max(0, Math.round(newPosition.y));
        newPosition.z = Math.round(newPosition.z);
        
        // Check if position is already occupied
        const occupied = minecraftBlocks.some(block => {
            return block.position.x === newPosition.x &&
                   block.position.y === newPosition.y &&
                   block.position.z === newPosition.z;
        });
        
        if (!occupied) {
            createBlock(newPosition, selectedBlockType);
            buildingResources[selectedBlockType]--;
            updateResourceDisplay();
            saveBuildingData();
        }
    }
}

// Remove a block
function removeBlock(event) {
    const rect = minecraftRenderer.domElement.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    raycaster.setFromCamera(mouse, minecraftCamera);
    
    const intersects = raycaster.intersectObjects(minecraftBlocks);
    
    if (intersects.length > 0) {
        const block = intersects[0].object;
        const blockType = block.userData.blockType;
        
        minecraftScene.remove(block);
        minecraftBlocks = minecraftBlocks.filter(b => b !== block);
        
        // Return block to inventory
        buildingResources[blockType]++;
        updateResourceDisplay();
        saveBuildingData();
    }
}

// Create a block at position
function createBlock(position, blockType) {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = blockMaterials[blockType];
    const block = new THREE.Mesh(geometry, material);
    
    block.position.copy(position);
    block.castShadow = true;
    block.receiveShadow = true;
    block.userData.blockType = blockType;
    
    // Add edge lines for Minecraft style
    const edges = new THREE.EdgesGeometry(geometry);
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x000000, linewidth: 2 });
    const line = new THREE.LineSegments(edges, lineMaterial);
    block.add(line);
    
    minecraftScene.add(block);
    minecraftBlocks.push(block);
}

// Initialize game UI (health, hunger, time display)
function initGameUI() {
    // Create UI overlay
    const container = document.getElementById('building-mode-container');
    
    let gameUI = document.getElementById('minecraft-game-ui');
    if (!gameUI) {
        gameUI = document.createElement('div');
        gameUI.id = 'minecraft-game-ui';
        gameUI.style.cssText = `
            position: absolute;
            top: 10px;
            left: 10px;
            color: white;
            font-family: 'Courier New', monospace;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.8);
            z-index: 200;
            pointer-events: none;
        `;
        
        gameUI.innerHTML = `
            <div style="background: rgba(0,0,0,0.5); padding: 10px; border-radius: 5px;">
                <div style="font-size: 16px; margin-bottom: 5px;">
                    ❤️ Health: <span id="health-display">100</span>
                </div>
                <div style="font-size: 16px; margin-bottom: 5px;">
                    🍖 Hunger: <span id="hunger-display">100</span>
                </div>
                <div style="font-size: 16px; margin-bottom: 5px;">
                    ⏰ Time: <span id="time-display">Noon</span>
                </div>
                <div style="font-size: 16px;">
                    ⭐ Score: <span id="score-display">0</span>
                </div>
            </div>
        `;
        
        container.appendChild(gameUI);
    }
    
    updateGameUI();
}

// Update game UI displays
function updateGameUI() {
    const healthEl = document.getElementById('health-display');
    const hungerEl = document.getElementById('hunger-display');
    const timeEl = document.getElementById('time-display');
    const scoreEl = document.getElementById('score-display');
    
    if (healthEl) {
        healthEl.textContent = Math.max(0, Math.floor(gameState.health));
        healthEl.style.color = gameState.health < 30 ? '#ff4444' : '#ffffff';
    }
    
    if (hungerEl) {
        hungerEl.textContent = Math.max(0, Math.floor(gameState.hunger));
        hungerEl.style.color = gameState.hunger < 30 ? '#ff8800' : '#ffffff';
    }
    
    if (timeEl) {
        const timeOfDay = gameState.timeOfDay;
        let timeString;
        if (timeOfDay < 0.25) timeString = '🌙 Night';
        else if (timeOfDay < 0.3) timeString = '🌅 Dawn';
        else if (timeOfDay < 0.7) timeString = '☀️ Day';
        else if (timeOfDay < 0.75) timeString = '🌆 Dusk';
        else timeString = '🌙 Night';
        timeEl.textContent = timeString;
    }
    
    if (scoreEl) {
        scoreEl.textContent = gameState.score;
    }
}

// Start game loop for survival mechanics
function startGameLoop() {
    setInterval(() => {
        // Decrease hunger slowly
        gameState.hunger -= 0.1;
        if (gameState.hunger < 0) gameState.hunger = 0;
        
        // Take damage if hunger is too low
        if (gameState.hunger < 20) {
            takeDamage(0.5);
        }
        
        // Regenerate health slowly if hunger is high
        if (gameState.hunger > 80 && gameState.health < 100) {
            gameState.health += 0.2;
            if (gameState.health > 100) gameState.health = 100;
        }
        
        updateGameUI();
    }, 1000);
}

// Update day/night cycle
function updateDayNightCycle() {
    gameState.timeOfDay += gameState.dayNightSpeed;
    if (gameState.timeOfDay > 1) gameState.timeOfDay = 0;
    
    // Update sun position and lighting
    const angle = gameState.timeOfDay * Math.PI * 2;
    sunLight.position.x = Math.cos(angle) * 20;
    sunLight.position.y = Math.sin(angle) * 20;
    sunLight.position.z = 10;
    
    // Determine if it's night
    const wasNight = gameState.isNight;
    gameState.isNight = gameState.timeOfDay < 0.25 || gameState.timeOfDay > 0.75;
    
    // Adjust lighting intensity based on time
    const brightness = Math.max(0.2, Math.sin(angle));
    sunLight.intensity = brightness;
    
    // Change sun color (orange at sunrise/sunset, yellow during day, blue at night)
    if (gameState.isNight) {
        sunLight.color.setHex(0x6688CC); // Blue moonlight
        minecraftScene.background.setHex(0x000033); // Dark blue night sky
    } else if (gameState.timeOfDay < 0.3 || gameState.timeOfDay > 0.7) {
        sunLight.color.setHex(0xFFAA44); // Orange sunrise/sunset
        minecraftScene.background.setHex(0xFF8844); // Orange sky
    } else {
        sunLight.color.setHex(0xFFFFFF); // White sunlight
        minecraftScene.background.setHex(0x87CEEB); // Blue day sky
    }
    
    // Spawn more hostile mobs at night
    if (!wasNight && gameState.isNight) {
        console.log('🌙 Night falls... Hostile mobs spawn!');
        spawnNightMobs();
    }
}

// Spawn additional hostile mobs at night
function spawnNightMobs() {
    // Spawn 2 extra creepers at night
    for (let i = 0; i < 2; i++) {
        const x = (Math.random() - 0.5) * 30;
        const z = (Math.random() - 0.5) * 30;
        const creeper = createCreeper(x, z);
        minecraftScene.add(creeper);
        minecraftEntities.push(creeper);
    }
}

// Player takes damage
function takeDamage(amount) {
    gameState.health -= amount;
    if (gameState.health < 0) gameState.health = 0;
    
    // Flash screen red
    const flash = document.createElement('div');
    flash.style.cssText = `
        position: fixed;
        top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(255, 0, 0, 0.3);
        pointer-events: none;
        z-index: 300;
    `;
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 200);
    
    if (gameState.health <= 0) {
        gameOver();
    }
    
    updateGameUI();
}

// Trade with villager
function tradeWithVillager(villager) {
    const trade = villager.userData.tradeOffer;
    
    if (buildingResources[trade.wants] >= trade.amount) {
        buildingResources[trade.wants] -= trade.amount;
        buildingResources[trade.gives] += 1;
        
        gameState.score += 10;
        
        updateResourceDisplay();
        saveBuildingData();
        
        showReward('Trade Complete! 🤝', 
            `Traded ${trade.amount} ${trade.wants} for 1 ${trade.gives}`, 
            '✨');
        
        // Villager can only trade once
        villager.userData.canTrade = false;
        villager.userData.rotationSpeed *= 2; // Spin happily
    } else {
        showReward('Not Enough Resources', 
            `Villager wants ${trade.amount} ${trade.wants}`, 
            '❌');
    }
}

// Game over
function gameOver() {
    showReward('💀 Game Over!', 
        `You died! Final Score: ${gameState.score}`, 
        '☠️');
    
    setTimeout(() => {
        if (confirm('Game Over! Play again?')) {
            // Reset game state
            gameState.health = 100;
            gameState.hunger = 100;
            gameState.score = 0;
            gameState.timeOfDay = 0.5;
            
            // Remove all hostile mobs
            for (let i = minecraftEntities.length - 1; i >= 0; i--) {
                if (minecraftEntities[i].userData.type === 'creeper') {
                    minecraftScene.remove(minecraftEntities[i]);
                    minecraftEntities.splice(i, 1);
                }
            }
            
            // Respawn with original entities
            spawnEntities();
            updateGameUI();
        } else {
            backToModeSelection();
        }
    }, 2000);
}

// Animation loop
function animateMinecraft() {
    if (!isMinecraftInitialized) {
        console.log('Animation stopped - not initialized');
        return;
    }
    
    requestAnimationFrame(animateMinecraft);
    
    // Update day/night cycle
    updateDayNightCycle();
    
    // Animate entities (creepers, villagers, TNT)
    animateEntities();
    
    // Log every 60 frames (about 1 second at 60fps)
    if (!window.minecraftFrameCount) window.minecraftFrameCount = 0;
    window.minecraftFrameCount++;
    if (window.minecraftFrameCount % 60 === 0) {
        console.log('Animation frame:', window.minecraftFrameCount, 'Scene objects:', minecraftScene.children.length);
    }
    
    minecraftRenderer.render(minecraftScene, minecraftCamera);
}

// Handle window resize
function onMinecraftResize() {
    const container = document.getElementById('minecraft-world');
    if (!container) return;
    
    minecraftCamera.aspect = container.clientWidth / container.clientHeight;
    minecraftCamera.updateProjectionMatrix();
    minecraftRenderer.setSize(container.clientWidth, container.clientHeight);
}

// Select block type
function selectBlock(blockType) {
    selectedBlockType = blockType;
    
    // Update UI
    document.querySelectorAll('.inventory-slot').forEach(slot => {
        slot.classList.remove('selected');
    });
    document.querySelector(`[data-block="${blockType}"]`).classList.add('selected');
    
    // Update selected display
    const blockName = blockType.charAt(0).toUpperCase() + blockType.slice(1);
    document.getElementById('selectedBlockDisplay').innerHTML = `
        <div class="block-preview ${blockType}-block"></div>
        <span>${blockName}</span>
    `;
}

// Save Minecraft world
function saveMinecraftWorld() {
    const worldData = minecraftBlocks.map(block => ({
        x: block.position.x,
        y: block.position.y,
        z: block.position.z,
        type: block.userData.blockType
    }));
    
    localStorage.setItem('minecraftWorld', JSON.stringify(worldData));
    saveBuildingData();
    showReward('World Saved!', 'Your Minecraft world has been saved!', '💾');
}

// Load Minecraft world
function loadMinecraftWorld() {
    const savedWorld = localStorage.getItem('minecraftWorld');
    if (!savedWorld) return;
    
    const worldData = JSON.parse(savedWorld);
    
    // Clear existing blocks
    minecraftBlocks.forEach(block => minecraftScene.remove(block));
    minecraftBlocks = [];
    
    // Recreate blocks
    worldData.forEach(blockData => {
        const position = new THREE.Vector3(blockData.x, blockData.y, blockData.z);
        createBlock(position, blockData.type);
    });
}

// Clear Minecraft world
function clearMinecraftWorld() {
    if (confirm('Clear your entire Minecraft world? All blocks will be returned to your inventory.')) {
        // Return all blocks to inventory
        minecraftBlocks.forEach(block => {
            const blockType = block.userData.blockType;
            buildingResources[blockType]++;
            minecraftScene.remove(block);
        });
        
        minecraftBlocks = [];
        updateResourceDisplay();
        saveBuildingData();
        localStorage.removeItem('minecraftWorld');
        
        showReward('World Cleared!', 'All blocks returned to inventory.', '🗑️');
    }
}

// Update total blocks count
function updateTotalBlocksDisplay() {
    const total = minecraftBlocks.length;
    const totalEl = document.getElementById('totalBlocks');
    if (totalEl) totalEl.textContent = total;
}

// Override the original startBuildingMode
function startBuildingMode() {
    console.log('startBuildingMode called');
    
    const modeSelection = document.getElementById('mode-selection');
    const prizeContainer = document.getElementById('prize-mode-container');
    const towContainer = document.getElementById('tug-of-war-container');
    const buildingContainer = document.getElementById('building-mode-container');
    
    console.log('Elements found:', {
        modeSelection: !!modeSelection,
        prizeContainer: !!prizeContainer,
        towContainer: !!towContainer,
        buildingContainer: !!buildingContainer
    });
    
    if (!buildingContainer) {
        console.error('Building container not found!');
        return;
    }
    
    if (modeSelection) modeSelection.classList.add('hidden');
    if (prizeContainer) prizeContainer.classList.add('hidden');
    if (towContainer) towContainer.classList.add('hidden');
    buildingContainer.classList.remove('hidden');
    
    console.log('Building mode container shown, has hidden class:', buildingContainer.classList.contains('hidden'));
    console.log('Container computed display:', window.getComputedStyle(buildingContainer).display);
    
    // Add MutationObserver to track class changes
    if (!window.buildingContainerObserver) {
        window.buildingContainerObserver = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.type === 'attributes') {
                    console.log('Container class changed!', 'Has hidden:', buildingContainer.classList.contains('hidden'));
                }
            });
        });
        window.buildingContainerObserver.observe(buildingContainer, {
            attributes: true,
            attributeFilter: ['class', 'style']
        });
        console.log('MutationObserver attached');
    }
    
    loadBuildingData();
    updateResourceDisplay();
    updateTotalBlocksDisplay();
    
    // Initialize Three.js scene after a delay to ensure container is rendered
    setTimeout(() => {
        console.log('Initializing Minecraft world...');
        console.log('Container still visible, has hidden class:', buildingContainer.classList.contains('hidden'));
        initMinecraftWorld();
        selectBlock('grass'); // Default selection
    }, 200);
}

// Override backToModeSelection
function backToModeSelection() {
    document.getElementById('building-mode-container').classList.add('hidden');
    document.getElementById('mode-selection').classList.remove('hidden');
}
