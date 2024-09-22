const vetImage = document.getElementById('vet-image');
const techImage = document.getElementById('tech-image');
const vetInfo = document.getElementById('vet-info');
const techInfo = document.getElementById('tech-info');
const closeVet = document.getElementById('close-vet');
const closeTech = document.getElementById('close-tech');

// Oculta as informações inicialmente
vetInfo.style.display = 'none';
techInfo.style.display = 'none';

// Função para mostrar as informações
const showInfo = (info) => {
    vetInfo.style.display = 'none';
    techInfo.style.display = 'none';

    if (info === 'vet') {
        vetInfo.style.display = 'block'; // Mostra a info da veterinária
        if (window.innerWidth < 768) { // Apenas para telas pequenas
            vetInfo.classList.add('fullscreen'); // Adiciona a classe de tela cheia
        }
    } else if (info === 'tech') {
        techInfo.style.display = 'block'; // Mostra a info da tecnologia
        if (window.innerWidth < 768) { // Apenas para telas pequenas
            techInfo.classList.add('fullscreen'); // Adiciona a classe de tela cheia
        }
    }
};

// Eventos de clique
vetImage.addEventListener('click', () => {
    showInfo('vet'); // Mostra a info da veterinária ao clicar
});

techImage.addEventListener('click', () => {
    showInfo('tech'); // Mostra a info da tecnologia ao clicar
});

// Função para fechar as informações em tela cheia
closeVet.addEventListener('click', () => {
    vetInfo.style.display = 'none';
    vetInfo.classList.remove('fullscreen'); // Remove a classe de tela cheia
});

closeTech.addEventListener('click', () => {
    techInfo.style.display = 'none';
    techInfo.classList.remove('fullscreen'); // Remove a classe de tela cheia
});
