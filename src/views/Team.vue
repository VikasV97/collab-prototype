<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      <v-row wrap>
        <v-col xs="12" sm="6" md="4" lg="3" v-for="person in team" :key="person.name">
          <v-card tile class="text-center ma-3">
          <v-responsive class="pt-4">
            <v-avatar size="100" class="grey lighten-2">
              <img :src="person.avatar">
            </v-avatar>
          </v-responsive>
          <v-card-text>
            <div class="subheading">{{ person.name }}</div>
            <div class="grey--text">{{ person.role }}</div>
          </v-card-text>
          <v-card-actions>
            <v-btn text color="grey-3">
              <v-icon small left>mdi-folder</v-icon>
              <span>Message</span>
            </v-btn>
          </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    
  </div>
</template>

<script>

export default {
  data(){
    return{
      team: [
        {name: 'Vikas', role: 'Web Developer', avatar: '/vikas.png'},
        {name: 'Harshul', role: 'Data Scientist', avatar: '/harshul.png'},
        {name: 'Mom', role: 'Professor', avatar: '/mom.png'},
        {name: 'Dad', role: 'Engineer', avatar: '/dad.png'}
      ]
    }
  }
  
}
</script>
