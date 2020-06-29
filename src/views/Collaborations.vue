<template>
<div class="collaborations">
    <h1 class="subtitle-1 grey--text">Collaborations</h1>
<v-col sm="4">
                <v-overflow-btn outlined                
                class="my-2"
                label="Choose Collaborator"
                :items="team"                
                >          
                </v-overflow-btn>
            </v-col>
</div>
</template>

<script>
export default {
    data(){
        return {
            team: ['Team-1', 'Team-2', 'Team-3', 'Team-4'],
            
        }
    }
}
</script>