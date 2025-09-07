/**
 * 增强版看板娘 - 使用本地猫咪图片和背景效果
 * 包含8bit音乐支持
 */

class NyanChanEnhanced {
    constructor() {
        this.name = "喵酱";
        this.currentExpression = "happy";
        this.currentGame = null;
        this.isNightMode = false;
        this.musicPlaying = false;
        this.conversationHistory = [];
        this.lastInteraction = Date.now();
        
        // 本地猫咪图片资源
        this.catImages = {
            // 使用本地AAA猫咪图片
            sources: ["AAA.jpg"],
            
            // 不同表情的猫咪图片（使用同一张本地图片）
            expressions: {
                happy: "AAA.jpg",
                excited: "AAA.jpg",
                sleeping: "AAA.jpg",
                cool: "AAA.jpg",
                love: "AAA.jpg"
            },
            
            // 动态效果（使用同一张本地图片）
            animated: {
                waving: "AAA.jpg",
                dancing: "AAA.jpg",
                sleeping: "AAA.jpg"
            }
        };
        
        // 背景样式配置
        this.backgroundStyles = [
            'linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%)',
            'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'linear-gradient(135deg, #ff8a80 0%, #ff80ab 100%)',
            'linear-gradient(135deg, #81c784 0%, #aed581 100%)',
            'linear-gradient(135deg, #64b5f6 0%, #42a5f5 100%)',
            'linear-gradient(135deg, #ba68c8 0%, #9c27b0 100%)'
        ];
        this.currentBackgroundIndex = 0;
        
        // 8bit音乐资源
        this.musicTracks = [
            { name: "Happy 8bit", frequency: 440, waveform: "square" },
            { name: "Peaceful 8bit", frequency: 330, waveform: "sine" },
            { name: "Energetic 8bit", frequency: 523, waveform: "square" },
            { name: "Dreamy 8bit", frequency: 392, waveform: "triangle" }
        ];
        this.currentTrackIndex = 0;
        
        // 游戏对话库
        this.gameDialogues = {
            "2048": [
                "2048是个数字合并游戏喵~ 需要动脑筋的呢！",
                "提示喵~ 相同数字的方块会合并哦！",
                "加油喵~ 我相信你能达到2048的！",
                "这个游戏很考验策略喵~ 慢慢来别着急！",
                "喵哈哈~ 数字越来越大啦！继续加油喵！",
                "被卡住了吗喵~ 试试换个方向思考呢！",
                "2048只是开始喵~ 你可以挑战更高的目标！",
                "你的逻辑思维很强喵~ 我都佩服你了呢！",
                "喵~ 记得留一些空格给新数字出现哦！",
                "玩得开心最重要喵~ 别给自己太大压力喵！"
            ],
            "吃豆人": [
                "吃豆人要小心幽灵喵~ 它们很狡猾的！",
                "吃到能量豆就可以反击了喵！",
                "快点收集所有豆子喵~ 我为你加油！",
                "幽灵有不同的性格喵~ 要学会利用它们的特点！",
                "喵~ 记住迷宫的路线，这是关键呢！",
                "不要贪心喵~ 有时候要懂得放弃一些豆子！",
                "被幽灵追得好紧喵~ 快跑到能量豆那里！",
                "你躲闪的动作好灵活喵~ 像猫咪一样！",
                "收集到樱桃了喵~ 额外加分好棒呢！",
                "吃完所有豆子了喵~ 你真是太厉害了！"
            ],
            "康威生命游戏": [
                "康威生命游戏很神奇喵~ 简单规则产生复杂生命！",
                "点击格子可以创造生命喵~ 你是造物主呢！",
                "看着细胞演化很治愈喵~ 像观察真实生命一样！",
                "喵~ 试试不同的初始图案，会有惊喜哦！",
                "生命游戏的规则很简单喵~ 但结果很复杂呢！",
                "有些图案会稳定下来喵~ 有些会不断变化！",
                "这个游戏没有胜负喵~ 享受观察的过程就好！",
                "你创造的图案很漂亮喵~ 很有艺术感呢！",
                "细胞的世界很奇妙喵~ 像微观宇宙一样！",
                "继续观察喵~ 也许会发现新的生命形态！"
            ],
            "贪吃蛇": [
                "贪吃蛇要控制好方向喵~ 别撞到自己了！",
                "吃到食物蛇身会变长喵~ 挑战越来越大！",
                "计划好路线很重要喵~ 不要把自己困住！",
                "喵~ 随着蛇变长，移动空间会越来越小！",
                "反应要快喵~ 但也不能太急躁呢！",
                "获得高分了好厉害喵~ 你是游戏高手呢！",
                "小心边缘喵~ 撞到墙就结束了呢！",
                "贪吃蛇很考验耐心喵~ 慢慢来别着急！",
                "你操控得很好喵~ 像灵活的猫咪一样！",
                "挑战更高难度喵~ 我相信你可以的！"
            ],
            "生态演化模拟": [
                "生态演化模拟好神奇喵~ 观察生命的循环！",
                "植物是生产者喵~ 为整个生态系统提供能量！",
                "草食动物吃植物喵~ 肉食动物吃草食动物！",
                "喵~ 这是一个完整的食物链呢！",
                "生态平衡很重要喵~ 每个物种都有其作用！",
                "看着种群数量变化很有趣喵~ 像在看纪录片！",
                "你可以亲手创造生命喵~ 试试看吧！",
                "不同物种之间相互作用喵~ 很复杂呢！",
                "生态系统很脆弱喵~ 需要精心维护！",
                "继续观察喵~ 也许会发现生态的奥秘！"
            ]
        };
        
        // 日常对话库
        this.dailyDialogues = {
            greetings: {
                morning: [
                    "早上好喵~ 今天想玩什么游戏呢？",
                    "早喵~ 大脑刚刚醒来，适合玩些益智游戏呢！",
                    "早安喵~ 新的一天开始啦！"
                ],
                afternoon: [
                    "下午好喵~ 来点刺激的游戏提提神吧！",
                    "喵呜~ 下午茶时间，配个游戏如何？",
                    "下午啦喵~ 需要我推荐游戏吗？"
                ],
                evening: [
                    "晚上好喵~ 静静观察生命的演化很治愈呢~",
                    "晚安喵~ 玩游戏放松一下心情吧！",
                    "夜晚了喵~ 适合玩些轻松的游戏呢~"
                ]
            },
            interactions: [
                "喵~ 有什么需要我帮忙的吗？",
                "我在这里陪着你喵~ 想玩什么游戏？",
                "点击游戏卡片听听我的介绍喵~",
                "今天心情如何喵~ 游戏可以调节心情呢！",
                "喵哈哈~ 你今天看起来很开心的样子！",
                "需要游戏推荐吗喵~ 我很擅长这个呢！",
                "喵~ 记得适时休息，保护眼睛哦！",
                "和你一起玩游戏很开心喵~",
                "我是喵酱~ 你的游戏小助手呢！",
                "喵~ 有什么问题都可以问我哦！"
            ],
            encouragements: [
                "你玩游戏的样子很专注喵~ 很可爱呢！",
                "加油加油喵~ 你一定可以的！",
                "我相信你喵~ 你是最棒的！",
                "喵~ 每个人都有自己的游戏节奏！",
                "玩得开心最重要喵~ 别太在意胜负！",
                "你的游戏技巧越来越好了喵~",
                "喵~ 继续保持这样的热情！",
                "有我在你身边喵~ 不用害怕挑战！",
                "你真的很厉害喵~ 我都佩服你了！",
                "喵~ 游戏世界因你而精彩！"
            ]
        };
        
        this.init();
    }
    
    init() {
        console.log("开始初始化喵酱桌宠...");
        this.createWaifu();
        this.createToolbar();
        this.createMusicPlayer();
        this.createNightMode();
        this.bindEvents();
        this.showWelcomeMessage();
        this.startIdleAnimation();
        console.log("喵酱桌宠初始化完成");
    }
    
    createWaifu() {
        const waifu = document.createElement("div");
        waifu.id = "nyan-chan-enhanced";
        waifu.innerHTML = `
            <div class="waifu-container">
                <div class="waifu-character">
                    <div class="waifu-image-container">
                        <img class="waifu-image" src="${this.catImages.expressions.happy}" alt="喵酱">
                    </div>
                    <div class="waifu-accessory">🎮</div>
                </div>
                <div class="waifu-message">
                    <div class="message-text">欢迎来到游戏中心喵~</div>
                    <div class="message-tail"></div>
                </div>
            </div>
        `;
        
        // 添加样式
        const style = document.createElement("style");
        style.textContent = `
            #nyan-chan-enhanced {
                position: fixed;
                bottom: 20px;
                right: 20px;
                width: 200px;
                z-index: 9999;
                cursor: move;
                user-select: none;
                font-family: 'Arial', sans-serif;
            }
            
            .waifu-container {
                background: ${this.backgroundStyles[0]};
                border-radius: 20px;
                padding: 15px;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                border: 3px solid #ff6b9d;
                transition: all 0.3s ease;
                position: relative;
                overflow: hidden;
            }
            
            .waifu-container::before {
                content: '';
                position: absolute;
                top: -50%;
                left: -50%;
                width: 200%;
                height: 200%;
                background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent);
                animation: shimmer 3s infinite;
            }
            
            @keyframes shimmer {
                0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
                100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
            }
            
            .waifu-container:hover {
                transform: translateY(-5px);
                box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
            }
            
            .waifu-character {
                text-align: center;
                margin-bottom: 10px;
                position: relative;
            }
            
            .waifu-image-container {
                width: 120px;
                height: 120px;
                margin: 0 auto 5px;
                border-radius: 50%;
                background: rgba(255, 255, 255, 0.2);
                padding: 10px;
                backdrop-filter: blur(5px);
                border: 3px solid #ff6b9d;
                position: relative;
                overflow: hidden;
            }
            
            .waifu-image {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                object-fit: cover;
                object-position: center;
                animation: float 3s ease-in-out infinite;
                transition: all 0.3s ease;
                display: block;
            }
            
            .waifu-image:hover {
                transform: scale(1.1);
            }
            
            .waifu-accessory {
                position: absolute;
                top: -5px;
                right: 10px;
                font-size: 24px;
                background: #ff6b9d;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
                z-index: 1;
            }
            
            .waifu-message {
                background: rgba(255, 107, 157, 0.9);
                color: white;
                padding: 10px;
                border-radius: 15px;
                position: relative;
                font-size: 12px;
                text-align: center;
                min-height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.2);
            }
            
            .message-tail {
                position: absolute;
                bottom: -8px;
                left: 20px;
                width: 0;
                height: 0;
                border-left: 8px solid transparent;
                border-right: 8px solid transparent;
                border-top: 8px solid rgba(255, 107, 157, 0.9);
            }
            
            .waifu-toolbar {
                display: flex;
                justify-content: center;
                gap: 5px;
                margin-top: 10px;
                position: relative;
                z-index: 1;
            }
            
            .toolbar-btn {
                background: rgba(255, 107, 157, 0.8);
                color: white;
                border: none;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                font-size: 12px;
                cursor: pointer;
                transition: all 0.3s ease;
                backdrop-filter: blur(5px);
            }
            
            .toolbar-btn:hover {
                background: rgba(255, 90, 138, 0.9);
                transform: scale(1.1);
            }
            
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
            
            @keyframes bounce {
                0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
                40% { transform: translateY(-5px); }
                60% { transform: translateY(-3px); }
            }
            
            @keyframes wiggle {
                0%, 100% { transform: rotate(0deg); }
                25% { transform: rotate(-5deg); }
                75% { transform: rotate(5deg); }
            }
            
            .night-mode .waifu-container {
                background: linear-gradient(135deg, #2c2c2c 0%, #4a4a4a 100%);
                border-color: #9d4edd;
            }
            
            .night-mode .waifu-image-container {
                border-color: #9d4edd;
            }
            
            .night-mode .waifu-accessory {
                background: #9d4edd;
            }
            
            .night-mode .waifu-message {
                background: rgba(157, 78, 221, 0.9);
            }
            
            .night-mode .message-tail {
                border-top-color: rgba(157, 78, 221, 0.9);
            }
            
            .night-mode .toolbar-btn {
                background: rgba(157, 78, 221, 0.8);
            }
            
            .night-mode .toolbar-btn:hover {
                background: rgba(139, 61, 209, 0.9);
            }
        `;
        
        document.head.appendChild(style);
        document.body.appendChild(waifu);
        
        // 添加图片加载错误处理
        const img = waifu.querySelector('.waifu-image');
        img.onerror = () => {
            img.style.display = 'none';
            const container = img.parentElement;
            container.innerHTML = '<div style="width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-size: 60px; background: #ff6b9d; color: white; border-radius: 50%;">🐱</div>';
        };
        
        // 添加拖拽功能
        this.makeDraggable(waifu);
    }
    
    createToolbar() {
        const toolbar = document.createElement("div");
        toolbar.className = "waifu-toolbar";
        toolbar.innerHTML = `
            <button class="toolbar-btn" title="主页" onclick="nyanChanEnhanced.goHome()">🏠</button>
            <button class="toolbar-btn" title="对话" onclick="nyanChanEnhanced.startConversation()">💬</button>
            <button class="toolbar-btn" title="推荐游戏" onclick="nyanChanEnhanced.recommendGame()">🎮</button>
            <button class="toolbar-btn" title="换背景" onclick="nyanChanEnhanced.changeBackground()">🎨</button>
            <button class="toolbar-btn" title="换装" onclick="nyanChanEnhanced.changeOutfit()">👗</button>
            <button class="toolbar-btn" title="夜间模式" onclick="nyanChanEnhanced.toggleNightMode()">🌙</button>
            <button class="toolbar-btn" title="音乐" onclick="nyanChanEnhanced.toggleMusic()">🎵</button>
            <button class="toolbar-btn" title="隐藏" onclick="nyanChanEnhanced.hide()">❌</button>
        `;
        
        const container = document.querySelector("#nyan-chan-enhanced .waifu-container");
        if (container) {
            container.appendChild(toolbar);
            console.log("工具栏创建成功");
        } else {
            console.error("找不到桌宠容器，无法添加工具栏");
        }
    }
    
    createMusicPlayer() {
        // 使用外部的8bit音乐系统
        if (typeof bit8Music !== 'undefined') {
            this.bit8Music = bit8Music;
        } else {
            // 备用简单音乐系统
            try {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
                this.currentOscillator = null;
                this.gainNode = this.audioContext.createGain();
                this.gainNode.connect(this.audioContext.destination);
                this.gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
                
                // 监听用户交互来恢复音频上下文
                this.setupAudioContextResume();
            } catch (e) {
                console.log('音频上下文创建失败:', e);
                this.audioContext = null;
            }
        }
    }
    
    setupAudioContextResume() {
        // 监听用户交互事件来恢复音频上下文
        const resumeOnInteraction = async () => {
            if (this.audioContext && this.audioContext.state === 'suspended') {
                try {
                    await this.audioContext.resume();
                    console.log('音频上下文已恢复');
                } catch (e) {
                    console.log('音频上下文恢复失败:', e);
                }
            }
            if (this.bit8Music && this.bit8Music.audioContext && 
                this.bit8Music.audioContext.state === 'suspended') {
                try {
                    await this.bit8Music.audioContext.resume();
                    console.log('bit8Music 音频上下文已恢复');
                } catch (e) {
                    console.log('bit8Music 音频上下文恢复失败:', e);
                }
            }
        };
        
        // 监听多种用户交互事件
        const events = ['click', 'touchstart', 'keydown'];
        events.forEach(event => {
            document.addEventListener(event, resumeOnInteraction, { once: true });
        });
    }
    
    async play8BitMusic() {
        try {
            if (this.bit8Music) {
                // 使用专业的8bit音乐系统 - 使用新的曲目名称
                const tracks = ['morning', 'forest', 'ocean', 'adventure', 'puzzle', 'arcade', 'nostalgic', 'dreamscape'];
                const randomTrack = tracks[Math.floor(Math.random() * tracks.length)];
                await this.bit8Music.playTrack(randomTrack, true);
            } else {
                // 备用简单音乐系统
                this.playSimpleMusic();
            }
        } catch (e) {
            console.log('音乐播放失败:', e);
            this.showMessage("喵~ 音乐播放失败了，不过我还是会陪着你！");
        }
    }
    
    playSimpleMusic() {
        if (this.currentOscillator) {
            this.currentOscillator.stop();
            this.currentOscillator = null;
        }
        
        const track = this.musicTracks[this.currentTrackIndex];
        this.currentOscillator = this.audioContext.createOscillator();
        this.currentOscillator.type = track.waveform;
        this.currentOscillator.frequency.setValueAtTime(track.frequency, this.audioContext.currentTime);
        
        // 创建简单的8bit旋律
        const melody = [0, 2, 4, 2, 0, 4, 2, 0];
        let noteIndex = 0;
        
        const playNote = () => {
            if (this.musicPlaying && this.currentOscillator) {
                const noteOffset = melody[noteIndex] * 50;
                this.currentOscillator.frequency.setValueAtTime(
                    track.frequency + noteOffset, 
                    this.audioContext.currentTime
                );
                noteIndex = (noteIndex + 1) % melody.length;
                setTimeout(playNote, 300);
            }
        };
        
        this.currentOscillator.connect(this.gainNode);
        this.currentOscillator.start();
        playNote();
    }
    
    stopMusic() {
        if (this.bit8Music) {
            this.bit8Music.stopTrack();
        }
        if (this.currentOscillator) {
            this.currentOscillator.stop();
            this.currentOscillator = null;
        }
    }
    
    createNightMode() {
        const nightModeBtn = document.createElement("button");
        nightModeBtn.id = "night-mode-toggle";
        nightModeBtn.innerHTML = "🌙";
        nightModeBtn.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 9998;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            font-size: 20px;
            cursor: pointer;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
            transition: all 0.3s ease;
        `;
        
        nightModeBtn.onclick = () => this.toggleNightMode();
        document.body.appendChild(nightModeBtn);
    }
    
    bindEvents() {
        this.currentGame = this.detectCurrentGame();
        if (this.currentGame) {
            this.showGameWelcome();
        }
        
        document.addEventListener('click', () => {
            this.lastInteraction = Date.now();
        });
        
        setInterval(() => {
            this.checkUserStatus();
        }, 60000);
    }
    
    detectCurrentGame() {
        const path = window.location.pathname;
        const filename = path.split('/').pop();
        
        const gameMap = {
            '2048.html': '2048',
            'pacman.html': '吃豆人',
            'gameoflife.html': '康威生命游戏',
            'snake.html': '贪吃蛇',
            'ecosystem_v2.html': '生态演化模拟'
        };
        
        return gameMap[filename] || null;
    }
    
    showWelcomeMessage() {
        const hour = new Date().getHours();
        let timeOfDay;
        
        if (hour < 12) timeOfDay = 'morning';
        else if (hour < 18) timeOfDay = 'afternoon';
        else timeOfDay = 'evening';
        
        const greetings = this.dailyDialogues.greetings[timeOfDay];
        const message = greetings[Math.floor(Math.random() * greetings.length)];
        
        this.showMessage(message);
    }
    
    showGameWelcome() {
        if (!this.currentGame) return;
        
        const dialogues = this.gameDialogues[this.currentGame];
        const message = dialogues[Math.floor(Math.random() * dialogues.length)];
        
        setTimeout(() => {
            this.showMessage(message);
        }, 1000);
    }
    
    showMessage(text, duration = 0) {
        const messageEl = document.querySelector("#nyan-chan-enhanced .message-text");
        if (!messageEl) return;
        
        if (this.messageTimer) {
            clearTimeout(this.messageTimer);
            this.messageTimer = null;
        }
        
        messageEl.textContent = text;
        messageEl.style.opacity = "1";
        
        if (duration > 0) {
            this.messageTimer = setTimeout(() => {
                messageEl.style.opacity = "0";
                setTimeout(() => {
                    messageEl.textContent = "";
                    messageEl.style.opacity = "1";
                }, 500);
            }, duration);
        }
    }
    
    changeBackground() {
        this.currentBackgroundIndex = (this.currentBackgroundIndex + 1) % this.backgroundStyles.length;
        const container = document.querySelector("#nyan-chan-enhanced .waifu-container");
        if (container) {
            container.style.background = this.backgroundStyles[this.currentBackgroundIndex];
        }
        this.showMessage("喵~ 我换了新背景呢！好看吗？");
    }
    
    changeOutfit() {
        const outfits = Object.keys(this.catImages.expressions);
        const currentOutfit = this.currentExpression;
        const currentIndex = outfits.indexOf(currentOutfit);
        const nextIndex = (currentIndex + 1) % outfits.length;
        
        this.currentExpression = outfits[nextIndex];
        const imgEl = document.querySelector("#nyan-chan-enhanced .waifu-image");
        if (imgEl) {
            imgEl.src = this.catImages.expressions[this.currentExpression];
            imgEl.style.animation = "none";
            setTimeout(() => {
                imgEl.style.animation = "wiggle 0.5s ease-in-out";
            }, 10);
        }
        
        this.showMessage("喵~ 我换了新造型呢！可爱吗？");
    }
    
    startConversation() {
        const interactions = this.dailyDialogues.interactions;
        const message = interactions[Math.floor(Math.random() * interactions.length)];
        this.showMessage(message);
    }
    
    recommendGame() {
        const hour = new Date().getHours();
        let recommendations;
        
        if (hour < 12) {
            recommendations = ["2048", "康威生命游戏"];
        } else if (hour < 18) {
            recommendations = ["吃豆人", "贪吃蛇"];
        } else {
            recommendations = ["生态演化模拟", "康威生命游戏"];
        }
        
        const game = recommendations[Math.floor(Math.random() * recommendations.length)];
        const dialogues = this.gameDialogues[game];
        const message = dialogues[Math.floor(Math.random() * dialogues.length)];
        
        this.showMessage(`我推荐你玩${game}！${message}`);
    }
    
    toggleNightMode() {
        this.isNightMode = !this.isNightMode;
        document.body.classList.toggle('night-mode');
        
        const message = this.isNightMode ? "夜晚模式开启喵~ 保护眼睛很重要呢！" : "白天模式恢复喵~ 继续享受游戏吧！";
        this.showMessage(message);
    }
    
    async toggleMusic() {
        if (this.musicPlaying) {
            this.stopMusic();
            this.musicPlaying = false;
            this.showMessage("音乐暂停了喵~ 需要的时候再打开哦！");
        } else {
            try {
                // 恢复音频上下文 - 处理浏览器自动播放策略
                if (this.audioContext && this.audioContext.state === 'suspended') {
                    await this.audioContext.resume();
                }
                if (this.bit8Music && this.bit8Music.audioContext && 
                    this.bit8Music.audioContext.state === 'suspended') {
                    await this.bit8Music.audioContext.resume();
                }
                
                await this.play8BitMusic();
                this.musicPlaying = true;
                this.showMessage("开始播放8bit音乐喵~ 享受游戏时光吧！");
            } catch (error) {
                console.error('音乐播放失败:', error);
                this.showMessage("喵~ 音乐播放失败了，点击游戏区域试试看！");
            }
        }
    }
    
    goHome() {
        window.location.href = "games_home.html";
    }
    
    hide() {
        const waifu = document.getElementById("nyan-chan-enhanced");
        if (waifu) {
            waifu.style.display = "none";
            this.showMessage("下次再见喵~ 我会想你的！", 2000);
            this.createShowButton();
        }
    }
    
    createShowButton() {
        // 移除已存在的显示按钮
        const existingBtn = document.getElementById("waifu-show-btn");
        if (existingBtn) {
            existingBtn.remove();
        }
        
        const showBtn = document.createElement("div");
        showBtn.id = "waifu-show-btn";
        showBtn.innerHTML = "🐱";
        showBtn.title = "显示桌宠";
        showBtn.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 50px;
            height: 50px;
            background: linear-gradient(135deg, #ff6b9d, #ff8a80);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(255, 107, 157, 0.4);
            transition: all 0.3s ease;
            z-index: 9999;
            backdrop-filter: blur(5px);
            border: 2px solid rgba(255, 255, 255, 0.2);
        `;
        
        showBtn.addEventListener("mouseenter", function() {
            this.style.transform = "scale(1.1)";
            this.style.boxShadow = "0 6px 20px rgba(255, 107, 157, 0.6)";
        });
        
        showBtn.addEventListener("mouseleave", function() {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "0 4px 15px rgba(255, 107, 157, 0.4)";
        });
        
        showBtn.addEventListener("click", () => {
            this.show();
            showBtn.remove();
        });
        
        document.body.appendChild(showBtn);
    }
    
    show() {
        const waifu = document.getElementById("nyan-chan-enhanced");
        if (waifu) {
            waifu.style.display = "block";
            this.showMessage("我回来啦~ 好想喵！", 2000);
        }
    }
    
    makeDraggable(element) {
        let isDragging = false;
        let currentX, currentY, initialX, initialY, xOffset = 0, yOffset = 0;

        element.addEventListener("mousedown", dragStart);
        document.addEventListener("mousemove", drag);
        document.addEventListener("mouseup", dragEnd);

        function dragStart(e) {
            if (e.target.closest(".toolbar-btn")) return;
            
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;

            if (e.target === element || e.target.parentNode === element) {
                isDragging = true;
            }
        }

        function drag(e) {
            if (isDragging) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;

                xOffset = currentX;
                yOffset = currentY;

                element.style.transform = `translate(${currentX}px, ${currentY}px)`;
            }
        }

        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;
            isDragging = false;
        }
    }
    
    checkUserStatus() {
        const inactiveTime = Date.now() - this.lastInteraction;
        
        if (inactiveTime > 300000) {
            this.showMessage("喵~ 还在吗？需要我推荐游戏吗？");
            this.lastInteraction = Date.now();
        }
    }
    
    startIdleAnimation() {
        setInterval(() => {
            const messages = [
                "喵~ 我在这里陪着你呢！",
                "今天想玩什么游戏呢？",
                "需要我帮忙吗喵？",
                "记得适时休息哦喵~",
                "喵~ 游戏要开心最重要！"
            ];
            
            if (Math.random() < 0.3) {
                const message = messages[Math.floor(Math.random() * messages.length)];
                this.showMessage(message, 5000);
            }
        }, 30000);
    }
}

// 初始化增强版喵酱
let nyanChanEnhanced;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        nyanChanEnhanced = new NyanChanEnhanced();
    });
} else {
    nyanChanEnhanced = new NyanChanEnhanced();
}