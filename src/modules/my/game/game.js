import { LightningElement, track } from 'lwc';

export default class Game extends LightningElement {
    score = 0;
    highScore = 0;

    blockSize = 20;

    @track gameBlocks = [];

    renderComplete = false;

    xSpeed = 1;
    ySpeed = 0;

    xHead = 0;
    yHead = 0;

    xMax;
    yMax;

    tail = [];

    showOverlay = true;
    gameOver = false;

    speed = 1;
    intervalObj;

    connectedCallback() {
        this.highScore = localStorage.getItem('lwc_snake_high')
            ? localStorage.getItem('lwc_snake_high')
            : 0;
    }

    get displaySpeed() {
        return this.speed.toFixed(1);
    }

    startGame() {
        this.showOverlay = false;
        this.intervalObj = setInterval(() => {
            this.move();
        }, 300 / this.speed);
    }

    addSpeed() {
        this.speed = this.speed + 0.1;
        clearInterval(this.intervalObj);
        this.startGame();
    }

    move() {
        const lastElement = this.tail[this.tail.length - 1];
        if (lastElement !== `${this.xHead}:${this.yHead}`) {
            this.tail.push(`${this.xHead}:${this.yHead}`);
            const removedElement = this.tail.shift();
            const curPosIndex = this.gameBlocks.findIndex(
                (x) => x.id === removedElement
            );
            this.gameBlocks[curPosIndex].snake = false;
            this.gameBlocks[curPosIndex].class = '';
        }

        this.xHead += this.xSpeed;
        this.yHead += this.ySpeed;

        if (this.xHead >= this.xMax) {
            this.xHead = 0;
        }

        if (this.xHead < 0) {
            this.xHead = this.xMax - 1;
        }

        if (this.yHead >= this.yMax) {
            this.yHead = 0;
        }

        if (this.yHead < 0) {
            this.yHead = this.yMax - 1;
        }

        if (this.tail.includes(`${this.xHead}:${this.yHead}`)) {
            this.exitGame();
        } else {
            const newPosIndex = this.gameBlocks.findIndex(
                (x) => x.id === `${this.xHead}:${this.yHead}`
            );
            this.gameBlocks[newPosIndex].snake = true;
            this.gameBlocks[newPosIndex].class = 'snake';

            if (this.gameBlocks[newPosIndex].food) {
                this.score++;
                if (this.score > this.highScore) {
                    this.highScore = this.score;
                    localStorage.setItem('lwc_snake_high', this.highScore);
                }
                this.addSpeed();
                this.tail.push(`${this.xHead}:${this.yHead}`);
                this.gameBlocks[newPosIndex].food = false;
                this.generateFood();
            }
        }
    }

    addKeyboardControls() {
        window.addEventListener('keydown', (e) => {
            e.preventDefault();
            switch (e.key) {
                case 'ArrowUp':
                    this.xSpeed = 0;
                    this.ySpeed = -1;
                    break;
                case 'ArrowDown':
                    this.xSpeed = 0;
                    this.ySpeed = 1;
                    break;
                case 'ArrowLeft':
                    this.xSpeed = -1;
                    this.ySpeed = 0;
                    break;
                case 'ArrowRight':
                    this.xSpeed = 1;
                    this.ySpeed = 0;
                    break;
                default:
                    break;
            }
        });
    }

    generateFood() {
        const xFood = Math.floor(Math.random() * (this.xMax - 1));
        const yFood = Math.floor(Math.random() * (this.yMax - 1));

        if (!this.tail.includes(`${xFood}:${yFood}`)) {
            const foodPosIndex = this.gameBlocks.findIndex(
                (x) => x.id === `${xFood}:${yFood}`
            );
            this.gameBlocks[foodPosIndex].food = true;
            this.gameBlocks[foodPosIndex].class = 'food';
        } else {
            this.generateFood();
        }
    }

    renderGameBlocks() {
        const gameContainerEl = this.template.querySelector('.game-container');
        const eWidth = gameContainerEl.clientWidth;
        const eHeight = gameContainerEl.clientHeight;

        this.xMax = Math.floor(eWidth / this.blockSize);
        this.yMax = Math.floor(eHeight / this.blockSize);

        const tmpBlocks = [];

        for (let y = 0; y < this.yMax; y++) {
            for (let x = 0; x < this.xMax; x++) {
                let obj;
                if (x === 0 && y === 0) {
                    obj = {
                        id: `${x}:${y}`,
                        snake: true,
                        food: false,
                        class: 'snake'
                    };
                } else {
                    obj = {
                        id: `${x}:${y}`,
                        snake: false,
                        food: false,
                        class: ''
                    };
                }
                tmpBlocks.push(obj);
            }
        }
        this.gameBlocks = tmpBlocks;
    }

    renderedCallback() {
        if (!this.renderComplete) {
            this.renderComplete = true;
            this.renderGameBlocks();
            this.addKeyboardControls();
            this.generateFood();
            window.addEventListener('resize', () => {
                this.resetGame();
            });
        }
    }

    resetGame() {
        this.xSpeed = 1;
        this.ySpeed = 0;

        this.xHead = 0;
        this.yHead = 0;

        this.tail = [];

        this.score = 0;
        this.speed = 1;

        this.renderGameBlocks();
        this.generateFood();
        clearInterval(this.intervalObj);
        this.startGame();
    }

    exitGame() {
        this.showOverlay = true;
        this.gameOver = true;
        clearInterval(this.intervalObj);
    }
}
