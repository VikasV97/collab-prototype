<template>
    
   <div class="text-center">
       <v-dialog v-model="dialog" width="500">        
        <template v-slot:activator="{ on }">
            
           <v-btn text class="teal darken-1 white--text" v-on="on">
               + New Project
           </v-btn>
    
        </template>

        <v-card>
            <v-card-title> Add a New Project </v-card-title>
            <v-card-text> 
                Start off with a new project/ request to collaborate
            </v-card-text>
            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="teal darken-1 white--text" text
                @click="dialog = false" v-for="form in forms" :key="form.name" route :to="form.route" >
                    Next
                </v-btn>
            </v-card-actions>
        </v-card>
        </v-dialog>
    </div>
</template>





<script>
export default {
    data () {
        return {
            dialog: false,
            forms: [
                {name : 'Next', route : '/form'}
            ]
        }
    }
    
}
</script>