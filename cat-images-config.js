/**
 * 喵酱图片配置文件
 * 在这里自定义您的猫咪图片
 */

// 猫咪图片配置
const catImagesConfig = {
    // 表情图片配置
    expressions: {
        happy: {
            src: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png",
            alt: "开心的喵酱"
        },
        excited: {
            src: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930400_1280.png", 
            alt: "兴奋的喵酱"
        },
        sleeping: {
            src: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg",
            alt: "睡觉的喵酱"
        },
        cool: {
            src: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
            alt: "酷酷的喵酱"
        },
        love: {
            src: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930401_1280.png",
            alt: "爱心的喵酱"
        },
        thinking: {
            src: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg",
            alt: "思考的喵酱"
        },
        surprised: {
            src: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png",
            alt: "惊讶的喵酱"
        }
    },
    
    // 特殊状态图片
    special: {
        celebrating: {
            src: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930400_1280.png",
            alt: "庆祝的喵酱"
        },
        dancing: {
            src: "https://cdn.pixabay.com/photo/2016/03/28/12/35/cat-1285634_1280.png",
            alt: "跳舞的喵酱"
        },
        reading: {
            src: "https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg",
            alt: "看书的喵酱"
        }
    },
    
    // 节日特殊图片
    seasonal: {
        christmas: {
            src: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930401_1280.png",
            alt: "圣诞喵酱"
        },
        halloween: {
            src: "https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg",
            alt: "万圣节喵酱"
        },
        newyear: {
            src: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2930400_1280.png",
            alt: "新年喵酱"
        }
    }
};

// 图片加载失败时的备用配置
const fallbackConfig = {
    useEmoji: true,
    emoji: "🐱",
    emojiStyle: {
        fontSize: "80px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#ff6b9d",
        color: "white",
        borderRadius: "50%",
        width: "120px",
        height: "120px"
    }
};

// 图片优化配置
const imageOptimization = {
    lazyLoading: true,
    placeholderColor: "#ff6b9d",
    loadingAnimation: true,
    errorHandling: true,
    cacheBusting: false // 如果需要防止缓存，设置为true
};

// 使用说明
const usageInstructions = `
🐱 喵酱图片配置使用说明：

1. 替换图片：
   - 修改下面的src链接为您喜欢的猫咪图片
   - 建议使用正方形图片，效果更好
   - 支持JPG、PNG、WebP格式

2. 图片要求：
   - 建议尺寸：200x200像素或更大
   - 支持透明背景的PNG图片
   - 文件大小建议在100KB以内

3. 无版权图片资源：
   - Pixabay: https://pixabay.com/
   - Unsplash: https://unsplash.com/
   - Pexels: https://www.pexels.com/
   - OpenClipart: https://openclipart.org/

4. AI生成图片：
   - DALL-E 3: "cute cartoon cat waifu, kawaii style"
   - Midjourney: "kawaii chibi cat girl, anime style"
   - Stable Diffusion: "kawaii cat waifu, moe style"

5. 自定义方法：
   - 可以使用本地图片：src="/images/my-cat.png"
   - 可以使用CDN图片：src="https://example.com/cat.png"
   - 可以使用Base64编码的小图片
`;

// 导出配置（如果需要在其他文件中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        catImagesConfig,
        fallbackConfig,
        imageOptimization,
        usageInstructions
    };
}

// 控制台输出使用说明
console.log(usageInstructions);