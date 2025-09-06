/**
 * 8bit音乐资源库
 * 免费使用的8bit风格音乐
 */

class Bit8Music {
    constructor() {
        this.audioContext = null;
        this.currentTrack = null;
        this.isPlaying = false;
        this.volume = 0.1;
        
        // 音乐曲目配置
        this.tracks = {
            happy: {
                name: "快乐8bit",
                tempo: 120,
                notes: [
                    { freq: 523, duration: 0.2 }, // C5
                    { freq: 587, duration: 0.2 }, // D5
                    { freq: 659, duration: 0.2 }, // E5
                    { freq: 523, duration: 0.2 }, // C5
                    { freq: 523, duration: 0.2 }, // C5
                    { freq: 587, duration: 0.2 }, // D5
                    { freq: 659, duration: 0.2 }, // E5
                    { freq: 523, duration: 0.2 }, // C5
                ]
            },
            peaceful: {
                name: "宁静8bit",
                tempo: 80,
                notes: [
                    { freq: 440, duration: 0.4 }, // A4
                    { freq: 494, duration: 0.4 }, // B4
                    { freq: 523, duration: 0.4 }, // C5
                    { freq: 440, duration: 0.4 }, // A4
                    { freq: 392, duration: 0.4 }, // G4
                    { freq: 440, duration: 0.4 }, // A4
                    { freq: 494, duration: 0.4 }, // B4
                    { freq: 392, duration: 0.4 }, // G4
                ]
            },
            energetic: {
                name: "活力8bit",
                tempo: 140,
                notes: [
                    { freq: 659, duration: 0.15 }, // E5
                    { freq: 698, duration: 0.15 }, // F5
                    { freq: 784, duration: 0.15 }, // G5
                    { freq: 659, duration: 0.15 }, // E5
                    { freq: 523, duration: 0.15 }, // C5
                    { freq: 587, duration: 0.15 }, // D5
                    { freq: 659, duration: 0.15 }, // E5
                    { freq: 523, duration: 0.15 }, // C5
                ]
            },
            game: {
                name: "游戏8bit",
                tempo: 100,
                notes: [
                    { freq: 330, duration: 0.3 }, // E4
                    { freq: 392, duration: 0.3 }, // G4
                    { freq: 330, duration: 0.3 }, // E4
                    { freq: 392, duration: 0.3 }, // G4
                    { freq: 440, duration: 0.3 }, // A4
                    { freq: 494, duration: 0.3 }, // B4
                    { freq: 440, duration: 0.3 }, // A4
                    { freq: 494, duration: 0.3 }, // B4
                ]
            }
        };
        
        this.initAudioContext();
    }
    
    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
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
    
    async playNote(frequency, duration) {
        if (!this.audioContext) return;
        
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        oscillator.frequency.setValueAtTime(frequency, this.audioContext.currentTime);
        oscillator.type = 'square'; // 8bit音色
        
        // 音量包络
        gainNode.gain.setValueAtTime(0, this.audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(this.volume, this.audioContext.currentTime + 0.01);
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + duration);
        
        oscillator.start(this.audioContext.currentTime);
        oscillator.stop(this.audioContext.currentTime + duration);
        
        return this.wait(duration * 1000);
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