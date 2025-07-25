
export function horarioAtual(): string {
    const data = new Date();
    const horas = String(data.getHours()).padStart(2, '0');
    const minutos = String(data.getMinutes()).padStart(2, '0');
    const segundos = String(data.getSeconds()).padStart(2, '0');

    return `${horas}:${minutos}:${segundos}`;
}

export function dataAtual(): string {
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Meses começam do zero
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}