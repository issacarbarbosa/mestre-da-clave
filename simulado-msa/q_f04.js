if (!window.bancoQuestoes) window.bancoQuestoes = [];

window.bancoQuestoes = window.bancoQuestoes.concat(

[
  {
    "id": "f04_q001",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é a função da Ligadura, uma linha curva colocada acima ou abaixo de duas ou mais notas?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.1 Ligadura",
      "pagina": 34
    },
    "opcoes": [
      {
        "texto": "Indica que o som deve ser cortado abruptamente.",
        "correta": false,
        "feedback": "A ligadura tem a função oposta, indicando que o som deve ser estendido, e não cortado."
      },
      {
        "texto": "Indica que o som deve ser estendido de uma nota para outra, sem interrupção.",
        "correta": true,
        "feedback": "A ligadura indica o prolongamento ou a ligação do som entre as notas, sem interrupção."
      },
      {
        "texto": "Determina a intensidade (volume) em que as notas devem ser tocadas.",
        "correta": false,
        "feedback": "A intensidade (volume) é determinada pela dinâmica, e não pela ligadura."
      },
      {
        "texto": "Altera a altura da nota em um semitom.",
        "correta": false,
        "feedback": "A alteração da altura da nota é feita por acidentes, como o Sustenido (♯) ou Bemol (♭)."
      }
    ]
  },
  {
    "id": "f04_q002",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Na Ligadura de Valor, que liga notas da mesma altura, qual é o efeito na duração das notas?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.1 Ligadura",
      "pagina": 34
    },
    "opcoes": [
      {
        "texto": "A duração da primeira nota é reduzida pela metade.",
        "correta": false,
        "feedback": "Na Ligadura de Valor, os valores das notas são somados para prolongar o som, e não reduzidos."
      },
      {
        "texto": "Os valores das notas ligadas são subtraídos.",
        "correta": false,
        "feedback": "Os valores das notas são somados, resultando em um prolongamento do som."
      },
      {
        "texto": "Os valores das notas ligadas são somados, ocorrendo um prolongamento do som.",
        "correta": true,
        "feedback": "A Ligadura de Valor soma os valores das notas ligadas, prolongando a duração do som."
      },
      {
        "texto": "O andamento da música é automaticamente acelerado.",
        "correta": false,
        "feedback": "A ligadura afeta a duração do som, mas não o andamento geral da música."
      }
    ]
  },
  {
    "id": "f04_q003",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Em termos de escrita, onde a Ligadura é posicionada em relação às notas musicais?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.1 Ligadura",
      "pagina": 34
    },
    "opcoes": [
      {
        "texto": "Somente abaixo das notas.",
        "correta": false,
        "feedback": "A ligadura pode ser colocada tanto acima quanto abaixo das notas."
      },
      {
        "texto": "Somente à direita da cabeça da figura musical.",
        "correta": false,
        "feedback": "A posição à direita da cabeça da figura musical é reservada ao Ponto de Aumento (.)."
      },
      {
        "texto": "Acima ou abaixo de duas ou mais notas.",
        "correta": true,
        "feedback": "A ligadura, que é uma linha curva, é posicionada acima ou abaixo das notas que ela conecta."
      },
      {
        "texto": "Sempre no início do pentagrama, junto à clave.",
        "correta": false,
        "feedback": "A Armadura de Clave é posicionada no início do pentagrama, e não a Ligadura."
      }
    ]
  },
  {
    "id": "f04_q004",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "O Ponto de Aumento (.), colocado à direita da cabeça da figura musical, aumenta a duração desta figura em qual proporção?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.2 Ponto de aumento",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Um terço (1/3) da sua duração.",
        "correta": false,
        "feedback": "O Ponto de Aumento (.) adiciona metade (1/2) da duração da figura à qual está ligado."
      },
      {
        "texto": "O dobro da sua duração.",
        "correta": false,
        "feedback": "O Ponto de Aumento (.) aumenta metade da duração, e não a dobra."
      },
      {
        "texto": "Metade (1/2) da sua duração.",
        "correta": true,
        "feedback": "O Ponto de Aumento (.) adiciona metade do valor à duração da figura musical."
      },
      {
        "texto": "O valor equivalente a uma Semínima (𝅘𝅥).",
        "correta": false,
        "feedback": "O valor é proporcional à figura de origem, sempre metade da sua duração."
      }
    ]
  },
  {
    "id": "f04_q005",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "No Ponto Duplo (..), como o segundo ponto aumenta a duração do som?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.2 Ponto de aumento",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "O segundo ponto aumenta metade (1/2) da duração do primeiro ponto.",
        "correta": true,
        "feedback": "O primeiro ponto aumenta metade da duração da figura, e o segundo ponto aumenta metade da duração do primeiro ponto."
      },
      {
        "texto": "O segundo ponto aumenta o valor de uma Semibreve (𝅝).",
        "correta": false,
        "feedback": "O aumento é fracionário e relativo ao valor já adicionado pelo primeiro ponto."
      },
      {
        "texto": "O segundo ponto anula o efeito do primeiro ponto.",
        "correta": false,
        "feedback": "Ambos os pontos adicionam valor à figura original."
      },
      {
        "texto": "O segundo ponto aumenta a duração em um tom.",
        "correta": false,
        "feedback": "O Ponto Duplo (..) altera a duração, não a altura (Tom/Semitom)."
      }
    ]
  },
  {
    "id": "f04_q006",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é a localização correta do Ponto de Aumento (.) na notação musical?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.2 Ponto de aumento",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Acima da cabeça da figura musical.",
        "correta": false,
        "feedback": "O Ponto de Aumento (.) é colocado à direita da cabeça da figura musical, não acima."
      },
      {
        "texto": "À esquerda da cabeça da figura musical.",
        "correta": false,
        "feedback": "O Ponto de Aumento (.) é colocado à direita da cabeça da figura musical."
      },
      {
        "texto": "Abaixo da cabeça da figura musical.",
        "correta": false,
        "feedback": "O Ponto de Aumento (.) é colocado à direita da cabeça da figura musical."
      },
      {
        "texto": "À direita da cabeça da figura musical.",
        "correta": true,
        "feedback": "O Ponto de Aumento (.) é sempre colocado à direita da cabeça da figura de som ou silêncio para aumentar sua duração."
      }
    ]
  },
  {
    "id": "f04_q007",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "O que o Intervalo mede na música?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.3 Intervalo",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "A intensidade entre dois sons.",
        "correta": false,
        "feedback": "Intervalo mede a distância de altura, não a intensidade (volume)."
      },
      {
        "texto": "A duração de uma figura musical.",
        "correta": false,
        "feedback": "A duração é determinada pela figura e pelos sinais de alteração de valor (como o Ponto de Aumento .)."
      },
      {
        "texto": "A distância entre dois sons.",
        "correta": true,
        "feedback": "Intervalo é a distância de altura entre dois sons, e também é chamado de salto."
      },
      {
        "texto": "O timbre da figura musical.",
        "correta": false,
        "feedback": "Timbre é a cor do som, que permite distinguir instrumentos."
      }
    ]
  },
  {
    "id": "f04_q008",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Além de Melódico (sons sucessivos) e Harmônico (sons simultâneos), como os intervalos são classificados em relação ao número de notas que contêm?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.3 Intervalo",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Simples e Complexos.",
        "correta": false,
        "feedback": "Os intervalos são classificados em Simples e Compostos."
      },
      {
        "texto": "Graves e Agudos.",
        "correta": false,
        "feedback": "Grave e Agudo são propriedades da altura do som."
      },
      {
        "texto": "Regulares e Irregulares.",
        "correta": false,
        "feedback": "Regular e Irregular são classificações usadas para síncopa ou contratempo."
      },
      {
        "texto": "Simples e Compostos.",
        "correta": true,
        "feedback": "Os intervalos são classificados em Simples (2ª a 8ª) e Compostos (acima de 8ª), dependendo do número de notas sucessivas contidas neles."
      }
    ]
  },
  {
    "id": "f04_q009",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Os intervalos que contêm de duas (2) a oito (8) notas sucessivas são classificados como:",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.3 Intervalo",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Intervalos Harmônicos.",
        "correta": false,
        "feedback": "Intervalos Harmônicos se referem a notas que soam simultaneamente, não ao seu tamanho."
      },
      {
        "texto": "Intervalos Compostos.",
        "correta": false,
        "feedback": "Intervalos Compostos contêm acima de oito notas sucessivas (acima de 8ª)."
      },
      {
        "texto": "Intervalos Simples.",
        "correta": true,
        "feedback": "Intervalos Simples contêm de duas a oito notas sucessivas (2ª a 8ª)."
      },
      {
        "texto": "Intervalos Irregulares.",
        "correta": false,
        "feedback": "Essa classificação não se aplica ao tamanho do intervalo."
      }
    ]
  },
  {
    "id": "f04_q010",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Na Fórmula de Compasso em 3 (como 3/4 ou 3/2), o número superior (3) indica:",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.4 Fórmula de compasso em 3",
      "pagina": 36
    },
    "opcoes": [
      {
        "texto": "O número da figura musical que representa cada tempo.",
        "correta": false,
        "feedback": "O número da figura musical que representa cada tempo é indicado pelo número inferior."
      },
      {
        "texto": "A quantidade de tempos que o compasso terá.",
        "correta": true,
        "feedback": "O número superior da fórmula de compasso sempre indica a quantidade de tempos, pulsos ou movimentos em cada compasso."
      },
      {
        "texto": "Apenas que se trata de um Compasso Composto.",
        "correta": false,
        "feedback": "A Fórmula de Compasso em 3 refere-se a um Compasso Simples Ternário."
      },
      {
        "texto": "O valor total de uma Semibreve (𝅝).",
        "correta": false,
        "feedback": "O número superior indica a quantidade de tempos no compasso."
      }
    ]
  },
  {
    "id": "f04_q011",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Na Fórmula de Compasso 3/4, qual figura musical representa cada tempo ou movimento?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.4 Fórmula de compasso em 3",
      "pagina": 36
    },
    "opcoes": [
      {
        "texto": "A Mínima (𝅗𝅥).",
        "correta": false,
        "feedback": "A Mínima (𝅗𝅥) representa o tempo na Fórmula de Compasso 3/2 (número 2)."
      },
      {
        "texto": "A Semínima (𝅘𝅥).",
        "correta": true,
        "feedback": "O número inferior 4 indica que a Semínima (𝅘𝅥) (número de equivalência 4) representa cada tempo ou movimento."
      },
      {
        "texto": "A Colcheia (𝅘𝅥𝅮).",
        "correta": false,
        "feedback": "A Colcheia (𝅘𝅥𝅮) tem número de equivalência 8."
      },
      {
        "texto": "A Semibreve (𝅝).",
        "correta": false,
        "feedback": "A Semibreve (𝅝) tem número de equivalência 1."
      }
    ]
  },
  {
    "id": "f04_q012",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "A Fórmula de Compasso 3/2 determina que o compasso terá 3 tempos e que a figura musical que representa cada tempo é a:",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.4 Fórmula de compasso em 3",
      "pagina": 36
    },
    "opcoes": [
      {
        "texto": "Semínima (𝅘𝅥).",
        "correta": false,
        "feedback": "A Semínima (𝅘𝅥) representa o tempo na fórmula 3/4."
      },
      {
        "texto": "Mínima (𝅗𝅥).",
        "correta": true,
        "feedback": "O número inferior 2 indica que a Mínima (𝅗𝅥) (número de equivalência 2) representa cada tempo do compasso."
      },
      {
        "texto": "Colcheia (𝅘𝅥𝅮).",
        "correta": false,
        "feedback": "A Colcheia (𝅘𝅥𝅮) tem número de equivalência 8."
      },
      {
        "texto": "Semibreve (𝅝).",
        "correta": false,
        "feedback": "A Semibreve (𝅝) tem número de equivalência 1."
      }
    ]
  },
  {
    "id": "f04_q013",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Para o Movimento de Solfejo em 3, onde o Candidato deve posicionar a mão para dar início ao primeiro movimento?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.5 Movimento de solfejo em 3",
      "pagina": 37
    },
    "opcoes": [
      {
        "texto": "Na altura da cabeça.",
        "correta": false,
        "feedback": "A mão deve ser posicionada na altura do peito, dentro da janela de movimento."
      },
      {
        "texto": "Abaixo da mesa invisível.",
        "correta": false,
        "feedback": "A mão deve ser posicionada na altura do peito para a preparação, batendo em seguida no ponto 1 (abaixo)."
      },
      {
        "texto": "Na altura do peito, batendo no ponto número 1.",
        "correta": true,
        "feedback": "O movimento de solfejo sempre começa com a preparação da mão na altura do peito, e a batida inicial ocorre no ponto 1."
      },
      {
        "texto": "No ponto 3 (à direita).",
        "correta": false,
        "feedback": "O ponto 3 é o movimento final antes do retorno ao ponto inicial (para destros)."
      }
    ]
  },
  {
    "id": "f04_q014",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é a regra fundamental de movimento corporal que deve ser observada durante a condução do solfejo em 3?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.5 Movimento de solfejo em 3",
      "pagina": 37
    },
    "opcoes": [
      {
        "texto": "Movimentar apenas o pulso e não o braço.",
        "correta": false,
        "feedback": "Deve-se movimentar apenas o braço (e não o pulso) durante o solfejo."
      },
      {
        "texto": "Fazer movimentos expansivos fora da janela de movimento.",
        "correta": false,
        "feedback": "Os movimentos devem ser contidos dentro da janela de movimento."
      },
      {
        "texto": "Movimentar apenas o braço e não o pulso.",
        "correta": true,
        "feedback": "É um lembrete importante: deve-se movimentar apenas o braço (e não o pulso) durante o solfejo."
      },
      {
        "texto": "Bater o pé em todas as pulsações com força.",
        "correta": false,
        "feedback": "Os movimentos no pé devem ser leves e discretos (apenas com os dedos do pé)."
      }
    ]
  },
  {
    "id": "f04_q015",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "As fórmulas de compasso 4/4 e 2/2 podem ser representadas por quais símbolos alternativos, respectivamente?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "𝄐 (Fermata) e 𝄢 (Clave de Fá).",
        "correta": false,
        "feedback": "Estes são sinais musicais que não representam as Fórmulas de Compasso."
      },
      {
        "texto": "C e 𝄵 (C Cortado).",
        "correta": true,
        "feedback": "Os compassos 4/4 e 2/2 são também representados por C (Compasso Comum) e 𝄵 (C Cortado ou Alla Breve), respectivamente."
      },
      {
        "texto": "𝄞 (Clave de Sol) e C.",
        "correta": false,
        "feedback": "A Clave de Sol (𝄞) não é um símbolo alternativo para 4/4 ou 2/2."
      },
      {
        "texto": "3/4 e C.",
        "correta": false,
        "feedback": "3/4 é uma fórmula de compasso ternário, diferente de 4/4."
      }
    ]
  },
  {
    "id": "f04_q016",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Na Fórmula de Compasso 2/4, qual figura musical representa cada tempo ou movimento?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "A Mínima (𝅗𝅥).",
        "correta": false,
        "feedback": "A Mínima (𝅗𝅥) representa o tempo na Fórmula de Compasso 2/2 (número 2)."
      },
      {
        "texto": "A Semínima (𝅘𝅥).",
        "correta": true,
        "feedback": "O número inferior 4 indica que a Semínima (𝅘𝅥) (número de equivalência 4) representa cada tempo ou movimento."
      },
      {
        "texto": "A Colcheia (𝅘𝅥𝅮).",
        "correta": false,
        "feedback": "A Colcheia (𝅘𝅥𝅮) tem número de equivalência 8."
      },
      {
        "texto": "A Semibreve (𝅝).",
        "correta": false,
        "feedback": "A Semibreve (𝅝) tem número de equivalência 1."
      }
    ]
  },
  {
    "id": "f04_q017",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "A Fórmula de Compasso 2/2 determina que o compasso terá 2 tempos e que a figura musical que representa cada tempo é a:",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "Semínima (𝅘𝅥).",
        "correta": false,
        "feedback": "A Semínima (𝅘𝅥) representa o tempo na fórmula 2/4."
      },
      {
        "texto": "Mínima (𝅗𝅥).",
        "correta": true,
        "feedback": "O número inferior 2 indica que a Mínima (𝅗𝅥) (número de equivalência 2) representa cada tempo do compasso."
      },
      {
        "texto": "Colcheia (𝅘𝅥𝅮).",
        "correta": false,
        "feedback": "A Colcheia (𝅘𝅥𝅮) tem número de equivalência 8."
      },
      {
        "texto": "Semibreve (𝅝).",
        "correta": false,
        "feedback": "A Semibreve (𝅝) tem número de equivalência 1."
      }
    ]
  },
  {
    "id": "f04_q018",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "No Movimento de Solfejo em 2, como é realizado o primeiro movimento?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.7 Movimento de solfejo em 2",
      "pagina": 41
    },
    "opcoes": [
      {
        "texto": "Inicia embaixo (1) e termina à esquerda.",
        "correta": false,
        "feedback": "Este é o primeiro movimento do Solfejo em 4."
      },
      {
        "texto": "Inicia em cima (2) e termina embaixo (1).",
        "correta": false,
        "feedback": "Este é o segundo movimento do Solfejo em 2."
      },
      {
        "texto": "Inicia embaixo (1) e termina em cima (2).",
        "correta": true,
        "feedback": "O primeiro movimento do Solfejo em 2 começa no ponto 1 (embaixo) e termina no ponto 2 (em cima)."
      },
      {
        "texto": "Inicia no peito (preparação) e termina embaixo (1).",
        "correta": false,
        "feedback": "O movimento de preparação não conta como tempo ou movimento."
      }
    ]
  },
  {
    "id": "f04_q019",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "No Movimento de Solfejo em 2, como é realizado o segundo movimento?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.7 Movimento de solfejo em 2",
      "pagina": 41
    },
    "opcoes": [
      {
        "texto": "Inicia em cima (2) e termina embaixo (1).",
        "correta": true,
        "feedback": "O segundo movimento começa no ponto 2 (em cima) e retorna ao ponto 1 (embaixo)."
      },
      {
        "texto": "Inicia embaixo (1) e termina em cima (2).",
        "correta": false,
        "feedback": "Este é o primeiro movimento do Solfejo em 2."
      },
      {
        "texto": "Inicia à esquerda e termina à direita.",
        "correta": false,
        "feedback": "O movimento em 2 é vertical (cima e baixo)."
      },
      {
        "texto": "Inicia no peito e termina no ponto 1.",
        "correta": false,
        "feedback": "A preparação é anterior ao início dos movimentos."
      }
    ]
  },
  {
    "id": "f04_q020",
    "ativo": true,
    "dificuldade": "facil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Quantos pontos principais de batida (excluindo a preparação) são utilizados para a condução do Movimento de Solfejo em 2?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.7 Movimento de solfejo em 2",
      "pagina": 41
    },
    "opcoes": [
      {
        "texto": "Quatro (4) pontos.",
        "correta": false,
        "feedback": "O Movimento de Solfejo em 4 utiliza quatro pontos."
      },
      {
        "texto": "Três (3) pontos.",
        "correta": false,
        "feedback": "O Movimento de Solfejo em 3 utiliza três pontos."
      },
      {
        "texto": "Dois (2) pontos.",
        "correta": true,
        "feedback": "O Movimento de Solfejo em 2 utiliza dois pontos: o ponto 1 (embaixo) e o ponto 2 (em cima)."
      },
      {
        "texto": "Seis (6) pontos.",
        "correta": false,
        "feedback": "O Movimento de Solfejo em 6 utiliza seis pontos."
      }
    ]
  },
  {
    "id": "f04_q021",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual a definição correta para a Ligadura de Portamento?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.1 Ligadura",
      "pagina": 34
    },
    "opcoes": [
      {
        "texto": "É uma linha curva que liga notas da mesma altura, somando os seus valores.",
        "correta": false,
        "feedback": "Esta é a definição de Ligadura de Valor."
      },
      {
        "texto": "É uma linha curva colocada entre duas ou mais notas de alturas diferentes, indicando que o som deve passar de uma para a outra sem interrupção.",
        "correta": true,
        "feedback": "A Ligadura de Portamento conecta notas de alturas diferentes, mantendo o som ligado (sem interrupção)."
      },
      {
        "texto": "É um sinal que exige uma parada breve e um prolongamento indefinido do som.",
        "correta": false,
        "feedback": "Este é o conceito de Fermata (𝄐)."
      },
      {
        "texto": "É um sinal que, colocado à direita da cabeça da figura musical, aumenta metade de sua duração.",
        "correta": false,
        "feedback": "Esta é a definição de Ponto de Aumento (.)."
      }
    ]
  },
  {
    "id": "f04_q022",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual a principal função da Ligadura de Valor no hinário?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.1 Ligadura",
      "pagina": 34
    },
    "opcoes": [
      {
        "texto": "Conectar duas ou mais notas de alturas diferentes para ligar o som.",
        "correta": false,
        "feedback": "Esta é a função da Ligadura de Portamento."
      },
      {
        "texto": "Prolongar o som, unindo notas da mesma altura e somando os seus respectivos valores.",
        "correta": true,
        "feedback": "A Ligadura de Valor (ou de prolongamento do som) liga notas de mesma altura e soma seus valores para estender a duração do som."
      },
      {
        "texto": "Indicar uma pausa ou interrupção breve no trecho musical.",
        "correta": false,
        "feedback": "A ligadura indica a continuidade do som, sem interrupção."
      },
      {
        "texto": "Alterar o ritmo para um compasso ternário.",
        "correta": false,
        "feedback": "A ligadura não tem relação com a fórmula de compasso ou a alteração de sua natureza."
      }
    ]
  },
  {
    "id": "f04_q023",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é a regra referente à utilização da Ligadura em figuras de silêncio (pausas)?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.1 Ligadura",
      "pagina": 34
    },
    "opcoes": [
      {
        "texto": "É obrigatória sempre que duas Pausas de Semínima (𝄽) ou menores se sucederem.",
        "correta": false,
        "feedback": "A ligadura não é utilizada entre pausas."
      },
      {
        "texto": "É utilizada apenas para indicar o prolongamento em Pausas de Mínima (𝅗𝅥).",
        "correta": false,
        "feedback": "A ligadura não é utilizada em pausas."
      },
      {
        "texto": "Não se utiliza ligadura entre pausas, pois o prolongamento do silêncio ocorre naturalmente ao colocar uma pausa na sequência da outra.",
        "correta": true,
        "feedback": "Não se utiliza ligadura entre pausas. O prolongamento do silêncio é inerente à sucessão das pausas."
      },
      {
        "texto": "É utilizada somente se houver um Ponto de Aumento (.) na primeira pausa.",
        "correta": false,
        "feedback": "O Ponto de Aumento (.) pode ser usado em pausas, mas a ligadura entre pausas não é utilizada."
      }
    ]
  },
  {
    "id": "f04_q024",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Em quais tipos de figuras musicais o Ponto de Aumento (.) pode ser utilizado para modificar a duração?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.2 Ponto de aumento",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Somente em figuras de som (notas musicais).",
        "correta": false,
        "feedback": "O Ponto de Aumento (.) pode ser utilizado tanto em figuras de som quanto em figuras de silêncio (pausas)."
      },
      {
        "texto": "Somente em figuras de silêncio (pausas).",
        "correta": false,
        "feedback": "O Ponto de Aumento (.) pode ser utilizado tanto em figuras de som quanto em figuras de silêncio (pausas)."
      },
      {
        "texto": "Tanto em figuras de som quanto em figuras de silêncio (pausas).",
        "correta": true,
        "feedback": "O Ponto de Aumento (.) colocado à direita da cabeça da figura musical aumenta metade de sua duração, seja ela uma figura de som ou uma pausa."
      },
      {
        "texto": "Apenas em Semínimas (𝅘𝅥) e Colcheias (𝅘𝅥𝅮).",
        "correta": false,
        "feedback": "O ponto pode ser usado em qualquer figura de som ou silêncio."
      }
    ]
  },
  {
    "id": "f04_q025",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Ao se aplicar o Ponto Duplo (..), qual é o valor total de aumento adicionado à duração da figura original?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.2 Ponto de aumento",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Um terço (1/3) do valor da figura original.",
        "correta": false,
        "feedback": "O Ponto Duplo (..) adiciona três quartos (3/4) do valor da figura original."
      },
      {
        "texto": "Metade (1/2) do valor da figura original.",
        "correta": false,
        "feedback": "Metade (1/2) é o valor adicionado por um Ponto Simples (.). O Ponto Duplo (..) adiciona três quartos (3/4) do valor da figura original."
      },
      {
        "texto": "Três quartos (3/4) do valor da figura original.",
        "correta": true,
        "feedback": "O primeiro ponto adiciona 1/2 do valor da figura, e o segundo ponto adiciona 1/2 do valor do primeiro ponto (ou seja, 1/4 do valor da figura original). O total é 1/2 + 1/4 = 3/4."
      },
      {
        "texto": "O dobro do valor da figura original.",
        "correta": false,
        "feedback": "O Ponto Duplo (..) aumenta o valor da figura, mas não o dobra."
      }
    ]
  },
  {
    "id": "f04_q026",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "O Intervalo Melódico é caracterizado pela forma como as notas são ouvidas. Como as notas soam neste tipo de intervalo?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.3 Intervalo",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Simultaneamente (tocadas ao mesmo tempo).",
        "correta": false,
        "feedback": "Notas tocadas simultaneamente formam um Intervalo Harmônico."
      },
      {
        "texto": "Sucessivamente (tocadas uma após a outra).",
        "correta": true,
        "feedback": "O Intervalo Melódico ocorre quando as notas soam sucessivamente, ou seja, uma após a outra."
      },
      {
        "texto": "Em oitavas diferentes (acima da 8ª).",
        "correta": false,
        "feedback": "Isso se refere a intervalos compostos, mas não à forma como soam (melódico ou harmônico)."
      },
      {
        "texto": "Em uníssono (na mesma altura).",
        "correta": false,
        "feedback": "O uníssono é quando duas notas soam simultaneamente na mesma altura."
      }
    ]
  },
  {
    "id": "f04_q027",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Como as notas soam quando formam um Intervalo Harmônico?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.3 Intervalo",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Em ritmos alternados.",
        "correta": false,
        "feedback": "A forma como o intervalo soa é determinada pela simultaneidade ou sucessão das notas."
      },
      {
        "texto": "Sucessivamente, formando uma linha melódica.",
        "correta": false,
        "feedback": "Notas sucessivas formam um Intervalo Melódico."
      },
      {
        "texto": "Simultaneamente (tocadas ao mesmo tempo).",
        "correta": true,
        "feedback": "O Intervalo Harmônico ocorre quando as notas soam simultaneamente, contribuindo para a Harmonia da música."
      },
      {
        "texto": "Apenas em oitavas simples (2ª a 8ª).",
        "correta": false,
        "feedback": "Intervalos simples são classificados pelo tamanho, não pela forma como soam."
      }
    ]
  },
  {
    "id": "f04_q028",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual a regra de classificação para os Intervalos Compostos?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.3 Intervalo",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Contêm exatamente oito (8) notas sucessivas.",
        "correta": false,
        "feedback": "Intervalos com 8 notas são classificados como Intervalos Simples (8ª)."
      },
      {
        "texto": "Contêm de duas (2) a oito (8) notas sucessivas.",
        "correta": false,
        "feedback": "Esta é a definição de Intervalos Simples."
      },
      {
        "texto": "Contêm acima de oito (8) notas sucessivas dentro do intervalo.",
        "correta": true,
        "feedback": "Intervalos Compostos são aqueles que ultrapassam a oitava, contendo mais de oito notas sucessivas (ex: 9ª, 10ª, etc.)."
      },
      {
        "texto": "São aqueles que soam simultaneamente (harmônicos).",
        "correta": false,
        "feedback": "A classificação em Composto/Simples refere-se ao número de notas, não à forma de execução (melódica/harmônica)."
      }
    ]
  },
  {
    "id": "f04_q029",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Quais são as Fórmulas de Compasso em 3 que encontramos no hinário?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.4 Fórmula de compasso em 3",
      "pagina": 36
    },
    "opcoes": [
      {
        "texto": "3/8 e 3/16.",
        "correta": false,
        "feedback": "As fórmulas 3/8 e 3/16 não são encontradas no hinário."
      },
      {
        "texto": "3/4 e 3/2.",
        "correta": true,
        "feedback": "No hinário, as Fórmulas de Compasso em 3 que encontramos são apenas 3/4 e 3/2."
      },
      {
        "texto": "3/4 e 6/8.",
        "correta": false,
        "feedback": "3/4 é uma fórmula em 3, mas 6/8 é uma fórmula em 6 (binário composto)."
      },
      {
        "texto": "3/4, 3/8 e 3/2.",
        "correta": false,
        "feedback": "Apenas 3/4 e 3/2 são encontradas no hinário."
      }
    ]
  },
  {
    "id": "f04_q030",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Na Fórmula de Compasso em 3, o que o número inferior indica?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.4 Fórmula de compasso em 3",
      "pagina": 36
    },
    "opcoes": [
      {
        "texto": "A figura musical que representa cada tempo ou movimento.",
        "correta": true,
        "feedback": "O número inferior da fórmula de compasso é o número de equivalência da figura musical que representa a Unidade de Tempo (U.T.), ou seja, cada tempo ou movimento."
      },
      {
        "texto": "A quantidade total de compassos na música.",
        "correta": false,
        "feedback": "O número inferior indica a figura que representa o tempo, não a quantidade de compassos."
      },
      {
        "texto": "A duração total do compasso em tempos.",
        "correta": false,
        "feedback": "A duração total em tempos é determinada pelo número superior."
      },
      {
        "texto": "A intensidade (dinâmica) de execução do compasso.",
        "correta": false,
        "feedback": "A intensidade é determinada pela dinâmica, não pela fórmula de compasso."
      }
    ]
  },
  {
    "id": "f04_q031",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Para o Movimento de Solfejo em 3, quando um movimento se encerra?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.5 Movimento de solfejo em 3",
      "pagina": 37
    },
    "opcoes": [
      {
        "texto": "Quando a mão se move do centro (peito) para o ponto seguinte.",
        "correta": false,
        "feedback": "O movimento se inicia com a batida em um ponto e só termina quando chega no ponto seguinte."
      },
      {
        "texto": "Apenas na batida do ponto 1 (embaixo).",
        "correta": false,
        "feedback": "A batida no ponto 1 inicia o primeiro movimento, que só se completa ao chegar no ponto 2 (para destros)."
      },
      {
        "texto": "O movimento sempre inicia com a batida de mão em um ponto e só termina quando a mão chega ao ponto seguinte.",
        "correta": true,
        "feedback": "Cada movimento no solfejo é definido pelo trajeto que começa na batida de um ponto e termina ao chegar no ponto seguinte."
      },
      {
        "texto": "Ao final de cada compasso.",
        "correta": false,
        "feedback": "Em um compasso em 3, há 3 movimentos."
      }
    ]
  },
  {
    "id": "f04_q032",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual dos seguintes é um lembrete importante a ser observado durante o Movimento de Solfejo em 3?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.5 Movimento de solfejo em 3",
      "pagina": 37
    },
    "opcoes": [
      {
        "texto": "Bater no ponto 3 (direita) com mais força para marcar o acento forte.",
        "correta": false,
        "feedback": "O acento métrico não deve ser literalmente executado com aumento de intensidade, e o tempo forte em 3 é o primeiro tempo (ponto 1)."
      },
      {
        "texto": "Fazer movimentos expansivos para fora da janela de movimento.",
        "correta": false,
        "feedback": "Os movimentos devem ser contidos dentro da janela de movimento para serem corretos."
      },
      {
        "texto": "A mão deve bater sobre uma 'mesa invisível' em cada ponto.",
        "correta": true,
        "feedback": "É fundamental imaginar a 'mesa invisível' para garantir a precisão e a constância da pulsação ao bater em cada ponto."
      },
      {
        "texto": "O movimento deve ser feito somente pelo pulso e não pelo braço.",
        "correta": false,
        "feedback": "Deve-se movimentar apenas o braço (e não o pulso)."
      }
    ]
  },
  {
    "id": "f04_q033",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é a instrução dada aos Candidatos ao encontrarem exercícios de solfejo de notas, caso o instrumento ainda não esteja definido?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.5 Movimento de solfejo em 3",
      "pagina": 37
    },
    "opcoes": [
      {
        "texto": "O candidato deve sempre utilizar a Clave de Fá (𝄢) para sons graves.",
        "correta": false,
        "feedback": "Caso o instrumento não esteja definido, a Clave de Sol (𝄞) deve ser utilizada."
      },
      {
        "texto": "O Candidato deve desenhar no início de cada pentagrama a Clave de Sol (𝄞).",
        "correta": true,
        "feedback": "A partir deste ponto nos exercícios de solfejo de notas, se o instrumento ainda não estiver definido, o candidato deve usar a Clave de Sol (𝄞)."
      },
      {
        "texto": "O exercício deve ser feito apenas como leitura rítmica, sem notas.",
        "correta": false,
        "feedback": "Embora a Leitura Rítmica seja um treino importante, se o exercício for de notas (Leitura Métrica/Solfejo), a clave deve ser definida para a leitura."
      },
      {
        "texto": "Não é necessário desenhar a clave, pois ela será adicionada pelo Instrutor.",
        "correta": false,
        "feedback": "O candidato deve desenhar a clave no início de cada pentagrama."
      }
    ]
  },
  {
    "id": "f04_q034",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Quais são as Fórmulas de Compasso em 2 que encontramos no hinário?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "2/2 e 4/4.",
        "correta": false,
        "feedback": "4/4 é uma fórmula quaternária (em 4), embora 2/2 possa ser representada como 𝄵."
      },
      {
        "texto": "2/4 e 2/8.",
        "correta": false,
        "feedback": "Apenas 2/4 e 2/2 são encontradas no hinário."
      },
      {
        "texto": "2/4 e 2/2.",
        "correta": true,
        "feedback": "No hinário, as Fórmulas de Compasso em 2 que encontramos são apenas 2/4 e 2/2."
      },
      {
        "texto": "6/4 e 6/8.",
        "correta": false,
        "feedback": "6/4 e 6/8 são fórmulas de compasso em 6 (binário composto)."
      }
    ]
  },
  {
    "id": "f04_q035",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "A Fórmula de Compasso 2/2, também representada por 𝄵 (C Cortado), determina que o compasso terá:",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "2 tempos, e a Semínima (𝅘𝅥) representará cada tempo ou movimento.",
        "correta": false,
        "feedback": "A Semínima (𝅘𝅥) representa o tempo na fórmula 2/4."
      },
      {
        "texto": "4 tempos, e a Semibreve (𝅝) representará cada tempo ou movimento.",
        "correta": false,
        "feedback": "O número superior 2 indica que o compasso tem 2 tempos."
      },
      {
        "texto": "2 tempos, e a Mínima (𝅗𝅥) representará cada tempo ou movimento.",
        "correta": true,
        "feedback": "O número inferior 2 indica que a Mínima (𝅗𝅥) (número de equivalência 2) representa cada tempo ou movimento."
      },
      {
        "texto": "2 pulsos, agrupados em um único tempo.",
        "correta": false,
        "feedback": "Trata-se de um compasso simples com 2 tempos."
      }
    ]
  },
  {
    "id": "f04_q036",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "A Fórmula de Compasso 2/4 determina que o compasso terá:",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "2 tempos, e a Semínima (𝅘𝅥) representará cada tempo ou movimento.",
        "correta": true,
        "feedback": "O número superior 2 indica 2 tempos, e o número inferior 4 indica que a Semínima (𝅘𝅥) representa cada tempo ou movimento."
      },
      {
        "texto": "4 tempos, e a Semínima (𝅘𝅥) representará cada tempo ou movimento.",
        "correta": false,
        "feedback": "O número superior 2 indica apenas 2 tempos."
      },
      {
        "texto": "2 tempos, e a Colcheia (𝅘𝅥𝅮) representará cada tempo ou movimento.",
        "correta": false,
        "feedback": "A Colcheia (𝅘𝅥𝅮) tem número de equivalência 8."
      },
      {
        "texto": "2 tempos, e a Mínima (𝅗𝅥) representará cada tempo ou movimento.",
        "correta": false,
        "feedback": "A Mínima (𝅗𝅥) representa o tempo na fórmula 2/2."
      }
    ]
  },
  {
    "id": "f04_q037",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual a finalidade da 'Janela de Movimento' nos Movimentos de Solfejo (como em 2, 3 ou 4)?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.7 Movimento de solfejo em 2",
      "pagina": 41
    },
    "opcoes": [
      {
        "texto": "Determinar a velocidade exata (bpm) de execução da música.",
        "correta": false,
        "feedback": "A velocidade é determinada pelo metrônomo e pela marcação no hinário."
      },
      {
        "texto": "Assegurar que os movimentos sejam expansivos e amplos, alcançando a linha dos olhos.",
        "correta": false,
        "feedback": "A janela de movimento delimita o espaço, e os movimentos não devem ser muito expansivos."
      },
      {
        "texto": "Limitar o espaço do movimento, evitando que os movimentos sejam muito pequenos ou muito expansivos.",
        "correta": true,
        "feedback": "A Janela de Movimento é a delimitação espacial, garantindo que os movimentos sejam contidos e visíveis, mas não excessivamente grandes."
      },
      {
        "texto": "Indicar qual clave deve ser usada para o solfejo.",
        "correta": false,
        "feedback": "A clave é determinada pelo instrumento do candidato ou pela Clave de Sol (𝄞)."
      }
    ]
  },
  {
    "id": "f04_q038",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "No Movimento de Solfejo em 2 (binário), qual a sequência correta dos movimentos?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.7 Movimento de solfejo em 2",
      "pagina": 41
    },
    "opcoes": [
      {
        "texto": "1º Movimento: para baixo (ponto 1); 2º Movimento: para cima (ponto 2).",
        "correta": true,
        "feedback": "O primeiro movimento inicia embaixo (1) e termina em cima (2). O segundo movimento inicia em cima (2) e termina embaixo (1)."
      },
      {
        "texto": "1º Movimento: para a esquerda; 2º Movimento: para a direita.",
        "correta": false,
        "feedback": "Este é um padrão de movimentos horizontais, não o movimento vertical do binário em 2."
      },
      {
        "texto": "1º Movimento: embaixo (ponto 1); 2º Movimento: à direita (ponto 3).",
        "correta": false,
        "feedback": "Estes são pontos do Movimento de Solfejo em 3 ou 4."
      },
      {
        "texto": "1º Movimento: para cima (ponto 2); 2º Movimento: para baixo (ponto 1).",
        "correta": false,
        "feedback": "O movimento deve começar no ponto 1 (embaixo) e subir para o ponto 2 (em cima)."
      }
    ]
  },
  {
    "id": "f04_q039",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Ao realizar exercícios de solfejo de notas do MSA, qual clave o candidato deve utilizar se ainda não tiver definido um instrumento musical?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.5 Movimento de solfejo em 3",
      "pagina": 37
    },
    "opcoes": [
      {
        "texto": "A Clave de Fá (𝄢), pois é a clave dos sons graves e mais fáceis.",
        "correta": false,
        "feedback": "Se o instrumento não estiver definido, o candidato deve utilizar a Clave de Sol (𝄞)."
      },
      {
        "texto": "A Clave de Dó (𝄡) na 3ª linha, que representa os sons médios.",
        "correta": false,
        "feedback": "Se o instrumento não estiver definido, o candidato deve utilizar a Clave de Sol (𝄞)."
      },
      {
        "texto": "A Clave de Sol (𝄞), pois ela é utilizada principalmente para sons agudos.",
        "correta": true,
        "feedback": "Caso o candidato não tenha definido o instrumento, a instrução é utilizar a Clave de Sol (𝄞) para os exercícios de solfejo de notas."
      },
      {
        "texto": "Qualquer clave, desde que mantenha a mesma durante todo o período.",
        "correta": false,
        "feedback": "Deve-se optar pela Clave de Sol (𝄞) se o instrumento não estiver definido."
      }
    ]
  },
  {
    "id": "f04_q040",
    "ativo": true,
    "dificuldade": "media",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual a regra geral para o candidato ao realizar exercícios de solfejo de notas (Leitura Métrica ou Solfejo) no MSA?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.5 Movimento de solfejo em 3",
      "pagina": 37
    },
    "opcoes": [
      {
        "texto": "Realizar a leitura apenas com a Clave de Sol (𝄞), independentemente do instrumento escolhido.",
        "correta": false,
        "feedback": "O candidato deve desenhar a clave do método do seu instrumento. Somente se o instrumento não estiver definido é que a Clave de Sol (𝄞) deve ser utilizada."
      },
      {
        "texto": "Desenhar no início de cada pentagrama a clave utilizada no método do seu instrumento (ou a Clave de Sol (𝄞) se não estiver definido).",
        "correta": true,
        "feedback": "O candidato deve desenhar a clave do seu instrumento (Clave de Sol (𝄞), Clave de Dó (𝄡) ou Clave de Fá (𝄢)) no início do pentagrama, ou usar a Clave de Sol (𝄞) se ainda não tiver escolhido o instrumento."
      },
      {
        "texto": "Apenas realizar a Leitura Rítmica, já que o Solfejo é opcional.",
        "correta": false,
        "feedback": "Ao encontrar exercícios de solfejo de notas, o candidato deve prepará-los com a clave correta para a leitura, seja ela métrica (obrigatória) ou solfejo (opcional)."
      },
      {
        "texto": "Usar sempre a Clave de Dó (𝄡), pois é a clave dos estudos preliminares.",
        "correta": false,
        "feedback": "A clave deve ser a do instrumento do candidato, ou a Clave de Sol (𝄞) por padrão, se não estiver definido."
      }
    ]
  },
  {
    "id": "f04_q041",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual a característica crucial que diferencia a Ligadura de Portamento da Ligadura de Valor?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.1 Ligadura",
      "pagina": 34
    },
    "opcoes": [
      {
        "texto": "A Ligadura de Portamento é sempre colocada abaixo das notas, enquanto a de Valor é sempre acima.",
        "correta": false,
        "feedback": "Ambos os tipos de ligadura podem ser colocados acima ou abaixo das notas."
      },
      {
        "texto": "A Ligadura de Portamento conecta notas de alturas diferentes, enquanto a de Valor conecta notas da mesma altura.",
        "correta": true,
        "feedback": "A Ligadura de Portamento é utilizada entre notas de alturas diferentes para ligar o som, e a de Valor é usada entre notas da mesma altura para prolongar o som."
      },
      {
        "texto": "A Ligadura de Portamento exige uma interrupção breve no som, e a de Valor exige continuidade.",
        "correta": false,
        "feedback": "Ambas indicam que o som deve ser estendido de uma nota para outra, sem interrupção."
      },
      {
        "texto": "A Ligadura de Portamento soma os valores das notas, e a de Valor subtrai os valores.",
        "correta": false,
        "feedback": "Apenas a Ligadura de Valor soma os valores das notas ligadas."
      }
    ]
  },
  {
    "id": "f04_q042",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "No contexto do MSA, a Ligadura de Valor pode ser colocada em notas de quais características?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.1 Ligadura",
      "pagina": 34
    },
    "opcoes": [
      {
        "texto": "Somente em notas de valores iguais.",
        "correta": false,
        "feedback": "A Ligadura de Valor pode ser colocada em notas de valores iguais ou diferentes, desde que tenham a mesma altura."
      },
      {
        "texto": "Somente em notas de valores diferentes.",
        "correta": false,
        "feedback": "A Ligadura de Valor pode ser colocada em notas de valores iguais ou diferentes, desde que tenham a mesma altura."
      },
      {
        "texto": "Em notas da mesma altura, sejam elas de valores iguais ou diferentes.",
        "correta": true,
        "feedback": "A Ligadura de Valor liga notas da mesma altura e pode ser usada em figuras de valores iguais ou diferentes."
      },
      {
        "texto": "Apenas entre figuras de som, nunca entre pausas.",
        "correta": false,
        "feedback": "A Ligadura de Valor é usada apenas para figuras de som, mas a questão não foca na restrição de pausas, mas sim nas notas ligadas."
      }
    ]
  },
  {
    "id": "f04_q043",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é o valor total de uma Mínima (𝅗𝅥) pontuada, expresso em Semínimas (𝅘𝅥)?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.2 Ponto de aumento",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Uma Semínima (𝅘𝅥) e meia.",
        "correta": false,
        "feedback": "A Mínima (𝅗𝅥) sozinha vale o equivalente a duas Semínimas (𝅘𝅥). Com o Ponto de Aumento (.), ela vale três Semínimas (𝅘𝅥)."
      },
      {
        "texto": "Duas Semínimas (𝅘𝅥).",
        "correta": false,
        "feedback": "Duas Semínimas (𝅘𝅥) equivalem apenas a uma Mínima (𝅗𝅥) simples."
      },
      {
        "texto": "Três Semínimas (𝅘𝅥).",
        "correta": true,
        "feedback": "A Mínima (𝅗𝅥) vale duas Semínimas (𝅘𝅥); o Ponto de Aumento (.) adiciona metade desse valor, ou seja, mais uma Semínima (𝅘𝅥). Total: 2 + 1 = 3 Semínimas (𝅘𝅥)."
      },
      {
        "texto": "Quatro Semínimas (𝅘𝅥).",
        "correta": false,
        "feedback": "Quatro Semínimas (𝅘𝅥) equivalem a uma Semibreve (𝅝)."
      }
    ]
  },
  {
    "id": "f04_q044",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Considerando o Ponto de aumento, qual figura de som ou silêncio tem seu valor total aumentado pela fração de 3/4 (três quartos) do seu valor original?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.2 Ponto de aumento",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Uma figura com um Ponto de Aumento (.).",
        "correta": false,
        "feedback": "Uma figura com um Ponto de Aumento (.) tem seu valor aumentado em 1/2 (metade)."
      },
      {
        "texto": "Uma figura com dois Pontos de Aumento (..).",
        "correta": true,
        "feedback": "O primeiro ponto adiciona 1/2 do valor e o segundo ponto adiciona 1/2 do primeiro ponto (ou 1/4 do valor da figura original). O aumento total é 1/2 + 1/4 = 3/4."
      },
      {
        "texto": "Uma figura ligada por Ligadura de Valor a outra figura de valor 1/4.",
        "correta": false,
        "feedback": "A Ligadura de Valor soma o valor total das figuras, não uma fração predefinida."
      },
      {
        "texto": "A Semibreve (𝅝) com Ponto de Aumento (.).",
        "correta": false,
        "feedback": "A Semibreve (𝅝) com Ponto de Aumento (.) tem seu valor aumentado em 1/2, totalizando 1 e 1/2."
      }
    ]
  },
  {
    "id": "f04_q045",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual a nomenclatura utilizada no MSA para se referir aos Intervalos em função da distância de altura entre dois sons?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.3 Intervalo",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Ritmos de Precisão.",
        "correta": false,
        "feedback": "Ritmos de Precisão referem-se à execução métrica e rítmica, não à distância de altura."
      },
      {
        "texto": "Saltos.",
        "correta": true,
        "feedback": "Os Intervalos são classificados pelo número de notas contidas neles e são também chamados de saltos."
      },
      {
        "texto": "Células Rítmicas.",
        "correta": false,
        "feedback": "Células Rítmicas são agrupamentos de figuras que formam padrões de ritmo."
      },
      {
        "texto": "Graus de Escala.",
        "correta": false,
        "feedback": "Graus de Escala são os nomes específicos dados às notas de uma escala (Tônica, Dominante, etc.)."
      }
    ]
  },
  {
    "id": "f04_q046",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é o menor Intervalo Composto, de acordo com a classificação por número de notas sucessivas?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.3 Intervalo",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Oitava (8ª).",
        "correta": false,
        "feedback": "A Oitava (8ª) é o maior Intervalo Simples, pois contém de duas a oito notas sucessivas (inclusive a primeira e a última)."
      },
      {
        "texto": "Sétima (7ª).",
        "correta": false,
        "feedback": "A Sétima (7ª) é um Intervalo Simples."
      },
      {
        "texto": "Nona (9ª).",
        "correta": true,
        "feedback": "Intervalos Compostos contêm acima de oito notas sucessivas. A Nona (9ª) é o primeiro intervalo que se encaixa nessa classificação."
      },
      {
        "texto": "Décima (10ª).",
        "correta": false,
        "feedback": "A Nona (9ª) é o menor Intervalo Composto."
      }
    ]
  },
  {
    "id": "f04_q047",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual instrumento é citado especificamente no MSA como o único, no contexto da Congregação, onde o Intervalo Harmônico (notas simultâneas) é mais evidente?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.3 Intervalo",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "Violino (Cordas).",
        "correta": false,
        "feedback": "O violino geralmente executa a melodia (Intervalos Melódicos), embora possa tocar mais de uma corda, o órgão eletrônico é o instrumento de harmonia citado."
      },
      {
        "texto": "Trompete (Metais).",
        "correta": false,
        "feedback": "O trompete geralmente executa vozes melódicas (Soprano ou Contralto)."
      },
      {
        "texto": "Órgão Eletrônico (Teclados).",
        "correta": true,
        "feedback": "O Órgão Eletrônico é o único instrumento harmônico mencionado explicitamente no tópico sobre Intervalo Harmônico."
      },
      {
        "texto": "Clarinete Sib (Madeiras).",
        "correta": false,
        "feedback": "O clarinete é um instrumento de melodia, e não um instrumento primário de harmonia como o órgão."
      }
    ]
  },
  {
    "id": "f04_q048",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Na Fórmula de Compasso 3/2, quantos tempos ou movimentos vale a Mínima (𝅗𝅥)?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.4 Fórmula de compasso em 3",
      "pagina": 36
    },
    "opcoes": [
      {
        "texto": "Três tempos ou movimentos.",
        "correta": false,
        "feedback": "Três tempos é o valor total do compasso, não o valor da Mínima (𝅗𝅥)."
      },
      {
        "texto": "Dois tempos ou movimentos.",
        "correta": false,
        "feedback": "A Mínima (𝅗𝅥) teria dois tempos se a Fórmula fosse 4/2 e a U.T. fosse a Mínima (𝅗𝅥)."
      },
      {
        "texto": "Um tempo ou movimento.",
        "correta": true,
        "feedback": "Na Fórmula de Compasso 3/2, o número inferior 2 indica que a Mínima (𝅗𝅥) representa a Unidade de Tempo (U.T.), valendo, portanto, um tempo ou movimento."
      },
      {
        "texto": "Meio tempo ou movimento.",
        "correta": false,
        "feedback": "Meio tempo seria o valor da Semínima (𝅘𝅥) em um compasso 3/2."
      }
    ]
  },
  {
    "id": "f04_q049",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Quantas Semínimas (𝅘𝅥) cabem, no total, em um compasso na Fórmula de Compasso 3/2?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.4 Fórmula de compasso em 3",
      "pagina": 36
    },
    "opcoes": [
      {
        "texto": "Três Semínimas (𝅘𝅥).",
        "correta": false,
        "feedback": "Três Semínimas (𝅘𝅥) cabem em um compasso 3/4."
      },
      {
        "texto": "Seis Semínimas (𝅘𝅥).",
        "correta": true,
        "feedback": "O compasso 3/2 tem 3 tempos, e a Mínima (𝅗𝅥) é a U.T. Como cada Mínima (𝅗𝅥) equivale a duas Semínimas (𝅘𝅥), o total é 3 x 2 = 6 Semínimas (𝅘𝅥)."
      },
      {
        "texto": "Quatro Semínimas (𝅘𝅥).",
        "correta": false,
        "feedback": "Quatro Semínimas (𝅘𝅥) cabem em um compasso 4/4 ou 2/2."
      },
      {
        "texto": "Duas Semínimas (𝅘𝅥).",
        "correta": false,
        "feedback": "Duas Semínimas (𝅘𝅥) equivalem a apenas um tempo em 4/4."
      }
    ]
  },
  {
  "id": "f04_q050",
  "ativo": true,
  "dificuldade": "dificil",
  "pontos": 15,
  "tipo": "texto",
  "pergunta": "Para um candidato destro, qual é a sequência correta de movimento de um ponto ao seguinte no Solfejo em 3?",
  "imagemUrl": null,
  "audioUrl": null,
  "referencia": {
    "livro": "MSA",
    "periodo": 2,
    "fase": 4,
    "item": "4.5 Movimento de solfejo em 3",
    "pagina": 37
  },
  "opcoes": [
    {
      "texto": "1º: Baixo (1) para Esquerda (2); 2º: Esquerda (2) para Cima (3).",
      "correta": false,
      "feedback": "Atenção: Para um candidato DESTRO, o movimento 2 deve ser para fora (direita). O movimento para a esquerda seria correto apenas para canhotos."
    },
    {
      "texto": "1º: Baixo (1) para Direita (2); 2º: Direita (2) para Cima (3); 3º: Cima (3) para Baixo (1).",
      "correta": true,
      "feedback": "No movimento em 3 para destros, o gesto 2 é de abertura (para a direita/fora) e o gesto 3 é para cima."
    },
    {
      "texto": "1º: Baixo (1) para Cima (2); 2º: Cima (2) para Baixo (1).",
      "correta": false,
      "feedback": "Esta sequência descreve o Movimento de Solfejo em 2 tempos, não em 3."
    },
    {
      "texto": "1º: Baixo (1) para Direita (3); 2º: Direita (3) para Esquerda (2); 3º: Esquerda (2) para Baixo (1).",
      "correta": false,
      "feedback": "A sequência está incorreta. No padrão ternário, não cruzamos para a esquerda no tempo 2 (se destro) e a contagem dos pontos segue a ordem 1-2-3."
    }
  ]
  },
  {
    "id": "f04_q051",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual a orientação crucial para o candidato que já definiu seu instrumento e método, ao iniciar os exercícios de solfejo de notas no MSA?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.5 Movimento de solfejo em 3",
      "pagina": 37
    },
    "opcoes": [
      {
        "texto": "Ele deve utilizar, obrigatoriamente, a Clave de Sol (𝄞) e apenas estudá-la.",
        "correta": false,
        "feedback": "O candidato deve desenhar a clave utilizada no método do seu instrumento. A Clave de Sol (𝄞) é apenas a opção para quem ainda não definiu o instrumento."
      },
      {
        "texto": "Deve desenhar a clave utilizada no método do seu instrumento e adquirir domínio e fluência nessa clave antes de iniciar os estudos das demais claves do hinário.",
        "correta": true,
        "feedback": "É essencial iniciar na clave do instrumento para adquirir domínio e fluência, e somente depois aprender as demais claves (voz principal ou alternativa)."
      },
      {
        "texto": "Deve ignorar a clave do instrumento e treinar o solfejo nas três claves (𝄞, 𝄡, 𝄢) simultaneamente.",
        "correta": false,
        "feedback": "A prioridade é a clave do instrumento, para adquirir domínio satisfatório."
      },
      {
        "texto": "Deve realizar apenas a leitura rítmica com a sílaba 'TA', pois o solfejo é sempre opcional.",
        "correta": false,
        "feedback": "A Leitura Métrica (falar o nome das notas) é obrigatória nesses exercícios. O Solfejo (cantar na altura) é opcional."
      }
    ]
  },
  {
    "id": "f04_q052",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "O símbolo 𝄵 (C Cortado) é a representação alternativa para qual Fórmula de Compasso encontrada no hinário?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "2/4.",
        "correta": false,
        "feedback": "O símbolo 𝄵 representa 2/2. O compasso 4/4 é representado por C."
      },
      {
        "texto": "4/4 (Compasso Comum).",
        "correta": false,
        "feedback": "O símbolo para 4/4 é C, e para 2/2 é 𝄵 (C Cortado)."
      },
      {
        "texto": "2/2 (Composto Binário).",
        "correta": true,
        "feedback": "Os compassos 2/2 são também representados por 𝄵 (C Cortado)."
      },
      {
        "texto": "6/8 (Composto Ternário).",
        "correta": false,
        "feedback": "6/8 é um compasso composto, não binário simples representado por 𝄵."
      }
    ]
  },
  {
    "id": "f04_q053",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Na Fórmula de Compasso 2/4, quantas Colcheias (𝅘𝅥𝅮) cabem em um compasso completo?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "Duas Colcheias (𝅘𝅥𝅮).",
        "correta": false,
        "feedback": "Duas Colcheias (𝅘𝅥𝅮) equivalem a apenas um tempo em 2/4."
      },
      {
        "texto": "Quatro Colcheias (𝅘𝅥𝅮).",
        "correta": true,
        "feedback": "No compasso 2/4, a Semínima (𝅘𝅥) é a U.T. (1 tempo). Como cada Semínima (𝅘𝅥) equivale a duas Colcheias (𝅘𝅥𝅮), e há 2 tempos, cabem 4 Colcheias (𝅘𝅥𝅮) no total."
      },
      {
        "texto": "Oito Colcheias (𝅘𝅥𝅮).",
        "correta": false,
        "feedback": "Oito Colcheias (𝅘𝅥𝅮) preencheriam um compasso 4/4."
      },
      {
        "texto": "Uma Colcheia (𝅘𝅥𝅮) e um Ponto de Aumento (.).",
        "correta": false,
        "feedback": "Isto não representa o valor total de um compasso 2/4."
      }
    ]
  },
  {
    "id": "f04_q054",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Quantas Semínimas (𝅘𝅥) cabem em um compasso na Fórmula de Compasso 2/2 (𝄵)?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "Duas Semínimas (𝅘𝅥).",
        "correta": false,
        "feedback": "Duas Semínimas (𝅘𝅥) equivalem a apenas uma Mínima (𝅗𝅥), que é um tempo em 2/2."
      },
      {
        "texto": "Três Semínimas (𝅘𝅥).",
        "correta": false,
        "feedback": "Três Semínimas (𝅘𝅥) cabem em um compasso 3/4, ou em 3/2 se for uma Mínima (𝅗𝅥) pontuada."
      },
      {
        "texto": "Quatro Semínimas (𝅘𝅥).",
        "correta": true,
        "feedback": "O compasso 2/2 tem 2 tempos, e a Mínima (𝅗𝅥) é a U.T. (1 tempo). Como cada Mínima (𝅗𝅥) equivale a duas Semínimas (𝅘𝅥), o total é 2 x 2 = 4 Semínimas (𝅘𝅥)."
      },
      {
        "texto": "Uma Semibreve (𝅝).",
        "correta": false,
        "feedback": "A Semibreve (𝅝) tem o mesmo valor total do compasso, mas a questão pede o valor em Semínimas (𝅘𝅥)."
      }
    ]
  },
  {
    "id": "f04_q055",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é um dos lembretes mais importantes no Movimento de Solfejo em 2 que visa manter a estabilidade do gesto?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.7 Movimento de solfejo em 2",
      "pagina": 41
    },
    "opcoes": [
      {
        "texto": "Fazer movimentos circulares para fora da janela de movimento.",
        "correta": false,
        "feedback": "O movimento em 2 é reto (vertical) e deve ser contido na janela de movimento."
      },
      {
        "texto": "A mão, o objeto ou o equipamento utilizado deve ser movimentado de baixo para cima, em um movimento reto, preciso e constante, sem curvas.",
        "correta": true,
        "feedback": "A instrução enfatiza a precisão do movimento reto, constante e sem curvas, fundamental para manter a pulsação regular."
      },
      {
        "texto": "Movimentar apenas o pulso e não o braço.",
        "correta": false,
        "feedback": "O lembrete fundamental é movimentar apenas o braço (e não o pulso)."
      },
      {
        "texto": "Realizar a preparação com a mão na linha dos olhos.",
        "correta": false,
        "feedback": "A preparação é feita na altura do peito, e a mão não deve subir além da linha dos olhos durante o movimento."
      }
    ]
  },
  {
    "id": "f04_q056",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Quais são os pontos numerados que definem o Movimento de Solfejo em 2, iniciando e terminando o movimento no ponto de número 1?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.7 Movimento de solfejo em 2",
      "pagina": 41
    },
    "opcoes": [
      {
        "texto": "Pontos 1, 2, 3 e 4.",
        "correta": false,
        "feedback": "Estes são os pontos utilizados no Movimento de Solfejo em 4."
      },
      {
        "texto": "Pontos 1, 2 e 3.",
        "correta": false,
        "feedback": "Estes são os pontos utilizados no Movimento de Solfejo em 3."
      },
      {
        "texto": "Ponto 1 (embaixo) e Ponto 2 (em cima).",
        "correta": true,
        "feedback": "O Movimento de Solfejo em 2 utiliza dois pontos principais: 1 (embaixo) e 2 (em cima), em um padrão vertical."
      },
      {
        "texto": "Apenas o Ponto 1.",
        "correta": false,
        "feedback": "Apenas o Ponto 1 é o início/fim, mas o ponto 2 é necessário para a conclusão do primeiro movimento e início do segundo."
      }
    ]
  },
  {
    "id": "f04_q057",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual aspecto o candidato deve observar rigorosamente ao executar os exercícios de Leitura Rítmica que contêm Semínimas (𝅘𝅥) pontuadas e Colcheias (𝅘𝅥𝅮) subsequentes?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.7 Movimento de solfejo em 2",
      "pagina": 41
    },
    "opcoes": [
      {
        "texto": "Manter um andamento constante e regular, e observar a articulação das células rítmicas.",
        "correta": true,
        "feedback": "É fundamental observar a articulação das células rítmicas e manter um andamento constante e regular para a execução correta dos ritmos pontuados."
      },
      {
        "texto": "Aumentar a velocidade para acima do limite máximo (bpm) para treinar a fluência.",
        "correta": false,
        "feedback": "A velocidade deve ser mantida dentro dos limites mínimo e máximo estipulados, e a prioridade é a regularidade."
      },
      {
        "texto": "Utilizar a respiração durante a execução das figuras longas para garantir o som prolongado.",
        "correta": false,
        "feedback": "Não se deve respirar durante a execução da nota, pois isso cortaria o som. A respiração deve ocorrer quando necessário, fora da execução da figura."
      },
      {
        "texto": "Solfejar sempre na Clave de Dó (𝄡) para garantir a precisão no registro médio.",
        "correta": false,
        "feedback": "A clave depende do instrumento do candidato. A prioridade é a precisão rítmica e a regularidade do andamento."
      }
    ]
  },
  {
    "id": "f04_q058",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual sinal, se aplicado a uma Semínima (𝅘𝅥), faria com que sua duração total fosse exatamente equivalente a uma Semínima (𝅘𝅥) ligada a uma Colcheia (𝅘𝅥𝅮)?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.2 Ponto de aumento",
      "pagina": 35
    },
    "opcoes": [
      {
        "texto": "O Sustenido (♯), alterando sua altura.",
        "correta": false,
        "feedback": "O Sustenido (♯) altera a altura da nota, não a sua duração."
      },
      {
        "texto": "O Ponto de Aumento (.), prolongando seu valor pela metade.",
        "correta": true,
        "feedback": "Uma Semínima (𝅘𝅥) pontuada ganha metade do seu valor (uma Colcheia (𝅘𝅥𝅮)), totalizando o valor de uma Semínima (𝅘𝅥) mais uma Colcheia (𝅘𝅥𝅮)."
      },
      {
        "texto": "A Fermata (𝄐), pois prolonga o valor indefinidamente.",
        "correta": false,
        "feedback": "A Fermata (𝄐) prolonga o valor, mas de forma indefinida, e não exatamente pelo valor de uma Colcheia (𝅘𝅥𝅮)."
      },
      {
        "texto": "O Dobrado Sustenido (𝄪), aumentando dois semitons.",
        "correta": false,
        "feedback": "O Dobrado Sustenido (𝄪) altera a altura, não a duração."
      }
    ]
  },
  {
    "id": "f04_q059",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é a definição completa da Fórmula de Compasso 'em 3'?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.4 Fórmula de compasso em 3",
      "pagina": 36
    },
    "opcoes": [
      {
        "texto": "É aquela em que o número superior é 3 e o número inferior indica a figura musical que representa o compasso inteiro.",
        "correta": false,
        "feedback": "O número inferior indica a figura que representa cada tempo ou movimento, e não o compasso inteiro."
      },
      {
        "texto": "É aquela em que o número inferior é 3 e o número superior indica a figura musical que representa cada tempo.",
        "correta": false,
        "feedback": "O número superior indica a quantidade de tempos, e o número inferior indica a figura (U.T.)."
      },
      {
        "texto": "É aquela em que o número superior tem o número 3 e o número inferior indica a figura musical que representa cada tempo ou movimento.",
        "correta": true,
        "feedback": "O número superior indica a quantidade de tempos (3), e o inferior indica a figura que representa cada um desses tempos (U.T.)."
      },
      {
        "texto": "É aquela que possui 3 pulsos, sendo obrigatoriamente um compasso composto (ternário composto).",
        "correta": false,
        "feedback": "O compasso 'em 3' (ex: 3/4) é um compasso simples ternário."
      }
    ]
  },
  {
    "id": "f04_q060",
    "ativo": true,
    "dificuldade": "dificil",
    "pontos": 15,
    "tipo": "texto",
    "pergunta": "Qual é a definição completa da Fórmula de Compasso 'em 2'?",
    "imagemUrl": null,
    "audioUrl": null,
    "referencia": {
      "livro": "MSA",
      "periodo": 2,
      "fase": 4,
      "item": "4.6 Fórmula de compasso em 2",
      "pagina": 40
    },
    "opcoes": [
      {
        "texto": "É aquela em que o número superior tem o número 2 e o número inferior indica a figura musical que representa cada tempo ou movimento.",
        "correta": true,
        "feedback": "O número superior indica a quantidade de tempos (2), e o inferior indica a figura que representa cada um desses tempos (U.T.)."
      },
      {
        "texto": "É aquela em que o número inferior é 2 e o número superior é o 4 (como 4/2).",
        "correta": false,
        "feedback": "O número superior deve ser 2. 4/2 é uma fórmula quaternária."
      },
      {
        "texto": "É aquela em que o número superior é 4 e o compasso é representado pelo símbolo C (Compasso Comum).",
        "correta": false,
        "feedback": "A Fórmula de Compasso em 4 é aquela com número superior 4 (ex: 4/4 ou C)."
      },
      {
        "texto": "É aquela que possui 2 pulsos, sendo obrigatoriamente um compasso composto (binário composto).",
        "correta": false,
        "feedback": "A Fórmula de Compasso 'em 2' refere-se ao compasso simples binário (ex: 2/4, 2/2)."
      }
    ]
  }
]

)