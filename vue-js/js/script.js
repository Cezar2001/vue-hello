new Vue ({
    el: "#app",
    data: {
        message:'Ciao',
        immage:"photo",
        user:'',
    },
    methods: {
        saluto: function() {
            alert(this.message + ' ' + this.user + ', come stai? :) ')
        }
    }
})