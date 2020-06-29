<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">My Projects</h1>
    
      <v-col>
                 <Popup />
                </v-col>
    <v-container class="my-5">      
      <v-expansion-panels>
      <v-expansion-panel v-for="project in myProjects" :key="project.title">
        <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
        <v-expansion-panel-content class="grey--text">
          <div class="font-weight-bold">started on {{ project.start }}</div>
          <div> Collaborators- ______</div>
          <div>{{ project.content }}</div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    </v-container>
    
  </div>
</template>

<script>
import Popup from './Popup.vue'
import db from '@/fb'

export default {
  components: { Popup },
  
  data(){
    return{
      projects:[
     // {title: 'Arduino IoT', person: 'Vikas', start: '3rd Feb 2020', status: 'Completed', content: 'Content info'},
      //{title: 'RPi tensorflow', person: 'Harshul', start: '2nd March 2020', status: 'Overdue', content: 'Content info'},
      //{title: 'Web Design', person: 'Vikas', start: '4th Jan 2020', status: 'Ongoing', content: 'Content info'},
      //{title: 'Android App', person: 'Dad', start: '1st Feb 2020', status: 'Completed', content : 'Content info'},
      ]
    }
  },
  computed:{
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Vikas'
      })

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
