const app   = new Vue({

    el: '#app',
    data: {
        titulo: 'Lista de tareas',
        tareas: [],
        comentario: '',
        tc: ''
        
    },


    methods: {
        agregarTarea: function(){
            if (this.comentario != ''){
                this.tareas.push({
                    comentario: this.comentario,
                    condicion: false,
                    estado: 'pendiente',
                    tc : this.verTc(),
                    tcRaw: videoPlayer.currentTime
                }); 
                
            }else{
                alert('el comentario no puede estar vacio')
            }this.comentario = ''
        },

        irTc: function(index){
            videoPlayer.currentTime = this.tareas[index].tcRaw

        },
        cambiarEstado: function(index){        
            this.tareas[index].condicion = !this.tareas[index].condicion
            this.tareas[index].estado = this.tareas[index].condicion ? 'finalizada' : 'pendiente'  
            
        },
        eliminarTareas: function(index){
            var r = confirm ('¿Eliminar tarea definitivamente?')
            if (r == true) {
                this.tareas.splice(index, 1);
            }else {

            }
        },


        verTc: function(){
            var x = document.getElementById("videoPlayer")
            var curmins = Math.floor(videoPlayer.currentTime / 60);
            var cursecs = Math.floor(videoPlayer.currentTime - curmins * 60);
            var durmins = Math.floor(videoPlayer.duration / 60);
            var dursecs = Math.floor(videoPlayer.duration - durmins * 60);
            if(cursecs < 10){ cursecs = "0"+cursecs; }
            if(dursecs < 10){ dursecs = "0"+dursecs; }
            if(curmins < 10){ curmins = "0"+curmins; }
            if(durmins < 10){ durmins = "0"+durmins; }
            tc = curmins+':'+cursecs
            return tc
        },
            
    },
});