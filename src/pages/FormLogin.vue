<template>
  <q-page class="bg-image window-height window-width row justify-center items-center">
    <div class="col-6 q-px-md">
      <div class="row justify-center items-center">
        <q-card square bordered class="q-pa-lg shadow-9">
          <q-card-section>
          <h5 class="text-h5 text-indigo-10 q-my-md text-center">Iniciar Sesion</h5>
          <p class="text-grey-6 text-center">Introduzca sus datos correctos para acceder</p>
            <q-form class="q-gutter-md" @submit.prevent="iniciarSesion">
              <q-input square filled  v-model="usuario" type="email" label="Usuario" />
              <q-input square filled  v-model="clave" type="password" label="Contraseña" />
            </q-form>
          </q-card-section>
          <q-card-actions class="q-px-md">
            <q-btn @click="iniciarSesion" color="indigo-6" size="lg" class="full-width" label="Entrar " />
          </q-card-actions>
          <q-input  v-model="people" type="text" />
        </q-card>
      </div>
    </div>

    <div class="col-6">
      <q-img src="../assets/fondo02.svg" class="loog">
        <p class="text-h5 text-grey-1 text-center absolute-center">Gobierno Regional de Puno</p>
      </q-img>
    </div>
        
    
  </q-page>
</template>

<script>
import {api} from 'src/boot/axios';
export default {
  name: 'Login',
  data () {
    return {
      usuario: '',
      clave: '',
      people: ''
    }
  },
	methods: {
		async iniciarSesion()
		{
			var payload = {
				username: this.usuario,
				password: this.clave
			};
			await api.post('/api/login/', payload)
			.then(response => {
        console.log(response);

        api.defaults.headers.common['Authorization'] = 'Token ' + response.data.token;

        
        api.get('/api/user/')
        .then(response => {
            this.people = response.data.email;
            console.log(response);
        }).catch(error => {
					  console.log(error);
			    });

			}).catch(error => {
					console.log(error);
          
          this.people = "credenciales incorrectas";
			});

		}
	}
}
</script>

<style>
.q-card {
  width: 360px;
}
.bg-image {
  background-image: url("../assets/fondo.svg");
  background-repeat: no-repeat;
  background-size: cover; 
  background-attachment: fixed;
  margin-top: 0px;  
}
.loog{
  width: 500px;
}


</style>