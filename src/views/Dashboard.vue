<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>
    <v-container class="my-5">
      <v-row class="mb-3">
        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
        <v-btn small depressed color="grey-3" @click="sortBy('title')" v-on="on">
          <v-icon left small>mdi-folder-multiple-outline</v-icon>
          <span class="caption text-lowercase">By Project Name</span>
        </v-btn>
          </template>
          <span>sort by project name</span>
        </v-tooltip>
        <v-tooltip v-model="show" top>
          <template v-slot:activator="{ on }">
        <v-btn small depressed color="grey-3" @click="sortBy('person')" v-on="on">
          <v-icon left small>mdi-account-circle</v-icon>
          <span class="caption text-lowercase">By User</span>
        </v-btn>
        </template>
          <span>sort by user</span>
        </v-tooltip>
      </v-row>
      <v-card shaped v-for="project in projects" :key="project.title ">
        <v-row wrap :class="`pa-3 project ${project.status}`">
          <v-col xs="12" md="6">
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-col>
          <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">User</div>
            <div>{{ project.person }}</div>
          </v-col>
           <v-col xs="6" sm="4" md="2">
            <div class="caption grey--text">Start Date</div>
            <div>{{ project.start }}</div>
          </v-col>
          <v-col xs="2" sm="4" md="2">
            <div align="right">
              <v-chip small :color="`${project.status}`" :class="`v-chip--active white--text caption my-2`">{{ project.status }}</v-chip>
            </div>            
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
    
  </div>
</template>

<script>
import db from '@/fb'

export default {
  data() {
    return{
      projects:[]
       
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b)=> a[prop] < b[prop] ? -1 : 1)
    }
  },
  created() {
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })

        }
      })
    })
  }
}
</script>

<style>
  
  .project.Completed{
    border-left: 4px solid green;
  }
  .project.Ongoing{
    border-left: 4px solid orange;
  }
  .project.Overdue{
    border-left: 4px solid red;
  }
  .v-chip.Completed{
    background: green;
  }
  .v-chip.Ongoing{
    background: orange;
  }
  .v-chip.Overdue{
    background: red;
  }

</style>
