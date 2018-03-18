<template>
  <div>
    <template v-if="persona">
      <div class="row justify-content-center">
        <div class="col-4">
          <div class="card" style="width: 18rem;" align="center">
            <img class="card-img-top" :src="datosPersona.foto" alt="Card image cap">
            <div class="card-body">
              <h5 class="card-title" v-text="datosPersona.nombre"></h5>
              <h6 v-text="datosPersona.correoe"></h6>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
        <div class="col-2" align="left">
          <ul class="list-group">
            <li class="list-group-item active">INFORMACION</li>
            <li class="list-group-item"> <span>Genero: {{datosPersona.genero}} </span></li>
            <li class="list-group-item">Calle: {{datosPersona.calle}} </li>
            <li class="list-group-item">Ciudad: {{datosPersona.ciudad}}</li>
            <li class="list-group-item">Estado: {{datosPersona.estado}} </li>
            <li class="list-group-item">Codigo Postal: {{datosPersona.codigoPostal}} </li>
            <li class="list-group-item">Telefono: {{datosPersona.codigoPostal}} </li>
            <li class="list-group-item">Celular: {{datosPersona.celular}}</li>
          </ul>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
  import axios from 'axios';
  export default {
    mounted(){
      axios.get('https://randomuser.me/api/')
          .then((respuesta) => {
            this.persona = respuesta.data.results[0];
            console.log(this.persona);
          })
    },
    data(){
      return {
        persona: null,
      }
    },
    computed: {
      datosPersona(){
        return {
          nombre: `${this.persona.name.first} ${this.persona.name.last}`,
          foto: this.persona.picture.large,
          correoe: this.persona.email,
          genero: this.persona.gender,
          calle: this.persona.location.street,
          ciudad: this.persona.location.city,
          estado: this.persona.location.state,
          codigoPostal: this.persona.location.postcode,
          telefono: this.persona.phone,
          celular: this.persona.cell,
        }
      }
    }
  }
</script>
<style></style>
