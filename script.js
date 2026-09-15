// Espera o DOM carregar completamente antes de executar o script
document.addEventListener('DOMContentLoaded', function() {
    
  const studentForm = document.getElementById('studentForm');
  const messageDiv = document.getElementById('formMessage');

  studentForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio do formulário e o recarregamento da página
      
      // Captura os valores digitados nos inputs
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const course = document.getElementById('course').value;

      // Validação básica dos campos
      if (name && email && course) {
          // Exibe mensagem de sucesso
          messageDiv.className = 'success';
          messageDiv.style.display = 'block';
          messageDiv.innerHTML = `<i class="fa-solid fa-circle-check"></i> Parabéns, <strong>${name}</strong>! Seu cadastro foi realizado com sucesso. Prepare-se para os desafios!`;
          
          // Limpa os campos do formulário
          studentForm.reset();

          // Oculta a mensagem de sucesso automaticamente após 5 segundos
          setTimeout(() => {
              messageDiv.style.display = 'none';
          }, 5000);
      }
  });

});
