// Dados para o gráfico de barras
var data = {
    labels: ['Estração de Pedra,Argila e Areia', 'Produção florestal-florestas nativas', 'Cultivo de soja',"Atividade de apoio a agricultura","Fabricação de produtos cerâmicos refratários","Produção florestal-florestas plantadas","Criação de bovinos","Fabricação de bovinos e derivados","Fabricação de artefatos de couro não especificado"],
    datasets: [{
      label: 'Setores Econômicos mais frequentemente Envolvidos ',
      data: [139, 125, 102,11,9,4,3,3,1],
      backgroundColor: '#FF6347',
      borderColor: '#FF6347', 
      borderWidth: 1 
    }]
  };
  
  var options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  var ctx = document.getElementById('grafico1').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 

  /////////////// Grafico 2 //////////////////////
var data = {
    labels: ['Trabalhador volante da agricultura', 'Trabalhador da exploração de Canauba', 'Cortador de Pedras',"Trabalho Agropecuário","Trabalhador da Pecuária","Destroçador de Pedra","Trabalhador da Cultura da cana-açucar","Servente de obras","Outros"],
    datasets: [{
      label: 'Ocupações - Resgatados Naturais da UF',
      data: [122, 107, 77,65,54,31,25,24,141],
      backgroundColor: '#FF6347',
      borderColor: '#FF6347', 
      borderWidth: 1 
    },{
      label: 'Ocupações - Resgatados Residentes na UF',
      data: [105,97, 80,68,39,31,26,24,120],
      backgroundColor: '#B8860B',
      borderColor: '#B8860B', 
      borderWidth: 1 
    }]
  };
  
  var options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  var ctx = document.getElementById('grafico2').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 

/////////////// Grafico 4 //////////////////////

var data = {
    labels: ['PARDA', 'PRETA', 'BRANCA'],
    datasets: [{
      label: 'Raça - Resgatados Naturais da UF',
      data: [488, 79, 76],
      backgroundColor: '#FF6347',
      borderColor: '#FF6347', 
      borderWidth: 1 
    },{
      label: 'Raça - Resgatados Residentes na UF',
      data: [456, 74, 57],
      backgroundColor: '#B8860B',
      borderColor: '#B8860B', 
      borderWidth: 1 
    }]
  };
  
  var options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  var ctx = document.getElementById('grafico4').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 


/////////////// Grafico 6 //////////////////////

var data = {
    labels: ['ATÉ 5º ANO INCOMPLETO', '6º AO 9º ANO INCOMPLETO',"FUNDAMENTAL COMPLETO",'ENSINO MEDIO COMPLETO',"ANALFABETO",'ENSINO MEDIO  INCOMPLETO',"5º ANO COMPLETO"],
    datasets: [{
      label: 'Escolaridade - Resgatados Naturais da UF',
      data: [177,122,92,85,64,58,47],
      backgroundColor: '#FF6347',
      borderColor: '#FF6347', 
      borderWidth: 1 
    },{
      label: 'Escolaridade - Resgatados Residentes na UF',
      data: [170,105,76,66,64,53,53],
      backgroundColor: '#B8860B',
      borderColor: '#B8860B', 
      borderWidth: 1 
    }]
  };
  
  var options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  var ctx = document.getElementById('grafico6').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 

  
  /////////////// Grafico 8 //////////////////////
  var data = {
    labels: ['>60', '55-59', '50-54', "45-49", "40-44", "35-39", "30-34", "25-29", "18-24", "<18"],
    datasets: [{
      label: 'Perfil Etário e de Sexo - Resgatados Naturais da UF',
      data: [8, 18, 29, 46, 70, 89, 97, 102,149,14],
      backgroundColor: '#FF6347',
      borderColor: '#FF6347', 
      borderWidth: 1 
    },{
      label: 'Perfil Etário e de Sexo - Resgatados Residentes na UF',
      data: [4, 13, 31, 41, 67, 82, 90, 94,143,17],
      backgroundColor: '#B8860B',
      borderColor: '#B8860B', 
      borderWidth: 1 
    }]
  };
  
  var options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  var ctx = document.getElementById('grafico8').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 
 
  /////////////// Grafico 10 //////////////////////
  var data = {
    labels: ['>60', '55-59', '50-54', "45-49", "40-44", "35-39", "30-34", "25-29", "18-24", "<18"],
    datasets: [{
      label: 'Perfil Etário e de Sexo - Resgatados Naturais na UF',
      data: [0,4, 5, 3, 4, 4, 4, 2],
      backgroundColor: '#FF6347',
      borderColor: '#FF6347', 
      borderWidth: 1 
    },{
      label: 'Perfil Etário e de Sexo - Resgatados Residentes na UF',
      data: [0,0,0,2, 1, 1, 1, 3],
      backgroundColor: '#B8860B',
      borderColor: '#B8860B' , 
      borderWidth: 1 
    }]
  };
  
  var options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };
  
  var ctx = document.getElementById('grafico10').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  }); 
