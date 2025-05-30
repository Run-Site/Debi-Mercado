function guardarContacto() {
    const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:Debi Mercado Belleza
ORG:Espacio de Belleza;
TEL;TYPE=CELL:+5493544560101
EMAIL:traslasierraVip@gmail.com
URL:https://run-site.github.io/Debi-Mercado/
NOTE:En nuestro espacio, la belleza no es solo una apariencia, es una forma de vida.
END:VCARD`;

    const blob = new Blob([vCardData], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Contacto_Debi_Mercado_belleza.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}

function toggleCollapse(id) {
    const element = document.getElementById(id);
    element.classList.toggle('show-content');
    
    if (element.classList.contains('show-content')) {
        element.style.opacity = '0';
        requestAnimationFrame(() => {
            element.style.opacity = '1';
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'translateY(0)';
        });
    });
});