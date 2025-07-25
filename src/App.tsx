import './App.css'
import { useEffect, useState } from 'react';
import { horarioAtual } from './assets/utils/tempo'
import { dataAtual } from './assets/utils/tempo';

function App() {
  const [tempoAtual, setTempoAtual] = useState(horarioAtual());
  const [dataAtualFormatada, setDataAtualFormatada] = useState(dataAtual());
  
useEffect(() => {
    const intervalo = setInterval(() => {
      setTempoAtual(horarioAtual());
    }, 1000);
    const dataIntervalo = setInterval(() => {
      setDataAtualFormatada(dataAtual());
    }, 60000); // Atualiza a data a cada minuto

  return () => clearInterval(intervalo);
}, []);

  return (
    <>
    {/* Exibe o horário atual formatado */}
    <h1>Horário Atual: {tempoAtual}</h1>
  
    {/* Exibe a data atual formatada */}
    <h2>Data Atual: {dataAtualFormatada}</h2>
    </>
    
  )
}

export default App
