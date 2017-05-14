# Game Design Document

## Resumo
**Título do Game**: Rugby Rush\
**Sistema de jogo**: Endless Runner\
**Idade alvo**: Todas\
**Classificação ESRB**: E (Everyone)\
**Resumo do gameplay**: Jogador corre indefinidamente desviando dos oponentes. Quando ele cai sua pontuação é exibida.\
**Pontos fortes**: Experiência de jogo\
**Competitividade**: Rugby Hero, Blocky Rugby, Rugby Try, Tiny Rugby e RETRO RUGBY

## Algumas regras do jogo
1. O jogador tem apenas 1 vida
2. O adversário (máquina) persegue o jogador até tentar derrubá-lo
3. O jogador poderá desviar do advserário que tentou abater-lo
4. Se o adversário pulou no jogador e ele desviou, então cai no chão e não levanta
5. Quando o adversário derrubar o jogador a partida termina e as jardas percorridas são exibidas como pontuação

## Controle do jogador
Setas direita ou esquerda, movem o jogador lateralmente \
Setas 2x para direita ou esquerda fazem o jogador desviar \
Espaço faz o jogador correr mais rápido (tem tempo de cooldown)

## Tarefas 
- [x] Iniciar implementação da estrutura básica do jogo
- [x] Criar o GDD
- [x] Definir regras básicas
- [x] Implementar camera do estado de jogo
- [x] Implementar estados de menu e pause
- [x] Implementar movimentos do jogador
- [x] Implementar movimentos dos adversários
- [x] Implementar colisões
- [x] Implementar condições de vitória ou derrota e pontuação
- [x] Ajustar assets e animações

## Melhorias 
### Ajustar start.js 
- [x] Atualizar background para novo sprite de fundo
- [x] Incluir botão 'start'
- [ ] Incluir botão 'mais opcoes'
- [ ] Incluir botão 'fechar'
- [ ] Adicionar tela de menu com os integrantes da equipe no StartState em start.js

### Ajustar game.js 
- [ ] Incluir botão sair
- [ ] Incluir novo campo de Rugby que tem plateia
- [ ] Alterar player para novo sprite
- [ ] Melhorar movimento do player e inimigo
- [ ] Implementar IA do inimigo para perseguir o jogador


