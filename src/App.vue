<template>
  <v-app color="deep-purple" dark >
    <v-main>

      <v-app-bar
      color="black"
      dark
    >

      <v-toolbar-title style="margin-left: 30px">Hotel D,lido</v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- nombre de la sesión -->
      <div v-if="token">
        <h3 style="color: green">Hola, {{usuario}}</h3>
      </div>
      <v-menu
        bottom
        left
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            color="yellow"
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list v-if="token">
          <v-list-item>
            <v-list-item-title>
              <v-btn >
                Cuenta
              </v-btn>
            </v-list-item-title>
            <v-list-item-title>
              <v-btn @click="toggle()">
                Logout
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <template v-slot:extension>
        <v-tabs align-with-title>
          <v-tab>
            <v-btn text to="/">
              Inicio
            </v-btn>
          </v-tab>
          <v-tab>
            <v-btn text @click="habitacion()">
              Habitaciones
            </v-btn>
          </v-tab>
          <v-tab>
            <v-btn text>
              Reservas
            </v-btn>
          </v-tab>
          <v-tab v-if="!token">
            <v-btn text to="/login">
              Inicio sesión
            </v-btn>
          </v-tab>
          <v-tab v-if="!token">
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }">
                <v-btn
                  text
                  dark
                  v-bind="attrs"
                  v-on="on"
                >
                  Registrar
                </v-btn>
              </template>
              <v-list>
                <v-list-item>
                  <v-list-item-title>
                    <v-btn text to="persona">
                      Persona
                    </v-btn>
                  </v-list-item-title>
                  <v-list-item-title>
                    <v-btn text to="/juridica">
                      Empresa
                    </v-btn>
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
     
      <router-view />

      <v-footer
        style="margin-top: 50px"
        dark
        color="black"
        padless
        id="margenTexto"
      >
        <v-card
          flat
          tile
          color="black"
          text-color="white"
          class="white--text text-center"
          id="margen"
        >
        <!-- <v-container>
          <v-row justify="center">
            <v-col md="6"></v-col>
          </v-row>
        </v-container> -->
          <v-card-text>
            <v-btn
              v-for="icon in icons"
              :key="icon"
              class="mx-4 white--text"
              icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="pt-0" style="color: white">
            <v-container>
              <v-row justify="center">
                <v-col md="3">
                  <center><h2 id="margenTexto"><strong>Historia del hotel</strong></h2></center>
                  <center id="margenTexto">
                    Phasellus feugiat arcu sapien, et iaculis ipsum 
                    elementum sit amet. Mauris cursus commodo interdum. 
                    Praesent ut risus eget metus luctus accumsan id ultrices 
                    nunc. Sed at orci sed massa consectetur dignissim a 
                    sit amet dui. Duis commodo vitae velit et faucibus. 
                    Morbi vehicula lacinia malesuada. Nulla placerat augue 
                    vel ipsum ultrices, cursus iaculis dui sollicitudin. 
                    Vestibulum eu ipsum vel diam elementum tempor vel ut orci. 
                    Orci varius natoque penatibus et magnis dis parturient 
                    montes, nascetur ridiculus mus.
                  </center>
                </v-col>
                <v-col md="3">
                  <center><h2 id="margenTexto" style="margin-left: 40px"><strong>Dirección</strong></h2></center>
                  <div id="margenTexto">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.130553198947!2d-86.33806768587279!3d12.1032138366126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f71547843ff8c65%3A0xeb8d4cc1b713e9b0!2sAuto%20Hotel%20Las%20Brisas!5e0!3m2!1ses!2sni!4v1649039649100!5m2!1ses!2sni"
                      width="300"
                      height="250"
                      style="border: 0"
                      allowfullscreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </v-col>
                <v-col md="3">
                  <center><h2 id="margenTexto" style="margin-left: 90px"><strong>Datos de contacto</strong></h2></center>
                  
                  <div style="margin-left: 90px">
                    <center><h3 id="margenTexto">Dirección</h3></center>
                    <p style="margin-top:20px">Racachaca 1 al lago, por el arbolito del bolo.</p>
                  </div>

                  <div style="margin-left: 90px">
                    <center><h3 id="margenTexto">Teléfono</h3></center>
                    <p style="margin-top:20px">888888888</p>
                  </div>

                  <div style="margin-left: 90px">
                    <center><h3 id="margenTexto">Correo</h3></center>
                    <p style="margin-top:20px">HotelLido@gmail.com</p>
                  </div>
                  
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-text class="white--text" style="color: white">
            {{ new Date().getFullYear() }} — <strong>© Hotel Lido.</strong>
            
          </v-card-text>
        </v-card>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
      token: "",
      usuario: "",
  }),

  created() {
    this.cuenta();
  },

  methods: {
    habitacion(){
      window.localStorage.setItem("categoriaHab", 0)
      location.replace("/Habitaciones")
    },
    cuenta: async function(){
      this.token = window.sessionStorage.getItem("authToken");
      this.usuario = window.sessionStorage.getItem('usuario')
    },
    toggle: async function(){
      var logout = confirm("¿Estas seguro de salir?")

      if (logout == true) {
        window.sessionStorage.clear();
        location.reload();
      } else {
        alert("¡Puedes seguir navegando :)!")
      }
    }
  },
  
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>

<style scoped>
#margen {
  margin-left: 40px;
}
#margenTexto {
  margin-top: 20px;
}
#user {
  margin-top: 10px;
}
</style>
