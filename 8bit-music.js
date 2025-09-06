/**
 * 增强版8bit音乐资源库
 * 舒缓节奏 + 丰富音色 + 主题性音乐
 */

class Bit8Music {
    constructor() {
        this.audioContext = null;
        this.currentTrack = null;
        this.isPlaying = false;
        this.volume = 0.1;
        this.masterGain = null;
        
        // 音乐曲目配置 - 更舒缓的主题性音乐
        this.tracks = {
            // 舒缓治愈系列
            morning: {
                name: "晨曦治愈",
                theme: "清晨时光",
                tempo: 65,
                waveform: "sine",
                notes: [
                    { freq: 440, duration: 0.8, velocity: 0.3 }, // A4 - 轻柔开始
                    { freq: 494, duration: 0.6, velocity: 0.4 }, // B4
                    { freq: 523, duration: 0.8, velocity: 0.5 }, // C5
                    { freq: 587, duration: 0.6, velocity: 0.4 }, // D5
                    { freq: 523, duration: 0.8, velocity: 0.5 }, // C5
                    { freq: 494, duration: 0.6, velocity: 0.4 }, // B4
                    { freq: 440, duration: 1.0, velocity: 0.3 }, // A4 - 舒缓结束
                    { freq: 392, duration: 0.4, velocity: 0.2 }, // G4 - 轻柔过渡
                ]
            },
            forest: {
                name: "森林漫步",
                theme: "大自然",
                tempo: 55,
                waveform: "triangle",
                notes: [
                    { freq: 330, duration: 1.0, velocity: 0.3 }, // E4 - 森林深处
                    { freq: 392, duration: 0.8, velocity: 0.4 }, // G4
                    { freq: 349, duration: 0.6, velocity: 0.3 }, // F4
                    { freq: 330, duration: 0.8, velocity: 0.4 }, // E4
                    { freq: 294, duration: 1.0, velocity: 0.3 }, // D4
                    { freq: 330, duration: 0.8, velocity: 0.4 }, // E4
                    { freq: 392, duration: 1.2, velocity: 0.5 }, // G4 - 自然回响
                    { freq: 440, duration: 0.6, velocity: 0.2 }, // A4 - 阳光穿透
                ]
            },
            ocean: {
                name: "海洋之梦",
                theme: "海洋冥想",
                tempo: 45,
                waveform: "sine",
                notes: [
                    { freq: 262, duration: 1.5, velocity: 0.4 }, // C4 - 深海
                    { freq: 294, duration: 1.0, velocity: 0.3 }, // D4
                    { freq: 330, duration: 1.2, velocity: 0.4 }, // E4
                    { freq: 294, duration: 0.8, velocity: 0.3 }, // D4 - 波浪
                    { freq: 262, duration: 1.5, velocity: 0.4 }, // C4
                    { freq: 247, duration: 1.0, velocity: 0.3 }, // B3
                    { freq: 262, duration: 2.0, velocity: 0.5 }, // C4 - 海平线
                ]
            },
            // 游戏主题系列
            adventure: {
                name: "冒险之旅",
                theme: "冒险游戏",
                tempo: 85,
                waveform: "square",
                notes: [
                    { freq: 523, duration: 0.4, velocity: 0.4 }, // C5
                    { freq: 587, duration: 0.3, velocity: 0.5 }, // D5
                    { freq: 659, duration: 0.4, velocity: 0.6 }, // E5
                    { freq: 698, duration: 0.3, velocity: 0.5 }, // F5
                    { freq: 659, duration: 0.4, velocity: 0.4 }, // E5
                    { freq: 587, duration: 0.3, velocity: 0.5 }, // D5
                    { freq: 523, duration: 0.6, velocity: 0.6 }, // C5
                    { freq: 440, duration: 0.3, velocity: 0.4 }, // A4
                ]
            },
            puzzle: {
                name: "益智时光",
                theme: "思考游戏",
                tempo: 70,
                waveform: "triangle",
                notes: [
                    { freq: 392, duration: 0.8, velocity: 0.4 }, // G4
                    { freq: 440, duration: 0.6, velocity: 0.5 }, // A4
                    { freq: 494, duration: 0.8, velocity: 0.4 }, // B4
                    { freq: 440, duration: 0.6, velocity: 0.5 }, // A4
                    { freq: 392, duration: 0.8, velocity: 0.4 }, // G4
                    { freq: 349, duration: 1.0, velocity: 0.6 }, // F4
                    { freq: 330, duration: 0.6, velocity: 0.5 }, // E4
                ]
            },
            arcade: {
                name: "复古街机",
                theme: "经典街机",
                tempo: 110,
                waveform: "square",
                notes: [
                    { freq: 440, duration: 0.3, velocity: 0.6 }, // A4
                    { freq: 440, duration: 0.1, velocity: 0.3 }, // A4
                    { freq: 523, duration: 0.3, velocity: 0.6 }, // C5
                    { freq: 523, duration: 0.1, velocity: 0.3 }, // C5
                    { freq: 587, duration: 0.3, velocity: 0.6 }, // D5
                    { freq: 587, duration: 0.1, velocity: 0.3 }, // D5
                    { freq: 659, duration: 0.6, velocity: 0.7 }, // E5
                ]
            },
            // 情感系列
            nostalgic: {
                name: "怀旧回忆",
                theme: "温暖回忆",
                tempo: 60,
                waveform: "sawtooth",
                notes: [
                    { freq: 349, duration: 1.0, velocity: 0.5 }, // F4
                    { freq: 392, duration: 0.8, velocity: 0.4 }, // G4
                    { freq: 440, duration: 1.2, velocity: 0.6 }, // A4
                    { freq: 494, duration: 0.8, velocity: 0.4 }, // B4
                    { freq: 440, duration: 1.0, velocity: 0.5 }, // A4
                    { freq: 392, duration: 1.5, velocity: 0.6 }, // G4
                    { freq: 349, duration: 1.0, velocity: 0.4 }, // F4
                ]
            },
            dreamscape: {
                name: "梦境漫游",
                theme: "梦幻空间",
                tempo: 50,
                waveform: "sine",
                notes: [
                    { freq: 523, duration: 2.0, velocity: 0.3 }, // C5 - 梦境开始
                    { freq: 659, duration: 1.5, velocity: 0.4 }, // E5
                    { freq: 784, duration: 1.0, velocity: 0.5 }, // G5
                    { freq: 659, duration: 1.5, velocity: 0.4 }, // E5
                    { freq: 523, duration: 2.5, velocity: 0.6 }, // C5 - 梦境深处
                ]
            }
        };
        
        this.initAudioContext();
    }
    
    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.masterGain = this.audioContext.createGain();
            this.masterGain.connect(this.audioContext.destination);
            this.masterGain.gain.setValueAtTime(this.volume, this.audioContext.currentTime);
        } catch (e) {
            console.log('Web Audio API not supported');
        }
    }
    
    async playTrack(trackName = 'happy', loop = true) {
        if (!this.audioContext) return;
        
        // 恢复音频上下文（某些浏览器需要用户交互）
        if (this.audioContext.state === 'suspended') {
            await this.audioContext.resume();
        }
        
        this.stopTrack();
        
        const track = this.tracks[trackName];
        if (!track) return;
        
        this.isPlaying = true;
        this.currentTrack = trackName;
        
        const playNotes = async () => {
            if (!this.isPlaying || this.currentTrack !== trackName) return;
            
            for (const note of track.notes) {
                if (!this.isPlaying || this.currentTrack !== trackName) break;
                
                await this.playNote(note.freq, note.duration);
                await this.wait(60 / track.tempo);
            }
            
            if (loop && this.isPlaying) {
                playNotes();
            }
        };
        
        playNotes();
    }
    
    async playNote(frequency, duration, velocity = 0.5, waveform = 'square') {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.masterGain);
        
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = waveform;
        
        // 更细腻的音量包络 - 舒缓的ADSR包络
        const now = this.audioContext.currentTime;
        const attackTime = 0.05;
        const decayTime = 0.1;
        const sustainLevel = velocity * 0.7;
        const releaseTime = Math.max(0.1, duration - attackTime - decayTime);
        
        // Attack - 快速达到音量
        gainNode.gain.setValueAtTime(0, now);
        gainNode.gain.linearRampToValueAtTime(velocity, now + attackTime);
        
        // Decay - 衰减到持续音量
        gainNode.gain.linearRampToValueAtTime(sustainLevel, now + attackTime + decayTime);
        
        // Release - 缓慢释放
        gainNode.gain.linearRampToValueAtTime(0, now + attackTime + decayTime + releaseTime);
        
        oscillator.start(now);
        oscillator.stop(now + attackTime + decayTime + releaseTime);
        
        return this.wait((attackTime + decayTime + releaseTime) * 1000);
    }
    
    wait(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    stopTrack() {
        this.isPlaying = false;
        this.currentTrack = null;
    }
    
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1, volume));
    }
    
    getTrackNames() {
        return Object.keys(this.tracks).map(name => ({
            id: name,
            name: this.tracks[name].name
        }));
    }
}

// 全局实例
window.bit8Music = new Bit8Music();