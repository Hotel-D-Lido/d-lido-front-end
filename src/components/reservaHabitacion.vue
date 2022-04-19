<template>
<v-container>
    <v-row justify="center">
        <v-col md="12">
            <center><h1 id="margen">Información de habitación</h1></center>
        </v-col>
        <v-col md="5" style="margin-left: 160px; color: green">
            <h4>Precio de habitación:   <strong>{{habitacion[0].precioHab}}$</strong></h4>
        </v-col>
        <v-col md="5" style="color: green">
            <h4>Nombre de habitación:   <strong>{{habitacion[0].nombreHab}}</strong></h4>
        </v-col>

        <center><h1 style="margin-top: 40px">Información de reserva</h1></center>
  <v-card
    class="mx-auto"
    max-width="1000"
    outlined
    id="margen"
  >
    <v-form v-model="valid" lazy-validation>
        <v-container>
            <v-row 
                no-gutters
                justify="center"
                id="margen"
            >
                <v-col md="5" style="margin-right: 30px">
                    <label>Fecha de entrada</label>
                    <v-menu
                        ref="menu"
                        v-model="menu"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            style="margin-right: 15px;"
                            v-model="fechaEntrada"
                            :rules="Rules"
                            required
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="fechaEntrada"
                        no-title
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-col>

                <v-col md="5">
                    <label>Fecha de salida</label>
                    <v-menu
                        ref="menu"
                        v-model="menu2"
                        :close-on-content-click="false"
                        :return-value.sync="date"
                        transition="scale-transition"
                        offset-y
                        min-width="auto"
                    >
                        <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            style="margin-right: 15px;"
                            v-model="fechaSalida"
                            :rules="Rules"
                            required
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                        </template>
                        <v-date-picker
                        v-model="fechaSalida"
                        no-title
                        scrollable
                        >
                        <v-spacer></v-spacer>
                        <v-btn
                            text
                            color="primary"
                            @click="menu = false"
                        >
                            Cancel
                        </v-btn>
                        <v-btn
                            text
                            color="primary"
                            @click="$refs.menu.save(date)"
                        >
                            OK
                        </v-btn>
                        </v-date-picker>
                    </v-menu>
                </v-col>
                <v-col md="5" style="margin-right: 430px">
                    <h4>Precio de reserva: {{precio}}$</h4>
                </v-col>

                <v-col md="5" style="margin-right: 390px; margin-top: 30px">
                    <v-btn
                        class="mr-4"
                        color="success"
                        @click="reservarServicio(null)"
                    >
                    Reservar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
  </v-card>

  <center><h1 style="margin-top: 40px">Información de servicios</h1></center>
    <v-container>
        <v-row justify="center" >
            <v-col sm="3" md="3" v-for="(item,i) in servicios" :key="i">
                <v-card
                    class="mx-auto"
                    max-width="344"
                    id="top"
                >
                    <v-img
                    :src="item.img"
                    height="200px"
                    ></v-img>

                    <v-card-title>
                    {{item.servicio}}
                    </v-card-title>

                    <v-card-subtitle>
                    {{item.precio}} $, el servicio
                    </v-card-subtitle>

                    <v-card-actions>
                    <v-btn
                        color="orange lighten-2"
                        text
                        @click="reservarServicio(item.idservicio)"
                    >
                        Agregar servicio
                    </v-btn>

                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="show = true"
                    >
                        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                    </v-btn>
                    </v-card-actions>

                    <v-expand-transition>
                    <div v-show="show">
                        <v-divider></v-divider>

                        <v-card-text>
                            {{item.descripcion}}
                        </v-card-text>
                    </div>
                    </v-expand-transition>
                </v-card>
            </v-col>
        </v-row>
    </v-container>


    <v-card
    class="mx-auto"
    max-width="700"
    outlined
    id="margen"
  >
    <center><h3 id="margen">Metodo de pago</h3></center>
    <v-form v-model="valid" lazy-validation>
        <v-container>
            <v-row 
                no-gutters
                justify="center"
                id="margen"
            >
                <v-col md="5" style="margin-right: 30px">
                    <label>Correo</label>
                    <v-text-field
                        :rules="emailRules"
                        v-model="email"
                        required
                    ></v-text-field>
                </v-col>

                <v-col md="5">
                    <label>Contraseña</label>
                    <v-text-field
                        v-model="password"
                        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                        :type="show1 ? 'text' : 'password'"
                        style="margin-right: 15px;"
                        :rules="passRules"
                        hint="At least 8 characters"
                        @click:append="show1 = !show1"
                    ></v-text-field>
                </v-col>
                <v-col md="3" style="margin-right: 390px">
                    <v-btn
                        class="mr-4"
                        color="success"
                        @click="login()"
                    >
                    Pagar
                    </v-btn>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
  </v-card>
    </v-row>
</v-container>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        menu: false,
        modal: false,
        menu2: false,
        menu2: false,
        picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        show: false,
        precio: 200,
        servicios: [],
        habitacion: [],
        fechaEntrada: "",
        fechaSalida: "",

        date: new Date().toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
        serv: null,
    }),
    created(){
        this.servicioHabitacion();
        this.habitaciones();
    },
    methods: {

        pagar(){

        },

        habitaciones(){
            let usuario = window.sessionStorage.getItem("seleccionado")
            console.log(usuario);
            let obtener = window.sessionStorage.getItem("Habitacion")
            this.habitacion.push(JSON.parse(obtener))
            console.log(this.habitacion);
        },

        servicioHabitacion: async function () {
             console.log('Hola');
            await axios
            .get('http://localhost:3000/servicios')
            .then((resp) => {
            if (resp.status == 200) {
                this.servicios = resp.data
            }
            })
            console.log(this.servicios);
         },

         reservarServicio: async function(idServ) {
             let usuario = window.sessionStorage.getItem("seleccionado")
             let send = {
                fechaEntrada: this.fechaEntrada,
                fechaSalida: this.fechaSalida,
                precio: 200,
                estado: true,
                idservicio: idServ,
                idhabitacion: this.habitacion[0].idHab,
                idusuario: usuario,
                idcategoriaHab: this.habitacion[0].idcategoriaHab
            }
            console.log("Reserva: ", send);
            await axios
            .post("http://localhost:3000/reserva/create", send)
            .then((resp) => {
                if (resp.status == 201) {
                   this.respuesta = "Sesión abierta" 
                   alert("Reserva creada correctamente.")
                    location.replace('/')
                }
            })
            .catch(error => {
                this.respuesta = error.message
                console.log(this.respuesta);
                alert(this.respuesta );
            })
         }
    },
    setup() {
        
    },
}
</script>

<style scoped>
#margen {
    margin-top: 40px;
}
</style>