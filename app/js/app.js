Vue.component('dribbble-shots', {

  data() {
    return {
      shots: []
    }
  },

  template: `
    <div>
      <div  class="col s12 m6 l4" v-for="shot in shots">
        <div class="card shot">
           <div class="card-image waves-effect waves-block waves-light">
             <img class="activator" v-bind:src="shot.images.normal">
           </div>
           <div class="card-reveal">
             <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i></span>
             <div class="card-text">
               <div v-html="shot.description"></div>
            </div>
           </div>
         </div>
      </div>
    </div>

    `,

  created: function () {
      $.getJSON('https://api.dribbble.com/v1/users/micasgp/shots?access_token=4711207c3e66afe2c49062a0af81dcc229cd03d795e8a4613b86b6183a5860f5', function(data) {
        this.shots = data.slice(0,9);;
      }.bind(this));
  },
})



new Vue({
  el: '#root'
})
