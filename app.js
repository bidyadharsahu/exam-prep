// Supabase Configuration
const SUPABASE_URL = 'https://vtkyhnerfniipqefykat.supabase.co';
const SUPABASE_KEY = 'sb_publishable_A4hAFGmMGg7_AYVa1GUkhQ_M5OSRkPM';
let dbClient = null;
if (window.supabase) {
    dbClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
}

const app = {
    state: {
        passcode: localStorage.getItem('app_passcode') || '1234',
        isLoggedIn: sessionStorage.getItem('isLoggedIn') === 'true',
        currentSubject: null,
        activeMockTest: null,
        deferredPrompt: null,
        theme: localStorage.getItem('app_theme') || 'system'
    },

    init() {
        this.applyTheme(this.state.theme);

        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
            if (this.state.theme === 'system') {
                this.applyTheme('system');
            }
        });

        // PWA Install Prompt Logic
        window.addEventListener('beforeinstallprompt', (e) => {
            // Prevent the mini-infobar from appearing on mobile
            e.preventDefault();
            // Stash the event so it can be triggered later.
            this.state.deferredPrompt = e;
            // Update UI notify the user they can install the PWA
            setTimeout(() => {
                document.getElementById('install-banner').classList.add('show');
            }, 3000); // Show after 3 seconds
        });

        // Hide loader after short delay to simulate premium loading
        setTimeout(() => {
            document.getElementById('loader').classList.add('hidden');
            if (this.state.isLoggedIn) {
                this.showMainScreen();
            } else {
                this.showScreen('login-screen');
            }
        }, 800);
        
        document.getElementById('passcode-input').addEventListener('keypress', (e) => {
            if(e.key === 'Enter') this.login();
        });
    },

    showScreen(screenId) {
        document.querySelectorAll('.screen').forEach(s => {
            s.classList.remove('active');
        });
        const target = document.getElementById(screenId);
        target.classList.add('active');
        
        // Add animation classes based on screen
        if(screenId === 'subject-screen') {
            document.getElementById('tab-content').classList.add('slide-in-right');
        }
    },

    showMainScreen() {
        this.showScreen('main-screen');
        this.renderSubjects();
    },

    showLoginScreen() {
        this.showScreen('login-screen');
        document.getElementById('passcode-input').value = '';
        document.getElementById('login-error').innerText = '';
    },

    showResetScreen() {
        this.showScreen('reset-screen');
    },

    login() {
        const input = document.getElementById('passcode-input').value;
        const errorEl = document.getElementById('login-error');
        
        if (input === this.state.passcode) {
            this.state.isLoggedIn = true;
            sessionStorage.setItem('isLoggedIn', 'true');
            errorEl.innerText = '';
            
            // Show loader briefly on login
            document.getElementById('loader').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('loader').classList.add('hidden');
                this.showMainScreen();
            }, 600);
            
        } else {
            errorEl.innerText = 'Incorrect passcode. Try again.';
            // Shake effect could go here
        }
    },

    logout() {
        this.state.isLoggedIn = false;
        sessionStorage.removeItem('isLoggedIn');
        this.showLoginScreen();
    },

    resetPasscode() {
        const p1 = document.getElementById('new-passcode').value;
        const p2 = document.getElementById('confirm-passcode').value;
        const errorEl = document.getElementById('reset-error');

        if (!p1 || !p2) { errorEl.innerText = 'Please fill both fields.'; return; }
        if (p1 !== p2) { errorEl.innerText = 'Passcodes do not match.'; return; }
        if (p1.length < 4) { errorEl.innerText = 'Min 4 characters required.'; return; }

        this.state.passcode = p1;
        localStorage.setItem('app_passcode', p1);
        alert('Passcode updated successfully!');
        this.showLoginScreen();
    },

    // --- Theme Logic ---
    applyTheme(themeValue) {
        let isDark = false;
        const iconEl = document.getElementById('theme-icon');
        
        if (themeValue === 'system') {
            isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if(iconEl) {
                iconEl.className = 'ph ph-desktop';
            }
        } else if (themeValue === 'dark') {
            isDark = true;
            if(iconEl) iconEl.className = 'ph-fill ph-moon';
        } else {
            isDark = false;
            if(iconEl) iconEl.className = 'ph-fill ph-sun';
        }

        if (isDark) {
            document.documentElement.setAttribute('data-theme', 'dark');
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#000000");
        } else {
            document.documentElement.removeAttribute('data-theme');
            document.querySelector('meta[name="theme-color"]').setAttribute("content", "#5E5CE6");
        }
    },

    toggleTheme() {
        const themes = ['system', 'light', 'dark'];
        const currentIndex = themes.indexOf(this.state.theme);
        const nextTheme = themes[(currentIndex + 1) % themes.length];
        
        this.state.theme = nextTheme;
        localStorage.setItem('app_theme', nextTheme);
        this.applyTheme(nextTheme);
    },

    renderSubjects() {
        const grid = document.getElementById('subject-grid');
        grid.innerHTML = '';

        for (const [key, data] of Object.entries(appData.subjects)) {
            const card = document.createElement('div');
            card.className = 'subject-card slide-up-anim';
            card.style.animationDelay = '0.1s';
            card.onclick = () => this.openSubject(key);
            
            card.innerHTML = `
                <div class="subject-icon">
                    <i class="ph-duotone ${data.icon || 'ph-book'}"></i>
                </div>
                <div class="subject-info">
                    <h4>${data.name}</h4>
                    <p>Board 2025</p>
                </div>
            `;
            grid.appendChild(card);
        }
    },

    openSubject(subjectKey) {
        this.state.currentSubject = subjectKey;
        const subject = appData.subjects[subjectKey];
        document.getElementById('subject-title').innerText = subject.name;
        
        this.showScreen('subject-screen');
        this.switchTab('youtube'); 
    },

    switchTab(tabId) {
        document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
        event.currentTarget.classList.add('active');

        const contentArea = document.getElementById('tab-content');
        
        // Reset animation
        contentArea.classList.remove('slide-in-right');
        void contentArea.offsetWidth; // trigger reflow
        contentArea.classList.add('slide-in-right');

        const subjectData = appData.subjects[this.state.currentSubject];
        const data = subjectData[tabId];
        
        contentArea.innerHTML = '';

        if (!data || data.length === 0) {
            contentArea.innerHTML = `
                <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
                    <i class="ph-duotone ph-folder-dashed" style="font-size: 3rem; margin-bottom: 10px;"></i>
                    <p>Coming soon!</p>
                </div>
            `;
            return;
        }

        data.forEach(item => {
            const el = document.createElement('a');
            el.className = 'list-item';
            
            if (tabId === 'mocktest') {
                el.href = '#';
                el.onclick = (e) => { e.preventDefault(); this.openMockModal(item); };
            } else if (tabId === 'youtube') {
                el.href = '#';
                el.onclick = (e) => { e.preventDefault(); this.openVideoPlayer(item); };
            } else {
                el.href = item.link || '#';
                if(item.link && item.link !== '#') el.target = '_blank';
            }

            let icon, title, subtitle, iconClass;

            if (tabId === 'youtube') {
                icon = 'ph-youtube-logo'; iconClass = 'yt';
                title = item.title; subtitle = item.channel;
            } else if (tabId === 'pyq') {
                icon = 'ph-file-pdf'; iconClass = 'pdf';
                title = item.title; subtitle = `Year: ${item.year}`;
            } else if (tabId === 'mocktest') {
                icon = 'ph-exam'; iconClass = 'mock';
                title = item.title; subtitle = `${item.desc} • ${item.time}`;
            } else if (tabId === 'quizzes') {
                icon = 'ph-question'; iconClass = 'quiz';
                title = item.title; subtitle = `${item.qcount} Questions`;
            }

            el.innerHTML = `
                <div class="list-icon ${iconClass}"><i class="ph-fill ${icon}"></i></div>
                <div class="list-content">
                    <h5>${title}</h5>
                    <p>${subtitle}</p>
                </div>
                <div class="list-action"><i class="ph ph-caret-right"></i></div>
            `;
            contentArea.appendChild(el);
        });
    },

    // --- Embedded Video Player ---
    openVideoPlayer(videoItem) {
        document.getElementById('video-title').innerText = videoItem.title || "Video Class";
        document.getElementById('video-info-title').innerText = videoItem.title || "Video Title";
        document.getElementById('video-info-channel').innerText = "By " + (videoItem.channel || "Instructor");
        
        // Set youtube iframe src with optimal parameters for mobile (rel=0 avoids random recommendations, modestbranding reduces YT logos, playsinline=1 allows in-app play)
        const iframe = document.getElementById('youtube-player');
        iframe.src = `https://www.youtube.com/embed/\${videoItem.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
        
        this.showScreen('video-screen');
    },

    closeVideoPlayer() {
        // Stop the video by clearing the src
        const iframe = document.getElementById('youtube-player');
        iframe.src = '';
        this.showScreen('subject-screen');
    },

    // --- Modal / Bottom Sheet Logic ---
    openMockModal(test) {
        this.state.activeMockTest = test;
        document.getElementById('modal-title').innerText = test.title;
        document.getElementById('modal-desc').innerText = `\${test.desc} | Duration: \${test.time}`;
        document.getElementById('test-modal').classList.add('active');
    },

    closeModal(e) {
        if (e.target.id === 'test-modal') {
            document.getElementById('test-modal').classList.remove('active');
        }
    },
    
    startMockTest() {
        document.getElementById('test-modal').classList.remove('active');
        document.getElementById('loader').classList.remove('hidden');
        
        setTimeout(() => {
            document.getElementById('loader').classList.add('hidden');
            // Check if it's an interactive quiz (we use 'id' starting with 'quiz')
            if (this.state.activeMockTest.id && this.state.activeMockTest.id.startsWith('quiz_')) {
                this.startInteractiveQuiz(this.state.activeMockTest);
            } else {
                alert(`Started Mock Test: \${this.state.activeMockTest.title}.\\n(Note: This would redirect to the actual test environment)`);
            }
        }, 800);
    },

    // ==========================================
    // Interactive Quiz Engine
    // ==========================================
    quizState: {
        active: false,
        questions: [],
        currentIndex: 0,
        userAnswers: [],
        timerInterval: null,
        timeElapsed: 0
    },

    startInteractiveQuiz(quizData) {
        // Load mock questions from data.js
        this.quizState.questions = quizData.questions || [];
        if(this.quizState.questions.length === 0) {
            alert("No questions available for this quiz yet.");
            return;
        }
        
        this.quizState.active = true;
        this.quizState.currentIndex = 0;
        this.quizState.userAnswers = new Array(this.quizState.questions.length).fill(null);
        this.quizState.timeElapsed = 0;
        
        document.getElementById('quiz-title').innerText = quizData.title;
        this.showScreen('quiz-screen');
        this.renderQuizQuestion();
        this.startQuizTimer();
    },

    startQuizTimer() {
        clearInterval(this.quizState.timerInterval);
        const timerEl = document.getElementById('quiz-timer');
        this.quizState.timerInterval = setInterval(() => {
            this.quizState.timeElapsed++;
            const m = Math.floor(this.quizState.timeElapsed / 60).toString().padStart(2, '0');
            const s = (this.quizState.timeElapsed % 60).toString().padStart(2, '0');
            timerEl.innerText = `\${m}:\${s}`;
        }, 1000);
    },

    renderQuizQuestion() {
        const qIndex = this.quizState.currentIndex;
        const total = this.quizState.questions.length;
        const qData = this.quizState.questions[qIndex];
        
        // Progress & Tracker
        document.getElementById('quiz-progress').style.width = `\${((qIndex + 1) / total) * 100}%`;
        document.getElementById('question-tracker').innerText = `Question \${qIndex + 1} of \${total}`;
        
        // Text
        document.getElementById('question-text').innerText = qData.q;
        
        // Options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';
        
        qData.options.forEach((opt, idx) => {
            const isSelected = this.quizState.userAnswers[qIndex] === idx;
            const optEl = document.createElement('div');
            optEl.className = `quiz-option \${isSelected ? 'selected' : ''}`;
            optEl.onclick = () => this.selectQuizOption(idx);
            
            optEl.innerHTML = `
                <span>\${opt}</span>
                <i class="ph-fill ph-check-circle" style="color: \${isSelected ? 'var(--primary-color)' : 'transparent'}; font-size: 1.2rem;"></i>
            `;
            optionsContainer.appendChild(optEl);
        });

        // Update Buttons
        document.getElementById('prev-btn').disabled = qIndex === 0;
        document.getElementById('next-btn').innerText = (qIndex === total - 1) ? 'Submit Quiz' : 'Next';
    },

    selectQuizOption(optIdx) {
        this.quizState.userAnswers[this.quizState.currentIndex] = optIdx;
        this.renderQuizQuestion(); // re-render to show selection
    },

    prevQuestion() {
        if (this.quizState.currentIndex > 0) {
            this.quizState.currentIndex--;
            this.renderQuizQuestion();
        }
    },

    nextQuestion() {
        if (this.quizState.currentIndex < this.quizState.questions.length - 1) {
            this.quizState.currentIndex++;
            this.renderQuizQuestion();
        } else {
            this.submitQuiz();
        }
    },

    endQuizEarly() {
        if(confirm('Are you sure you want to end this quiz? Progress will be lost.')) {
            clearInterval(this.quizState.timerInterval);
            this.showSubjectScreen();
        }
    },
    
    showSubjectScreen() {
        // Simple helper to go back
        this.showScreen('subject-screen');
    },

    submitQuiz() {
        clearInterval(this.quizState.timerInterval);
        
        // Calculate score
        let score = 0;
        this.quizState.questions.forEach((q, i) => {
            if (this.quizState.userAnswers[i] === q.answer) {
                score++;
            }
        });
        
        const total = this.quizState.questions.length;
        const percentage = (score / total) * 100;
        
        // Render Results
        document.getElementById('score-display').innerText = `\${score}/\${total}`;
        
        const msgEl = document.getElementById('score-message');
        if (percentage === 100) msgEl.innerText = "Flawless victory! Outstanding!";
        else if (percentage >= 80) msgEl.innerText = "Great job! Almost perfect.";
        else if (percentage >= 50) msgEl.innerText = "Good effort! Needs a bit more revision.";
        else msgEl.innerText = "Keep practicing, you'll get it next time!";
        
        // Log to Supabase (simulated)
        if(dbClient) {
            console.log('Logging score to Supabase:', { score, total, subject: this.state.currentSubject });
            // dbClient.from('quiz_results').insert([{ user_id: 'local_user', quiz_id: this.state.activeMockTest.id, score: score, total: total }]);
        }

        this.showScreen('result-screen');
    },

    // --- PWA Install Logic ---
    async installApp() {
        if (this.state.deferredPrompt !== null) {
            // Show the install prompt
            this.state.deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            const { outcome } = await this.state.deferredPrompt.userChoice;
            if (outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            // We've used the prompt, and can't use it again, throw it away
            this.state.deferredPrompt = null;
            this.closeInstallBanner();
        }
    },

    closeInstallBanner() {
        document.getElementById('install-banner').classList.remove('show');
    }
};

window.onload = () => app.init();
