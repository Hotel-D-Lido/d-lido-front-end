<template>
  <v-container>
      <v-row justify="center" id="separador">
          <v-col sm="12" md="12">
            <center><h1 id="top">Listado de habitaciones</h1></center>
        </v-col>
        <v-col sm="12" md="3" v-for="(item,i) in habitacion" :key="i" >
            
            <!-- Nueva card -->
            
            <v-card
                class="mx-auto"
                max-width="344"
                id="top"
            >
                <v-img
                :src="item.img"
                width="300px"
                ></v-img>

                <v-card-title>
                    {{item.nombre}}
                </v-card-title>

                <v-card-subtitle v-if="item.idcategoriaHab == 1">
                    <strong>Habitación de lujo</strong>
                </v-card-subtitle>

                <v-card-subtitle v-if="item.idcategoriaHab == 2">
                    <strong>Habitación regular</strong>
                </v-card-subtitle>

                <v-card-subtitle v-if="item.idcategoriaHab == 3">
                    <strong>Habitación normal</strong>
                </v-card-subtitle>

                <v-card-subtitle style="margin-top: 10px">
                    <v-container>
                        <v-row justify="center">
                            <v-col md="6">
                                {{item.estado}}
                            </v-col>
                            <v-col md="6">
                                Precio: {{item.precio}} $/semana
                            </v-col>
                        </v-row>
                    </v-container>
                </v-card-subtitle>


                <v-card-actions>
                <v-btn
                    color="orange lighten-2"
                    text
                    @click="toggle(item.idhabitacion, item.precio, item.nombre, item.idcategoriaHab)"
                >
                    Reservar
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="show = !show"
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
    
</template>

<script>
import axios from "axios";
export default {
    data: () => ({
        show: false,
        habitacion: [],
        numero: 0,
    }),
    created(){
        this.habitaciones();
        this.obtener();
    },
    mounted() {
        
    },
    methods: {
        toggle(id, precio, nombre, id2){
            let hab = {
                idHab: id,
                precioHab: precio,
                nombreHab: nombre,
                idcategoriaHab: id2
            }
            let habitaciones = JSON.stringify(hab)
            window.sessionStorage.setItem("Habitacion", habitaciones);

            location.replace("/reserva")
        },
        obtener() {
            let numero = window.localStorage.getItem("categoriaHab")
            this.numero = parseInt(numero)
            console.log("yooo",this.numero);
        },
         habitaciones: async function () {
             let numero = window.localStorage.getItem("categoriaHab")
            this.numero = parseInt(numero)
            // this.numero = null
             console.log(this.numero);
            if (this.numero !== 0) {
                await axios
                .get('http://localhost:3000/habitaciones/'+ this.numero)
                .then((resp) => {
                if (resp.status == 200) {

                    this.habitacion = resp.data
                    console.log('todo birn');
                }
                console.log(this.habitacion);
                })
            }else {
                await axios
                .get('http://localhost:3000/habitaciones')
                .then((resp) => {
                if (resp.status == 200) {

                    this.habitacion = resp.data
                    console.log('todo birn');
                }
                console.log(this.habitacion);
                })
            }
         },
            
    },
    setup() {
        
    },
}
</script>

<style scoped>
#separador {
    margin-top: 30px;
}
</style>