// eslint-disable-next-line no-unused-vars
export default ChangeTheme => {

    var theme = [{
            "--main-font": "rgb(33, 33, 33)",
            "--main-bg": "#fff",

            "--project-bg": "#F2F2F2",

            "--dark-font": "#666666",
            "--small-font": "#666666",


            "--sub-color-dark": "rgba(0, 0, 0, 0.7)",
            "--sub-color-light": "#F2F2F2",

        },
        {
            "--main-font": "#fff",
            "--main-bg": "rgb(33, 33, 33)",

            "--project-bg": "rgb(33, 33, 33)",

            "--dark-font": "rgb(188, 188, 188)",

            "--small-font": "rgba(255, 255, 255, 0.5)",

            "--sub-color-dark": "rgb(42, 42, 42)",
            "--sub-color-light": "rgb(42, 42, 42)",
        }
    ];

    class Theme {
        constructor(changeButton) {
            this.changeButton = changeButton;

            this.root = document.documentElement;

            this.theme = 'white';
            this.white_theme = 'inline';
            this.black_theme = 'none';
            this.checkUserTheme();
            this.bindEvent();
            this.adaptTheme();
        }

        adaptTheme() {
            let current_theme = localStorage.getItem('theme');

            if (current_theme == 'black') {
                this.makeThemeChanges();
            }

        }

        checkUserTheme() {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.makeThemeChanges();
            }
        }

        bindEvent() {
            if (!this.changeButton.classList.contains('navigation_hack')) {
                this.changeButton.addEventListener('click', () => {
                    this.makeThemeChanges();
                });
            }
        }


        makeThemeChanges() {
            this.theme = this.theme == 'white' ? 'black' : 'white';
            localStorage.setItem('theme', this.theme);
            this.swapCssVars();
            this.swapTheme();
            this.swapImages();
        }

        swapCssVars() {
            let current = Object.keys(theme[0]);
            let replacement = Object.keys(theme[1]);
            for (let i = 0; i < current.length; i++) {
                let initial_value = theme[0][current[i]];
                theme[0][current[i]] = theme[1][replacement[i]];
                theme[1][current[i]] = initial_value;
            }

        }

        swapTheme() {
            Object.entries(theme[0]).forEach((kv_pair) => {
                this.root.style.setProperty(kv_pair[0], kv_pair[1]);
            });

            this.white_theme = this.white_theme == 'inline' ? 'none' : 'inline';
            this.black_theme = this.black_theme == 'none' ? 'inline' : 'none';
        }

        swapImages() {
            this.root.style.setProperty("--theme_white", this.white_theme);
            this.root.style.setProperty("--theme_black", this.black_theme);
        }
    }

    const button = document.querySelector('[data-module=ChangeTheme]');
    new Theme(button);

};