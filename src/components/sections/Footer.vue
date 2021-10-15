<template>
  <div class='full-width q-py-xl bg-dark text-purple-1'>
    <footer class='row justify-evenly align-center'>
      <div class='col text-center'>
        <p class='text-h5 q-pa-xs'>
          Contato
        </p>
        <p> Telefone 1 </p>
        <p> Telefone 2 </p>
        <p> E-mail </p>
        <div class='row justify-evenly align-center'>
          <div class='col'>
            <q-btn color="green-7" flat>
              <q-icon name='facebook' color="purple-2" />
            </q-btn>
          </div>
          <div class='col'>
            <q-btn color="green-7" flat>
              <q-icon name='instagram' color="purple-2" />
            </q-btn>
          </div>
          <div class='col'>
            <q-btn color="green-7" flat>
              <q-icon name='whatsapp' color="purple-2" />
            </q-btn>
          </div>
        </div>
      </div>
      <div class='col text-center'>
        <p class='text-h5'>
          Atendimento
        </p>  
        <p>
          Av. Lugar Nenhum, 123 - Ilha Solteira - SP
        </p>
        <p>
          - das 08:00 ás 12:00, de segunda à sexta-feira
        </p>
      </div>
      <div class='col text-center'>
        <p class='text-h5'>
          Mais informações
        </p>
        <q-btn flat color='purple-1'> A imobiliária </q-btn>
        <q-btn flat color='purple-1'> Trabalhe conosco </q-btn>
        <q-btn flat color='purple-1'> Anuncie seu imóvel </q-btn>

      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  setup () {
    return {}
  }
}
</script>
