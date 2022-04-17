// eslint-disable-next-line no-unused-vars
export default Captcha => {

    class EmailForm {
        constructor(form) {
            this.form = form;
            this.box_1 = this.form.querySelector('.first-box');
            this.box_2 = this.form.querySelector('.second-box');
            this.box_3 = this.form.querySelector('.third-box');

            this.next = this.box_1.querySelector('button');
            this.submit = this.box_2.querySelector('input[type="submit"]');

            this.bindEvents();
        }

        bindEvents() {
            this.next.addEventListener('click', () => {
                let form_content = this.box_1.querySelector('input');
                if (this.validateEmail(form_content.value)) {
                    this.nextElement(this.box_1, this.box_2);
                }
            });

            this.submit.addEventListener('click', (e) => {
                e.preventDefault();
                let response = this.ajaxRequest(this.form);
                response.then(res => this.ajaxAnswer(res));

            });
        }

        nextElement(elementOne, elementTwo) {
            elementOne.classList.add('move-out');
            setTimeout(() => {
                elementOne.classList.add('no-display');
                elementTwo.classList.toggle('no-display');
                elementTwo.classList.toggle('move-in');
            }, 500);
        }

        validateEmail = (email) => {
            return String(email).toLowerCase().match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
        };

        ajaxAnswer(response) {
            if (response.form) {
                this.nextElement(this.box_2, this.box_3);
            } else {
                let refresh = this.box_2.querySelector('a');
                refresh.click();
                let fr = 'Captcha invalide! Réessayez!';
                let en = 'Invalid Captcha! Try again!';
                this.submit.value = response.language == 'en' ? en : fr;

            }
        }

        async ajaxRequest() {
            const url = window.location.href;
            const rawResponse = await fetch(url, {
                method: 'POST',
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                },
                body: new FormData(this.form)
            });
            const content = await rawResponse.json();

            return content;
        }
    }

    const form = document.querySelector('[data-module="Captcha"]');
    new EmailForm(form);

        const captchas = document.querySelectorAll('img.captcha');

        function headers(options) {
            options = options || {};
            options.headers = options.headers || {};
            options.headers['X-Requested-With'] = 'XMLHttpRequest';
            return options;
        }

        for (const captcha of captchas) {
            const anchor = document.createElement('a');
            anchor.href = '#captcha';
            anchor.classList.add('captcha-refresh');
            anchor.textContent = 'Refresh';
            anchor.addEventListener('click', ({
                target
            }) => {
                const url = `${window.location.origin}/captcha/refresh/`;
                let formEl = target.parentElement;

                while (formEl && formEl.tagName.toLowerCase() !== 'form') {
                    formEl = formEl.parentElement;
                }

                fetch(url, headers())
                    .then(res => res.json())
                    .then(json => {
                        formEl.querySelector('input[name="captcha_0"]').value = json.key;
                        captcha.setAttribute('src', json.image_url);
                    })
                    .catch(console.error);

                return false;
            });

            captcha.after(anchor);
        }
};