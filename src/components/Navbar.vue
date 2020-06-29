<template>
    <nav>
        <v-snackbar v-model="snackbar" :timeout="4000" top>
            <span>Added new project</span>
            <v-btn text color="white" @click="snackbar = false">close</v-btn>
        </v-snackbar>

        <v-toolbar flat app class="teal darken-1">
            <v-app-bar-nav-icon class="white--text" @click="drawer=!drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="white--text">
                <span class="font-weight-light">Col</span>
                <span>LAB</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn text color="white" >
                <span>Sign Out</span>
                <v-icon right>mdi-exit-to-app</v-icon>
            </v-btn>
        </v-toolbar>

        <v-navigation-drawer v-model="drawer" app class="teal darken-1">
            <v-col align-center>
                <v-col class="mt-5">
                    <v-avatar size="100">
                        <img src="/vikas.png">
                    </v-avatar>
                    <p class="white--text subtitle mt-1"> Vikas Vasudevan</p>

                </v-col>
                
            </v-col>
            <v-list class="teal darken-1">
                <v-list-item v-for="link in links" :key="link.text" route :to="link.route">
                    <v-list-item-action>
                        <v-icon class="white--text" left>{{ link.icon }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>

        </v-navigation-drawer>
        <v-footer color="teal darken-1" app>
            <span class="white--text">Project Name</span>
        </v-footer>
    </nav>
</template>


<script>

export default { 
    
    data() {
        return{
            drawer: false,
            links: [
                {icon: 'mdi-desktop-mac', text: 'Dashboard', route: '/'},
                {icon: 'mdi-folder-open-outline', text: 'Projects', route: '/projects'},
                {icon: 'mdi-account-group-outline', text: 'Team', route: '/team'},
                {icon: 'mdi-kabaddi', text: 'Collaborations', route: '/collaborations'}
            ],
            snackbar: false,          
        }
    }
    
}
</script>