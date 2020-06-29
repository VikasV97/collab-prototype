<template>
    <v-form ref="form">
        <v-text-field
        v-model="title"
        :error-messages="titleErrors"
        :counter="20"
        label="Project title"
        required
        @input="$v.title.$touch()"
        @blur="$v.title.$touch()"
        
        ></v-text-field>
        <v-text-field
        v-model="content"
        :error-messages="contentErrors"
        :counter="200"
        label="content"
        required
        @input="$v.content.$touch()"
        @blur="$v.content.$touch()"
        ></v-text-field>
        <v-select
        v-model="select"
        :items="items"
        :error-messages="selectErrors"
        label="Project Category"
        required
        @change="$v.select.$touch()"
        @blur="$v.select.$touch()">
        </v-select>
        <v-col cols="12" sm="6" md="4">
            <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
            >
            <template v-slot:activator="{ on }">
                <v-text-field
                v-model="date"
                label="Project End Date"
                prepend-icon="mdi-calendar-month-outline"
                readonly
                v-on="on"
                ></v-text-field>
            </template>
            <v-date-picker v-model="date" @input="menu2 = false"></v-date-picker>
            </v-menu>
        </v-col>
        <v-spacer></v-spacer>
        <v-checkbox
        v-model="checkbox"
        
        label="locked project (team collaborations only)"
        
        @change="$v.checkbox.$touch()"
        @blur="$v.checkbox.$touch()"
        ></v-checkbox>

        <v-btn class="mr-4" @click="submit" :loading="loading">Next</v-btn>
        <v-btn @click="clear">Clear</v-btn>
    </v-form>
</template>        


<script>
    import  db  from '@/fb'
    //import format from 'date-fns/format'
    import { validationMixin } from 'vuelidate'
    import { required, maxLength } from 'vuelidate/lib/validators'
    

export default {
    mixins: [validationMixin],

    validations: {
        title: { required, maxLength: maxLength(20) },
        content : {required, maxLength: maxLength(200) },
        select: { required },
        checkbox: {
            checked (val) {
                return val
            },
        },
    },
    
    data: () => ({
        date: new Date().toISOString().substr(0, 10),
        menu2:false,
        title: '',
        content: '',
        select: null,
        items: [
            'Web application',
            'Mobile App',
            'IoT',
            'Arduino',
            'Raspberry pi',
            'Graphic Design',
            'Modelling',
            'Other'
        ],
        checkbox: false,
        loading: false,
    }),

    computed: {       

            selectErrors () {
            const errors = []
            if (!this.$v.select.$dirty) return errors
            !this.$v.select.required && errors.push('Choose Project category')
            return errors
        },
        contentErrors () {
            const errors = []
            if (!this.$v.content.$dirty) return errors
            !this.$v.content.maxLength && errors.push('max 200 characters')
            !this.$v.content.required && errors.push('required field')
            return errors
        },
        titleErrors () {
            const errors = []
            if (!this.$v.title.$dirty) return errors
            !this.$v.title.maxLength && errors.push('at most 10 characters')
            !this.$v.title.required && errors.push('required field')
            return errors


        },
    },
    methods : {
        submit () {
            //this.$v.$touch()
            if(this.$refs.form.validate()){
                this.loading=true;

                const project = {
                    title: this.title,
                    select: this.select,
                    content: this.content,
                    //start: format(this.start, 'Do MM YYYY'),
                    person: 'Vikas',
                    status: 'ongoing',
                }
                db.collection('projects').add(project).then(() => {
                   this.loading=false;
                   
                })
            }
                     
            

        },
        clear () {
            this.$v.$reset()
            this.title = ''
            this.content = ''
            this.select = null
            this.checkbox = false 
        },
    },
}
</script>