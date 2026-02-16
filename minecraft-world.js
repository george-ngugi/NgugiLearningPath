// Minecraft World with Three.js
let minecraftScene, minecraftCamera, minecraftRenderer;
let minecraftBlocks = [];
let selectedBlockType = 'grass';
let raycaster, mouse;
let controls;
let isMinecraftInitialized = false;

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
    
    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    minecraftScene.add(ambientLight);
    console.log('Added ambient light');
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    minecraftScene.add(directionalLight);
    console.log('Added directional light');
    
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
    
    // Handle window resize
    window.addEventListener('resize', onMinecraftResize);
    
    // Set initialized flag BEFORE starting animation
    isMinecraftInitialized = true;
    console.log('Minecraft world fully initialized!');
    
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
            placeBlock(event);
        }
    });
    
    // Block removal on right click
    canvas.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        removeBlock(event);
    });
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

// Animation loop
function animateMinecraft() {
    if (!isMinecraftInitialized) {
        console.log('Animation stopped - not initialized');
        return;
    }
    
    requestAnimationFrame(animateMinecraft);
    
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
