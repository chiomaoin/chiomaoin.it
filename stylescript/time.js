// Funzione per generare la data corrente
function getCurrentDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Aggiunge uno zero se necessario
    const day = String(now.getDate()).padStart(2, '0'); // Aggiunge uno zero se necessario
    return `${year}-${month}-${day}`;
  }
  
  // Inserisce la data corrente nel menu
  document.getElementById('current-date').textContent = getCurrentDate();
  
  // Funzione per il pulsante "pi" (se necessario)
  function pi() {
    alert('Hai cliccato sul simbolo di pi greco!');
  }
