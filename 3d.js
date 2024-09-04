// إعداد المشهد والكاميرا والضوء
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// إضافة ضوء محيطي
const light = new THREE.AmbientLight(0x404040); // ضوء محيطي
scene.add(light);

// إضافة ضوء اتجاهي
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
directionalLight.position.set(1, 1, 1).normalize();
scene.add(directionalLight);

// تحميل ملف GLB
const loader = new THREE.GLTFLoader();
loader.load('3D-Map.glbchat.js', function(gltf) {
    scene.add(gltf.scene);
}, undefined, function(error) {
    console.error(error);
});

// إعداد الكاميرا
camera.position.z = 5;

// حلقة الرسوم المتحركة
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();

// تحديث حجم الـ Renderer عند تغيير حجم النافذة
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});