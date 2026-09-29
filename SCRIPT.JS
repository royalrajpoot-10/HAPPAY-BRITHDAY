document.addEventListener("DOMContentLoaded", () => {

    // ==========================================
    // 1️⃣ CHANGE NAME HERE (Direct JS Code)
    // ==========================================
    // 👉 Jab bhi naam change karna ho, bas is line me naam badal dein:
    const GUEST_NAME = "Abeeha "; 

    // Auto-update all elements on the page
    document.querySelectorAll('.guest-name').forEach(el => {
        el.innerText = GUEST_NAME;
    });

    // ==========================================
    // 2️⃣ MESSAGES & OTHER LOGIC
    // ==========================================
    const messageOptions = [
        `On this special day, I just want to remind you how amazing you are. ✨<br><br>
        May your life be blessed with endless happiness, success, and good health.<br>
        You bring so much positivity and joy to everyone around you.<br>
        May all your dreams and wishes come true this year.<br>
        Keep smiling, shining, and spreading your wonderful warmth.<br>
        Wishing you a year full of unforgettable and beautiful moments!<br>
        Happy Birthday once again! 🎉`,

        `Happy Birthday to someone who truly deserves the very best! 🎂<br><br>
        Another year older, wiser, and even more incredible than before.<br>
        May your day be filled with sweet surprises, laughter, and cheer.<br>
        I hope every step you take brings you closer to your grandest goals.<br>
        Thank you for being such a wonderful person.<br>
        May this new chapter bring you unlimited peace and joy.<br>
        Have a fantastic birthday celebration! 🎈`
    ];

    const messageContainer = document.getElementById('messageBody');
    if (messageContainer) {
        messageContainer.innerHTML = messageOptions[Math.floor(Math.random() * messageOptions.length)];
    }

    // Audio Control
    const bgMusic = document.getElementById('bgMusic');
    const musicToggleBtn = document.getElementById('musicToggleBtn');

    function toggleAudio() {
        if (bgMusic.paused) {
            bgMusic.play().catch(() => {});
            musicToggleBtn.innerText = "⏸️ Pause Music";
        } else {
            bgMusic.pause();
            musicToggleBtn.innerText = "🎵 Play Music";
        }
    }

    if (musicToggleBtn) musicToggleBtn.addEventListener('click', toggleAudio);

    // Navigation Logic
    const screen1 = document.getElementById('screen1');
    const screen2 = document.getElementById('screen2');
    const screen3 = document.getElementById('screen3');
    const screen4 = document.getElementById('screen4');

    const startBtn = document.getElementById('startBtn');
    const modalOverlay = document.getElementById('modalOverlay');
    const modalTitle = document.getElementById('modalTitle');
    const modalActions = document.getElementById('modalActions');
    const dots = document.querySelectorAll('.dot');

    if (startBtn) {
        startBtn.addEventListener('click', () => {
            showModalStep(1);
        });
    }

    window.showModalStep = function(step) {
        modalOverlay.classList.remove('hidden');
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === step - 1);
        });

        if (step === 1) {
            modalTitle.innerText = "It's Your Special Day! 🎉";
            modalActions.innerHTML = `<button class="primary-btn" onclick="showModalStep(2)">Next</button>`;
        } else if (step === 2) {
            modalTitle.innerText = "Do you wanna see what I made??";
            modalActions.innerHTML = `
                <button class="primary-btn" onclick="showModalStep(3)">Yes! 💖</button>
                <button class="secondary-btn" onclick="showModalStep(3)">No</button>
            `;
        } else if (step === 3) {
            modalTitle.innerText = "Here is your special surprise! ✨";
            modalActions.innerHTML = `<button class="primary-btn" onclick="goToScreen2()">Let's Go! 🚀</button>`;
        }
    };

    window.goToScreen2 = function() {
        modalOverlay.classList.add('hidden');
        screen1.classList.add('hidden');
        screen2.classList.remove('hidden');
    };

    // Room Controls
    const btnLights = document.getElementById('btnLights');
    const btnMusic = document.getElementById('btnMusic');
    const btnDecorate = document.getElementById('btnDecorate');
    const btnBalloons = document.getElementById('btnBalloons');
    const btnMessage = document.getElementById('btnMessage');

    if (btnLights) {
        btnLights.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    if (btnMusic) btnMusic.addEventListener('click', toggleAudio);

    if (btnDecorate) {
        btnDecorate.addEventListener('click', () => {
            document.getElementById('buntingBanner').classList.remove('hidden');
            document.getElementById('cakeElement').classList.remove('hidden');
        });
    }

    if (btnBalloons) {
        btnBalloons.addEventListener('click', () => {
            createBalloons();
            btnMessage.classList.remove('hidden');
        });
    }

    function createBalloons() {
        const container = document.getElementById('balloonContainer');
        const colors = ['#ff4081', '#ab47bc', '#42a5f5', '#66bb6a', '#ffa726'];
        
        for (let i = 0; i < 20; i++) {
            const balloon = document.createElement('div');
            balloon.className = 'balloon';
            balloon.style.left = Math.random() * 90 + '%';
            balloon.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            balloon.style.animationDelay = Math.random() * 3 + 's';
            container.appendChild(balloon);
        }
    }

    if (btnMessage) {
        btnMessage.addEventListener('click', () => {
            screen2.classList.add('hidden');
            screen3.classList.remove('hidden');
        });
    }

    const openLetterBtn = document.getElementById('openLetterBtn');
    if (openLetterBtn) {
        openLetterBtn.addEventListener('click', () => {
            document.getElementById('curtainDoors').classList.add('open');
        });
    }

    const backToRoomBtn = document.getElementById('backToRoomBtn');
    if (backToRoomBtn) {
        backToRoomBtn.addEventListener('click', () => {
            screen3.classList.add('hidden');
            screen2.classList.remove('hidden');
        });
    }

    const viewMemoriesBtn = document.getElementById('viewMemoriesBtn');
    if (viewMemoriesBtn) {
        viewMemoriesBtn.addEventListener('click', () => {
            screen3.classList.add('hidden');
            screen4.classList.remove('hidden');
        });
    }
});