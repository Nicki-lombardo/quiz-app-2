document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const fields = ['question', 'answer', 'tag'];
    const maxLength = 100;

    fields.forEach(field => {
        const input = document.getElementById(field);
        input.setAttribute('maxlength', maxLength);

        const charCount = document.createElement('div');
        charCount.id = `${field}-char-count`;
        charCount.textContent = `0/${maxLength} characters`;
        input.insertAdjacentElement('afterend', charCount);

        input.addEventListener('input', () => {
            const length = input.value.length;
            charCount.textContent = `${length}/${maxLength} characters`;
        });
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el comportamiento por defecto del formulario

        // Leer los datos ingresados en los campos del formulario
        const question = document.getElementById('question').value;
        const answer = document.getElementById('answer').value;
        const tag = document.getElementById('tag').value;

        // Crear los elementos del DOM para la tarjeta
        const card = document.createElement('div');
        card.className = 'card';

        const questionElement = document.createElement('h2');
        questionElement.textContent = question;

        const answerElement = document.createElement('p');
        answerElement.textContent = answer;

        const tagElement = document.createElement('span');
        tagElement.textContent = tag;
        tagElement.className = 'tag';

        // Insertar los datos del formulario como texto en los elementos del DOM
        card.appendChild(questionElement);
        card.appendChild(answerElement);
        card.appendChild(tagElement);

        // Añadir la tarjeta a la página, directamente debajo del formulario
        form.insertAdjacentElement('afterend', card);

        // Limpiar los campos del formulario
        form.reset();

        // Resetear el contador de caracteres
        fields.forEach(field => {
            document.getElementById(`${field}-char-count`).textContent = `0/${maxLength} characters`;
        });
    });
});
