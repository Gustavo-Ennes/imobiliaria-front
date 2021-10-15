<template>
  <div class='full-width bg-dark text-purple-1'>
    <div class='row items-center justify-evenly q-gutter-xs'>
      <div class='col-3 text-center'>
        <q-img alt="Imobiliaria" src="img/logo.png" fit='cover' width='50px'/>
      </div>
      <div class='col'>
        <p class='q-pa-md text-left'>
          {{ about }}. CRECI: {{ creci }}<br />
          {{ servicesList }}
        </p>
      </div>
      <div class='col self-center text-center'>
        <q-img alt="ennes.dev" 
        src="https://storage.googleapis.com/ennes/imobiliaria/ennes%20dev-logos_black.png" 
        fit='cover'
        width='120px'/>
        <p class='text-center'>        
         CRIADO POR <a href='https://ennes.dev' class='text-purple-1'>ENNES.DEV</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Institucional",
  

  data(){
    return {
      about: `
        Imobiliária Ennes.Dev: os melhores imóveis de São Paulo
      `,
      creci: 'A9823',
      servicesList: `
        Venda e locação de casas e apartamentos, terrenos,  sítios e fazendas.
      `
    }
  }


}
</script>

<style>

</style>