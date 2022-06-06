# snake-game
# APS - LABORATÓRIO DE SOFTWARE E PROJETOS
- Contextualização:<br>
Este trabalho se origninou da necessidade da divulgação de linguagens de programação pouco usadas no desenvolvimento de jogos utilizando bibliotecas nativas e adicionais no projeto. 
- Proposta:
<br>Desenvolver o snake game utilizando python com armazenamento no formato não relacional em ambiente local.
- Requisitos funcionais:
<br>• RF1 - Interface de jogo: A interface deve apresentar uma matriz no tamanho 20 x 20
<br>• RF2 - Placar mais alto: O jogo deverá conter o indicador de qual foi o placar mais alto já registrado
<br>• RF3 - Placar atual: O jogo deverá demonstrar qual o placar atual do usuário e ser acrescido cada vez que a maçã for comida pela cobra
<br>• RF4 - Sem colisões com a parede: A cobra, ao se chocar com a parede, deverá ter sua posição definida para o lado oposto
<br>• RF5 - Velocidade da cobra: A cobra deverá ter velocidade constante
<br>• RF6 - Colisão com a mação: Cada vez que a cobra colidir com a maçã, uma nova deverá ser alocada na matriz e o tamanho da cobra deverá ser acrescido de 1 unidade.
<br>• RF7 - Fim do jogo: O jogo inicia para a posição inicial quando a cobra se choca com seu próprio corpo, resetando o placar atual e verificando se o placar atual é superior ao do maior placar já registrado.
<br>• RF8 - Mensagens de fim de jogo: O jogo deverá expor caixas de diálogo por ocasião do término do jogo
- Detalhes Adicionais:
<br> * O jogo foi desenvolvido utilizando a linguagem de programação Python na versão 3.8.
<br> * Para a confecção da interface, utilizou-se a biblioteca pygame (**https://www.pygame.org/news**)
<br> * Para o registro das informações, utilizou-se a biblioteca json
<br> * Para a exibição das mensagens de término de jogo, utilizou-se a biblioteca tkinter
